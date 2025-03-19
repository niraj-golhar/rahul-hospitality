"use client";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    text: " great experience with the food at Instafeel Hotel. The menu offered a good variety of dishes, all freshly prepared and flavorful. The quality and presentation were impressive",
    img: "/user.png",
    name: "Dhwani Shah",
    position: "Instafeel Hotel Guest"
  },
  {
    text: "Highly recommend this service. Their team was outstanding. Our Reception went flawlessly and the food was delicious. We will definitely be using their services again.",
    img: "/user.png",
    name: "Priya Patel",
    position: "Banquet Hall Guest."
  },
  {
    text: "Professional and friendly support, exceeded my expectations!",
    img: "/user.png",
    name: "Abhishek Patil",
    position: "Instafeel Hotel Guest"
  },
  {
    text: "I stayed at Rahul Hostel for 1.5 years during my first job. The hostel offered a comfortable and safe environment with clean rooms, reliable Wi-Fi, and helpful staff. Its convenient location near public transport made commuting easy. The food was decent but could have been more varied. Overall, a good budget-friendly option for working professionals.",
    img: "/user.png",
    name: "Kartik Naik",
    position: "Rahul Hostel Guest"
  },
  {
    text: "Great food and Luxury Stays at Instafeel. Five stars!",
    img: "/user.png",
    name: "Riya Dhanwani",
    position: "Instafeel Hotel Guest."
  }
];

const TestimonialCarousel = () => {
  const carouselRef = useRef(null);
  const [scrollPos, setScrollPos] = useState(0);
  const cardWidth = 320; // Adjust based on card width

  const handleScroll = (direction) => {
    const container = carouselRef.current;
    if (container) {
      const scrollAmount = direction === "next" ? cardWidth : -cardWidth;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setScrollPos(container.scrollLeft + scrollAmount);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setScrollPos(0); // Reset position on resize
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="reviews" className="flex items-center justify-center bg-gray-50 ">
    <div className="w-full bg-gray-100 py-10 ">
      <div className="relative max-w-6xl mx-auto overflow-hidden">
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-scroll scroll-smooth scrollbar-hide"
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="min-w-[320px] bg-white shadow-md rounded-2xl p-6 transition-transform transform hover:scale-105"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-black">{item.name}</h3>
                  <p className="text-gray-500">{item.position}</p>
                </div>
              </div>
              <div className="mt-4 text-gray-700">
                <Quote className="w-8 h-8 text-gray-400 inline" />
                <p className="italic">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() => handleScroll("prev")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => handleScroll("next")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
    </div>
  );
};

export default TestimonialCarousel;
