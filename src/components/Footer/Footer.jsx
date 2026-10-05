import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const socialLinks = [
    { icon: faInstagram, label: "اینستاگرام", href: "#" },
    { icon: faTelegram, label: "تلگرام", href: "#" },
    { icon: faTwitter, label: "توییتر", href: "#" },
  ];

  return (
    <footer
      dir="rtl"
      className="mt-16 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300"
    >
      <div className="px-5 xl:px-[150px] py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <h4 className="text-base font-bold mb-4 text-gray-900 dark:text-white">
            درباره‌ی ما
          </h4>
          <p className="text-sm leading-7">
            فروشگاه کتاب (نام سایت)، همراه شما در مسیر مطالعه؛ با گزیده‌ای از
            بهترین آثار ادبیات، تاریخ و روان‌شناسی.
          </p>
        </div>

        <div>
          <h4 className="text-base font-bold mb-4 text-gray-900 dark:text-white">
            دسترسی سریع
          </h4>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <a
                href="#"
                className="hover:text-[var(--brand)] transition-colors"
              >
                خانه
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[var(--brand)] transition-colors"
              >
                محصولات
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[var(--brand)] transition-colors"
              >
                پیگیری سفارش
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-base font-bold mb-4 text-gray-900 dark:text-white">
            خدمات مشتریان
          </h4>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <a
                href="#"
                className="hover:text-[var(--brand)] transition-colors"
              >
                سوالات متداول
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[var(--brand)] transition-colors"
              >
                شرایط بازگشت کالا
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[var(--brand)] transition-colors"
              >
                تماس با ما
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-base font-bold mb-4 text-gray-900 dark:text-white">
            شبکه‌های اجتماعی
          </h4>
          <div className="flex gap-3">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 hover:bg-[var(--brand)] hover:text-white hover:border-[var(--brand)] transition-colors"
              >
                <FontAwesomeIcon icon={icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 px-5 xl:px-[150px] py-4 text-xs text-center text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} (نام سایت). تمامی حقوق محفوظ است.
      </div>
    </footer>
  );
}

export default Footer;
