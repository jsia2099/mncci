'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const carouselItems = [
  {
    image: "/images/meeting1.jpg",
    alt: "Business professionals in a meeting",
    description: "Fostering collaboration and innovation in the workplace"
  },
  {
    image: "/images/meeting.jpg",
    alt: "Sustainable business practices in action",
    description: "Implementing eco-friendly solutions for a better tomorrow"
  },
  {
    image: "/images/bicolbusinessmonth.jpg",
    alt: "Business leaders engaging in community outreach",
    description: "Building stronger communities through corporate social responsibility"
  }
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length)
    }, 10000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + carouselItems.length) % carouselItems.length)
  }

  return (
    <section id="home" className="relative bg-gray-50 h-screen flex items-center overflow-hidden">
      {carouselItems.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={item.image}
            alt={item.alt}
            fill
            className="object-cover"
            quality={100}
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
      ))}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Empowering Businesses for a{' '}
            <span className="text-blue-400">
              Better Tomorrow
            </span>
          </h1>
          <p className="text-xl mb-8">
            {carouselItems[currentSlide].description}
          </p>
          <Link href="#contact-section" className="inline-flex items-center px-6 py-3 text-lg font-semibold text-blue-600 bg-white rounded-md hover:bg-blue-50 transition duration-300">
            Contact Us
            <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-blue-600' : 'bg-white bg-opacity-50'
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition duration-300"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition duration-300"
        onClick={nextSlide}
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>
    </section>
  )
}

