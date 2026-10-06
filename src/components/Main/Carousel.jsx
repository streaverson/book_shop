import { useEffect, useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

function Carousel({
  title,
  viewMoreText = "مشاهده بیشتر",
  viewMoreHref = "#",
  children,
  autoPlay = true,
  interval = 3000,
  showNavigation = true,
  className = "",
}) {
  const items = Array.isArray(children) ? children : children ? [children] : [];

  const containerRef = useRef(null);
  const trackRef = useRef(null);

  const [offset, setOffset] = useState(0);
  const [maxOffset, setMaxOffset] = useState(0);
  const [itemStep, setItemStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const calculateBounds = () => {
      const container = containerRef.current;
      const track = trackRef.current;

      if (!container || !track) {
        return;
      }

      const firstItem = track.querySelector(".carouselItem");

      if (!firstItem) {
        setItemStep(0);
        setMaxOffset(0);
        setOffset(0);
        return;
      }

      const itemWidth = firstItem.getBoundingClientRect().width;

      const styles = window.getComputedStyle(track);

      const gap = parseFloat(styles.columnGap) || 0;

      const step = itemWidth + gap;

      const max = Math.max(track.scrollWidth - container.clientWidth, 0);

      setItemStep(step);
      setMaxOffset(max);

      setOffset((current) => Math.min(current, max));
    };

    calculateBounds();

    const observer = new ResizeObserver(calculateBounds);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    if (trackRef.current) {
      observer.observe(trackRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [items.length]);

  useEffect(() => {
    if (
      !autoPlay ||
      !showNavigation ||
      isPaused ||
      maxOffset <= 0 ||
      itemStep <= 0
    ) {
      return;
    }

    const timer = setInterval(() => {
      setOffset((current) => {
        if (current >= maxOffset - 1) {
          return 0;
        }

        return Math.min(current + itemStep, maxOffset);
      });
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [autoPlay, showNavigation, isPaused, maxOffset, itemStep, interval]);

  const goNext = () => {
    setOffset((current) => {
      if (current >= maxOffset - 1) {
        return 0;
      }

      return Math.min(current + itemStep, maxOffset);
    });
  };

  const goPrev = () => {
    setOffset((current) => {
      if (current <= 0) {
        return maxOffset;
      }

      return Math.max(current - itemStep, 0);
    });
  };

  return (
    <section
      className={`carouselSection ${className}`}
      dir="rtl"
      aria-label={title}
    >
      <div className="carouselHeader">
        <div className="carouselHeading">
          <span className="carouselAccent" aria-hidden="true" />

          <h2 className="productSectionTitle">{title}</h2>
        </div>

        <div className="carouselHeaderActions">
          {viewMoreHref && (
            <a href={viewMoreHref} className="carouselViewMore">
              <span>{viewMoreText}</span>

              <FontAwesomeIcon icon={faChevronLeft} aria-hidden="true" />
            </a>
          )}

          {showNavigation && maxOffset > 0 && (
            <div className="carouselNav">
              <button
                type="button"
                onClick={goPrev}
                className="carouselNavBtn"
                aria-label="مورد قبلی"
              >
                <FontAwesomeIcon icon={faChevronRight} aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={goNext}
                className="carouselNavBtn"
                aria-label="مورد بعدی"
              >
                <FontAwesomeIcon icon={faChevronLeft} aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      </div>

      <div
        ref={containerRef}
        className="carouselViewport"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        <div
          ref={trackRef}
          className="carouselTrack"
          style={{
            transform: `translate3d(${offset}px, 0, 0)`,
          }}
        >
          {items.map((child, index) => (
            <div key={child?.key ?? index} className="carouselItem">
              {child}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Carousel;
