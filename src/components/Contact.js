import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const { name, email, subject, message } = formData;
    
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setSubmitStatus('Please fill in all fields.');
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubmitStatus('Please enter a valid email address.');
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus('');
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'abilash.m@email.com',
      link: 'mailto:abilash.m@email.com',
      description: 'Send me an email anytime'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      value: '+91 (XXX) XXX-XXXX',
      link: 'tel:+91XXXXXXXXXX',
      description: 'Call for immediate response'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      value: 'Bangalore, India',
      link: null,
      description: 'Available for remote work'
    },
    {
      icon: 'fas fa-clock',
      title: 'Response Time',
      value: '24 hours',
      link: null,
      description: 'Average response time'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: 'fab fa-github',
      url: 'https://github.com/abilashm',
      color: '#333'
    },
    {
      name: 'LinkedIn',
      icon: 'fab fa-linkedin',
      url: 'https://linkedin.com/in/abilashm',
      color: '#0077b5'
    },
    {
      name: 'Twitter',
      icon: 'fab fa-twitter',
      url: 'https://twitter.com/abilashm',
      color: '#1da1f2'
    },
    {
      name: 'Email',
      icon: 'fas fa-envelope',
      url: 'mailto:abilash.m@email.com',
      color: '#ea4335'
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
    <section id="contact" className="section section-alt">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 variants={cardVariants} className="section-title">
            Let's Work Together
          </motion.h2>
          
          <motion.p variants={cardVariants} className="section-subtitle">
            Ready to contribute to your team's success. Let's discuss how I can help bring your projects to life.
          </motion.p>
          
          <div className="contact-content">
            {/* Contact Form */}
            <motion.div variants={cardVariants} className="contact-form-section">
              <div className="form-header">
                <h3>Send a Message</h3>
                <p>I'd love to hear about your project or opportunity</p>
              </div>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder=" "
                    />
                    <label>Your Name</label>
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder=" "
                    />
                    <label>Your Email</label>
                  </div>
                </div>
                
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder=" "
                  />
                  <label>Subject</label>
                </div>
                
                <div className="form-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder=" "
                  ></textarea>
                  <label>Your Message</label>
                </div>
                
                <motion.button
                  type="submit"
                  className="btn btn-primary submit-btn"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i>
                      Send Message
                    </>
                  )}
                </motion.button>
                
                {submitStatus && (
                  <motion.div
                    className={`form-status ${submitStatus.includes('success') ? 'success' : 'error'}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {submitStatus}
                  </motion.div>
                )}
              </form>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div variants={cardVariants} className="contact-info-section">
              <div className="contact-header">
                <h3>Get In Touch</h3>
                <p>Let's discuss your next project or opportunity</p>
              </div>
              
              <div className="contact-info-grid">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="contact-info-card"
                    whileHover={{ y: -5 }}
                  >
                    <div className="info-icon">
                      <i className={info.icon}></i>
                    </div>
                    <div className="info-content">
                      <h4>{info.title}</h4>
                      {info.link ? (
                        <a href={info.link} className="info-link">
                          {info.value}
                        </a>
                      ) : (
                        <span className="info-value">{info.value}</span>
                      )}
                      <p className="info-description">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="social-section">
                <h4>Connect on Social Media</h4>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      style={{ '--social-color': social.color }}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className={social.icon}></i>
                      <span>{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
              
              <div className="availability-card">
                <div className="availability-header">
                  <i className="fas fa-calendar-check"></i>
                  <h4>Availability</h4>
                </div>
                <div className="availability-content">
                  <div className="availability-status">
                    <span className="status-dot available"></span>
                    <span>Available for new opportunities</span>
                  </div>
                  <p>Currently seeking full-time positions in:</p>
                  <ul>
                    <li>Full-Stack Development</li>
                    <li>AI/ML Engineering</li>
                    <li>Web Development</li>
                    <li>Software Development</li>
                  </ul>
                  <div className="resume-download">
                    <motion.a
                      href="/resume/Abilash_M_Resume.pdf"
                      download="Abilash_M_Resume.pdf"
                      className="btn btn-outline"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className="fas fa-download"></i>
                      Download Resume
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Call to Action */}
          <motion.div variants={cardVariants} className="contact-cta">
            <div className="cta-content">
              <h3>Ready to make an impact together?</h3>
              <p>
                I'm excited to contribute my skills in AI, full-stack development, and problem-solving 
                to help your team achieve its goals. Let's create something amazing!
              </p>
              <div className="cta-stats">
                <div className="cta-stat">
                  <span className="stat-number">24h</span>
                  <span className="stat-label">Response Time</span>
                </div>
                <div className="cta-stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Commitment</span>
                </div>
                <div className="cta-stat">
                  <span className="stat-number">∞</span>
                  <span className="stat-label">Possibilities</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;