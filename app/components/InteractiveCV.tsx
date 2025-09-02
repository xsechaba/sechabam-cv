'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Download, Eye } from 'lucide-react'

interface Skill {
  name: string
  category: string
  level: number
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
  const [activeSection, setActiveSection] = useState('education')
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    setIsVisible(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove)
      return () => window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  if (!isClient) {
    return (
      <div className="cv-container p-8 md:p-12 animate-fade-in relative overflow-hidden">
        <div className="flex items-center justify-center min-h-[600px]">
          <div className="text-white text-xl">Loading...</div>
        </div>
      </div>
    )
  }

  const skillCategories = {
    'Programming & Query Languages': ['PHP', 'JavaScript', 'Python', 'SQL', 'HTML', 'CSS'],
    'Frameworks & Libraries': ['Laravel', 'Vue.js', 'Tailwind CSS', 'Blade', 'Axios'],
    'Cloud & APIs': ['OpenAI API', 'AWS (S3, Lambda, API Gateway, CloudFront, Route 53)'],
    'Data Engineering': ['ETL pipelines', 'Data Storage', 'PostgreSQL', 'MySQL', 'Apache Spark', 'Hadoop'],
    'DevOps & Tools': ['Git', 'GitHub Actions', 'Laravel Sail', 'Docker', 'Apache Airflow']
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
      description: 'Engineered a real-time pipeline processing market data for time-sensitive trading analysis using Docker, Apache Airflow, and PostgreSQL.',
      technologies: ['Docker', 'Airflow', 'PostgreSQL'],
      github: '#',
      live: '#'
    },
    {
      title: 'End-to-End Crypto Twitter Data Pipeline',
      description: 'Built a pipeline with Twitter API, Apache Airflow, and PostgreSQL to extract, clean, and analyze crypto-related tweets.',
      technologies: ['Twitter API', 'Airflow', 'PostgreSQL'],
      github: '#',
      live: '#'
    },
    {
      title: 'Emotions Data Analysis Using Twitter Data',
      description: 'Analyzed social media messages to identify patterns in emotional expression using Python.',
      technologies: ['Python', 'Data Analysis', 'Social Media'],
      github: '#',
      live: '#'
    }
  ]

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/assets/Sechaba_Mohlabeng_CV.pdf'
    link.download = 'Sechaba_Mohlabeng_CV.pdf'
    link.click()
  }

  const SkillItem = ({ skill }: { skill: string }) => (
    <div className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-400 group border backdrop-blur-10 bg-white/5 border-white/10 hover:bg-white/10 hover:border-cyan-400/30 hover:scale-105 hover:shadow-lg relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-600" />
      <span className="font-semibold text-white group-hover:text-cyan-100 relative z-10">{skill}</span>
    </div>
  )

  const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
    <div 
      className="section-card group cursor-pointer transform hover:scale-105 transition-all duration-500 relative overflow-hidden"
      style={{ animationDelay: `${0.8 + index * 0.1}s` }}
    >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <h3 className="font-sans font-bold text-white text-xl mb-4 group-hover:text-cyan-400 transition-colors relative z-10">
        {project.title}
      </h3>
      <p className="text-sm text-white/70 mb-6 leading-relaxed relative z-10">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-6 relative z-10">
        {project.technologies.map((tech) => (
          <span key={tech} className="skill-tag text-xs font-semibold">{tech}</span>
        ))}
      </div>
      <div className="flex gap-4 relative z-10">
        {project.github && (
          <a href={project.github} className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 hover:scale-110 transition-all duration-400 text-sm font-semibold px-4 py-2 rounded-xl bg-white/5 backdrop-blur-5 border border-white/20 hover:bg-white/10 hover:border-cyan-400/50">
            <Github className="w-4 h-4" />
            <span>Code</span>
          </a>
        )}
        {project.live && (
          <a href={project.live} className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 hover:scale-110 transition-all duration-400 text-sm font-semibold px-4 py-2 rounded-xl bg-white/5 backdrop-blur-5 border border-white/20 hover:bg-white/10 hover:border-cyan-400/50">
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
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: typeof window !== 'undefined' ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 212, 255, 0.08) 0%, rgba(255, 215, 0, 0.04) 30%, transparent 60%)` : 'none',
          transition: 'all 0.2s ease-out'
        }}
      />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400/5 to-blue-400/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-l from-yellow-400/5 to-cyan-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Main Layout with Left Sidebar */}
      <div className="flex flex-col lg:flex-row gap-8 relative z-10">
        {/* Left Sidebar - Header Section */}
        <div className="lg:w-64 flex-shrink-0 animate-slide-up">
          <div className="sticky top-8 space-y-6">
            {/* Professional Portrait - Clean & Unblurred */}
            <div className="relative w-full h-56 rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/20 backdrop-blur-sm bg-gradient-to-br from-white/10 to-transparent">
              <Image 
                src="/assets/profile-picture.png" 
                alt="Sechaba Mohlabeng" 
                fill 
                className="object-cover" 
                sizes="256px" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* Name and Title */}
            <div className="name-gradient p-6 rounded-2xl shadow-medium relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <h1 className="text-2xl lg:text-3xl font-serif font-bold text-white mb-2 leading-tight relative z-10">
                Sechaba Itumeleng Mohlabeng
              </h1>
              <p className="text-base lg:text-lg font-sans font-medium tracking-widest text-white/90 relative z-10">
                DATA AND SOFTWARE ENGINEER
              </p>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-4 text-white/80">
              <div className="contact-item">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span className="font-medium text-white">xsechaba@gmail.com</span>
              </div>
              <div className="contact-item">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="font-medium text-white">(+27) 79 158 4303</span>
              </div>
              <div className="contact-item">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span className="font-medium text-white">Johannesburg, South Africa</span>
              </div>
            </div>

            {/* Social Links */}
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
              <button 
                onClick={handleDownload}
                className="social-link bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Career Summary */}
            <div className="section-card group">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="font-serif text-lg font-semibold text-white">
                  Career Summary
                </h3>
              </div>
                              <p className="text-sm text-white/80 leading-relaxed">
                  Dynamic and results-driven Engineer with a background in Quantity Surveying (Hons) and proven expertise in designing, building, and optimizing scalable data systems. Skilled in AWS cloud technologies, ETL pipeline development, and data analytics, with hands-on experience delivering end-to-end software and data solutions. Adept at extracting actionable insights, architecting robust applications, and driving business impact through data-driven strategies. Passionate about solving complex technical challenges and continuously advancing engineering excellence.
                </p>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1">
          {/* Navigation Tabs - Enhanced Glassmorphism */}
          <div className="flex flex-wrap gap-3 mb-10">
            {['education', 'experience', 'skills', 'projects'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`relative px-8 py-4 rounded-2xl font-semibold transition-all duration-500 border backdrop-blur-15 overflow-hidden group ${
                  activeSection === section
                    ? 'bg-gradient-to-r from-cyan-500/80 to-blue-600/80 text-white border-white/30 shadow-xl scale-105'
                    : 'bg-white/5 text-white border-white/20 hover:bg-white/10 hover:border-cyan-400/50 hover:text-cyan-300 hover:scale-102'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative z-10">
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </span>
              </button>
            ))}
          </div>

          {/* Dynamic Content Based on Active Section */}
          <div className="min-h-[600px]">
            {activeSection === 'education' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Education Section */}
                <div className="section-card animate-slide-up">
                  <h2 className="font-serif text-2xl font-semibold text-white mb-6">
                    Education
                  </h2>
                  <div className="space-y-6">
                    <div className="experience-item">
                      <p className="font-sans font-bold text-cyan-400 text-lg">Dec 2024</p>
                      <p className="font-sans font-semibold text-white text-base">Higher Certificate in Information Technology Systems, Data Engineering</p>
                      <p className="font-sans text-sm text-white/60">Explore AI Academy</p>
                    </div>
                    <div className="experience-item">
                      <p className="font-sans font-bold text-cyan-400 text-lg">Dec 2023</p>
                      <p className="font-sans font-semibold text-white text-base">Bachelor of Science (Hons), Quantity Surveying</p>
                      <p className="font-sans text-sm text-white/60">University of the Witwatersrand</p>
                    </div>
                    <div className="experience-item">
                      <p className="font-sans font-bold text-cyan-400 text-lg">Dec 2022</p>
                      <p className="font-sans font-semibold text-white text-base">Bachelor of Science, Construction Studies</p>
                      <p className="font-sans text-sm text-white/60">University of the Witwatersrand</p>
                    </div>
                  </div>
                </div>

                {/* Certifications Section */}
                <div className="section-card animate-slide-up" style={{animationDelay: '0.1s'}}>
                  <h2 className="font-serif text-2xl font-semibold text-white mb-6">
                    Certifications
                  </h2>
                  <div className="space-y-4">
                    <div className="experience-item">
                      <p className="font-sans font-semibold text-white">AWS Certified Cloud Practitioner</p>
                      <p className="font-sans text-sm text-white/60">AWS (2022)</p>
                    </div>
                    <div className="experience-item">
                      <p className="font-sans font-semibold text-white">S201 and S202 Digital Planning with Candy</p>
                      <p className="font-sans text-sm text-white/60">RIB CCS Academy (2021)</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'experience' && (
              <div className="section-card animate-slide-up">
                <h2 className="font-serif text-2xl font-semibold text-white mb-6">
                  Work Experience
                </h2>
                                  <div className="space-y-8">
                                          <div className="experience-item">
                        <p className="font-sans font-bold text-cyan-400 text-lg">Jan 2025 – Aug 2025</p>
                        <p className="font-sans font-semibold text-white text-lg">Software Engineer (Graduate/Junior)</p>
                        <p className="font-sans text-sm text-cyan-400 font-medium mb-3">Claimtech | Remote</p>
                        <ul className="text-sm text-white/70 space-y-2 list-disc list-inside">
                          <li>Built scalable features in a Laravel + Vue.js system, including server-side pagination, filtering, and dynamic UI components.</li>
                          <li>Developed an ensemble-based matching system using OpenAI, Gemini, and Levenshtein logic for intelligent claim validation.</li>
                          <li>Documented workflow automations (crons, webhooks, status transitions) through technical diagrams and enhanced developer onboarding documentation.</li>
                        </ul>
                      </div>

                    <div className="experience-item">
                      <p className="font-sans font-bold text-cyan-400 text-lg">Sept 2024 – Dec 2024</p>
                      <p className="font-sans font-semibold text-white text-lg">Data Engineer (Internship)</p>
                      <p className="font-sans text-sm text-cyan-400 font-medium mb-3">Sand Technologies | Remote</p>
                      <ul className="text-sm text-white/70 space-y-2 list-disc list-inside">
                        <li>Led the development of a universal web scraper with proxy management and pagination for dynamic websites.</li>
                        <li>Built scalable data pipelines to automate attendee data integration for sales.</li>
                        <li>Managed AWS infrastructure, ensuring secure and efficient data storage and retrieval.</li>
                      </ul>
                    </div>

                                          <div className="experience-item">
                        <p className="font-sans font-bold text-cyan-400 text-lg">Jan 2024 – Aug 2024</p>
                        <p className="font-sans font-semibold text-white text-lg">Data Engineer (Apprenticeship)</p>
                        <p className="font-sans text-sm text-cyan-400 font-medium mb-3">Explore AI | Remote</p>
                        <ul className="text-sm text-white/70 space-y-2 list-disc list-inside">
                          <li>Worked on automating data integration for sales pipelines, ensuring efficiency and accuracy in business processes.</li>
                          <li>Gained hands-on experience with AWS services, SQL, Python, and Apache Airflow while building real-world data pipelines.</li>
                          <li>Managed cloud infrastructure, optimizing data storage and retrieval in a secure environment.</li>
                        </ul>
                      </div>

                                          <div className="experience-item">
                        <p className="font-sans font-bold text-cyan-400 text-lg">Aug 2020 – Feb 2021</p>
                        <p className="font-sans font-semibold text-white text-lg">Student Quantity Surveyor (Seasonal)</p>
                        <p className="font-sans text-sm text-cyan-400 font-medium mb-3">Barrow Construction | Johannesburg, ZA</p>
                        <ul className="text-sm text-white/70 space-y-2 list-disc list-inside">
                          <li>Conducted cost analysis and supported value engineering efforts to optimize project expenses.</li>
                          <li>Monitored project progress and costs, contributing to accurate forecasting.</li>
                          <li>Participated in site visits, contractor meetings, and negotiations.</li>
                        </ul>
                      </div>
                  </div>
              </div>
            )}

            {activeSection === 'skills' && (
              <div className="section-card animate-slide-up">
                <h2 className="font-serif text-2xl font-semibold text-white mb-6">
                  Skills & Expertise
                </h2>
                <div className="space-y-8">
                  <div>
                    <h4 className="font-sans font-bold text-white mb-6 text-lg">Technical Skills</h4>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {Object.entries(skillCategories).map(([category, skills]) => (
                        <div key={category} className="space-y-4">
                          <h5 className="font-sans font-semibold text-cyan-400 text-base border-b border-cyan-400/20 pb-2">
                            {category}
                          </h5>
                                                     <div className="grid grid-cols-1 gap-2">
                             {skills.map((skill) => (
                               <SkillItem key={skill} skill={skill} />
                             ))}
                           </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-white mb-4 text-lg">Interpersonal Skills</h4>
                                          <div className="flex flex-wrap gap-2">
                        {['Problem-Solving', 'Project Management', 'Effective Communication', 'Adaptability', 'Strong multitasking abilities', 'Highly organized'].map((skill) => (
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
