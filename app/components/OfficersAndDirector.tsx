'use client'

import React from 'react'
import Image from 'next/image'

const officers = [
  { title: 'President', name: 'MARIO C. VILLANUEVA ', image: '/images/officers/placeholder.png' , level: 1 },
  { title: 'Executive Vice President', name: 'EFREN DANIEL A. DE LEON', image: '/images/officers/placeholder.png', level: 1 },
  { title: 'VP for Chamber Management', name: 'Mike Johnson', image: '/images/officers/placeholder.png' , level: 2},
  { title: 'VP for Finance', name: 'Sarah Brown', image: '/images/officers/placeholder.png' , level: 2},
  { title: 'VP for Programs & Projects', name: 'David Lee', image: '/images/officers/placeholder.png' , level: 2},
  { title: 'Board Secretary', name: 'Emily Chen', image: '/images/officers/placeholder.png' , level: 2},
  { title: 'Treasurer', name: 'Robert Taylor', image: '/images/officers/placeholder.png', level: 2 },
  { title: 'Auditor', name: 'Lisa Wong', image: '/images/officers/placeholder.png' , level: 2},
  { title: 'P.I.O.', name: 'Patricia Martinez', image: '/images/officers/placeholder.png' , level: 2},
  { title: 'Director', name: 'Thomas Anderson', image: '/images/officers/placeholder.png' , level: 3},
  { title: 'Director', name: 'Maria Garcia', image: '/images/officers/placeholder.png' , level: 3},
  { title: 'Director', name: 'James Wilson', image: '/images/officers/placeholder.png' , level: 3},
  { title: 'Director', name: 'Patricia Martinez', image: '/images/officers/placeholder.png' , level: 3},
  
]

export default function OfficersAndDirectors() {
  return (
    <section id="officers-and-directors" className="bg-[#f5f5f5] py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-2 justify-center mb-4">
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
              <span className="text-sm text-gray-500 tracking-wider uppercase">Who We Are</span>
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 tracking-tight">
              Our <span className="text-blue-600">Leadership Team</span>
            </h2>
            <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-center leading-relaxed">
              Our organization is led by a dedicated team of professionals committed to fostering business growth and community development. Together, we work towards creating meaningful impact and sustainable progress.
            </p>
          </div>

          {/* Executive Leadership Row */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mb-8">
            <div className="col-span-2 md:col-span-3 lg:col-span-4 flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 w-full max-w-2xl">
                {officers.filter(officer => officer.level === 1).map((officer, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="relative w-full aspect-square mb-4 rounded-2xl overflow-hidden bg-white">
                      <Image
                        src={officer.image || "/placeholder.svg"}
                        alt={officer.name}
                        fill
                        className="object-cover filter transition-all duration-300"
                      />
                    </div>
                    <div className="text-center">
                      <div className="inline-block px-4 py-1 bg-blue-500  rounded-full mb-2">
                        <span className="text-sm font-medium text-white">{officer.name}</span>
                      </div>
                      <p className="text-sm text-gray-500">{officer.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Other Officers Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {officers.filter(officer => officer.level !== 1).map((officer, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative w-full aspect-square mb-4 rounded-2xl overflow-hidden bg-white">
                  <Image
                    src={officer.image || "/placeholder.svg"}
                    alt={officer.name}
                    fill
                    className="object-cover filter transition-all duration-300"
                  />
                </div>
                <div className="text-center">
                  <div className="inline-block px-4 py-1 bg-blue-500 rounded-full mb-2">
                    <span className="text-sm font-medium text-white">{officer.name}</span>
                  </div>
                  <p className="text-sm text-gray-500">{officer.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

