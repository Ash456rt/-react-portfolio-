import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    // Typing animation
    const texts = ['Full-Stack Developer', 'AI Enthusiast', 'Problem Solver', 'Tech Innovator'];
    let textIndex = 0;
    let charIndex = 0;
    let currentText = '';
    let isDeleting = false;

    const typeText = () => {
      const fullText = texts[textIndex];
      
      if (isDeleting) {
        currentText = fullText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        currentText = fullText.substring(0, charIndex + 1);
        charIndex++;
      }
      
      if (typedRef.current) {
        typedRef.current.textContent = currentText;
      }
      
      let typeSpeed = isDeleting ? 50 : 100;
      
      if (!isDeleting && charIndex === fullText.length) {
        typeSpeed = 2000; // Pause before deleting
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typeSpeed = 500; // Pause before typing next word
      }
      
      setTimeout(typeText, typeSpeed);
    };

    typeText();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleResumeDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/resume/Abilash_M_Resume.pdf';
    link.download = 'Abilash_M_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-text">
            <motion.div variants={itemVariants} className="hero-greeting">
              <span className="greeting-text">Hello, I'm</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="hero-name">
              <span className="text-gradient">Abilash M</span>
            </motion.h1>
            
            <motion.div variants={itemVariants} className="hero-title">
              <h2>
                <span ref={typedRef} className="typed-text"></span>
                <span className="cursor">|</span>
              </h2>
            </motion.div>
            
            <motion.p variants={itemVariants} className="hero-description">
              Recent B.E. Graduate building scalable web applications with modern technologies. 
              Passionate about AI, blockchain, and creating innovative solutions that make a difference.
            </motion.p>
            
            <motion.div variants={itemVariants} className="hero-stats">
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
            </motion.div>
            
            <motion.div variants={itemVariants} className="hero-actions">
              <button
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                <i className="fas fa-code"></i>
                View My Projects
              </button>
              <button
                className="btn btn-secondary"
                onClick={handleResumeDownload}
              >
                <i className="fas fa-download"></i>
                Download Resume
              </button>
            </motion.div>
            
            <motion.div variants={itemVariants} className="hero-social">
              <a
                href="https://github.com/abilashm"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub Profile"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://linkedin.com/in/abilashm"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn Profile"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="mailto:abilash.m@email.com"
                className="social-link"
                aria-label="Email Contact"
              >
                <i className="fas fa-envelope"></i>
              </a>
              <a
                href="https://twitter.com/abilashm"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Twitter Profile"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </motion.div>
          </div>
          
          <motion.div
            className="hero-visual"
            variants={floatingVariants}
            animate="animate"
          >
            <div className="profile-card">
              <div className="profile-image">
                <i className="fas fa-user-circle"></i>
                <div className="status-indicator">
                  <span className="status-dot"></span>
                  <span className="status-text">Available for hire</span>
                </div>
              </div>
              <div className="tech-stack">
                <div className="tech-item">
                  <i className="fab fa-react"></i>
                  <span>React</span>
                </div>
                <div className="tech-item">
                  <i className="fab fa-node-js"></i>
                  <span>Node.js</span>
                </div>
                <div className="tech-item">
                  <i className="fab fa-python"></i>
                  <span>Python</span>
                </div>
                <div className="tech-item">
                  <i className="fas fa-brain"></i>
                  <span>AI/ML</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <button onClick={() => scrollToSection('about')} aria-label="Scroll to About section">
            <i className="fas fa-chevron-down"></i>
          </button>
        </motion.div>
      </div>
      
      {/* Background Elements */}
      <div className="hero-background">
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
        <div className="bg-shape shape-3"></div>
      </div>
    </section>
  );
};

export default Hero;