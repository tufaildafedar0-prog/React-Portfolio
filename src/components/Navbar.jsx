import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()

  useEffect(() => {
    function onScroll() {
      const nav = document.querySelector('.navbar')
      if (!nav) return
      if (window.scrollY > 50) nav.classList.add('scrolled')
      else nav.classList.remove('scrolled')
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">TUFAILHASAN'S PORTFOLIO</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/"> <i className="fas fa-home me-1"></i> Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about"> <i className="fas fa-user me-1"></i> About</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`} to="/projects"> <i className="fas fa-project-diagram me-1"></i> Projects</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact"> <i className="fas fa-envelope me-1"></i> Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
