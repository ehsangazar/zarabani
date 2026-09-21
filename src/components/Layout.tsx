import { type ReactNode } from "react";
import MinimalShell from "./MinimalShell";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <MinimalShell>{children}</MinimalShell>;
};

export default Layout;
