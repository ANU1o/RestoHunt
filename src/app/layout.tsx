import Script from "next/script";
import type { Metadata } from "next";
import { Footer, Header } from "@/components";
import "@/styles/bootstrap.min.css";
import "@/styles/index.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

export const metadata: Metadata = {
  title: "RestoHunt",
  description: "A Simple Diner Finder - Made by ANU1o",
  openGraph: {
    title: "RestoHunt",
    description: "A Simple Diner Finder - Made by ANU1o",
    images: [""],
  },
};

const ScriptTags = () => (
  <>
    <Script
      src="https://kit.fontawesome.com/38647df40d.js"
      crossOrigin="anonymous"
    ></Script>
  </>
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ScriptTags />
      </head>
      <body id="root-grid" className="user-select-none bg-body-secondary">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
