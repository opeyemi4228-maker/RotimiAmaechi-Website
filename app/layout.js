import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToasterWrapper from "@/components/ToasterWrapper";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  title: "Rotimi Amechi",
  description: "E-Commerce with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${nunitoSans.className} antialiased text-gray-700`}>
        <ToasterWrapper />
        <AppContextProvider>
          <Navbar />
          <main style={{ paddingTop: 104 }}>
            {children}
          </main>
          <Footer />
        </AppContextProvider>
      </body>
    </html>
  );
}
