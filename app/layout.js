import { Raleway } from "next/font/google";
import "./bootstrap.min.css";

const font = Raleway({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
