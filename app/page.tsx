"use client"

import { useEffect } from "react"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Education from "@/components/education"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Training from "@/components/training"
// import Testimonials from "@/components/testimonials"
import Services from "@/components/services"
import Contact from "@/components/contact"
import ScrollToTop from "@/components/scroll-to-top"

export default function Home() {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const href = this.getAttribute("href")
        if (!href) return

        document.querySelector(href)?.scrollIntoView({
          behavior: "smooth",
        })
      })
    })
  }, [])

  return (
    <div className="relative">
      <section id="home" className="relative">
        <Hero />
      </section>

      <section id="about" className="py-20 bg-background">
        <About />
      </section>

      <section id="skills" className="py-20 bg-muted/30">
        <Skills />
      </section>

      <section id="education" className="py-20 bg-background">
        <Education />
      </section>

      <section id="projects" className="py-20 bg-muted/30">
        <Projects />
      </section>

      <section id="experience" className="py-20 bg-background">
        <Experience />
      </section>

      <section id="training" className="py-20 bg-muted/30">
        <Training />
      </section>

      <section id="services" className="py-20 bg-background">
        <Services />
      </section>

      {/* <section id="testimonials" className="py-20 bg-muted/30">
        <Testimonials />
      </section> */}

      <section id="contact" className="py-20 bg-background">
        <Contact />
      </section>

      <ScrollToTop />
    </div>
  )
}
