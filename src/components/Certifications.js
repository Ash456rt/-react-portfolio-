import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    {
      title: 'Oracle Certified Foundations Associate',
      issuer: 'Oracle Corporation',
      date: '2025-2027',
      type: 'Professional Certification',
      icon: 'fas fa-database',
      color: '#FF0000',
      description: 'Database fundamentals and Oracle technologies',
      verified: true,
      credentialId: 'OCA-2025-FOUND'
    },
    {
      title: 'AI 5 Days Agent Course',
      issuer: 'Kaggle',
      date: '2024',
      type: 'AI Specialization',
      icon: 'fab fa-kaggle',
      color: '#20BEFF',
      description: 'Advanced AI agent development and implementation',
      verified: true,
      credentialId: 'KAGGLE-AI-2024'
    },
    {
      title: 'Google Cloud AI Badge (3 Badges)',
      issuer: 'Google Cloud',
      date: '2024',
      type: 'Cloud AI Certification',
      icon: 'fab fa-google',
      color: '#4285F4',
      description: 'Machine Learning, AI Platform, and Cloud AI services',
      verified: true,
      credentialId: 'GCP-AI-2024'
    },
    {
      title: 'Harvard CS50',
      issuer: 'Harvard University',
      date: '2024',
      type: 'Computer Science Course',
      icon: 'fas fa-graduation-cap',
      color: '#A41E35',
      description: 'Introduction to Computer Science and Programming',
      verified: true,
      credentialId: 'CS50-2024'
    }
  ];

  const achievements = [
    {
      title: 'IEEE Publication',
      description: 'Lumpy Skin Detection using Deep Learning ResNet and DenseNet',
      icon: 'fas fa-file-alt',
      date: '2024',
      type: 'Research Publication',
      impact: 'Contributed to academic research in AI for agriculture'
    },
    {
      title: 'Book Publication',
      description: 'Published "The Chakras" - exploring spiritual and philosophical concepts',
      icon: 'fas fa-book',
      date: '2024',
      type: 'Literary Work',
      impact: 'Demonstrated writing and research skills beyond technical domain'
    },
    {
      title: 'Information Science Engineering Degree',
      description: 'Bachelor of Engineering with CGPA 9.0/10 from VTU',
      icon: 'fas fa-medal',
      date: '2025',
      type: 'Academic Achievement',
      impact: 'Strong foundation in computer science and engineering principles'
    },
    {
      title: 'Professional Internship',
      description: 'Web Development Intern at Elevate Pvt. Ltd.',
      icon: 'fas fa-briefcase',
      date: 'May-Aug 2024',
      type: 'Industry Experience',
      impact: 'Real-world application of web development skills'
    }
  ];

  const stats = [
    { number: '4+', label: 'Certifications', icon: 'fas fa-certificate' },
    { number: '1', label: 'IEEE Publication', icon: 'fas fa-newspaper' },
    { number: '9.0', label: 'CGPA', icon: 'fas fa-star' },
    { number: '5+', label: 'Major Projects', icon: 'fas fa-project-diagram' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="certifications" className="section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 variants={cardVariants} className="section-title">
            Certifications & Achievements
          </motion.h2>
          
          <motion.p variants={cardVariants} className="section-subtitle">
            Professional certifications, academic achievements, and research contributions
          </motion.p>
          
          {/* Stats Overview */}
          <motion.div variants={cardVariants} className="cert-stats">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-card"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="stat-icon">
                  <i className={stat.icon}></i>
                </div>
                <div className="stat-content">
                  <h3>{stat.number}</h3>
                  <p>{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Certifications Grid */}
          <motion.div variants={cardVariants} className="certifications-section">
            <h3>Professional Certifications</h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  className="certification-card"
                  variants={cardVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="cert-header">
                    <div 
                      className="cert-icon"
                      style={{ backgroundColor: cert.color }}
                    >
                      <i className={cert.icon}></i>
                    </div>
                    {cert.verified && (
                      <div className="verified-badge">
                        <i className="fas fa-check-circle"></i>
                        <span>Verified</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="cert-content">
                    <h4>{cert.title}</h4>
                    <p className="cert-issuer">{cert.issuer}</p>
                    <p className="cert-description">{cert.description}</p>
                    
                    <div className="cert-meta">
                      <span className="cert-type">{cert.type}</span>
                      <span className="cert-date">{cert.date}</span>
                    </div>
                    
                    <div className="cert-credential">
                      <i className="fas fa-id-card"></i>
                      <span>Credential ID: {cert.credentialId}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Achievements Section */}
          <motion.div variants={cardVariants} className="achievements-section">
            <h3>Key Achievements</h3>
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  className="achievement-card"
                  variants={cardVariants}
                  whileHover={{ x: 5 }}
                >
                  <div className="achievement-icon">
                    <i className={achievement.icon}></i>
                  </div>
                  
                  <div className="achievement-content">
                    <div className="achievement-header">
                      <h4>{achievement.title}</h4>
                      <span className="achievement-date">{achievement.date}</span>
                    </div>
                    
                    <p className="achievement-description">
                      {achievement.description}
                    </p>
                    
                    <div className="achievement-meta">
                      <span className="achievement-type">
                        <i className="fas fa-tag"></i>
                        {achievement.type}
                      </span>
                    </div>
                    
                    <p className="achievement-impact">
                      <strong>Impact:</strong> {achievement.impact}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Call to Action */}
          <motion.div variants={cardVariants} className="cert-cta">
            <div className="cta-content">
              <h3>Ready to make an impact?</h3>
              <p>
                With proven academic excellence, industry certifications, and published research, 
                I'm ready to contribute to your team's success.
              </p>
              <div className="cta-buttons">
                <motion.button
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                >
                  <i className="fas fa-handshake"></i>
                  Let's Connect
                </motion.button>
                <motion.a
                  href="/resume/Abilash_M_Resume.pdf"
                  download="Abilash_M_Resume.pdf"
                  className="btn btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-download"></i>
                  Download Resume
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;