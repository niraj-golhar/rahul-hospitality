"use client";

import { useState, useEffect } from "react";
import { BG_SCREEN } from "../../assets/assets";

export default function BackgroundCarousel({ speed = 3000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % BG_SCREEN.bgscroll.length);
    }, speed);
    return () => clearInterval(interval);
  }, [speed]);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${index * 100}vw)`, opacity: 0.3 }}
      >
        {BG_SCREEN.bgscroll.map((src, i) => (
          <div
            key={i}
            className="flex-none w-screen h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${src})` }}
          ></div>
        ))}
      </div>
    </div>
  );
}
