import React, { useEffect, useState, useRef } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [formMessage, setFormMessage] = useState({ text: '', type: '' })
  const timeoutsRef = useRef([])
  const submitTimerRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return

    function onScroll() {
      const navbar = document.querySelector('.navbar')
      if (!navbar) return
      if (window.scrollY > 50) navbar.classList.add('scrolled')
      else navbar.classList.remove('scrolled')
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return

    function checkVisibility() {
      const formGroups = document.querySelectorAll('.form-group')
      formGroups.forEach((group, index) => {
        const rect = group.getBoundingClientRect()
        const windowHeight = window.innerHeight
        if (rect.top < windowHeight - 100) {
          const t = setTimeout(() => group.classList.add('visible'), index * 100)
          timeoutsRef.current.push(t)
        }
      })
    }

    checkVisibility()
    window.addEventListener('scroll', checkVisibility)
    return () => {
      window.removeEventListener('scroll', checkVisibility)
      timeoutsRef.current.forEach(t => clearTimeout(t))
      timeoutsRef.current = []
    }
  }, [])

  // clear submit timer on unmount
  useEffect(() => {
    return () => {
      if (submitTimerRef.current) {
        clearTimeout(submitTimerRef.current)
        submitTimerRef.current = null
      }
    }
  }, [])

  function showMessage(text, type) {
    setFormMessage({ text, type })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const { name, email, subject, message } = form
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!name || !email || !subject || !message) {
      showMessage('Please fill out all fields.', 'error')
      return
    }
    if (!emailPattern.test(email)) {
      showMessage('Please enter a valid email address.', 'error')
      return
    }
    showMessage('Sending your message...', 'info')

    // set submit timer and store ref for cleanup
    if (submitTimerRef.current) {
      clearTimeout(submitTimerRef.current)
    }
    submitTimerRef.current = setTimeout(() => {
      showMessage("Thank you for your message! I'll get back to you soon.", 'success')
      setForm({ name: '', email: '', subject: '', message: '' })
      submitTimerRef.current = null
    }, 1500)
  }

  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-container mt-5">
          <div className="contact-content">
            <h1 className="contact-title">Get In Touch</h1>
            <p className="contact-subtitle">Have a project in mind or want to discuss potential opportunities? Feel free to reach out - I'd love to hear from you!</p>

            <div className="row">
              <div className="col-lg-8">
                <form className="contact-form" id="contactForm" onSubmit={handleSubmit} noValidate>
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" required value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" required value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input type="text" className="form-control" id="subject" name="subject" placeholder="What is this regarding?" required value={form.subject} onChange={(e)=>setForm({...form, subject:e.target.value})}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Your Message</label>
                    <textarea className="form-control" id="message" name="message" rows="5" placeholder="Tell me about your project or inquiry..." required value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})}></textarea>
                  </div>
                  <button type="submit" className="btn btn-send">
                    <i className="fas fa-paper-plane me-2"></i>Send Message
                  </button>
                  <div className="form-message" id="formMessage" style={{
                    color: formMessage.type === 'error' ? '#ff6b6b' : formMessage.type === 'success' ? '#51cf66' : '#339af0',
                    backgroundColor: formMessage.type === 'error' ? 'rgba(255, 107, 107, 0.1)' : formMessage.type === 'success' ? 'rgba(81, 207, 102, 0.1)' : 'rgba(51, 154, 240, 0.1)'
                  }}>{formMessage.text}</div>
                </form>
              </div>

              <div className="col-lg-4">
                <div className="contact-info">
                  <div className="info-card">
                    <a href="mailto:tufaildafedar0@gmail.com" className="text-decoration-none text-reset d-block w-100 h-100">
                      <div className="info-icon"><i className="fas fa-envelope"></i></div>
                      <h4 className="info-title">Email Me</h4>
                      <p className="info-text mb-0">tufaildafedar0@gmail.com</p>
                    </a>
                  </div>

                  <div className="info-card">
                    <a href="tel:+919860266963" className="text-decoration-none text-reset d-block w-100 h-100">
                      <div className="info-icon"><i className="fas fa-phone"></i></div>
                      <h4 className="info-title">Call Me</h4>
                      <p className="info-text mb-0">+91 9860266963</p>
                    </a>
                  </div>

                  <div className="info-card">
                    <div className="info-icon"><i className="fas fa-map-marker-alt"></i></div>
                    <h4 className="info-title">Location</h4>
                    <p className="info-text">Pune, Maharashtra, India</p>
                  </div>

                  <div className="social-links-contact">
                    <a href="#" title="GitHub"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/tufailhasan3241/" target="_blank" rel="noreferrer" title="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#" title="Twitter"><i className="fab fa-twitter"></i></a>
                    <a href="#" title="Instagram"><i className="fab fa-instagram"></i></a>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
