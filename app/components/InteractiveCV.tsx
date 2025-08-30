'use client'

import { useState, useEffect } from 'react'
import { Star, Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Sparkles, Download, Eye, Code, Database, Cloud, Zap } from 'lucide-react'

interface Skill {
  name: string
  category: string
  level: number
  icon: React.ReactNode
}

interface Project {
  title: string
  description: string
  technologies: string[]
  github?: string
  live?: string
  image?: string
}

export default function InteractiveCV() {
  const [activeSection, setActiveSection] = useState('summary')
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

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

  const projects: Project[] = [
    {
      title: 'Traffic Optimization Engine',
      description: 'Real-time optimizer using Kafka, Spark Streaming, and ML for live route planning and congestion prediction, with a React dashboard.',
      technologies: ['Kafka', 'Spark', 'React', 'ML'],
      github: '#',
      live: '#'
    },
    {
      title: 'Real-Time Financial Market Data Pipeline',
      description: 'Engineered with Docker, Apache Airflow, PostgreSQL for trading analysis.',
      technologies: ['Docker', 'Airflow', 'PostgreSQL'],
      github: '#',
      live: '#'
    },
    {
      title: 'End-to-End Crypto Twitter Data Pipeline',
      description: 'Built with Twitter API, Apache Airflow, PostgreSQL for data extraction and analysis.',
      technologies: ['Twitter API', 'Airflow', 'PostgreSQL'],
      github: '#',
      live: '#'
    },
    {
      title: 'Emotions Data Analysis Using Twitter Data',
      description: 'Analyzed social media patterns of emotional expression using Python.',
      technologies: ['Python', 'NLP', 'Data Analysis'],
      github: '#',
      live: '#'
    }
  ]

  const handleDownload = () => {
    // Simulate PDF download
    const link = document.createElement('a')
    link.href = '#'
    link.download = 'Sechaba_Mohlabeng_CV.pdf'
    link.click()
  }

  const SkillItem = ({ skill }: { skill: { name: string; icon: React.ReactNode } }) => (
    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-platinum-100 transition-all duration-300 group border border-transparent hover:border-caribbean_current-200">
      <span className="text-caribbean_current-600 group-hover:scale-110 transition-transform">
        {skill.icon}
      </span>
      <span className="font-medium text-jet-700">{skill.name}</span>
    </div>
  )

  const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
    <div 
      className="section-card group cursor-pointer transform hover:scale-105 transition-all duration-300"
      style={{ animationDelay: `${0.8 + index * 0.1}s` }}
    >
      <h3 className="font-sans font-semibold text-jet-700 text-lg mb-3 group-hover:text-caribbean_current-600 transition-colors">
        {project.title}
      </h3>
      <p className="text-sm text-jet-600 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span key={tech} className="skill-tag text-xs">{tech}</span>
        ))}
      </div>
      <div className="flex gap-3">
        {project.github && (
          <a href={project.github} className="flex items-center gap-2 text-caribbean_current-600 hover:text-indigo_dye-600 hover:scale-105 transition-all duration-300 text-sm font-medium px-3 py-1 rounded-lg hover:bg-caribbean_current-50">
            <Github className="w-4 h-4" />
            <span>Code</span>
          </a>
        )}
        {project.live && (
          <a href={project.live} className="flex items-center gap-2 text-caribbean_current-600 hover:text-indigo_dye-600 hover:scale-105 transition-all duration-300 text-sm font-medium px-3 py-1 rounded-lg hover:bg-caribbean_current-50">
            <Eye className="w-4 h-4" />
            <span>Live</span>
          </a>
        )}
      </div>
    </div>
  )

  return (
    <div className="cv-container p-8 md:p-12 animate-fade-in relative overflow-hidden">
      {/* Interactive Background Elements */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(60, 110, 113, 0.1) 0%, transparent 50%)`,
          transition: 'all 0.1s ease-out'
        }}
      />
      
      {/* Main Layout with Left Sidebar */}
      <div className="flex flex-col lg:flex-row gap-8 relative z-10">
        {/* Left Sidebar - Header Section */}
        <div className="lg:w-64 flex-shrink-0 animate-slide-up">
          <div className="sticky top-8">
            {/* Name and Title */}
            <div className="name-gradient p-6 rounded-2xl mb-6 shadow-medium relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <h1 className="text-2xl lg:text-3xl font-serif font-bold text-white mb-2 leading-tight relative z-10">
                Sechaba Itumeleng Mohlabeng
              </h1>
              <p className="text-base lg:text-lg font-sans font-medium tracking-widest text-white/90 relative z-10">
                CLOUD DATA ENGINEER
              </p>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-4 text-jet-600 mb-6">
              <div className="contact-item">
                <Mail className="w-5 h-5 text-caribbean_current-600" />
                <span className="font-medium">xsechaba@gmail.com</span>
              </div>
              <div className="contact-item">
                <Phone className="w-5 h-5 text-caribbean_current-600" />
                <span className="font-medium">(+27) 79 158 4303</span>
              </div>
              <div className="contact-item">
                <MapPin className="w-5 h-5 text-caribbean_current-600" />
                <span className="font-medium">Johannesburg, South Africa</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-3 mb-6">
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
              <button 
                onClick={handleDownload}
                className="social-link bg-caribbean_current-600 text-white px-4 py-2 rounded-lg hover:bg-indigo_dye-600 transition-colors shadow-medium hover:shadow-strong"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Career Summary */}
            <div className="section-card group">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-caribbean_current-600 group-hover:animate-spin transition-all" />
                <h3 className="font-serif text-lg font-semibold text-jet-700">
                  Career Summary
                </h3>
              </div>
              <p className="text-sm text-jet-600 leading-relaxed">
                Dynamic and detail-oriented Cloud Data Engineer with a background in Quantity Surveying (Hons) and expertise in building and optimizing scalable data architectures. Proficient in AWS cloud technologies, ETL pipelines, and data analytics, with a proven ability to extract actionable insights and drive business solutions. Passionate about solving complex challenges with data-driven strategies.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1">
          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {['summary', 'experience', 'skills', 'projects'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 border-2 ${
                  activeSection === section
                    ? 'bg-caribbean_current-600 text-white border-caribbean_current-600 shadow-medium'
                    : 'bg-white text-jet-700 border-platinum-300 hover:bg-caribbean_current-50 hover:border-caribbean_current-400 hover:text-caribbean_current-700'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>

          {/* Dynamic Content Based on Active Section */}
          <div className="min-h-[600px]">
            {activeSection === 'summary' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Education Section */}
                <div className="section-card animate-slide-up">
                  <h2 className="font-serif text-2xl font-semibold text-jet-700 mb-6 flex items-center">
                    Education
                    <Star className="star-icon w-6 h-6" />
                  </h2>
                  <div className="space-y-6">
                    <div className="experience-item">
                      <p className="font-sans font-bold text-indigo_dye-600 text-lg">Dec 2024</p>
                      <p className="font-sans font-semibold text-jet-700 text-base">Higher Certificate in Information Technology Systems, Data Engineering</p>
                      <p className="font-sans text-sm text-jet-500">Explore AI Academy</p>
                    </div>
                    <div className="experience-item">
                      <p className="font-sans font-bold text-indigo_dye-600 text-lg">Dec 2023</p>
                      <p className="font-sans font-semibold text-jet-700 text-base">Bachelor of Science (Hons), Quantity Surveying</p>
                      <p className="font-sans text-sm text-jet-500">University of the Witwatersrand</p>
                    </div>
                    <div className="experience-item">
                      <p className="font-sans font-bold text-indigo_dye-600 text-lg">Dec 2022</p>
                      <p className="font-sans font-semibold text-jet-700 text-base">Bachelor of Science, Construction Studies</p>
                      <p className="font-sans text-sm text-jet-500">University of the Witwatersrand</p>
                    </div>
                  </div>
                </div>

                {/* Certifications Section */}
                <div className="section-card animate-slide-up" style={{animationDelay: '0.1s'}}>
                  <h2 className="font-serif text-2xl font-semibold text-jet-700 mb-6 flex items-center">
                    Certifications
                    <Star className="star-icon w-6 h-6" />
                  </h2>
                  <div className="space-y-4">
                    <div className="experience-item">
                      <p className="font-sans font-semibold text-jet-700">AWS Certified Cloud Practitioner</p>
                      <p className="font-sans text-sm text-jet-500">AWS (2022)</p>
                    </div>
                    <div className="experience-item">
                      <p className="font-sans font-semibold text-jet-700">S201 and S202 Digital Planning with Candy</p>
                      <p className="font-sans text-sm text-jet-500">RIB CCS Academy (2021)</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'experience' && (
              <div className="section-card animate-slide-up">
                <h2 className="font-serif text-2xl font-semibold text-jet-700 mb-6 flex items-center">
                  Work Experience
                  <Star className="star-icon w-6 h-6" />
                </h2>
                <div className="space-y-8">
                  <div className="experience-item">
                    <p className="font-sans font-bold text-indigo_dye-600 text-lg">Apr 2025 – June 2025</p>
                    <p className="font-sans font-semibold text-jet-700 text-lg">Software Engineer (Internship)</p>
                    <p className="font-sans text-sm text-caribbean_current-600 font-medium mb-3">Claimtech | Remote</p>
                    <ul className="text-sm text-jet-600 space-y-2 list-disc list-inside">
                      <li>Built scalable features in a Laravel + Vue.js system, including server-side pagination, filtering, and dynamic UI components.</li>
                      <li>Developed an ensemble-based matching system using OpenAI, Gemini, and Levenshtein logic for intelligent claim validation.</li>
                      <li>Documented workflow automations (crons, webhooks, status transitions) through technical diagrams and improved developer onboarding.</li>
                    </ul>
                  </div>

                  <div className="experience-item">
                    <p className="font-sans font-bold text-indigo_dye-600 text-lg">Sept 2024 – Dec 2024</p>
                    <p className="font-sans font-semibold text-jet-700 text-lg">Data Engineer (Internship)</p>
                    <p className="font-sans text-sm text-caribbean_current-600 font-medium mb-3">Sand Technologies | Remote</p>
                    <ul className="text-sm text-jet-600 space-y-2 list-disc list-inside">
                      <li>Led the development of a universal web scraper with proxy management and pagination for dynamic websites.</li>
                      <li>Built scalable data pipelines to automate attendee data integration for sales.</li>
                      <li>Managed AWS infrastructure, ensuring secure and efficient data storage and retrieval.</li>
                    </ul>
                  </div>

                  <div className="experience-item">
                    <p className="font-sans font-bold text-indigo_dye-600 text-lg">Jan 2024 – Aug 2024</p>
                    <p className="font-sans font-semibold text-jet-700 text-lg">Data Engineer (Apprenticeship)</p>
                    <p className="font-sans text-sm text-caribbean_current-600 font-medium mb-3">Explore AI | Remote</p>
                    <ul className="text-sm text-jet-600 space-y-2 list-disc list-inside">
                      <li>Automated data integration for sales pipelines, ensuring efficiency and accuracy.</li>
                      <li>Gained hands-on experience with AWS, SQL, Python, and Apache Airflow while building real-world data pipelines.</li>
                      <li>Managed cloud infrastructure, optimizing secure data storage and retrieval.</li>
                    </ul>
                  </div>

                  <div className="experience-item">
                    <p className="font-sans font-bold text-indigo_dye-600 text-lg">Aug 2020 – Feb 2021</p>
                    <p className="font-sans font-semibold text-jet-700 text-lg">Student Quantity Surveyor (Seasonal)</p>
                    <p className="font-sans text-sm text-caribbean_current-600 font-medium mb-3">Barrow Construction | Johannesburg, ZA</p>
                    <ul className="text-sm text-jet-600 space-y-2 list-disc list-inside">
                      <li>Conducted cost analysis and supported value engineering efforts.</li>
                      <li>Monitored project progress and costs, contributing to accurate forecasting.</li>
                      <li>Participated in site visits, contractor meetings, and negotiations.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'skills' && (
              <div className="section-card animate-slide-up">
                <h2 className="font-serif text-2xl font-semibold text-jet-700 mb-6 flex items-center">
                  Skills & Expertise
                  <Star className="star-icon w-6 h-6" />
                </h2>
                <div className="space-y-8">
                  <div>
                    <h4 className="font-sans font-bold text-jet-700 mb-6 text-lg">Technical Skills</h4>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {Object.entries(skillCategories).map(([category, skills]) => (
                        <div key={category} className="space-y-4">
                          <h5 className="font-sans font-semibold text-caribbean_current-600 text-base border-b border-caribbean_current-200 pb-2">
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
                    <h4 className="font-sans font-bold text-jet-700 mb-4 text-lg">Interpersonal Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Problem-Solving', 'Project Management', 'Effective Communication', 'Adaptability', 'Multitasking', 'Highly Organized'].map((skill) => (
                        <span key={skill} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'projects' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <ProjectCard key={project.title} project={project} index={index} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
