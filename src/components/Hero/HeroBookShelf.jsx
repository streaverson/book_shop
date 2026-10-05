import { useState, useEffect } from "react";
import { heroBooks } from "../../data/heroBooks";
import HeroBook from "./HeroBook";

function HeroBookShelf() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroBooks.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="bookShelfConatiner">
      {heroBooks.map((title, index) => (
        <HeroBook
          key={title}
          heroBookTitle={title}
          isActive={index === activeIndex}
        />
      ))}
    </div>
  );
}

export default HeroBookShelf;
