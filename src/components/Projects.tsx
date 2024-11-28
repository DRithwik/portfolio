import React, { useState } from 'react';
import { Code2, ExternalLink } from 'lucide-react';
import ProjectDetails from './ProjectDetails';

const projects = [
  {
    title: 'Microsoft Loop Clone',
    desc: 'Real-time collaborative workspace with document editing and team collaboration features',
    tech: ['Next.js', 'React.js', 'Tailwind CSS', 'Liveblocks'],
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80',
    link: 'https://github.com/DRithwik'
  },
  {
    title: 'Hotel Booking System',
    desc: 'Full-stack booking platform with real-time availability and instant confirmation',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
    link: 'https://github.com/DRithwik'
  },
  {
    title: 'Notion Clone',
    desc: 'Feature-rich document collaboration platform with real-time editing capabilities',
    tech: ['Next.js', 'TypeScript', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80',
    link: 'https://github.com/DRithwik'
  }
];

export default function Projects() {
  const [showProjectDetails, setShowProjectDetails] = useState(false);

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex items-center gap-2 mb-8">
          <Code2 className="text-blue-400" />
          <h2 className="text-3xl font-bold">Featured Projects</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="project-card group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>
              <div className="p-6 relative">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.desc}</p>
                <div className="flex gap-2 flex-wrap mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Code <ExternalLink size={16} />
                  </a>
                  {project.title === 'Notion Clone' && (
                    <button 
                      onClick={() => setShowProjectDetails(true)}
                      className="project-link"
                    >
                      View Details <ExternalLink size={16} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showProjectDetails && (
        <ProjectDetails onClose={() => setShowProjectDetails(false)} />
      )}
    </section>
  );
}