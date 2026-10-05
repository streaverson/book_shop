import shopping from "../../assets/shopping.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faShoppingCart,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import { faUser } from "@fortawesome/free-regular-svg-icons";

import Navbar from "./Navbar";

function Header() {
  return (
    <header dir="rtl" className="siteHeader">
      <div className="siteHeaderTop">
        <div className="headerNav">
          <Navbar />
        </div>

        <div className="headerSearch">
          <input
            type="search"
            placeholder="عنوان کتاب، نویسنده یا ناشر..."
            aria-label="جستجوی کتاب"
          />

          <button type="button" aria-label="جستجو">
            <FontAwesomeIcon icon={faMagnifyingGlass} aria-hidden="true" />
          </button>
        </div>

        <div className="headerDesktopActions items-center">
          <button type="button" className="headerCart" aria-label="سبد خرید">
            <img src={shopping} alt="" />

            <span>سبد خرید</span>
          </button>

          <button type="button" className="hidden md:inline headerLogin">
            ورود / ثبت نام
          </button>
          <button type="button" className="inline md:hidden headerLoginMobile">
            <FontAwesomeIcon icon={faUser} aria-hidden="true" />
          </button>
        </div>

        {/* <div className="headerMobileActions">
          <button type="button" aria-label="سبد خرید">
            <FontAwesomeIcon icon={faShoppingCart} aria-hidden="true" />
          </button>

          <button type="button" aria-label="حساب کاربری">
            <FontAwesomeIcon icon={faUser} aria-hidden="true" />
          </button>
        </div> */}
      </div>

      <div className="headerBottom">
        <nav className="headerLinks" aria-label="منوی اصلی">
          <a href="#">خانه</a>

          <a href="#">پیگیری سفارش</a>

          <a href="#">کتاب‌ها</a>

          <a href="#">نویسندگان</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
