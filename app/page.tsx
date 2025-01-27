import Navbar from './components/Navbar'
import Hero from './components/HeroSection'
import AboutUs from './components/AboutUs'
import Mission from './components/Mission'
import OfficersAndDirectors from './components/OfficersAndDirector'
import TrustedPartners from './components/TrustedPartners'
import BoardOfAdvisors from './components/BoardofAdvisors'
import Footer from './components/Footer'
import ContactSection from './components/ContactSection'
import FacebookPosts from './components/FacebookPost'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TrustedPartners />
        <AboutUs />
        <Mission />
        <OfficersAndDirectors />
        <BoardOfAdvisors />
        <FacebookPosts />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

