import shopping from "../../assets/shopping.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
// import { useState } from "react";

import Navbar from "./Navbar";
import { faUser } from "@fortawesome/free-regular-svg-icons";
// __________________________________
function Header() {
  return (
    <header
      dir="rtl"
      className=" flex flex-col px-5 xl:px-[150px] pt-2 bg-white border-b border-gray-300 "
    >
      <div className="flex items-center justify-between w-full">
        <div className="shrink-0">
          <Navbar />
        </div>

        <div className="flex grow items-center bg-white rounded-xl px-3 mx-4">
          <input
            className="w-full bg-transparent py-2 outline-none text-right"
            placeholder="جستجو"
          />
          <button>
            <FontAwesomeIcon
              className="cursor-pointer zarebinIcon"
              icon={faMagnifyingGlass}
            />
          </button>
        </div>
        <div className="hidden md:flex items-center gap-4 ">
          <div className="w-8 h-6 ">
            <img src={shopping} alt="shopping" />
          </div>
          <button className="cursor-pointer enterBtn text-white px-6 py-2.5 text-sm rounded-full ">
            ورود / ثبت نام
          </button>
        </div>
        <div className="flex items-center gap-x-4 justify-center md:hidden ">
          <FontAwesomeIcon className="text-gray-600" icon={faShoppingCart} />
          <FontAwesomeIcon className="text-xl text-gray-600" icon={faUser} />
        </div>
      </div>

      <div className="flex items-center justify-between w-full mt-6 text-sm">
        <nav className="hidden md:flex gap-x-6 text-gray-600 pb-4  pr-4">
          <a href="#">خانه</a>
          <a href="#">پیگیری سفارش</a>
        </nav>
      </div>
    </header>
  );
}
export default Header;
