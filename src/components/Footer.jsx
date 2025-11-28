import React from 'react'
import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3 footer-col">
            <h3 className="footer-title">TUFAILHASAN'S PORTFOLIO</h3>
            <p>Full Stack Developer passionate about building modern, responsive web applications with great user experiences.</p>
            <div className="social-links mt-4">
              <SocialLinks />
            </div>
          </div>

          <div className="col-md-6 col-lg-3 footer-col">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="col-md-6 col-lg-3 footer-col">
            <h4 className="footer-subtitle">Services</h4>
            <ul className="footer-links">
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Frontend Development</a></li>
              <li><a href="#">Backend Integration</a></li>
              <li><a href="#">Single Page Applications</a></li>
            </ul>
          </div>

          <div className="col-md-6 col-lg-3 footer-col">
            <h4 className="footer-subtitle">Contact Info</h4>
            <ul className="footer-links">
              <li><i className="fas fa-envelope me-2"></i> <a href="mailto:tufaildafedar0@gmail.com" className="text-decoration-none text-reset">tufaildafedar0@gmail.com</a></li>
              <li><i className="fas fa-phone me-2"></i> <a href="tel:+919860266963" className="text-decoration-none text-reset">+91 9860266963</a></li>
              <li><i className="fas fa-map-marker-alt me-2"></i> Pune, Maharashtra</li>
            </ul>
          </div>
        </div>

        <div className="copyright">
          <p>&copy; 2025 Tufailhasan Dafedar. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
