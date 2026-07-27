import About from "../../components/home/About"
import Hero from "../../components/hero/Hero"
import Stats from "../../components/home/Stats"
import Academics from "../../components/home/Acatdemics"
import WhyChoose from "../../components/home/WhyChooseUs"
import Facilities from "../../components/home/Facilities"
import Gallery from "../../components/home/Gallary"
import CTA from "../../components/home/CTA"
import ContactSection from "../../components/home/Contact"

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <Stats />
      <About/>
      <Academics/>
      <WhyChoose />
      <Facilities />
      <Gallery />
      <CTA />
      <ContactSection />
    </div>
  )
}

export default HomePage