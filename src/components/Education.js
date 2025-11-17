import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: 'Bachelor of Engineering',
      major: 'Information Science Engineering',
      institution: 'Visvesvaraya Technological University (VTU)',
      duration: '2021 - 2025',
      cgpa: '9.0/10',
      status: 'Final Year',
      location: 'Karnataka, India',
      description: 'Comprehensive program covering computer science fundamentals, software engineering, data structures, algorithms, and emerging technologies like AI/ML and blockchain.',
      coursework: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming',
        'Database Management Systems',
        'Software Engineering',
        'Computer Networks',
        'Machine Learning',
        'Artificial Intelligence',
        'Web Technologies',
        'Blockchain Technology',
        'Cloud Computing'
      ],
      projects: [
        'Lumpy Skin Detection using Deep Learning (Final Year Project)',
        'Blockchain-based E-Voting System',
        'Agriculture Management System',
        'Web Scraping Automation Tool'
      ],
      achievements: [
        'Consistent academic performance with 9.0 CGPA',
        'Published IEEE research paper',
        'Active participant in technical symposiums',
        'Led multiple group projects successfully'
      ],
      icon: 'fas fa-graduation-cap',
      color: '#4f46e5'
    },
    {
      degree: 'Harvard CS50',
      major: 'Introduction to Computer Science',
      institution: 'Harvard University (Online)',
      duration: '2024',
      cgpa: 'Completed',
      status: 'Certified',
      location: 'Online',
      description: 'Harvard\'s renowned introduction to computer science and programming, covering fundamental concepts of computer science and programming.',
      coursework: [
        'C Programming',
        'Python Programming',
        'Web Development (HTML, CSS, JavaScript)',
        'SQL and Database Design',
        'Algorithms and Data Structures',
        'Memory Management',
        'Cryptography',
        'Software Engineering Principles'
      ],
      projects: [
        'Finance Web Application',
        'DNA Sequence Analysis Tool',
        'Spell Checker Implementation',
        'Web-based Trading Platform'
      ],
      achievements: [
        'Successfully completed all problem sets',
        'Developed final project web application',
        'Gained strong foundation in CS principles',
        'Certificate of completion from Harvard'
      ],
      icon: 'fas fa-university',
      color: '#dc2626'
    }
  ];

  const skills = [
    {
      category: 'Core Computer Science',
      items: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming',
        'Software Design Patterns',
        'Database Systems',
        'Computer Networks',
        'Operating Systems'
      ]
    },
    {
      category: 'Specialized Knowledge',
      items: [
        'Machine Learning & AI',
        'Deep Learning (ResNet, DenseNet)',
        'Blockchain Technology',
        'Computer Vision',
        'Natural Language Processing',
        'Cloud Computing'
      ]
    },
    {
      category: 'Research & Development',
      items: [
        'Academic Research Methods',
        'Technical Writing',
        'Data Analysis',
        'Experimental Design',
        'Literature Review',
        'Peer Review Process'
      ]
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
    <section id="education" className="section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 variants={cardVariants} className="section-title">
            Education & Learning
          </motion.h2>
          
          <motion.p variants={cardVariants} className="section-subtitle">
            Academic background, specialized courses, and continuous learning journey
          </motion.p>
          
          {/* Education Cards */}
          <div className="education-grid">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="education-card"
                whileHover={{ y: -5 }}
              >
                <div className="edu-header">
                  <div className="edu-icon" style={{ backgroundColor: edu.color }}>
                    <i className={edu.icon}></i>
                  </div>
                  <div className="edu-status">
                    <span className={`status-badge ${edu.status.toLowerCase().replace(' ', '-')}`}>
                      {edu.status}
                    </span>
                  </div>
                </div>
                
                <div className="edu-content">
                  <h3>{edu.degree}</h3>
                  <h4>{edu.major}</h4>
                  <p className="edu-institution">{edu.institution}</p>
                  
                  <div className="edu-meta">
                    <span className="edu-duration">
                      <i className="fas fa-calendar"></i>
                      {edu.duration}
                    </span>
                    <span className="edu-location">
                      <i className="fas fa-map-marker-alt"></i>
                      {edu.location}
                    </span>
                    {edu.cgpa !== 'Completed' && (
                      <span className="edu-grade">
                        <i className="fas fa-star"></i>
                        CGPA: {edu.cgpa}
                      </span>
                    )}
                  </div>
                  
                  <p className="edu-description">{edu.description}</p>
                  
                  <div className="edu-section">
                    <h5><i className="fas fa-book"></i> Key Coursework</h5>
                    <div className="coursework-grid">
                      {edu.coursework.map((course, i) => (
                        <span key={i} className="course-tag">{course}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="edu-section">
                    <h5><i className="fas fa-project-diagram"></i> Notable Projects</h5>
                    <ul className="project-list">
                      {edu.projects.map((project, i) => (
                        <li key={i}>{project}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="edu-section">
                    <h5><i className="fas fa-trophy"></i> Key Achievements</h5>
                    <ul className="achievement-list">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Skills Acquired */}
          <motion.div variants={cardVariants} className="skills-acquired">
            <h3>Knowledge & Skills Acquired</h3>
            <div className="skills-categories">
              {skills.map((skillCategory, index) => (
                <motion.div
                  key={index}
                  className="skill-category-card"
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <h4>{skillCategory.category}</h4>
                  <div className="skill-items">
                    {skillCategory.items.map((skill, i) => (
                      <motion.span
                        key={i}
                        className="skill-item"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Learning Philosophy */}
          <motion.div variants={cardVariants} className="learning-philosophy">
            <div className="philosophy-content">
              <h3>My Learning Philosophy</h3>
              <div className="philosophy-grid">
                <div className="philosophy-item">
                  <i className="fas fa-brain"></i>
                  <h4>Continuous Curiosity</h4>
                  <p>I believe in lifelong learning and staying curious about emerging technologies and methodologies.</p>
                </div>
                <div className="philosophy-item">
                  <i className="fas fa-hands-helping"></i>
                  <h4>Practical Application</h4>
                  <p>Every concept learned is best understood through hands-on implementation and real-world projects.</p>
                </div>
                <div className="philosophy-item">
                  <i className="fas fa-users"></i>
                  <h4>Collaborative Learning</h4>
                  <p>Learning from peers, mentors, and the community accelerates growth and understanding.</p>
                </div>
                <div className="philosophy-item">
                  <i className="fas fa-search"></i>
                  <h4>Research-Oriented</h4>
                  <p>Combining academic rigor with practical innovation to contribute meaningfully to the field.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;