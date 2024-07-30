import { Inter } from "next/font/google";
import "./components/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "InvenTrack",
  description: "Dashboard NC",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/image.png" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
