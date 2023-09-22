import Aside from "component/components/Aside";
import Navbar from "component/components/Navbar";
import Line from "component/ui/Line";
import React from "react";

export default function Layout({ children, style }) {
  return (
    <main className="w-full text-white">
      <Navbar />
      <div className={`${style}`}>
        <Aside />
      </div>
      <Line />
      <div>{children}</div>
    </main>
  );
}
