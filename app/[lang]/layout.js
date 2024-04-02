import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Photo Feed",
  description: "photo feed app create by next app",
};

export default function RootLayout({ children, params: { lang } }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar lang={lang} />
        <div className="container my-4 lg:my-8">{children}</div>
        <div id="modal-root-content" />
      </body>
    </html>
  );
}
