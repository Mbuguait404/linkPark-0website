import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

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

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let scrollPos = 0;
    const scrollSpeed = 0.6; // pixels per frame
    let animationFrame: number;

    const autoScroll = () => {
      if (!isHovering) {
        scrollPos += scrollSpeed;
        scroller.scrollLeft = scrollPos;

        // When we've scrolled halfway (through one full set), reset seamlessly
        if (scrollPos >= scroller.scrollWidth / 2) {
          scrollPos = 0;
          scroller.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(autoScroll);
    };

    animationFrame = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrame);
  }, [isHovering]);

  return (
    <div
      className="relative select-none overflow-hidden py-6 px-4 md:px-8"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        ref={scrollerRef}
        className="flex gap-6 overflow-x-hidden whitespace-nowrap"
      >
        {/* Duplicate list twice for infinite seamless loop */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-6">
            {COUNTRIES.map((c) => (
              <div
                key={`${c.code}-${i}`}
                className="flex-none w-32 md:w-40 lg:w-48"
              >
                <div className="relative w-full h-24 md:h-28 lg:h-32 overflow-hidden rounded-xl shadow-md transition-transform duration-300 ease-in-out">
                  <Image
                    src={`https://flagcdn.com/w320/${c.code}.png`}
                    alt={`${c.name} flag`}
                    fill
                    className={`object-cover transition-all duration-500 ease-in-out ${
                      isHovering ? "grayscale-0 scale-105" : "filter grayscale"
                    }`}
                  />
                </div>
                <p
                  className={`mt-2 text-center text-xs md:text-sm truncate transition-colors duration-300 ${
                    isHovering ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {c.name}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
