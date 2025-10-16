"use client";

import { useEffect, useState, useRef } from "react";

export function StatsSection() {
  const stats = [
    { label: "Successful Placements", value: 2500, suffix: "+" },
    { label: "Key Industries", value: 8, suffix: "" },
    { label: "Partner Companies", value: 500, suffix: "+" },
    { label: "Client Satisfaction", value: 95, suffix: "%" },
  ];

  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <AnimatedStat
              key={i}
              label={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              animate={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedStat({
  label,
  value,
  suffix,
  animate,
}: {
  label: string;
  value: number;
  suffix: string;
  animate: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!animate) return;
    let start = 0;
    const duration = 1500; // ms
    const startTime = performance.now();

    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = easeOutQuad(progress);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [animate, value]);

  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-primary mb-2 transition-all duration-500">
        {count.toLocaleString()}
        {count === value ? suffix : ""}
      </div>
      <div className="text-muted-foreground">{label}</div>
    </div>
  );
}

// Easing function for smoothness
function easeOutQuad(t: number) {
  return t * (2 - t);
}
