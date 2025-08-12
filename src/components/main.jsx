import { Routes, Route } from 'react-router-dom'
import Nav from "./nav"
import Hero from "./hero"
import CompanyOverview from "./CompanyOverview"
import IndustryCompetence  from "./industrycompetence"
import LearnAbout from './pages/learn-about'
import Testimonials from "./testimonials"
import Footer from "./footer"
const main = () => {
  return (
    <div className="bg-gray-100">
      <Nav />
        {/* Sections
      <section id="home" className="h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-4xl">🏠 Home Section</h1>
      </section>

      <section id="about" className="h-screen bg-yellow-100 flex items-center justify-center">
        <h1 className="text-4xl">ℹ️ About Section</h1>
      </section>

      <section id="services" className="h-screen bg-green-100 flex items-center justify-center">
        <h1 className="text-4xl">💼 Services Section</h1>
      </section>

      <section id="testimonials" className="h-screen bg-pink-100 flex items-center justify-center">
        <h1 className="text-4xl">💬 Testimonials Section</h1>
      </section> */}
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <CompanyOverview />
            <IndustryCompetence />
            <Testimonials/>
            <Footer/>
          </>
        } />
        <Route path="/learn-about" element={<LearnAbout/>} />
      </Routes>
    </div>
  )
}

export default main
