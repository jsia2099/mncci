import Image from 'next/image'

export default function Mission() {
  return (
    <section id="mission" className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 text-center">Our <span className="text-blue-600">Mission & Vision</span></h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative h-[225px] md:h-[300px] rounded-lg shadow-md overflow-hidden">
              <Image
                src="/images/mission.png"
                alt="Our Mission and Vision"
                fill
                className="w-full h-full"
              />
            </div>
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">Mission</h3>
                <p className="text-gray-600 text-justify">
                  Our mission is to serve as the catalyst for building and strengthening strategic industry value chains within the Metro Naga area, fostering a dynamic and thriving economic ecosystem where sustainable growth is deeply rooted in the success of local businesses.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">Vision</h3>
                <p className="text-gray-600 text-justify">
                  We envision a vibrant and dynamic Metro Naga area where we, as key members of the business sector, play a central role in driving economic growth, fostering innovation, and creating opportunities for sustainable development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

