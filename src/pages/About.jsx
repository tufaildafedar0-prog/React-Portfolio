import React, { useEffect } from 'react'
import profile from '../assets/img/Tufailhasan.jpg'

export default function About() {
  useEffect(() => {
    // animate progress bars
    document.querySelectorAll('.progress-bar').forEach(bar => {
      const width = bar.style.width
      bar.style.width = '0'
      setTimeout(() => { bar.style.width = width }, 300)
    })

    // animate cards on scroll
    function checkVisibility() {
      const elements = document.querySelectorAll('.glass-card, .education-card, .fun-fact')
      elements.forEach(el => {
        const top = el.getBoundingClientRect().top
        const windowHeight = window.innerHeight
        if (top < windowHeight - 100) el.classList.add('visible')
      })
    }
    checkVisibility()
    window.addEventListener('scroll', checkVisibility)
    return () => window.removeEventListener('scroll', checkVisibility)
  }, [])

  return (
    <>
      <section className="about-section py-5 mt-5">
        <div className="container about-content ">
          <div className="row mb-5 align-items-center">
            <div className="col-lg-4 text-center mb-4 mb-lg-0">
              <img src={profile} alt="Tufailhasan Dafedar" className="profile-img" />
              <div className="mt-4">
                <a href="/src/assets/img/WD resume.pdf" download className="btn btn-primary btn-lg">
                  <i className="fas fa-download me-2"></i>Download Resume
                </a>
              </div>
              <div className="mt-3">
                <div className="d-flex justify-content-center">
                  <a href="#" className="social-icon me-3"><i className="fab fa-github fa-2x"></i></a>
                  <a href="https://www.linkedin.com/in/tufailhasan3241/" target="_blank" rel="noreferrer" className="social-icon me-3"><i className="fab fa-linkedin fa-2x"></i></a>
                  <a href="#" className="social-icon"><i className="fab fa-twitter fa-2x"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-8 glass-card">
              <h1 className="mb-3" style={{background: 'linear-gradient(135deg, #e22b2b, #cb1111)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>About Me</h1>
              <p className="lead">Hey! I'm <span style={{color:'#e22b2b',fontWeight:600}}>Tufailhasan Dafedar</span>, a passionate <span style={{color:'#e22b2b'}}>full stack developer</span> and <span style={{color:'#e22b2b'}}>creative problem solver</span> who loves building innovative web solutions and experimenting with cutting-edge technologies.</p>
              <p>I believe in learning by doing, collaborating effectively in teams, and enjoying the creative process along the way. My approach combines technical expertise with creative problem-solving to deliver exceptional digital experiences.</p>
              <p><span style={{color:'#e22b2b'}}>Let's connect and create something amazing together!</span></p>

              <div className="row text-center mt-4">
                <div className="col-4">
                  <div className="fun-fact">
                    <h3 className="counter" data-count="6">5</h3>
                    <p>Projects Completed</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="fun-fact">
                    <h3 className="counter" data-count="3">3</h3>
                    <p>Months Experience</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="fun-fact">
                    <h3 className="counter" data-count="100">100</h3>
                    <p>% Passionate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-12">
              <h2 className="section-title center">My Skills & Expertise</h2>
            </div>

            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="glass-card h-100">
                <h3 className="mb-4"><i className="fas fa-laptop-code me-2"></i> Technical Skills</h3>
                <div className="mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span>JavaScript</span>
                    <span>85%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-info" role="progressbar" style={{width:'85%'}}>85%</div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span>React</span>
                    <span>80%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-primary" role="progressbar" style={{width:'80%'}}>80%</div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span>Node.js</span>
                    <span>75%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-success" role="progressbar" style={{width:'75%'}}>75%</div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span>HTML5 & CSS3</span>
                    <span>90%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-warning" role="progressbar" style={{width:'90%'}}>90%</div>
                  </div>
                </div>

                <div className="mt-4">
                  <h5>Other Technologies:</h5>
                  <div className="d-flex flex-wrap gap-2">
                    <span className="badge bg-light text-dark"><i className="fab fa-bootstrap me-1"></i> Bootstrap</span>
                    <span className="badge bg-light text-dark"><i className="fas fa-database me-1"></i> MySQL</span>
                    <span className="badge bg-light text-dark"><i className="fab fa-git-alt me-1"></i> Git</span>
                    <span className="badge bg-light text-dark"><i className="fab fa-js me-1"></i> ES6+</span>
                  </div>
                </div>

                <div className="skills-icons mt-4">
                  <i className="fab fa-js-square text-warning"></i>
                  <i className="fab fa-react text-info"></i>
                  <i className="fab fa-node-js text-success"></i>
                  <i className="fab fa-html5 text-danger"></i>
                  <i className="fab fa-css3-alt text-primary"></i>
                  <i className="fab fa-bootstrap text-purple"></i>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="glass-card h-100">
                <h3 className="mb-4"><i className="fas fa-users me-2"></i> Soft Skills</h3>
                <ul className="soft-skills-list list-group">
                  <li className="list-group-item"><i className="fas fa-handshake me-2"></i> Teamwork & Collaboration</li>
                  <li className="list-group-item"><i className="fas fa-lightbulb me-2"></i> Problem Solving</li>
                  <li className="list-group-item"><i className="fas fa-palette me-2"></i> Creativity</li>
                  <li className="list-group-item"><i className="fas fa-comments me-2"></i> Communication</li>
                  <li className="list-group-item"><i className="fas fa-clock me-2"></i> Time Management</li>
                  <li className="list-group-item"><i className="fas fa-tasks me-2"></i> Project Management</li>
                  <li className="list-group-item"><i className="fas fa-sync-alt me-2"></i> Adaptability</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-12">
              <h2 className="section-title center">Education & Certifications</h2>
            </div>
            <div className="col-md-4 mb-4">
              <div className="education-card">
                <div className="education-icon"><i className="fas fa-university"></i></div>
                <h4>Pune University</h4>
                <p>Bachelor's Degree in BBA(Computer Application)</p>
                <span className="badge bg-primary mt-2">2023-2026</span>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="education-card">
                <div className="education-icon"><i className="fas fa-award"></i></div>
                <h4>Google Digital Marketing</h4>
                <p>Certification in Digital Marketing Fundamentals</p>
                <span className="badge bg-primary mt-2">2024</span><br/>
                <a href="https://www.credly.com/badges/f4fdb17b-74d3-4771-bd11-97c1aece3585/linked_in_profile" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-light mt-2">View Certificate</a>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="education-card">
                <div className="education-icon"><i className="fas fa-code"></i></div>
                <h4>Full Stack Java Development</h4>
                <p>Advanced Full Stack Java Development Training</p>
                <span className="badge bg-primary mt-2">2025</span>
              </div>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-12">
              <h2 className="section-title center">Hobbies & Interests</h2>
              <div className="glass-card text-center">
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <span className="badge bg-light text-dark"><i className="fas fa-music me-1"></i> Music Production</span>
                  <span className="badge bg-light text-dark"><i className="fas fa-headphones me-1"></i> Sound Design</span>
                  <span className="badge bg-light text-dark"><i className="fas fa-gamepad me-1"></i> Gaming</span>
                  <span className="badge bg-light text-dark"><i className="fas fa-camera me-1"></i> Photography</span>
                  <span className="badge bg-light text-dark"><i className="fas fa-flask me-1"></i> Coding Experiments</span>
                  <span className="badge bg-light text-dark"><i className="fas fa-book me-1"></i> Reading Tech Blogs</span>
                  <span className="badge bg-light text-dark"><i className="fas fa-hiking me-1"></i> Outdoor Activities</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
