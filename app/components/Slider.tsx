"use client";
import { useEffect, useState } from "react";
import { BG_SCREEN } from "../../assets/assets";

const AutoSlider = () => {
 

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % BG_SCREEN.roomScroll.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [BG_SCREEN.roomScroll.length]);

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center lg:m-8">
      <div className="w-full overflow-hidden relative">
        <div
          className="flex transition-transform duration-1000"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {BG_SCREEN.roomScroll.map((img, i) => (
            <div key={i} className="min-w-full">
              <img src={img} alt={`Slide ${i + 1}`} className="w-full h-auto" />
            </div>
          ))}
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {BG_SCREEN.roomScroll.map((_, i) => (
            <span
              key={i}
              className={`h-4 w-4 rounded-full ${
                i === index ? "bg-black" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutoSlider;
