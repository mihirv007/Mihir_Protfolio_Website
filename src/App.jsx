import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Work from './components/Work'
import ExperienceEducation from './components/ExperienceEducation'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div
      className="bg-[#d8ebe2] font-body-md text-body-md text-[#172d25] antialiased selection:bg-[#df735e]/25 selection:text-[#172d25]"
      style={{
        backgroundImage:
          'linear-gradient(rgba(216, 235, 226, 0.88), rgba(216, 235, 226, 0.88)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAKZAjcAXxLkP6E-OWmrcYV_mRSXD6v_2NnLkJSjZMfHF3Kzx708S3XTIDxl2Un3-fsVLcJs1BHM9aOvqyjAMhBTEX8u1GV0cB5QteaEtKxHi0tPL_TeMlN06vn3NEBMaNFxVH6GIgzdEVPIqz_BtoaYJpemRvIgk_zjc0qT8uDbNOyUEZYTfin51IJt0GQUlaCi5AdpF1YvFmQlrvBceASIh5Wvx-BsRcTCxYluShtYlwnBQ7Bqtg0")',
        backgroundRepeat: 'repeat-y',
        backgroundPosition: 'center top',
        backgroundSize: '100% auto',
        backgroundAttachment: 'fixed',
      }}
    >
      <Navbar />
      <main className="w-full pt-20">
        <div className="flex flex-col w-full">
          <Hero />
          <About />
          <Skills />
          <Work />
          <ExperienceEducation />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}
