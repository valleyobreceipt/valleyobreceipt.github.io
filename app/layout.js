import { Raleway } from "next/font/google";
import "./bootstrap.min.css";
import "./global.css";

const font = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "ValleyOb Gyn",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
