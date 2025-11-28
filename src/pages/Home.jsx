import React, { useEffect, useState } from 'react'
import yorichi from '../assets/img/yorichi.jpg'
import htmljslogo from '../assets/img/HTML-CSS-JS-Logo.png'
import bootstrapLogo from '../assets/img/bootstrap5-removebg-preview.png'
import reactImg from '../assets/img/ChatGPT Image Jul 26, 2025, 02_26_11 PM.png'
import mysqlImg from '../assets/img/mysq.png'

export default function Home() {
  const [typedText, setTypedText] = useState('')
  useEffect(() => {
    const strings = ['responsive websites', 'web applications', 'user experiences', 'digital solutions']
    let loopIndex = 0, char = 0, forward = true, timeoutId = null
    const speed = 60, pause = 1500
    function tick() {
      const current = strings[loopIndex % strings.length]
      if (forward) {
        setTypedText(current.slice(0, char + 1))
        char++
        if (char === current.length) { forward = false; timeoutId = setTimeout(tick, pause); return }
      } else {
        setTypedText(current.slice(0, char - 1))
        char--
        if (char === 0) { forward = true; loopIndex++ }
      }
      timeoutId = setTimeout(tick, speed)
    }
    tick()
    return () => clearTimeout(timeoutId)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counters = document.querySelectorAll('.stat-number')
          counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count') || '0', 10)
            let current = 0
            const step = Math.max(1, Math.floor(target / 100))
            const interval = setInterval(() => {
              current += step
              if (current >= target) { counter.innerText = String(target); clearInterval(interval) }
              else counter.innerText = String(current)
            }, 20)
          })
          observer.disconnect()
        }
      })
    })
    const el = document.querySelector('.stats-section')
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const items = document.querySelectorAll('.timeline-item')
    function checkVisibility() {
      items.forEach(item => {
        const top = item.getBoundingClientRect().top
        const windowHeight = window.innerHeight
        if (top < windowHeight - 100) item.classList.add('visible')
      })
    }
    checkVisibility()
    window.addEventListener('scroll', checkVisibility)
    return () => window.removeEventListener('scroll', checkVisibility)
  }, [])

  return (
    <>
      <section id="home" className="hero-section">
        <div className="container hero-content">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="hero-title">Hi, I'm <span className="accent-text">Tufailhasan</span></h1>
              <h2 className="hero-subtitle">A Passionate Full Stack Developer</h2>
              <div className="typing-container">
                <span className="typing-text">I create </span><span id="element">{typedText}</span><span className="cursor"></span>
              </div>
              <p className="lead mb-4">I build modern, responsive web applications with clean code and great user experiences. Let's turn your ideas into digital reality!</p>
              <div className="btn-group mt-4">
                <a href="/projects" className="btn btn-custom">View My Projects</a>
                <a href="https://www.linkedin.com/in/tufailhasan3241/" target="_blank" rel="noreferrer" className="btn btn-custom">Visit LinkedIn</a>
              </div>
              <div className="mt-4">
                <a href="/about" className="btn btn-outline-portfolio">Learn More About Me</a>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <img src={yorichi} alt="Tufailhasan Dafedar - Full Stack Developer" className="hero-image img-fluid profile-pic" />
              <div className="mt-4">
                <div className="d-flex justify-content-center">
                  <a href="#" className="social-icon me-3"><i className="fab fa-github fa-2x"></i></a>
                  <a href="https://www.linkedin.com/in/tufailhasan3241/" target="_blank" rel="noreferrer" className="social-icon me-3"><i className="fab fa-linkedin fa-2x"></i></a>
                  <a href="#" className="social-icon"><i className="fab fa-twitter fa-2x"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 col-6 stat-item">
              <span className="stat-number" data-count="5">0</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="col-md-3 col-6 stat-item">
              <span className="stat-number" data-count="3">0</span>
              <span className="stat-label">Months Experience</span>
            </div>
            <div className="col-md-3 col-6 stat-item">
              <span className="stat-number" data-count="6">0</span>
              <span className="stat-label">Technologies</span>
            </div>
            <div className="col-md-3 col-6 stat-item">
              <span className="stat-number" data-count="100">0</span>
              <span className="stat-label">% Satisfied</span>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="work-section py-5">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">My Development Skills</h2>
            <p className="section-subtitle">Technologies and frameworks I work with</p>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h3 className="timeline-title">Frontend Developer</h3>
                <p className="timeline-desc">
                  I'm a web developer with expertise in HTML, CSS, and JavaScript. I use these core technologies to build responsive, user-friendly websites.
                </p>
              </div>
              <div className="timeline-icon">
                <img src={htmljslogo} alt="Web Development" className="img-fluid" />
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content">
                <h3 className="timeline-title">Bootstrap Developer</h3>
                <p className="timeline-desc">
                  I use Bootstrap 5 to build responsive, mobile-first websites efficiently.
                </p>
              </div>
              <div className="timeline-icon">
                <img src={bootstrapLogo} alt="Bootstrap" className="img-fluid" />
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content">
                <h3 className="timeline-title">React + Node Developer</h3>
                <p className="timeline-desc">
                  I work with React JS to build fast, interactive user interfaces using reusable components.
                </p>
              </div>
              <div className="timeline-icon">
                <img src={reactImg} alt="React" className="img-fluid" />
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content">
                <h3 className="timeline-title">MySQL Developer</h3>
                <p className="timeline-desc">
                  As a MySQL developer, I design and manage databases to store and organize data efficiently.
                </p>
              </div>
              <div className="timeline-icon">
                <img src={mysqlImg} alt="MySQL" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
