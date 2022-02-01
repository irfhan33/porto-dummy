import Btn from "./Btn";
import Logo from "./Logo";
import Navitem from "./Navitem";
import NavLinks from "./NavLinks";
import { useState } from "react";
export default function Navbar({ className }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className={`flex items-center ${className} py-10 px-4 sm:px-0`}>
        <div className="w-3/12">
          <Logo>Timy</Logo>
        </div>
        <div className="w-6/12 hidden sm:block">
          <NavLinks dir="horizontal" />
        </div>
        <div className="w-3/12 text-right hidden sm:block">
          <Btn variant="outline">Kontak</Btn>
        </div>
        <div className="w-9/12 text-right sm:hidden ">
          <img
            src="/menufix.svg"
            className="inline-block cursor-pointer"
            onClick={() => setShow(true)}
          />
        </div>
      </div>

      {/* Outcanvas */}

      <div
        className={`bg-hero transition-all transition-duration-300 top-0 z-10 p-16 w-full h-full fixed sm:hidden ${
          show ? "right-0" : "-right-full"
        }`}
      >
        <img
          src="x.svg"
          className="absolute top-16 right-16 cursor-pointer"
          onClick={() => setShow(false)}
        />
        <div onClick={() => setShow(false)}>
          <NavLinks dir="vertical" />
        </div>
      </div>
    </>
  );
}
