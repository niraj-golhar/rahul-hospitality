"use client"

import { motion, useMotionValue, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { assets } from "../../assets/assets"
import Image from "next/image"

interface ComparisonSliderProps {
  imageUrl: string
  videoUrl: string
}

export function ComparisonSlider({ imageUrl, videoUrl }: ComparisonSliderProps) {
  const [sliderWidth, setSliderWidth] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const position = useMotionValue(50)
  const inputRange = [0, 100]
  const outputRange = [`${0}%`, `${100}%`]
  const width = useTransform(position, inputRange, outputRange)

  useEffect(() => {
    if (containerRef.current) {
      setSliderWidth(containerRef.current.offsetWidth)
    }

    // Ensure video plays
    if (videoRef.current) {
      videoRef.current.play()
    }
  }, [])

  const handleDrag = (event: PointerEvent) => {
    if (!containerRef.current) return

    const containerRect = containerRef.current.getBoundingClientRect()
    const x = event.clientX
    const newPosition = ((x - containerRect.left) / containerRect.width) * 100

    position.set(Math.min(Math.max(newPosition, 0), 100))
  }

  return (
    <motion.div
    initial={{
        opacity: 0,
        // if odd index card,slide from right instead of left
        x: 0
      }}
      whileInView={{
        opacity: 1,
        x: 0, // Slide in to its original position
        transition: {
          duration: 1 // Animation duration
        }
      }}
    className="bg-zinc-100 py-10">
    <div className="max-w-7xl mx-auto">
        <div className="flex justify-center relative max-w-6xl mx-auto"> 
    <div ref={containerRef} className="relative w-3/4 aspect-[16/9] overflow-hidden rounded-2xl">
      {/* Base Video Layer */}
      <div className="absolute inset-0">
        {/* <video ref={videoRef} className="w-full h-full object-cover" loop muted playsInline autoPlay>
          <source src={videoUrl} type="video/mp4" />
        </video> */}
        <Image
            src={assets.dish_1}
            alt="After"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center center" }}
          />
      </div>

      {/* Image Overlay Layer */}
      <motion.div className="absolute inset-0 overflow-hidden" style={{ width }}>
        <div className="relative w-[100vw] h-full">
        <Image
            src={assets.dish_2}
            alt="Before"
            className="absolute h-full object-cover"
            style={{ objectPosition: "center center" }}
            />
        </div>
      </motion.div>

      {/* Slider Handle */}
      <motion.div
        className="absolute top-0 bottom-0 z-10 w-0.5 bg-white cursor-ew-resize"
        style={{ left: width }}
        onPointerDown={(e) => {
          ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
        }}
        onPointerMove={(e) => {
          if (e.buttons === 1) {
            handleDrag(e)
          }
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="flex gap-0.5">
            <div className="w-0.5 h-4 bg-zinc-900 rounded-full" />
            <div className="w-0.5 h-4 bg-zinc-900 rounded-full" />
          </div>
        </div>
      </motion.div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/50 text-white px-2 py-1 text-sm rounded-md">Dish 1</div>
      <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 text-sm rounded-md">Dish 2</div>
    </div>
    </div>
    </div>
    </motion.div>
  )
}

