'use client'

import React from 'react'
import Image from 'next/image'

const partners = [
  { name: "BIGGS", logo: "/images/partners/biggs.jpg" },
  { name: "Caleb Motors", logo: "/images/partners/calebmotors.jpg" },
  { name: "Graceland Food Industries Inc.", logo: "/images/partners/graceland.jpg" },
  { name: "Shell Magsaysay Iserve", logo: "/images/partners/shell.png" },
  { name: "Villa Caceres Hotel", logo: "/images/partners/villa-caceres.jpg" },
  { name: "JCS Meating Place", logo: "/images/partners/meatingplace.jpg" },
  { name: "Nueca Technologies Inc.", logo: "/images/partners/nueca.png" },
  { name: "Bob Marlin", logo: "/images/partners/bobmarlin.jpg" },
  { name: "CBD Plaza Hotel", logo: "/images/partners/cbdplazahotel.jpg" },
]

export default function TrustedPartners() {
  return (
    <section className="bg-gray-50 py-8 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-12 text-gray-800">
          Our Trusted <span className="text-blue-600">Partners</span>
        </h2>
        <div className="overflow-hidden">
          <div className="flex animate-scroll">
            {[...partners, ...partners].map((partner, i) => (
              <div key={i} className="flex-shrink-0 w-32 md:w-40 mx-4 md:mx-8 flex flex-col items-center group">
                <div className="w-24 h-24 md:w-32 md:h-32 relative mb-2 md:mb-4 overflow-hidden rounded-lg shadow-md transition-transform duration-300 transform group-hover:scale-105">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={`${partner.name} Logo`}
                    fill
                    sizes="(max-width: 768px) 96px, 128px"
                    className="object-contain"
                  />
                </div>
                <p className="text-xs md:text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}