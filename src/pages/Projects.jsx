import React, { useEffect } from 'react'
import tic from '../assets/img/Tic.png'
import blog from '../assets/img/Blog.png'
import music from '../assets/img/Music.png'
import weather from '../assets/img/Weather.png'
import ngo from '../assets/img/NGO (2).png'
import portfolio from '../assets/img/Portfolio.png'

export default function Projects() {
  useEffect(() => {
    const projectCards = document.querySelectorAll('.project-card')
    function checkVisibility() {
      projectCards.forEach(card => {
        const top = card.getBoundingClientRect().top
        const windowHeight = window.innerHeight
        if (top < windowHeight - 100) card.classList.add('visible')
      })
    }
    checkVisibility()
    window.addEventListener('scroll', checkVisibility)
    return () => window.removeEventListener('scroll', checkVisibility)
  }, [])

  return (
    <>
      <section className="project-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-subtitle">My Recent Work</h2>
            <h1 className="section-title">Featured Projects</h1>
            <p className="section-subtitle">A collection of my recent web development projects showcasing various technologies and solutions</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 mb-5" data-category="frontend">
              <div className="project-card">
                <div className="project-img-container">
                  <img src={tic} alt="Tic Tac Toe Game" className="project-img img-fluid" />
                  <div className="project-overlay">
                    <span className="tech-badge">Interactive Game</span>
                    <span className="tech-badge">JavaScript Logic</span>
                  </div>
                </div>
                <div className="project-body">
                  <h3 className="project-title">Tic Tac Toe Game</h3>
                  <div className="tech-badges">
                    <span className="tech-badge">HTML</span>
                    <span className="tech-badge">CSS</span>
                    <span className="tech-badge">Bootstrap</span>
                    <span className="tech-badge">JavaScript</span>
                  </div>
                  <p className="project-description">
                    A comprehensive Tic Tac Toe game with user authentication, game logic, score tracking, and responsive design.
                  </p>
                  <div className="project-links">
                    <a href="https://tufaildafedar0-prog.github.io/tic-tac-toe/" className="project-link" target="_blank" rel="noreferrer">Live Demo <i className="fas fa-external-link-alt"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-5" data-category="fullstack">
              <div className="project-card">
                <div className="project-img-container">
                  <img src={blog} alt="Blog Website" className="project-img img-fluid" />
                  <div className="project-overlay">
                    <span className="tech-badge">Blog</span>
                    <span className="tech-badge">Daily Updates</span>
                  </div>
                </div>
                <div className="project-body">
                  <h3 className="project-title">Blog Website</h3>
                  <div className="tech-badges">
                    <span className="tech-badge">HTML</span>
                    <span className="tech-badge">CSS</span>
                    <span className="tech-badge">JavaScript</span>
                    <span className="tech-badge">Bootstrap</span>
                  </div>
                  <p className="project-description">A responsive blog platform featuring tech, food, travel blogs and contact page.</p>
                  <div className="project-links">
                    <a href="https://tufaildafedar0-prog.github.io/blog-website/" className="project-link" target="_blank" rel="noreferrer">Live Demo <i className="fas fa-external-link-alt"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-5" data-category="bootstrap">
              <div className="project-card">
                <div className="project-img-container">
                  <img src={music} alt="Music Player" className="project-img" />
                  <div className="project-overlay">
                    <span className="tech-badge">Music</span>
                    <span className="tech-badge">Responsive Design</span>
                  </div>
                </div>
                <div className="project-body">
                  <h3 className="project-title">Music Player</h3>
                  <div className="tech-badges">
                    <span className="tech-badge">HTML</span>
                    <span className="tech-badge">Bootstrap</span>
                    <span className="tech-badge">Custom CSS</span>
                    <span className="tech-badge">JavaScript</span>
                  </div>
                  <p className="project-description">A website connecting rescue dogs with loving homes. Features dog profiles with search filters.</p>
                  <div className="project-links">
                    <a href="https://tufaildafedar0-prog.github.io/Music-player-/" className="project-link" target="_blank" rel="noreferrer">Live Demo <i className="fas fa-external-link-alt"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-category="frontend">
              <div className="project-card">
                <div className="project-img-container">
                  <img src={weather} alt="Weather Application" className="project-img" />
                  <div className="project-overlay">
                    <span className="tech-badge">API Integration</span>
                    <span className="tech-badge">Real-time Data</span>
                  </div>
                </div>
                <div className="project-body">
                  <h3 className="project-title">Weather Forecast App</h3>
                  <div className="tech-badges">
                    <span className="tech-badge">HTML</span>
                    <span className="tech-badge">CSS</span>
                    <span className="tech-badge">JavaScript</span>
                    <span className="tech-badge">API</span>
                  </div>
                  <p className="project-description">A weather application that fetches real-time data from a weather API.</p>
                  <div className="project-links">
                    <a href="https://tufaildafedar0-prog.github.io/Weather-app/" className="project-link" target="_blank" rel="noreferrer">Live Demo <i className="fas fa-external-link-alt"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-category="fullstack">
              <div className="project-card">
                <div className="project-img-container">
                  <img src={ngo} alt="Ngo" className="project-img" />
                  <div className="project-overlay">
                    <span className="tech-badge">Productivity</span>
                    <span className="tech-badge">CRUD Operations</span>
                  </div>
                </div>
                <div className="project-body">
                  <h3 className="project-title">NGO</h3>
                  <div className="tech-badges">
                    <span className="tech-badge">HTML</span>
                    <span className="tech-badge">CSS</span>
                    <span className="tech-badge">Javascript</span>
                  </div>
                  <p className="project-description">A non profit organization website to showcase their mission, projects, and ways to get involved.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-category="bootstrap">
              <div className="project-card">
                <div className="project-img-container">
                  <img src={portfolio} alt="Portfolio Website" className="project-img" />
                  <div className="project-overlay">
                    <span className="tech-badge">Portfolio</span>
                    <span className="tech-badge">Responsive</span>
                  </div>
                </div>
                <div className="project-body">
                  <h3 className="project-title">Personal Portfolio Website</h3>
                  <div className="tech-badges">
                    <span className="tech-badge">HTML</span>
                    <span className="tech-badge">CSS</span>
                    <span className="tech-badge">Bootstrap</span>
                    <span className="tech-badge">JavaScript</span>
                  </div>
                  <p className="project-description">A responsive portfolio website showcasing skills, projects, and contact information.</p>
                </div>
              </div>
            </div>

          </div>

          <div className="project-counter">
            <span className="counter-number">6</span>
            <span className="counter-text">Projects Completed and Counting</span>
          </div>
        </div>
      </section>
    </>
  )
}