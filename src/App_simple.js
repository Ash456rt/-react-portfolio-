import React, { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const projects = [
    {
      title: 'AI Bookmark Agent',
      description: 'Intelligent bookmark management with NLP categorization and Chrome extension.',
      technologies: ['Python', 'Streamlit', 'NLP', 'Chrome Extension'],
      category: 'AI/ML'
    },
    {
      title: 'Lumpy Skin Detection',
      description: 'IEEE-published research on AI-powered livestock disease detection.',
      technologies: ['React.js', 'Node.js', 'TensorFlow', 'ResNet'],
      category: 'AI/ML',
      badge: 'IEEE Published'
    },
    {
      title: 'Blockchain E-Voting',
      description: 'Secure voting platform using Ethereum smart contracts.',
      technologies: ['Solidity', 'Ethereum', 'Web3.js', 'React.js'],
      category: 'Blockchain'
    }
  ];

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <h2 className="text-gradient">Abilash M</h2>
            </div>
            
            <nav className="nav">
              <ul className="nav-links">
                <li><button className="nav-link" onClick={() => scrollToSection('home')}>Home</button></li>
                <li><button className="nav-link" onClick={() => scrollToSection('about')}>About</button></li>
                <li><button className="nav-link" onClick={() => scrollToSection('projects')}>Projects</button></li>
                <li><button className="nav-link" onClick={() => scrollToSection('skills')}>Skills</button></li>
                <li><button className="nav-link" onClick={() => scrollToSection('contact')}>Contact</button></li>
              </ul>
              
              <button className="theme-toggle" onClick={toggleDarkMode}>
                <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-section section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Hello, I'm <span className="text-gradient">Abilash M</span>
              </h1>
              <h2 className="hero-subtitle">
                Full-Stack Developer & AI Enthusiast
              </h2>
              <p className="hero-description">
                Recent B.E. Graduate building scalable web applications with modern technologies. 
                Passionate about AI, blockchain, and creating innovative solutions that make a difference.
              </p>
              
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">3+</span>
                  <span className="stat-label">Certifications</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">1</span>
                  <span className="stat-label">IEEE Publication</span>
                </div>
              </div>
              
              <div className="hero-actions">
                <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
                  <i className="fas fa-code"></i>
                  View My Projects
                </button>
                <a href="/resume/Abilash_M_Resume.pdf" download className="btn btn-secondary">
                  <i className="fas fa-download"></i>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section section-alt">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <h3>Information Science Engineer & AI Research Enthusiast</h3>
              <p>
                I'm Abilash M, an Information Science Engineering graduate (2025) with a strong passion for 
                artificial intelligence, deep learning, and blockchain technology. My journey combines rigorous 
                academic learning with practical research experience, having published papers on AI-based disease detection systems.
              </p>
              <p>
                I specialize in developing innovative solutions using cutting-edge technologies - from deep learning 
                models for medical diagnosis to blockchain-based voting systems. My expertise spans across AI/ML algorithms, 
                web technologies, and distributed systems.
              </p>
              
              <div className="about-highlights">
                <div className="highlight-item">
                  <i className="fas fa-graduation-cap"></i>
                  <span>Harvard CS50 Certified</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-certificate"></i>
                  <span>Oracle Certified</span>
                </div>
                <div className="highlight-item">
                  <i className="fab fa-google"></i>
                  <span>Google Cloud AI Badges</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-header">
                  {project.badge && (
                    <div className="project-badge">
                      <i className="fas fa-award"></i>
                      {project.badge}
                    </div>
                  )}
                  <span className="project-category">{project.category}</span>
                </div>
                
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3><i className="fas fa-code"></i> Programming Languages</h3>
              <div className="skills-list">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">Solidity</span>
                <span className="skill-tag">PHP</span>
              </div>
            </div>
            
            <div className="skill-category">
              <h3><i className="fab fa-react"></i> Frontend</h3>
              <div className="skills-list">
                <span className="skill-tag">React.js</span>
                <span className="skill-tag">HTML5</span>
                <span className="skill-tag">CSS3</span>
                <span className="skill-tag">Streamlit</span>
                <span className="skill-tag">Bootstrap</span>
              </div>
            </div>
            
            <div className="skill-category">
              <h3><i className="fas fa-server"></i> Backend</h3>
              <div className="skills-list">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express.js</span>
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">REST APIs</span>
              </div>
            </div>
            
            <div className="skill-category">
              <h3><i className="fas fa-brain"></i> AI/ML</h3>
              <div className="skills-list">
                <span className="skill-tag">TensorFlow</span>
                <span className="skill-tag">Machine Learning</span>
                <span className="skill-tag">Computer Vision</span>
                <span className="skill-tag">NLP</span>
                <span className="skill-tag">ResNet/DenseNet</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">Let's Work Together</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Ready to contribute to your team's success</h3>
              <p>
                I'm actively seeking opportunities in full-stack development, AI/ML engineering, 
                and innovative tech roles where I can contribute my skills and continue growing.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <h4>Email</h4>
                    <p>abilash.m@email.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <div>
                    <h4>Phone</h4>
                    <p>+91 (XXX) XXX-XXXX</p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <h4>Location</h4>
                    <p>Bangalore, India</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <a href="https://github.com/Ash456rt" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/abilash-m-76bb6438a" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-google"></i>
                </a>
                <a href="mailto:abilash.m@email.com" className="social-link">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-text">
              <p>&copy; 2024 Abilash M. All rights reserved. Built with React.js and modern web technologies.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;