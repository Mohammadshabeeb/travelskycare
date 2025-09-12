import { Unbounded, Sora } from "next/font/google";
import "./globals.css";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


import 'remixicon/fonts/remixicon.css'
import Nav from "./Component/Nav";
import Footer from "./Component/Footer";


const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500" ,"600", "700"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
    weight: ["400", "500" ,"600", "700"],
});

export const metadata = {
  title: "travel Website",
  description: "Enjoy Journey",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${sora.variable} ${unbounded.variable} antialiased`}
      >
      <Nav />
        {children}

        <Footer />
      </body>
    </html>
  );
}
