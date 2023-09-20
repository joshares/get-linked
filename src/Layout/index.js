import Aside from "component/components/Aside";
import Navbar from "component/components/Navbar";
import Line from "component/ui/Line";
import React from "react";

export default function Layout({ children }) {
  return (
    <main className="w-full text-white">
      <Navbar />
      <Aside />
      <Line />
      <div>{children}</div>
    </main>
  );
}
