import React from "react";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow bg-mainBg bg-cover bg-center">
        <div className="flex flex-col min-h-screen backdrop-blur-sm">
          <Navbar />
          <div className="flex-grow">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
