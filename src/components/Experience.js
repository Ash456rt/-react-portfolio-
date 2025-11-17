import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experience = [
    {
      title: 'Web Development Intern',
      company: 'Elevate Pvt. Ltd.',
      location: 'Bangalore, India',
      duration: 'May 2024 - August 2024',
      type: 'Internship',
      description: 'Gained hands-on experience in full-stack web development, working on real-world projects and contributing to the company\'s digital initiatives.',
      responsibilities: [
        'Developed and maintained responsive web applications using modern frameworks',
        'Integrated REST APIs for seamless data exchange between frontend and backend',
        'Optimized application performance, achieving 30% faster load times',
        'Collaborated with cross-functional teams using Agile methodology',
        'Implemented responsive design principles for mobile-first development',
        'Participated in code reviews and followed industry best practices'
      ],
      achievements: [
        'Successfully delivered 3 client projects within deadline',
        'Reduced API response time by 40% through optimization',
        'Mentored 2 junior developers in React.js fundamentals'
      ],
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'HTML5', 'CSS3', 'JavaScript', 'Git'],
      companyLogo: 'fas fa-building',
      skills: ['Full-Stack Development', 'API Integration', 'Performance Optimization', 'Team Collaboration']
    }
  ];

  const timeline = [
    {
      date: '2021-2025',
      title: 'Bachelor of Engineering',
      subtitle: 'Information Science Engineering',
      description: 'Pursuing B.E. with focus on AI, Machine Learning, and Software Development',
      icon: 'fas fa-graduation-cap',
      type: 'education'
    },
    {
      date: '2024',
      title: 'Research Publication',
      subtitle: 'IEEE Conference',
      description: 'Published paper on "Lumpy Skin Detection using Deep Learning"',
      icon: 'fas fa-file-alt',
      type: 'achievement'
    },
    {
      date: 'May-Aug 2024',
      title: 'Web Development Intern',
      subtitle: 'Elevate Pvt. Ltd.',
      description: 'Full-stack development with focus on performance optimization',
      icon: 'fas fa-briefcase',
      type: 'experience'
    },
    {
      date: '2024',
      title: 'Multiple Certifications',
      subtitle: 'Oracle, Kaggle, Google Cloud',
      description: 'Earned industry-recognized certifications in databases and AI',
      icon: 'fas fa-certificate',
      type: 'achievement'
    },
    {
      date: '2024',
      title: 'Harvard CS50',
      subtitle: 'Computer Science Course',
      description: 'Completed Harvard\'s renowned introduction to computer science',
      icon: 'fas fa-university',
      type: 'education'
    }
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
    <section id="experience" className="section section-alt">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 variants={cardVariants} className="section-title">
            Experience & Journey
          </motion.h2>
          
          <motion.p variants={cardVariants} className="section-subtitle">
            Professional experience, academic achievements, and career milestones
          </motion.p>
          
          {/* Main Experience Section */}
          <motion.div variants={cardVariants} className="experience-main">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                className="experience-card"
                whileHover={{ y: -5 }}
              >
                <div className="exp-header">
                  <div className="exp-company">
                    <div className="company-logo">
                      <i className={exp.companyLogo}></i>
                    </div>
                    <div className="company-info">
                      <h3>{exp.title}</h3>
                      <h4>{exp.company}</h4>
                      <div className="exp-meta">
                        <span className="exp-duration">
                          <i className="fas fa-calendar"></i>
                          {exp.duration}
                        </span>
                        <span className="exp-location">
                          <i className="fas fa-map-marker-alt"></i>
                          {exp.location}
                        </span>
                        <span className="exp-type">
                          <i className="fas fa-tag"></i>
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="exp-content">
                  <p className="exp-description">{exp.description}</p>
                  
                  <div className="exp-section">
                    <h5><i className="fas fa-tasks"></i> Key Responsibilities</h5>
                    <ul className="exp-list">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="exp-section">
                    <h5><i className="fas fa-trophy"></i> Key Achievements</h5>
                    <ul className="exp-achievements">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="exp-section">
                    <h5><i className="fas fa-cogs"></i> Technologies Used</h5>
                    <div className="exp-technologies">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="exp-section">
                    <h5><i className="fas fa-lightbulb"></i> Skills Developed</h5>
                    <div className="exp-skills">
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="skill-badge">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Timeline Section */}
          <motion.div variants={cardVariants} className="timeline-section">
            <h3>Career Timeline</h3>
            <div className="timeline">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className={`timeline-item ${item.type}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <div className="timeline-icon">
                        <i className={item.icon}></i>
                      </div>
                      <div className="timeline-date">{item.date}</div>
                    </div>
                    
                    <div className="timeline-body">
                      <h4>{item.title}</h4>
                      <h5>{item.subtitle}</h5>
                      <p>{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="timeline-line"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Skills Summary */}
          <motion.div variants={cardVariants} className="exp-summary">
            <div className="summary-content">
              <h3>What I Bring to Your Team</h3>
              <div className="summary-grid">
                <div className="summary-item">
                  <i className="fas fa-code"></i>
                  <h4>Technical Excellence</h4>
                  <p>Strong foundation in full-stack development with hands-on experience in modern technologies and frameworks.</p>
                </div>
                <div className="summary-item">
                  <i className="fas fa-lightbulb"></i>
                  <h4>Problem-Solving</h4>
                  <p>Proven ability to identify bottlenecks and implement solutions that improve performance and user experience.</p>
                </div>
                <div className="summary-item">
                  <i className="fas fa-users"></i>
                  <h4>Team Collaboration</h4>
                  <p>Experience working in Agile environments with cross-functional teams and mentoring junior developers.</p>
                </div>
                <div className="summary-item">
                  <i className="fas fa-graduation-cap"></i>
                  <h4>Continuous Learning</h4>
                  <p>Committed to staying updated with latest technologies and industry best practices through continuous education.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;