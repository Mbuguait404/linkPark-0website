import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

// FlagSlider.tsx (Next.js version with autoplay)
// Horizontal slider of country flags using next/image, autoplay scrolls continuously.

const COUNTRIES = [
  { code: "de", name: "Germany" },
  { code: "gb", name: "United Kingdom" },
  { code: "fr", name: "France" },
  { code: "it", name: "Italy" },
  { code: "nl", name: "Netherlands" },
  { code: "es", name: "Spain" },
  { code: "pl", name: "Poland" },
  { code: "ae", name: "United Arab Emirates" },
  { code: "sa", name: "Saudi Arabia" },
  { code: "qa", name: "Qatar" },
  { code: "kw", name: "Kuwait" },
  { code: "om", name: "Oman" },
  { code: "bh", name: "Bahrain" },
  { code: "ca", name: "Canada" },
  { code: "au", name: "Australia" },
  { code: "kr", name: "South Korea" },
  { code: "jp", name: "Japan" },
];

export default function FlagSlider() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  function scrollBy(offset: number) {
    if (!scrollerRef.current) return;
    scrollerRef.current.scrollBy({ left: offset, behavior: "smooth" });
  }

  // Autoplay scroll effect
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const scrollSpeed = 0.5; // pixels per frame
    let animationFrame: number;

    const autoScroll = () => {
      if (!isHovering && scroller) {
        scroller.scrollLeft += scrollSpeed;
        if (scroller.scrollLeft + scroller.clientWidth >= scroller.scrollWidth) {
          scroller.scrollLeft = 0; // loop back to start
        }
      }
      animationFrame = requestAnimationFrame(autoScroll);
    };

    animationFrame = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrame);
  }, [isHovering]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Manual Controls (desktop only) */}
      <button
        aria-label="Scroll left"
        className="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full shadow-md bg-white/80 backdrop-blur hover:bg-white"
        onClick={() => scrollBy(-320)}
      >
        ‹
      </button>

      <div
        ref={scrollerRef}
        className="flex gap-4 overflow-x-auto scrollbar-none py-4 px-4 md:px-8 snap-x snap-mandatory touch-pan-x"
        role="list"
        aria-label="Country flags slider"
      >
        {COUNTRIES.map((c) => (
          <button
            key={c.code}
            role="listitem"
            className="flex-none w-40 md:w-48 lg:w-56 p-2 rounded-xl snap-center focus:outline-none"
            title={c.name}
            onClick={() => console.log(`${c.name} clicked`)}
          >
            <div className="relative w-full h-24 md:h-28 lg:h-32 overflow-hidden rounded-lg shadow-sm">
              <Image
                src={`https://flagcdn.com/w320/${c.code}.png`}
                alt={`${c.name} flag`}
                fill
                className="object-cover transition-all duration-300 ease-in-out filter grayscale hover:grayscale-0 hover:scale-105 focus:grayscale-0 focus:scale-105"
              />
            </div>

            <div className="mt-2 text-xs md:text-sm text-center text-muted-foreground truncate">
              {c.name}
            </div>
          </button>
        ))}
      </div>

      <button
        aria-label="Scroll right"
        className="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full shadow-md bg-white/80 backdrop-blur hover:bg-white"
        onClick={() => scrollBy(320)}
      >
        ›
      </button>

      <div className="md:hidden mt-2 text-xs text-center text-muted-foreground">Swipe horizontally to browse flags</div>

      <style jsx>{`
        .scrollbar-none::-webkit-scrollbar { display: none; }
        .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
