import HeroButton from "./HeroButton";
import HeroTitle from "./HeroTitle";
import HeroDescription from "./HeroDescription";
import HeroBookShelf from "./HeroBookShelf";
function HeroSection() {
  return (
    <div
      dir="rtl"
      className="heroSection justify-center my-5 items-center gap-8 px-5 xl:px-[150px] flex flex-col md:flex-row"
    >
      <div className="mb-2">
        <HeroTitle heroTitle="کتاب خوب را از قفسه‌ی درست بردار" />
        <HeroDescription
          description="ادبیات، شعر، تاریخ و روانشناسی؛ با ارسال رایگان برای خرید بالای ۵۰۰ هزار تومان.
"
        />
        <HeroButton />
      </div>
      <div>
        <HeroBookShelf />
      </div>
    </div>
  );
}
export default HeroSection;
