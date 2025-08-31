'use client'

import { useState, useEffect } from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  ExternalLink, 
  Github, 
  Download, 
  Star, 
  Code, 
  Database, 
  Cloud, 
  Zap,
  Sparkles,
  Award,
  Briefcase,
  BookOpen,
  FolderOpen
} from 'lucide-react'
import { getProfessionalPortrait } from '../utils/pexels'

export default function InteractiveCV() {
  const [activeSection, setActiveSection] = useState('summary')
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [profileImage, setProfileImage] = useState('/default-profile.jpg')

  useEffect(() => {
    setIsVisible(true)
    
    // Fetch profile image
    getProfessionalPortrait().then(setProfileImage)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleDownload = () => {
    // Implementation for CV download
    console.log('Downloading CV...')
  }

  const skillCategories = {
    'Programming Languages': [
      { name: 'Python', icon: <Code className="w-5 h-5" /> },
      { name: 'JavaScript', icon: <Code className="w-5 h-5" /> },
      { name: 'PHP', icon: <Code className="w-5 h-5" /> },
      { name: 'SQL', icon: <Database className="w-5 h-5" /> },
      { name: 'HTML/CSS', icon: <Code className="w-5 h-5" /> }
    ],
    'Frameworks & Libraries': [
      { name: 'Laravel', icon: <Code className="w-5 h-5" /> },
      { name: 'Vue.js', icon: <Code className="w-5 h-5" /> },
      { name: 'Tailwind CSS', icon: <Code className="w-5 h-5" /> },
      { name: 'Blade', icon: <Code className="w-5 h-5" /> },
      { name: 'Axios', icon: <Code className="w-5 h-5" /> }
    ],
    'Cloud & DevOps': [
      { name: 'AWS', icon: <Cloud className="w-5 h-5" /> },
      { name: 'Docker', icon: <Zap className="w-5 h-5" /> },
      { name: 'Git', icon: <Zap className="w-5 h-5" /> },
      { name: 'GitHub Actions', icon: <Zap className="w-5 h-5" /> },
      { name: 'Apache Airflow', icon: <Zap className="w-5 h-5" /> }
    ],
    'Data Engineering': [
      { name: 'ETL Pipelines', icon: <Database className="w-5 h-5" /> },
      { name: 'PostgreSQL', icon: <Database className="w-5 h-5" /> },
      { name: 'MySQL', icon: <Database className="w-5 h-5" /> },
      { name: 'Apache Spark', icon: <Database className="w-5 h-5" /> },
      { name: 'Hadoop', icon: <Database className="w-5 h-5" /> }
    ]
  }

  const projects = [
    {
      title: 'Traffic Optimization Engine',
      description: 'Real-time optimizer using Kafka, Spark Streaming, and ML for live route planning and congestion prediction, with a React dashboard.',
      tech: ['Kafka', 'Spark', 'React', 'ML']
    },
    {
      title: 'Real-Time Financial Market Data Pipeline',
      description: 'Engineered with Docker, Apache Airflow, PostgreSQL for trading analysis.',
      tech: ['Docker', 'Airflow', 'PostgreSQL']
    },
    {
      title: 'End-to-End Crypto Twitter Data Pipeline',
      description: 'Built with Twitter API, Apache Airflow, PostgreSQL for data extraction and analysis.',
      tech: ['Twitter API', 'Airflow', 'PostgreSQL']
    },
    {
      title: 'Emotions Data Analysis Using Twitter Data',
      description: 'Analyzed social media patterns of emotional expression using Python.',
      tech: ['Python', 'NLP', 'Data Analysis']
    }
  ]

  const SkillItem = ({ skill }: { skill: { name: string; icon: React.ReactNode } }) => (
    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-glass-200 transition-all duration-300 group border border-transparent hover:border-accent-300">
      <span className="text-accent-400 group-hover:scale-110 transition-transform">
        {skill.icon}
      </span>
      <span className="font-medium text-white">{skill.name}</span>
    </div>
  )

  const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
    <div className="glass-card p-6 group">
      <h4 className="font-sans font-semibold text-white text-lg mb-3 group-hover:text-accent-300 transition-colors">
        {project.title}
      </h4>
      <p className="text-sm text-gray-300 leading-relaxed mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span key={tech} className="skill-tag text-xs">
            {tech}
          </span>
        ))}
      </div>
    </div>
  )

  return (
    <div className="cv-container p-8 md:p-12 animate-fade-in relative overflow-hidden max-w-6xl mx-auto">
      {/* Interactive Background Elements */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.1) 0%, transparent 50%)`
        }}
      />
      
      {/* Floating Elements */}
      <div className="floating-element"></div>
      <div className="floating-element"></div>
      <div className="floating-element"></div>

      <div className="flex flex-col lg:flex-row gap-8 relative z-10">
        {/* Left Sidebar - Profile & Contact */}
        <div className="lg:w-80 flex-shrink-0">
          <div className="sticky top-8 space-y-6">
            {/* Profile Image */}
            <div className="profile-image-container">
              <img 
                src={profileImage} 
                alt="Sechaba Mohlabeng" 
                className="profile-image"
                onError={(e) => {
                  e.currentTarget.src = '/default-profile.jpg'
                }}
              />
            </div>

            {/* Name & Title */}
            <div className="name-gradient p-6 rounded-2xl text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <h1 className="text-2xl lg:text-3xl font-display font-bold text-white mb-2 leading-tight relative z-10">
                Sechaba Itumeleng Mohlabeng
              </h1>
              <p className="text-base lg:text-lg font-sans font-medium tracking-widest text-white/90 relative z-10">
                CLOUD DATA ENGINEER
              </p>
            </div>

            {/* Contact Information */}
            <div className="glass-card p-6 space-y-4">
              <div className="contact-item">
                <Mail className="w-5 h-5 text-accent-400" />
                <span className="font-medium text-white">xsechaba@gmail.com</span>
              </div>
              <div className="contact-item">
                <Phone className="w-5 h-5 text-accent-400" />
                <span className="font-medium text-white">(+27) 79 158 4303</span>
              </div>
              <div className="contact-item">
                <MapPin className="w-5 h-5 text-accent-400" />
                <span className="font-medium text-white">Johannesburg, South Africa</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-6">
              <div className="flex flex-col gap-3">
                <a href="#" className="social-link">
                  <Linkedin className="w-5 h-5" />
                  <span className="font-medium">LinkedIn</span>
                </a>
                <a href="#" className="social-link">
                  <ExternalLink className="w-5 h-5" />
                  <span className="font-medium">Portfolio</span>
                </a>
                <a href="#" className="social-link">
                  <Github className="w-5 h-5" />
                  <span className="font-medium">GitHub</span>
                </a>
                <button onClick={handleDownload} className="download-btn flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  <span>Download CV</span>
                </button>
              </div>
            </div>

            {/* Career Summary */}
            <div className="glass-card p-6 group">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-gold-400 group-hover:animate-spin transition-all" />
                <h3 className="font-display text-xl font-semibold text-white">Career Summary</h3>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                Dynamic and detail-oriented Cloud Data Engineer with a background in Quantity Surveying (Hons) and expertise in building and optimizing scalable data architectures. Proficient in AWS cloud technologies, ETL pipelines, and data analytics, with a proven ability to extract actionable insights and drive business solutions. Passionate about solving complex challenges with data-driven strategies.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 space-y-8">
          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-3">
            {[
              { id: 'summary', label: 'Summary', icon: <Sparkles className="w-4 h-4" /> },
              { id: 'experience', label: 'Experience', icon: <Briefcase className="w-4 h-4" /> },
              { id: 'education', label: 'Education', icon: <BookOpen className="w-4 h-4" /> },
              { id: 'projects', label: 'Projects', icon: <FolderOpen className="w-4 h-4" /> },
              { id: 'skills', label: 'Skills', icon: <Award className="w-4 h-4" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id)}
                className={`nav-tab flex items-center gap-2 ${activeSection === tab.id ? 'active' : ''}`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Dynamic Content */}
          <div className="min-h-[600px]">
            {activeSection === 'summary' && (
              <div className="glass-card p-8 animate-slide-up">
                <h2 className="font-display text-3xl font-semibold text-white mb-6 flex items-center">
                  Professional Summary
                  <Star className="star-icon w-6 h-6 ml-3" />
                </h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    I am a passionate Cloud Data Engineer with a unique blend of technical expertise and business acumen. My journey from Quantity Surveying to Data Engineering has equipped me with a comprehensive understanding of both the technical and business aspects of data-driven solutions.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    With hands-on experience in AWS cloud technologies, ETL pipeline development, and data analytics, I specialize in building scalable architectures that transform raw data into actionable business insights. My background in construction and project management has instilled in me a methodical approach to problem-solving and a keen eye for detail.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    I thrive in dynamic environments where I can leverage my technical skills to solve complex challenges and drive innovation through data-driven strategies.
                  </p>
                </div>
              </div>
            )}

            {activeSection === 'experience' && (
              <div className="space-y-6">
                <div className="glass-card p-8 animate-slide-up">
                  <h2 className="font-display text-3xl font-semibold text-white mb-6 flex items-center">
                    Work Experience
                    <Star className="star-icon w-6 h-6 ml-3" />
                  </h2>
                  <div className="space-y-6">
                    <div className="experience-item">
                      <p className="font-sans font-bold text-accent-400 text-lg">Apr 2025 – June 2025</p>
                      <p className="font-sans font-semibold text-white text-lg">Software Engineer (Internship)</p>
                      <p className="font-sans text-sm text-gold-400 font-medium mb-3">Claimtech | Remote</p>
                      <ul className="text-sm text-gray-300 space-y-2 list-disc list-inside">
                        <li>Built scalable features in a Laravel + Vue.js system, including server-side pagination, filtering, and dynamic UI components.</li>
                        <li>Developed an ensemble-based matching system using OpenAI, Gemini, and Levenshtein logic for intelligent claim validation.</li>
                        <li>Documented workflow automations (crons, webhooks, status transitions) through technical diagrams and improved developer onboarding.</li>
                      </ul>
                    </div>

                    <div className="experience-item">
                      <p className="font-sans font-bold text-accent-400 text-lg">Sept 2024 – Dec 2024</p>
                      <p className="font-sans font-semibold text-white text-lg">Data Engineer (Internship)</p>
                      <p className="font-sans text-sm text-gold-400 font-medium mb-3">Sand Technologies | Remote</p>
                      <ul className="text-sm text-gray-300 space-y-2 list-disc list-inside">
                        <li>Led the development of a universal web scraper with proxy management and pagination for dynamic websites.</li>
                        <li>Built scalable data pipelines to automate attendee data integration for sales.</li>
                        <li>Managed AWS infrastructure, ensuring secure and efficient data storage and retrieval.</li>
                      </ul>
                    </div>

                    <div className="experience-item">
                      <p className="font-sans font-bold text-accent-400 text-lg">Jan 2024 – Aug 2024</p>
                      <p className="font-sans font-semibold text-white text-lg">Data Engineer (Apprenticeship)</p>
                      <p className="font-sans text-sm text-gold-400 font-medium mb-3">Explore AI | Remote</p>
                      <ul className="text-sm text-gray-300 space-y-2 list-disc list-inside">
                        <li>Automated data integration for sales pipelines, ensuring efficiency and accuracy.</li>
                        <li>Gained hands-on experience with AWS, SQL, Python, and Apache Airflow while building real-world data pipelines.</li>
                        <li>Managed cloud infrastructure, optimizing secure data storage and retrieval.</li>
                      </ul>
                    </div>

                    <div className="experience-item">
                      <p className="font-sans font-bold text-accent-400 text-lg">Aug 2020 – Feb 2021</p>
                      <p className="font-sans font-semibold text-white text-lg">Student Quantity Surveyor (Seasonal)</p>
                      <p className="font-sans text-sm text-gold-400 font-medium mb-3">Barrow Construction | Johannesburg, ZA</p>
                      <ul className="text-sm text-gray-300 space-y-2 list-disc list-inside">
                        <li>Conducted cost analysis and supported value engineering efforts.</li>
                        <li>Monitored project progress and costs, contributing to accurate forecasting.</li>
                        <li>Participated in site visits, contractor meetings, and negotiations.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'education' && (
              <div className="glass-card p-8 animate-slide-up">
                <h2 className="font-display text-3xl font-semibold text-white mb-6 flex items-center">
                  Education
                  <Star className="star-icon w-6 h-6 ml-3" />
                </h2>
                <div className="space-y-6">
                  <div className="experience-item">
                    <p className="font-sans font-bold text-accent-400 text-lg">Dec 2024</p>
                    <p className="font-sans font-semibold text-white text-lg">Higher Certificate in Information Technology Systems, Data Engineering</p>
                    <p className="font-sans text-sm text-gold-400 font-medium">Explore AI Academy</p>
                  </div>
                  <div className="experience-item">
                    <p className="font-sans font-bold text-accent-400 text-lg">Dec 2023</p>
                    <p className="font-sans font-semibold text-white text-lg">Bachelor of Science (Hons), Quantity Surveying</p>
                    <p className="font-sans text-sm text-gold-400 font-medium">University of the Witwatersrand</p>
                  </div>
                  <div className="experience-item">
                    <p className="font-sans font-bold text-accent-400 text-lg">Dec 2022</p>
                    <p className="font-sans font-semibold text-white text-lg">Bachelor of Science, Construction Studies</p>
                    <p className="font-sans text-sm text-gold-400 font-medium">University of the Witwatersrand</p>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'projects' && (
              <div className="glass-card p-8 animate-slide-up">
                <h2 className="font-display text-3xl font-semibold text-white mb-6 flex items-center">
                  Technical Projects
                  <Star className="star-icon w-6 h-6 ml-3" />
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'skills' && (
              <div className="glass-card p-8 animate-slide-up">
                <h2 className="font-display text-3xl font-semibold text-white mb-6 flex items-center">
                  Skills & Expertise
                  <Star className="star-icon w-6 h-6 ml-3" />
                </h2>
                <div className="space-y-8">
                  <div>
                    <h4 className="font-sans font-bold text-white mb-6 text-lg">Technical Skills</h4>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {Object.entries(skillCategories).map(([category, skills]) => (
                        <div key={category} className="space-y-4">
                          <h5 className="font-sans font-semibold text-accent-400 text-base border-b border-accent-300 pb-2">
                            {category}
                          </h5>
                          <div className="grid grid-cols-1 gap-2">
                            {skills.map((skill) => (
                              <SkillItem key={skill.name} skill={skill} />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-white mb-4 text-lg">Interpersonal Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Problem-Solving', 'Project Management', 'Effective Communication', 'Adaptability', 'Multitasking', 'Highly Organized'].map((skill) => (
                        <span key={skill} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
