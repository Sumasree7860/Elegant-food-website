import { useState } from "react";
import cart from "../src/trolley 1.svg";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Main Content */}
      <div className="w-full max-h-[80px] bg-[#CEA174] flex justify-between items-center p-4 md:p-7">
        <div className="md:hidden">
          {/* Hamburger Menu Icon for Small Screens */}
          <IoMenu className="w-8 h-8" onClick={toggleMenu} />
        </div>
        <p className="font-bold text-xl md:text-3xl uppercase text-center md:w-full">
          Elegant Foods
        </p>
        <img src={cart} className="w-8 h-8 md:w-14 md:h-10" alt="Cart Icon" />
      </div>

      {/* Navigation Links - Full Screen on Click */}
      {menuOpen && (
        <div className="sm:hidden fixed inset-0 bg-[#CEA174] flex  flex-col w-full p-4">
          <div className="flex justify-between ">
            {/* IoClose Icon to Close the Modal */}
            <p className="text-xl font-bold uppercase">Elegant Foods</p>
            <IoClose className="w-8 h-8 self-end" onClick={toggleMenu} />
          </div>
          <hr className="border-black border-t-[1px] h-px mt-3" />

          <div className="flex flex-col gap-8 mt-5 items-center uppercase font-semibold">
            <a href="#" className="nav-link">
              home
            </a>
            <a href="#" className="nav-link">
              about
            </a>
            <a href="#" className="nav-link">
              shop
            </a>
            <a href="#" className="nav-link">
              contact
            </a>
          </div>
        </div>
      )}

      {/* Navigation Links */}
      <div
        className={`hidden sm:flex flex-col md:flex-row gap-4 justify-center p-4 text-sm font-semibold uppercase w-full max-h-[80px] md:gap-7 md:p-7 md:text-xl ${
          menuOpen ? "md:hidden" : ""
        }`}
      >
        <a className="focus:underline" href="#">
          home
        </a>
        <a className="focus:underline" href="#">
          about
        </a>
        <a className="focus:underline"href="#">shop</a>
        <a className="focus:underline" href="#">
          contact
        </a>
      </div>
    </>
  );
}