 
 import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ActiveSectionContextProvider from "@/context/useacive-section";

 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className="dark !scroll-smooth ">
      <body  >
        <div className="w-full h-full relative">
          <ActiveSectionContextProvider>

          <Navbar />

          {children}
          <footer className=" w-full items-center flex  pt-[30px] mb-5">
            <Footer />
          </footer>
          </ActiveSectionContextProvider>
        </div>

      </body>
    </html>
  );
}
