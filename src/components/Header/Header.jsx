import { useState } from "react";
import Logo from "./Logo";
import { headerOptions } from "../../data/headerOptions";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ۱. نوار اصلی هدر (بالای صفحه - همیشه دیده می‌شود) */}
      <header
        dir="rtl"
        className="w-full bg-white shadow-md sticky top-0 z-30 px-4 md:px-8 py-3 flex items-center justify-between"
      >
        {/* لوگو */}
        <Logo />

        {/* لینک‌های دسکتاپ (در موبایل مخفی هستند) */}
        <nav className="hidden md:flex items-center gap-6">
          {headerOptions.map((item, index) => (
            <a
              key={index}
              href={item}
              className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* دکمه همبرگری برای باز کردن منو در موبایل */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-slate-700 focus:outline-none"
          aria-label="باز کردن منو"
        >
          {/* آیکون همبرگری ساده */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </header>

      {/* ۲. منوی موبایل (Sidebar که از راست باز می‌شود) */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 sm:w-64 bg-white z-50 shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* هدرِ داخل منوی موبایل (لوگو و دکمه بستن) */}
        <div className="flex items-center justify-between p-4 border-b border-slate-100">
          <span className="font-bold text-blue-900">منوی سایت</span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-slate-500 hover:text-red-500 font-bold"
          >
            ✕
          </button>
        </div>

        {/* لیست لینک‌ها در موبایل (با استفاده از map و headerOptions) */}
        <nav className="mt-6 flex flex-col gap-4 px-6">
          {headerOptions.map((item, index) => (
            <a
              key={index}
              href={item.path || "#"}
              onClick={() => setIsOpen(false)} // با کلیک روی هر لینک، منو بسته شود
              className="text-slate-700 hover:text-blue-600 font-medium py-2 border-b border-slate-50"
            >
              {item.title}
            </a>
          ))}
        </nav>
      </div>

      {/* ۳. لایه تاریک پشت منو (Overlay) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-xs transition-all"
        ></div>
      )}
    </>
  );
};

export default Header;
