
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ZAIMAH TECHNOLOGIES LTD",
  description: " Crafting Exceptional Software Solutions",
};

const switchLanguage = (lang) => setLanguage(lang);
export default function RootLayout({ children }) {
  return (
    <LanguageProvider>
     <html data-theme="light" lang="en">
        <body className={inter.className}>
          <NavBar />

          {children}
          <Footer />
        </body>
      </html>
    </LanguageProvider>
  );
}
