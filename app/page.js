"use client"
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { Hero } from "./components/Hero";
import AutoSlider from "./components/Slider";
import TestimonialCarousel from "./components/TestimonialCarousel";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', '');
    }
  }, [isDark]);

  return (
    <main className="min-h-screen">
      <Navbar isDark={isDark} setIsDark={setIsDark}/>
      <Hero isDark={isDark} />
      <Work isDark={isDark} />
      {/* <Header isDark={isDark} /> */}
      {/* <ComparisonSlider isDark={isDark} /> */}
      {/* <Imagination isDark={isDark} /> */}
      <TestimonialCarousel isDark={isDark} />
      <AutoSlider isDark={isDark} />

      {/* <About isDark={isDark} /> */}
      {/* <Services isDark={isDark} /> */}
      <Contact isDark={isDark} />
      <Footer isDark={isDark} />
    </main>
  );
}

