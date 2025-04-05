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
      <main className="bg-bribella-white flex-grow text-center">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
