import { ReactNode } from "react";
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow p-4">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
