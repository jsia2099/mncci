'use client'

import React from 'react'
import Image from 'next/image'

const advisors = [
  { name: 'ADOLFO I. OLIVAN', tenure: '1984 - 1988', image: '/images/advisors/adolfo_olivan.jpeg' },
  { name: 'EMETERIO L. AMAN', tenure: '2006 - 2007', image: '/images/advisors/emeterio_aman.jpg' },
  { name: 'ALBERTO R. BERCASIO', tenure: '2008 - 2011', image: '/images/advisors/alberto_bercasio.jpg' },
  { name: 'PHILIP T. IMPERIAL', tenure: '2011 - 2012', image: '/images/advisors/philip_imperial.jpg' },
  { name: 'GILBERT N. ALBERO', tenure: '2015 - 2017', image: '/images/advisors/gilbert_albero.jpg' },
  { name: 'FERDINAND D. SIA', tenure: '2018 - 2020', image: '/images/advisors/ferdinand_sia.jpg' },
]

export default function BoardOfAdvisors() {
  return (
    <section id="board-of-advisors" className="bg-[#f5f5f5] py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-2 justify-center mb-4">
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
              <span className="text-sm text-gray-500 tracking-wider uppercase">Our Advisors</span>
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 tracking-tight">
              Board of <span className="text-blue-600">Advisors</span>
            </h2>
            <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-center leading-relaxed">
              Our Board of Advisors brings a wealth of experience and expertise to guide our organization&apos;s strategic direction and ensure we remain at the forefront of business innovation and community impact.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {advisors.map((advisor, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative w-full aspect-square mb-4 rounded-2xl overflow-hidden bg-white">
                  <Image
                    src={advisor.image || "/placeholder.svg"}
                    alt={advisor.name}
                    fill
                    className="object-cover filter hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="text-center">
                  <div className="inline-block px-4 py-1 bg-blue-500 rounded-full mb-2">
                    <span className="text-sm font-medium text-white">{advisor.name}</span>
                  </div>
                  <p className="text-sm text-gray-500">President: {advisor.tenure}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

