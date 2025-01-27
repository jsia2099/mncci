import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/images/LOGO.jpg"
              alt="BusinessOrg Logo"
              width={80}
              height={80}
              className="mr-2"
            />
            <span className="text-xl font-sans-serif text-gray-700">
              <Link href="/"> Metro Naga Chamber of Commerce and Industry</Link>
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-500">Home</Link>
            <Link href="#aboutus" className="text-gray-600 hover:text-blue-500">About Us</Link>
            <Link href="#mission" className="text-gray-600 hover:text-blue-500">Mission</Link>
            <Link href="#officers-and-directors" className="text-gray-600 hover:text-blue-500">Our Leadership Team</Link>
            <Link href="#board-of-advisors" className="text-gray-600 hover:text-blue-500">Board of Advisors</Link>
            <Link href="#contact-section" className="text-gray-600 hover:text-blue-500">Contact Us</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

