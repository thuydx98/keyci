import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import navLinks from "../../assets/site-map.json";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header className="sm:px-16 px-4 py-6 z-10 w-full">
        <nav className="flex justify-between items-center max-container">
          <a href="/" className="text-3xl font-bold">
            <img className="h-[50px]" alt="" src="./keyci-logo.png" />
          </a>
          <ul className="flex-1 flex justify-end items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label} className={window.location.pathname === item.href && 'border-b-2'}>
                <Link className="font-montserrat leading-normal text-lg text-white" to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div
            className="hidden max-lg:block cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <RxHamburgerMenu className="text-4xl" />
          </div>
        </nav>
      </header>
      {isMenuOpen && (
        <div>
          <nav className="fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-slate-100  ">
            <div
              className="hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <AiOutlineClose className="text-4xl" />
            </div>
            <ul className=" lg:hidden flex flex-col items-center justify-center h-full gap-y-10">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link className="font-montserrat leading-normal text-lg text-slate-gray" to={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
// export default Navbar;
