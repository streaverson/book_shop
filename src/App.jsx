import Header from "./components/Header/Header";
import HeroSection from "./components/Hero/HeroSection";

import BooksSection from "./components/Main/books/BooksSection";
import AuthorsSection from "./components/Main/Authors/AuthorsSection";

import Footer from "./components/Footer/Footer";

import { newArrivals, bestSellers, discountedBooks } from "./data/books";

function App() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />

        <BooksSection title="جدیدترین‌ها" books={newArrivals} />

        <BooksSection title="محبوب‌ترین‌ها" books={bestSellers} />

        <BooksSection title="تخفیف‌های ویژه" books={discountedBooks} />

        <AuthorsSection title="نویسندگان منتخب" />
      </main>

      <Footer />
    </>
  );
}

export default App;
