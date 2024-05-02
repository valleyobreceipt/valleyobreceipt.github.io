import { Raleway } from "next/font/google";
import { Suspense } from "react";
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
      <body className={font.className}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </body>
    </html>
  );
}
