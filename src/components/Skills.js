import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: 'fas fa-code',
      skills: [
        { name: 'Python', level: 90, icon: 'fab fa-python' },
        { name: 'JavaScript', level: 85, icon: 'fab fa-js-square' },
        { name: 'Java', level: 80, icon: 'fab fa-java' },
        { name: 'Solidity', level: 75, icon: 'fas fa-link' },
        { name: 'PHP', level: 70, icon: 'fab fa-php' },
        { name: 'C/C++', level: 75, icon: 'fas fa-code' }
      ]
    },
    {
      title: 'Frontend Development',
      icon: 'fas fa-paint-brush',
      skills: [
        { name: 'React.js', level: 90, icon: 'fab fa-react' },
        { name: 'HTML5', level: 95, icon: 'fab fa-html5' },
        { name: 'CSS3', level: 90, icon: 'fab fa-css3-alt' },
        { name: 'Streamlit', level: 85, icon: 'fas fa-chart-line' },
        { name: 'Bootstrap', level: 80, icon: 'fab fa-bootstrap' },
        { name: 'Responsive Design', level: 90, icon: 'fas fa-mobile-alt' }
      ]
    },
    {
      title: 'Backend & Databases',
      icon: 'fas fa-server',
      skills: [
        { name: 'Node.js', level: 80, icon: 'fab fa-node-js' },
        { name: 'MySQL', level: 85, icon: 'fas fa-database' },
        { name: 'MongoDB', level: 75, icon: 'fas fa-leaf' },
        { name: 'REST APIs', level: 85, icon: 'fas fa-exchange-alt' },
        { name: 'Express.js', level: 80, icon: 'fas fa-server' },
        { name: 'XAMPP', level: 75, icon: 'fas fa-cogs' }
      ]
    },
    {
      title: 'AI/ML & Data Science',
      icon: 'fas fa-brain',
      skills: [
        { name: 'Machine Learning', level: 85, icon: 'fas fa-robot' },
        { name: 'TensorFlow', level: 80, icon: 'fas fa-brain' },
        { name: 'Computer Vision', level: 85, icon: 'fas fa-eye' },
        { name: 'NLP', level: 80, icon: 'fas fa-comment-dots' },
        { name: 'Data Analysis', level: 85, icon: 'fas fa-chart-bar' },
        { name: 'ResNet/DenseNet', level: 90, icon: 'fas fa-network-wired' }
      ]
    },
    {
      title: 'Blockchain & Tools',
      icon: 'fas fa-cubes',
      skills: [
        { name: 'Ethereum', level: 80, icon: 'fab fa-ethereum' },
        { name: 'Truffle/Ganache', level: 75, icon: 'fas fa-cubes' },
        { name: 'Web3.js', level: 80, icon: 'fas fa-link' },
        { name: 'Smart Contracts', level: 85, icon: 'fas fa-file-contract' },
        { name: 'MetaMask', level: 75, icon: 'fas fa-wallet' },
        { name: 'Git/GitHub', level: 90, icon: 'fab fa-git-alt' }
      ]
    },
    {
      title: 'Development Tools',
      icon: 'fas fa-tools',
      skills: [
        { name: 'VS Code', level: 95, icon: 'fas fa-code' },
        { name: 'AWS/Cloud', level: 70, icon: 'fab fa-aws' },
        { name: 'Vercel/Netlify', level: 85, icon: 'fas fa-cloud' },
        { name: 'Docker', level: 65, icon: 'fab fa-docker' },
        { name: 'Selenium', level: 80, icon: 'fas fa-spider' },
        { name: 'Agile/Scrum', level: 75, icon: 'fas fa-sync' }
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
    <section id="skills" className="section section-alt">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 variants={cardVariants} className="section-title">
            Technical Skills
          </motion.h2>
          
          <motion.p variants={cardVariants} className="section-subtitle">
            A comprehensive overview of my technical expertise across multiple domains
          </motion.p>
          
          <div className="skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={cardVariants}
                className="skill-category"
                whileHover={{ y: -5 }}
              >
                <div className="category-header">
                  <div className="category-icon">
                    <i className={category.icon}></i>
                  </div>
                  <h3>{category.title}</h3>
                </div>
                
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="skill-item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                    >
                      <div className="skill-info">
                        <div className="skill-name">
                          <i className={skill.icon}></i>
                          <span>{skill.name}</span>
                        </div>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;