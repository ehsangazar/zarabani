import { type ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-warm/20">
      <Navbar />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
