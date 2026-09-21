import { type ReactNode } from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import MinimalShell from "./MinimalShell";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();
  // Preserve the existing shell and styles on every internal project route.
  if (!pathname.startsWith("/projects/")) return <MinimalShell>{children}</MinimalShell>;
  return (
    <div className="min-h-screen bg-warm/20">
      <Navbar />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
