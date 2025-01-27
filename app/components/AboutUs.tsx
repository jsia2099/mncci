import Image from 'next/image'

export default function AboutUs() {
  return (
    <section id="aboutus" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 text-center">About Us</h2>
          <p className="text-lg text-gray-600 mb-12 text-center">
            At <span className="text-blue-600">Metro Naga Chamber of Commerce and Industry</span>, we believe in the power of business to drive positive change. Our team of experts works tirelessly to help organizations integrate social responsibility into their core strategies, creating value for both the business and society.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image src="/images/expertise.jpg" alt="Our Expertise" width={300} height={200} className="w-full" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Our Expertise</h3>
                <p className="text-gray-600">We bring years of experience in corporate social responsibility and sustainable business practices.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image src="/images/approach.jpg" alt="Our Approach" width={300} height={200} className="w-full" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Our Approach</h3>
                <p className="text-gray-600">We take a holistic approach to help businesses create meaningful impact.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image src="/images/impact.jpg" alt="Our Impact" width={300} height={200} className="w-full" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Our Impact</h3>
                <p className="text-gray-600">We&apos;ve helped hundreds of businesses improve their social and environmental footprint.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

