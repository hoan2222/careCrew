import "./globals.css";
import Nav from "@/components/nav/desktop";
import Mobile from "@/components/nav/mobile";
import Footer from "@/components/footer";

export const metadata = {
  title: "CareCrew-Berlin",
  description: "Gemeinsam Gutes tun durch kreative Aktionen. Mach mit! 🚀",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="hidden md:block">
          <Nav />
        </div>
        <div className="block md:hidden fixed top-0 left-0 w-full z-50">
          <Mobile />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
