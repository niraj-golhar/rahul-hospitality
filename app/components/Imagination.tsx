"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { assets } from "../../assets/assets"

export function Imagination() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1])
  const x = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"])
  
  const REVIEWS  = [
    {
      title : "In the world of real estate,",
      review : "innovation isn't just about technology –",
      name : "Fredrik joe"

    },
    {
      title : "Great Food and Ambiance,",
      review : "We had a great experiance at Rahul Hospitality, we have used the  –",
      name : "Manoj patil"
    },
    {
      title : "In the world of real estate,",
      review : "innovation isn't just about technology –",
      name : "Niraj rane"
    }
  ]
  return (
    <div id="reviews" ref={ref} className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <motion.div className="absolute inset-0" style={{ scale }}>
        <Image
          src={assets.instafeel_interior}
          alt="Instafeel Hotel"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
      </motion.div>

      {/* Quote Content */}
      <div className="absolute inset-x-0 bottom-24 md:bottom-32 overflow-hidden">
        <motion.div style={{ x }} className="flex items-center">
          {/* Repeat the quote twice for continuous scroll effect with proper spacing */}
          {REVIEWS.map((review ,i) => (
            <div key={i} className="flex-shrink-0 px-8 md:px-16">
              <blockquote className="text-2xl md:text-4xl font-serif italic text-white leading-tight max-w-[90vw] md:max-w-2xl">
                <div className="mb-2 md:mb-4">"{review.title},</div>
                <div className="mb-2 md:mb-4">{review.review}"</div>
                <footer className="mt-4 md:mt-8">
                  <cite className="text-lg md:text-xl text-zinc-200 font-light">— {review.name}</cite>
                </footer>
              </blockquote>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

