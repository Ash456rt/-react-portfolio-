import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'AI Bookmark Agent',
      category: 'ai',
      timeline: '2024',
      description: 'Intelligent bookmark management system with NLP-powered categorization and Chrome extension integration.',
      longDescription: 'Built a comprehensive AI-powered bookmark management solution featuring a Streamlit dashboard for analytics, Chrome extension for seamless bookmark collection, and advanced NLP algorithms for automatic categorization. The system intelligently organizes bookmarks based on content analysis and user behavior patterns.',
      achievements: [
        'Developed Chrome extension with 95% user satisfaction rate',
        'Implemented NLP categorization with 90% accuracy',
        'Created intuitive Streamlit dashboard with real-time analytics'
      ],
      technologies: ['Python', 'Streamlit', 'Chrome Extension', 'NLP', 'Machine Learning', 'JavaScript'],
      github: 'https://github.com/abilashm/ai-bookmark-agent',
      demo: 'https://ai-bookmark-demo.streamlit.app',
      image: '/projects/ai-bookmark.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Lumpy Skin Detection System',
      category: 'ai',
      timeline: '2024',
      description: 'IEEE-published research on AI-powered livestock disease detection using deep learning models.',
      longDescription: 'Developed an advanced computer vision system for detecting Lumpy Skin Disease in cattle using React.js frontend, Node.js backend, and sophisticated machine learning models. This research has been published in IEEE conferences and demonstrates real-world application of AI in agriculture.',
      achievements: [
        'Published in IEEE conference proceedings',
        'Achieved 94% detection accuracy with ResNet architecture',
        'Deployed full-stack web application for veterinary use'
      ],
      technologies: ['React.js', 'Node.js', 'Python', 'TensorFlow', 'Computer Vision', 'ResNet', 'DenseNet'],
      github: 'https://github.com/abilashm/lumpy-skin-detection',
      demo: 'https://lumpy-skin-detection.vercel.app',
      image: '/projects/lumpy-skin.jpg',
      featured: true,
      badge: 'IEEE Published'
    },
    {
      id: 3,
      title: 'Blockchain E-Voting System',
      category: 'blockchain',
      timeline: '2024',
      description: 'Secure and transparent electronic voting platform built on Ethereum blockchain.',
      longDescription: 'Engineered a complete blockchain-based voting solution using Solidity smart contracts, Ethereum network, and modern web technologies. The system ensures transparency, immutability, and security in electoral processes with features like voter authentication, real-time results, and audit trails.',
      achievements: [
        'Deployed smart contracts on Ethereum testnet',
        'Implemented secure voter authentication system',
        'Achieved 99.9% transaction success rate'
      ],
      technologies: ['Solidity', 'Ethereum', 'Truffle', 'Ganache', 'Web3.js', 'React.js', 'MetaMask'],
      github: 'https://github.com/abilashm/blockchain-evoting',
      demo: 'https://blockchain-voting-demo.vercel.app',
      image: '/projects/blockchain-voting.jpg',
      featured: true
    },
    {
      id: 4,
      title: 'Web Scraping Automation',
      category: 'automation',
      timeline: '2023',
      description: 'Intelligent data extraction system with advanced scraping capabilities and anti-detection mechanisms.',
      longDescription: 'Built a robust web scraping framework using Python, Selenium, and Beautiful Soup for automated data extraction. The system includes rotating proxies, CAPTCHA solving, and intelligent rate limiting to bypass anti-bot measures while maintaining ethical scraping practices.',
      achievements: [
        'Successfully scraped 100K+ data points daily',
        'Implemented 15+ anti-detection techniques',
        'Reduced manual data entry time by 85%'
      ],
      technologies: ['Python', 'Selenium', 'Beautiful Soup', 'Scrapy', 'Pandas', 'APIs', 'MongoDB'],
      github: 'https://github.com/abilashm/web-scraping-automation',
      demo: null,
      image: '/projects/web-scraping.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'Agriculture Management System',
      category: 'web',
      timeline: '2023',
      description: 'Comprehensive farm management platform for crop monitoring, resource planning, and yield optimization.',
      longDescription: 'Developed a full-featured agriculture management system using PHP and MySQL, deployed on XAMPP. The platform helps farmers track crop cycles, manage resources, monitor weather conditions, and optimize yields through data-driven insights.',
      achievements: [
        'Increased crop yield predictions by 30%',
        'Streamlined farm operations for 50+ users',
        'Integrated real-time weather and soil data'
      ],
      technologies: ['PHP', 'MySQL', 'XAMPP', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      github: 'https://github.com/abilashm/agriculture-management',
      demo: 'https://agri-management-demo.000webhostapp.com',
      image: '/projects/agriculture.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'Portfolio Website',
      category: 'web',
      timeline: '2024',
      description: 'Modern, responsive portfolio website built with React.js and advanced animations.',
      longDescription: 'Created this very portfolio website using React.js, Framer Motion, and modern web technologies. Features dark/light mode, responsive design, smooth animations, SEO optimization, and performance optimization techniques.',
      achievements: [
        'Achieved 98+ Google PageSpeed score',
        'Implemented accessibility best practices',
        'Deployed with CI/CD pipeline on Vercel'
      ],
      technologies: ['React.js', 'Framer Motion', 'CSS Grid', 'Responsive Design', 'SEO', 'Vercel'],
      github: 'https://github.com/abilashm/portfolio-react',
      demo: 'https://abilashm.vercel.app',
      image: '/projects/portfolio.jpg',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'blockchain', label: 'Blockchain' },
    { id: 'web', label: 'Web Development' },
    { id: 'automation', label: 'Automation' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 variants={cardVariants} className="section-title">
            Featured Projects
          </motion.h2>
          
          <motion.p variants={cardVariants} className="section-subtitle">
            A showcase of my technical expertise across AI/ML, blockchain, and full-stack development
          </motion.p>
          
          {/* Filter Buttons */}
          <motion.div variants={cardVariants} className="project-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${filter === category.id ? 'active' : ''}`}
                onClick={() => setFilter(category.id)}
              >
                {category.label}
              </button>
            ))}
          </motion.div>
          
          {/* Projects Grid */}
          <motion.div variants={containerVariants} className="projects-grid">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  layout
                  className={`project-card ${project.featured ? 'featured' : ''}`}
                  whileHover={{ y: -10 }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="project-image">
                    <div className="project-image-placeholder">
                      <i className={`fas ${
                        project.category === 'ai' ? 'fa-brain' :
                        project.category === 'blockchain' ? 'fa-link' :
                        project.category === 'automation' ? 'fa-robot' : 'fa-code'
                      }`}></i>
                    </div>
                    {project.badge && (
                      <div className="project-badge">
                        <i className="fas fa-award"></i>
                        {project.badge}
                      </div>
                    )}
                    <div className="project-overlay">
                      <div className="project-links">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <i className="fab fa-github"></i>
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <i className="fas fa-external-link-alt"></i>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="project-content">
                    <div className="project-header">
                      <h3>{project.title}</h3>
                      <span className="project-timeline">{project.timeline}</span>
                    </div>
                    
                    <p className="project-description">
                      {project.description}
                    </p>
                    
                    <div className="project-technologies">
                      {project.technologies.slice(0, 4).map((tech, index) => (
                        <span key={index} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="tech-tag more">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                    
                    <button className="project-cta">
                      <span>View Details</span>
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="project-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedProject(null)}
              >
                <i className="fas fa-times"></i>
              </button>
              
              <div className="modal-content">
                <div className="modal-header">
                  <h2>{selectedProject.title}</h2>
                  {selectedProject.badge && (
                    <span className="modal-badge">
                      <i className="fas fa-award"></i>
                      {selectedProject.badge}
                    </span>
                  )}
                </div>
                
                <p className="modal-description">
                  {selectedProject.longDescription}
                </p>
                
                <div className="modal-achievements">
                  <h3>Key Achievements</h3>
                  <ul>
                    {selectedProject.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="modal-technologies">
                  <h3>Technologies Used</h3>
                  <div className="tech-list">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="modal-actions">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      <i className="fab fa-github"></i>
                      View Code
                    </a>
                  )}
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <i className="fas fa-external-link-alt"></i>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;