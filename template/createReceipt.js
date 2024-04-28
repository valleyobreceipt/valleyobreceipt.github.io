import {
  PDFDocument,
  PDFName,
  PDFString,
  PageSizes,
  StandardFonts,
  rgb,
} from "pdf-lib";

import { ReceiptPDFTemplate as json } from "./info.js";

const createPageLinkAnnotation = (page, uri, rect) => {
  return page.doc.context.register(
    page.doc.context.obj({
      Type: "Annot",
      Subtype: "Link",
      Rect: rect,
      Border: [0, 0, 0],
      C: [0, 0, 0],
      A: {
        Type: "Action",
        S: "URI",
        URI: PDFString.of(uri),
      },
    })
  );
};

async function createReceipt({
  receiptID,
  date,
  receivedBy,
  amount,
  paymentMethod,
  files = [],
}) {
  const pdfDoc = await PDFDocument.create();
  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const helveticaFontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const newPage = await pdfDoc.addPage(PageSizes.Letter);

  const items = json.items;

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const text = item.str;
    const x = item.transform[4];
    const y = item.transform[5];
    const fontSize = item.transform[0];

    let finalText = text
      .replace("{receiptID}", receiptID)
      .replace("{date}", date)
      .replace("{receivedBy}", receivedBy)
      .replace("{amount}", amount)
      .replace("{paymentMethod}", paymentMethod);

    let font = helveticaFont;
    let color = rgb(0, 0, 0);

    if (
      text == "Valley OBGYN Medical Group Inc." ||
      text == "ValleyOBcare.com" ||
      text == "RECEIPT" ||
      text == "Thank You"
    ) {
      font = helveticaFontBold;
      let hexToRgb = (hex) =>
        hex
          .replace(
            /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
            (m, r, g, b) => "#" + r + r + g + g + b + b
          )
          .substring(1)
          .match(/.{2}/g)
          .map((x) => parseInt(x, 16));

      // color must 0-1

      color = rgb(...hexToRgb("#1f4e79").map((x) => x / 255));
    }

    let currentWidth = font.widthOfTextAtSize(finalText, fontSize);
    const width_ = font.widthOfTextAtSize(text, fontSize);
    const height_ = font.heightAtSize(fontSize);
    let finalX = x;

    if (currentWidth > width_) {
      finalX = x - (currentWidth - width_);
    }

    if (currentWidth < width_) {
      finalX = x + (width_ - currentWidth);
    }

    newPage.drawText(finalText, {
      x: finalX,
      y: y,
      size: fontSize,
      font: font,
      color,
    });

    if (text == "ValleyOBcare.com") {
      const link = createPageLinkAnnotation(
        newPage,
        "https://valleyobcare.com/",
        [x, y - 4, x + currentWidth, y + height_ + 2]
      );
      newPage.node.set(PDFName.of("Annots"), pdfDoc.context.obj([link]));
    }
  }

  for (let i = 0; i < files.length; i++) {
    const { type, bytes, imgType } = files[i];

    if (type == "img") {
      let img;
      if (imgType == "png") img = await pdfDoc.embedPng(bytes);
      else img = await pdfDoc.embedJpg(bytes);

      const { width, height } = img.scale(0.5);
      const page = pdfDoc.addPage([width + 100, height + 100]);
      page.drawImage(img, {
        x: 50,
        y: 50,
        width: width,
        height: height,
      });
    }

    if (type == "pdf") {
      const pdf = await PDFDocument.load(bytes);
      const copiedPages = await pdfDoc.copyPages(pdf, pdf.getPageIndices());
      copiedPages.forEach((page) => pdfDoc.addPage(page));
    }
  }

  return await pdfDoc.saveAsBase64({ dataUri: true });
}

export default createReceipt;
