import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

function Carousel({ children }) {
  const items = Array.isArray(children) ? children : [children];

  const containerRef = useRef(null);
  const trackRef = useRef(null);

  const [offset, setOffset] = useState(0);
  const [maxOffset, setMaxOffset] = useState(0);
  const [itemStep, setItemStep] = useState(240);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      goNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused, maxOffset, itemStep]);
  useEffect(() => {
    function calculateBounds() {
      const container = containerRef.current;
      const track = trackRef.current;
      if (!container || !track) return;

      const firstItem = track.querySelector(".carouselItem");
      const gap = 20;
      const step = firstItem ? firstItem.offsetWidth + gap : 240;
      setItemStep(step);

      const trackWidth = track.scrollWidth;
      const containerWidth = container.offsetWidth;
      const newMaxOffset = Math.max(trackWidth - containerWidth, 0);
      setMaxOffset(newMaxOffset);
      setOffset((prev) => Math.min(prev, newMaxOffset));
    }

    calculateBounds();
    window.addEventListener("resize", calculateBounds);
    return () => window.removeEventListener("resize", calculateBounds);
  }, [items.length]);

  function goNext() {
    setOffset((prev) => {
      if (prev >= maxOffset) return 0;

      return Math.min(prev + itemStep, maxOffset);
    });
  }

  function goPrev() {
    setOffset((prev) => Math.max(prev - itemStep, 0));
  }

  const isAtStart = offset <= 0;
  const isAtEnd = offset >= maxOffset;

  return (
    <div className="relative px-5 xl:px-[150px]" dir="rtl">
      <button
        onClick={goPrev}
        disabled={isAtStart}
        className="absolute top-1/2 -translate-y-1/2 -right-1 z-10 bg-[var(--surface)] shadow-md w-9 h-9 rounded-full flex items-center justify-center cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="کارت قبلی"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>

      <div
        ref={containerRef}
        className="w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)} // وقتی موس رفت روی آن
        onMouseLeave={() => setIsPaused(false)} // وقتی موس خارج شد
      >
        <div
          ref={trackRef}
          className="carousel-track flex justify-center gap-5 w-max"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {items.map((child, index) => (
            <div key={index} className="carouselItem shrink-0">
              {child}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={goNext}
        disabled={isAtEnd}
        className="absolute top-1/2 -translate-y-1/2 -left-1 z-10 bg-[var(--surface)] shadow-md w-9 h-9 rounded-full flex items-center justify-center cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="کارت بعدی"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
    </div>
  );
}
export default Carousel;
