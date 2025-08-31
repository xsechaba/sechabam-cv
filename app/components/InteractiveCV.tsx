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
  Sparkles,
  Code,
  Database,
  Cloud,
  Zap,
  Award,
  Briefcase,
  GraduationCap,
  FolderOpen
} from 'lucide-react'
import ImageLoader from './ImageLoader'

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

  const projects = [
    {
      title: 'Traffic Optimization Engine',
      description: 'Real-time optimizer using Kafka, Spark Streaming, and ML for live route planning and congestion prediction, with a React dashboard.',
      image: 'traffic optimization technology'
    },
    {
      title: 'Real-Time Financial Market Data Pipeline',
      description: 'Engineered with Docker, Apache Airflow, PostgreSQL for trading analysis.',
      image: 'financial data analytics'
    },
    {
      title: 'End-to-End Crypto Twitter Data Pipeline',
      description: 'Built with Twitter API, Apache Airflow, PostgreSQL for data extraction and analysis.',
      image: 'cryptocurrency blockchain'
    },
    {
      title: 'Emotions Data Analysis Using Twitter Data',
      description: 'Analyzed social media patterns of emotional expression using Python.',
      image: 'data analysis visualization'
    }
  ]

  const handleDownload = () => {
    // Implementation for CV download
    console.log('Downloading CV...')
  }

  const SkillItem = ({ skill }: { skill: { name: string; icon: React.ReactNode } }) => (
    <div className="flex items-center gap-3 p-4 rounded-xl hover:bg-cream-100 transition-all duration-300 group border border-transparent hover:border-sage-200 bg-white/60 backdrop-blur-sm">
      <span className="text-sage-600 group-hover:scale-110 transition-transform duration-300">
        {skill.icon}
      </span>
      <span className="font-medium text-charcoal-700 group-hover:text-charcoal-900 transition-colors">{skill.name}</span>
    </div>
  )

  const ProjectCard = ({ project, index }: { project: any; index: number }) => (
    <div className="section-card group overflow-hidden" style={{animationDelay: `${index * 0.1}s`}}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <ImageLoader 
            query={project.image}
            className="w-full h-48 lg:h-full"
            alt={project.title}
          />
        </div>
        <div className="lg:col-span-2 space-y-4">
          <h3 className="font-display text-xl font-semibold text-charcoal-800 group-hover:text-charcoal-900 transition-colors">
            {project.title}
          </h3>
          <p className="text-charcoal-600 leading-relaxed">
            {project.description}
          </p>
          <div className="flex gap-3">
            <a href="#" className="social-link text-sm">
              <ExternalLink className="w-4 h-4" />
              <span>View Project</span>
            </a>
            <a href="#" className="social-link text-sm">
              <Github className="w-4 h-4" />
              <span>Source Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="cv-container p-8 md:p-12 animate-fade-in relative overflow-hidden">
      {/* Interactive Background Elements */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(156, 175, 136, 0.1) 0%, transparent 50%)`
        }}
      />
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-sage-200 to-cream-200 rounded-full opacity-20 animate-float" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-champagne-300 to-sage-300 rounded-full opacity-30 animate-float" style={{animationDelay: '1s'}} />

      <div className="flex flex-col lg:flex-row gap-8 relative z-10">
        {/* Left Sidebar */}
        <div className="lg:w-80 space-y-6">
          {/* Profile Image */}
          <div className="profile-image-container h-80">
            <ImageLoader 
              query="professional headshot business person"
              className="w-full h-full"
              alt="Sechaba Mohlabeng"
            />
          </div>

          {/* Name and Title */}
          <div className="name-gradient p-6 rounded-2xl shadow-premium relative overflow-hidden group shimmer-effect">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <h1 className="text-2xl lg:text-3xl font-display font-bold text-white mb-2 leading-tight relative z-10">
              Sechaba Itumeleng Mohlabeng
            </h1>
            <p className="text-lg lg:text-xl font-body font-medium tracking-widest text-white/90 relative z-10">
              CLOUD DATA ENGINEER
            </p>
          </div>

          {/* Contact Information */}
          <div className="section-card p-6 space-y-4">
            <div className="contact-item">
              <Mail className="w-5 h-5 text-sage-600" />
              <span className="font-medium text-charcoal-700">xsechaba@gmail.com</span>
            </div>
            <div className="contact-item">
              <Phone className="w-5 h-5 text-sage-600" />
              <span className="font-medium text-charcoal-700">(+27) 79 158 4303</span>
            </div>
            <div className="contact-item">
              <MapPin className="w-5 h-5 text-sage-600" />
              <span className="font-medium text-charcoal-700">Johannesburg, South Africa</span>
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
              className="social-link bg-gradient-to-r from-sage-600 to-sage-700 text-white hover:from-sage-700 hover:to-sage-800 shadow-medium hover:shadow-strong transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </button>
          </div>

          {/* Career Summary */}
          <div className="section-card p-6 group">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-sage-600 group-hover:animate-spin-slow transition-all" />
              <h3 className="font-display text-xl font-semibold text-charcoal-800">Career Summary</h3>
            </div>
            <p className="text-sm text-charcoal-600 leading-relaxed">
              Dynamic and detail-oriented Cloud Data Engineer with a background in Quantity Surveying (Hons) and expertise in building and optimizing scalable data architectures. Proficient in AWS cloud technologies, ETL pipelines, and data analytics, with a proven ability to extract actionable insights and drive business solutions. Passionate about solving complex challenges with data-driven strategies.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-8">
          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-3">
            {[
              { id: 'summary', label: 'Summary', icon: <Sparkles className="w-4 h-4" /> },
              { id: 'experience', label: 'Experience', icon: <Briefcase className="w-4 h-4" /> },
              { id: 'education', label: 'Education', icon: <GraduationCap className="w-4 h-4" /> },
              { id: 'skills', label: 'Skills', icon: <Code className="w-4 h-4" /> },
              { id: 'projects', label: 'Projects', icon: <FolderOpen className="w-4 h-4" /> }
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
              <div className="space-y-6">
                <div className="section-card p-8 animate-slide-up">
                  <div className="flex items-center gap-3 mb-6">
                    <Award className="w-6 h-6 text-sage-600" />
                    <h2 className="font-display text-2xl font-semibold text-charcoal-800">Professional Overview</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-body font-semibold text-sage-700 text-lg">Core Competencies</h3>
                      <ul className="space-y-2 text-charcoal-600">
                        <li>• AWS Cloud Architecture & Services</li>
                        <li>• ETL Pipeline Development</li>
                        <li>• Data Analytics & Visualization</li>
                        <li>• Machine Learning Integration</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-body font-semibold text-sage-700 text-lg">Key Achievements</h3>
                      <ul className="space-y-2 text-charcoal-600">
                        <li>• Built scalable data pipelines</li>
                        <li>• Optimized cloud infrastructure</li>
                        <li>• Led development teams</li>
                        <li>• Delivered data-driven insights</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'experience' && (
              <div className="space-y-6">
                <div className="section-card p-8 animate-slide-up">
                  <div className="flex items-center gap-3 mb-6">
                    <Briefcase className="w-6 h-6 text-sage-600" />
                    <h2 className="font-display text-2xl font-semibold text-charcoal-800">Work Experience</h2>
                  </div>
                  <div className="space-y-6">
                    <div className="experience-item">
                      <p className="font-body font-bold text-sage-600 text-lg">Apr 2025 – June 2025</p>
                      <p className="font-body font-semibold text-charcoal-800 text-lg">Software Engineer (Internship)</p>
                      <p className="font-body text-sm text-sage-600 font-medium mb-3">Claimtech | Remote</p>
                      <ul className="text-sm text-charcoal-600 space-y-2 list-disc list-inside">
                        <li>Built scalable features in a Laravel + Vue.js system, including server-side pagination, filtering, and dynamic UI components.</li>
                        <li>Developed an ensemble-based matching system using OpenAI, Gemini, and Levenshtein logic for intelligent claim validation.</li>
                        <li>Documented workflow automations (crons, webhooks, status transitions) through technical diagrams and improved developer onboarding.</li>
                      </ul>
                    </div>

                    <div className="experience-item">
                      <p className="font-body font-bold text-sage-600 text-lg">Sept 2024 – Dec 2024</p>
                      <p className="font-body font-semibold text-charcoal-800 text-lg">Data Engineer (Internship)</p>
                      <p className="font-body text-sm text-sage-600 font-medium mb-3">Sand Technologies | Remote</p>
                      <ul className="text-sm text-charcoal-600 space-y-2 list-disc list-inside">
                        <li>Led the development of a universal web scraper with proxy management and pagination for dynamic websites.</li>
                        <li>Built scalable data pipelines to automate attendee data integration for sales.</li>
                        <li>Managed AWS infrastructure, ensuring secure and efficient data storage and retrieval.</li>
                      </ul>
                    </div>

                    <div className="experience-item">
                      <p className="font-body font-bold text-sage-600 text-lg">Jan 2024 – Aug 2024</p>
                      <p className="font-body font-semibold text-charcoal-800 text-lg">Data Engineer (Apprenticeship)</p>
                      <p className="font-body text-sm text-sage-600 font-medium mb-3">Explore AI | Remote</p>
                      <ul className="text-sm text-charcoal-600 space-y-2 list-disc list-inside">
                        <li>Automated data integration for sales pipelines, ensuring efficiency and accuracy.</li>
                        <li>Gained hands-on experience with AWS, SQL, Python, and Apache Airflow while building real-world data pipelines.</li>
                        <li>Managed cloud infrastructure, optimizing secure data storage and retrieval.</li>
                      </ul>
                    </div>

                    <div className="experience-item">
                      <p className="font-body font-bold text-sage-600 text-lg">Aug 2020 – Feb 2021</p>
                      <p className="font-body font-semibold text-charcoal-800 text-lg">Student Quantity Surveyor (Seasonal)</p>
                      <p className="font-body text-sm text-sage-600 font-medium mb-3">Barrow Construction | Johannesburg, ZA</p>
                      <ul className="text-sm text-charcoal-600 space-y-2 list-disc list-inside">
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
              <div className="space-y-6">
                <div className="section-card p-8 animate-slide-up">
                  <div className="flex items-center gap-3 mb-6">
                    <GraduationCap className="w-6 h-6 text-sage-600" />
                    <h2 className="font-display text-2xl font-semibold text-charcoal-800">Education</h2>
                  </div>
                  <div className="space-y-6">
                    <div className="experience-item">
                      <p className="font-body font-bold text-sage-600 text-lg">Dec 2024</p>
                      <p className="font-body font-semibold text-charcoal-800 text-lg">Higher Certificate in Information Technology Systems, Data Engineering</p>
                      <p className="font-body text-sm text-sage-600 font-medium">Explore AI Academy</p>
                    </div>
                    <div className="experience-item">
                      <p className="font-body font-bold text-sage-600 text-lg">Dec 2023</p>
                      <p className="font-body font-semibold text-charcoal-800 text-lg">Bachelor of Science (Hons), Quantity Surveying</p>
                      <p className="font-body text-sm text-sage-600 font-medium">University of the Witwatersrand</p>
                    </div>
                    <div className="experience-item">
                      <p className="font-body font-bold text-sage-600 text-lg">Dec 2022</p>
                      <p className="font-body font-semibold text-charcoal-800 text-lg">Bachelor of Science, Construction Studies</p>
                      <p className="font-body text-sm text-sage-600 font-medium">University of the Witwatersrand</p>
                    </div>
                  </div>
                </div>

                <div className="section-card p-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
                  <div className="flex items-center gap-3 mb-6">
                    <Award className="w-6 h-6 text-sage-600" />
                    <h2 className="font-display text-2xl font-semibold text-charcoal-800">Certifications</h2>
                  </div>
                  <div className="space-y-4">
                    <div className="experience-item">
                      <p className="font-body font-semibold text-charcoal-800 text-lg">AWS Certified Cloud Practitioner</p>
                      <p className="font-body text-sm text-sage-600 font-medium">AWS (2022)</p>
                    </div>
                    <div className="experience-item">
                      <p className="font-body font-semibold text-charcoal-800 text-lg">S201 and S202 Digital Planning with Candy</p>
                      <p className="font-body text-sm text-sage-600 font-medium">RIB CCS Academy (2021)</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'skills' && (
              <div className="space-y-8">
                <div className="section-card p-8 animate-slide-up">
                  <div className="flex items-center gap-3 mb-6">
                    <Code className="w-6 h-6 text-sage-600" />
                    <h2 className="font-display text-2xl font-semibold text-charcoal-800">Skills</h2>
                  </div>
                  <div className="space-y-8">
                    <div>
                      <h4 className="font-body font-bold text-charcoal-800 mb-6 text-lg">Technical Skills</h4>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {Object.entries(skillCategories).map(([category, skills]) => (
                          <div key={category} className="space-y-4">
                            <h5 className="font-body font-semibold text-sage-700 text-base border-b border-sage-200 pb-2">
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
                      <h4 className="font-body font-bold text-charcoal-800 mb-4 text-lg">Interpersonal Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {['Problem-Solving', 'Project Management', 'Effective Communication', 'Adaptability', 'Multitasking', 'Highly Organized'].map((skill) => (
                          <span key={skill} className="skill-tag">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'projects' && (
              <div className="space-y-6">
                <div className="section-card p-8 animate-slide-up">
                  <div className="flex items-center gap-3 mb-6">
                    <FolderOpen className="w-6 h-6 text-sage-600" />
                    <h2 className="font-display text-2xl font-semibold text-charcoal-800">Technical Projects</h2>
                  </div>
                  <div className="space-y-6">
                    {projects.map((project, index) => (
                      <ProjectCard key={project.title} project={project} index={index} />
                    ))}
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
