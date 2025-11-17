import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  const skills = [
    { name: 'Problem Solving', level: 95 },
    { name: 'Full-Stack Development', level: 88 },
    { name: 'AI/ML Implementation', level: 85 },
    { name: 'Research & Analysis', level: 90 },
    { name: 'Team Collaboration', level: 92 }
  ];

  const highlights = [
    {
      icon: 'fas fa-graduation-cap',
      title: 'Harvard CS50',
      description: 'Completed Harvard\'s renowned Computer Science course'
    },
    {
      icon: 'fas fa-certificate',
      title: 'Oracle Certified',
      description: 'Oracle Certified Foundations Associate (2025-2027)'
    },
    {
      icon: 'fab fa-google',
      title: 'Google Cloud AI',
      description: 'Earned 3 Google Cloud AI badges'
    },
    {
      icon: 'fas fa-file-alt',
      title: 'IEEE Publication',
      description: 'Published research on Lumpy Skin Detection'
    },
    {
      icon: 'fas fa-book',
      title: 'Author',
      description: 'Published "The Chakras" book'
    },
    {
      icon: 'fas fa-briefcase',
      title: 'Industry Experience',
      description: 'Web Development Intern at Elevate Pvt. Ltd.'
    }
  ];

  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            About Me
          </motion.h2>
          
          <div className="about-content">
            <motion.div variants={itemVariants} className="about-text">
              <div className="about-intro">
                <h3>Hello! I'm Abilash M 👋</h3>
                <p className="intro-subtitle">
                  Information Science Engineer • AI Research Enthusiast • Full-Stack Developer
                </p>
              </div>
              
              <div className="about-story">
                <p>
                  I'm a passionate <strong>Information Science Engineering graduate (2025)</strong> with 
                  an unwavering enthusiasm for artificial intelligence, blockchain technology, and 
                  full-stack web development. My journey began with curiosity about how technology 
                  can solve real-world problems, leading me to explore everything from AI-powered 
                  disease detection to secure blockchain voting systems.
                </p>
                
                <p>
                  What sets me apart is my unique blend of <strong>academic excellence</strong> and 
                  <strong>practical research experience</strong>. I'm not just a fresh graduate – 
                  I'm a published IEEE researcher who has contributed to the academic community with 
                  innovative AI solutions. My work on "Lumpy Skin Detection using Deep Learning" 
                  showcases my ability to bridge theoretical knowledge with practical applications.
                </p>
                
                <p>
                  I believe in <strong>continuous learning</strong> and staying at the forefront of 
                  technology. From completing <strong>Harvard's CS50</strong> to earning 
                  <strong>Oracle Certification</strong> and <strong>Google Cloud AI badges</strong>, 
                  I'm committed to expanding my expertise and contributing to meaningful projects 
                  that make a difference.
                </p>
              </div>
              
              <div className="about-values">
                <h4><i className="fas fa-lightbulb"></i> My Approach</h4>
                <ul>
                  <li><strong>Innovation-Driven:</strong> I love exploring cutting-edge technologies and finding creative solutions</li>
                  <li><strong>Research-Oriented:</strong> Every project is an opportunity to learn and contribute to the field</li>
                  <li><strong>Collaboration-Focused:</strong> I believe the best solutions come from diverse perspectives working together</li>
                  <li><strong>Quality-Minded:</strong> I'm committed to writing clean, maintainable, and efficient code</li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="about-sidebar">
              <div className="profile-image-section">
                <div className="profile-image-container">
                  <div className="profile-image-placeholder">
                    <i className="fas fa-user-graduate"></i>
                  </div>
                  <div className="profile-badge">
                    <i className="fas fa-star"></i>
                    <span>Available for Hire</span>
                  </div>
                </div>
              </div>
              
              <div className="skills-preview">
                <h4>Core Strengths</h4>
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="skill-item"
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <motion.div variants={itemVariants} className="about-highlights">
            <h3>Key Achievements & Certifications</h3>
            <div className="highlights-grid">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  variants={itemVariants}
                  className="highlight-card"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="highlight-icon">
                    <i className={highlight.icon}></i>
                  </div>
                  <div className="highlight-content">
                    <h4>{highlight.title}</h4>
                    <p>{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="about-cta">
            <div className="cta-content">
              <h3>Ready to build something amazing together?</h3>
              <p>
                I'm actively seeking opportunities in full-stack development, AI/ML engineering, 
                and innovative tech roles where I can contribute my skills and continue growing.
              </p>
              <div className="cta-actions">
                <motion.button
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                >
                  <i className="fas fa-envelope"></i>
                  Get In Touch
                </motion.button>
                <motion.button
                  className="btn btn-outline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                >
                  <i className="fas fa-code"></i>
                  View My Work
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;