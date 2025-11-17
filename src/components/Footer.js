import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];
  
  const socialLinks = [
    {
      name: 'GitHub',
      icon: 'fab fa-github',
      url: 'https://github.com/abilashm',
      description: 'View my code repositories'
    },
    {
      name: 'LinkedIn',
      icon: 'fab fa-linkedin',
      url: 'https://linkedin.com/in/abilashm',
      description: 'Connect professionally'
    },
    {
      name: 'Twitter',
      icon: 'fab fa-twitter',
      url: 'https://twitter.com/abilashm',
      description: 'Follow for tech updates'
    },
    {
      name: 'Email',
      icon: 'fas fa-envelope',
      url: 'mailto:abilash.m@email.com',
      description: 'Send a direct message'
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.1 }}
        >
          <motion.div variants={itemVariants} className="footer-section footer-about">
            <div className="footer-logo">
              <h3 className="text-gradient">Abilash M</h3>
              <p className="footer-tagline">Full-Stack Developer & AI Enthusiast</p>
            </div>
            <p className="footer-description">
              Passionate Information Science Engineering graduate building innovative 
              solutions with modern technologies. Ready to contribute to your team's success.
            </p>
            <div className="footer-stats">
              <div className="footer-stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="footer-stat">
                <span className="stat-number">1</span>
                <span className="stat-label">IEEE Publication</span>
              </div>
              <div className="footer-stat">
                <span className="stat-number">3+</span>
                <span className="stat-label">Certifications</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="footer-section footer-links">
            <h4>Quick Links</h4>
            <ul className="footer-nav">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="footer-link"
                  >
                    <i className="fas fa-chevron-right"></i>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
            <div className="footer-resume">
              <motion.a
                href="/resume/Abilash_M_Resume.pdf"
                download="Abilash_M_Resume.pdf"
                className="btn btn-outline btn-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-download"></i>
                Download Resume
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="footer-section footer-contact">
            <h4>Get In Touch</h4>
            <div className="footer-contact-info">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <a href="mailto:abilash.m@email.com">abilash.m@email.com</a>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <a href="tel:+91XXXXXXXXXX">+91 (XXX) XXX-XXXX</a>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Bangalore, India</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-clock"></i>
                <span>Available for opportunities</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="footer-section footer-social">
            <h4>Connect With Me</h4>
            <div className="footer-social-links">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  title={social.description}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className={social.icon}></i>
                  <span>{social.name}</span>
                </motion.a>
              ))}
            </div>
            
            <div className="footer-newsletter">
              <h5>Stay Updated</h5>
              <p>Get notified about my latest projects and achievements</p>
              <div className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
                <motion.button
                  className="btn btn-primary btn-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-bell"></i>
                  Notify Me
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="footer-bottom"
        >
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              <p>
                &copy; {currentYear} <strong>Abilash M</strong>. All rights reserved.
              </p>
              <p className="footer-built">
                Built with <i className="fas fa-heart text-red-500"></i> using React.js, 
                Framer Motion, and modern web technologies.
              </p>
            </div>
            
            <div className="footer-tech-stack">
              <span className="tech-stack-label">Built with:</span>
              <div className="tech-icons">
                <i className="fab fa-react" title="React.js"></i>
                <i className="fab fa-js-square" title="JavaScript"></i>
                <i className="fab fa-css3-alt" title="CSS3"></i>
                <i className="fab fa-html5" title="HTML5"></i>
              </div>
            </div>
            
            <div className="footer-actions">
              <motion.button
                className="scroll-to-top-footer"
                onClick={() => scrollToSection('#home')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Back to top"
              >
                <i className="fas fa-arrow-up"></i>
              </motion.button>
            </div>
          </div>
          
          <div className="footer-legal">
            <div className="legal-links">
              <button className="legal-link">Privacy Policy</button>
              <button className="legal-link">Terms of Service</button>
              <button className="legal-link">Sitemap</button>
            </div>
            
            <div className="footer-status">
              <div className="status-indicator">
                <span className="status-dot online"></span>
                <span>Open to opportunities</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;