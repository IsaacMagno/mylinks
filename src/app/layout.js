import "./globals.css";
import { Roboto } from "next/font/google";
import Head from "next/head";
import Link from "next/link";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Isaac Magno - Links",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <Head>
        <Link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
