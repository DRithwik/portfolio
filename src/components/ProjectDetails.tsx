import React from 'react';
import { X, Server, Package, Globe, Database, Calendar } from 'lucide-react';

interface ProjectDetailsProps {
  onClose: () => void;
}

export default function ProjectDetails({ onClose }: ProjectDetailsProps) {
  const techStack = {
    frontend: ['Next.js', 'React.js', 'SCSS/SASS'],
    backend: ['Express.js', 'MongoDB', 'Mongoose', 'Nodemailer'],
    deployment: ['Vercel', 'Heroku', 'MongoDB Atlas']
  };

  const features = [
    { title: 'Slash Commands', desc: 'Dynamic block type changes with / commands' },
    { title: 'HTML Support', desc: 'Direct HTML tag usage in text blocks' },
    { title: 'Image Support', desc: 'Image uploads via /image command' },
    { title: 'Drag and Drop', desc: 'Seamless content block reordering' },
    { title: 'Guest Editing', desc: 'Public page sharing and collaborative editing' },
    { title: 'User Management', desc: 'JWT-based authentication with cookies' },
    { title: 'Scheduled Jobs', desc: 'Automated cleanup of inactive content' }
  ];

  return (
    <div className="fixed inset-0 bg-gray-900/95 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="max-w-4xl mx-auto p-6 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-800 transition-colors"
        >
          <X className="text-gray-400 hover:text-white" />
        </button>

        <div className="space-y-8 py-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Notion Clone</h2>
            <p className="text-gray-300 leading-relaxed">
              A feature-rich web application replicating Notion.so's powerful note-taking and editing capabilities,
              built with modern technologies and best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Package className="text-blue-400" />
                Key Features
              </h3>
              <div className="space-y-4">
                {features.map(feature => (
                  <div key={feature.title} className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                    <h4 className="font-medium text-blue-400 mb-1">{feature.title}</h4>
                    <p className="text-gray-300 text-sm">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Server className="text-blue-400" />
                  Tech Stack
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                    <h4 className="font-medium text-blue-400 mb-2">Frontend</h4>
                    <div className="flex flex-wrap gap-2">
                      {techStack.frontend.map(tech => (
                        <span key={tech} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                    <h4 className="font-medium text-blue-400 mb-2">Backend</h4>
                    <div className="flex flex-wrap gap-2">
                      {techStack.backend.map(tech => (
                        <span key={tech} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                    <h4 className="font-medium text-blue-400 mb-2">Deployment</h4>
                    <div className="flex flex-wrap gap-2">
                      {techStack.deployment.map(tech => (
                        <span key={tech} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Globe className="text-blue-400" />
                  Deployment
                </h3>
                <div className="space-y-2 text-gray-300">
                  <p>• Frontend hosted on Vercel with SSR support</p>
                  <p>• Backend deployed on Heroku</p>
                  <p>• Database hosted on MongoDB Atlas</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Calendar className="text-blue-400" />
                  Key Learnings
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Rich text editor implementation with advanced features</li>
                  <li>Full-stack application architecture and integration</li>
                  <li>Secure user authentication and management</li>
                  <li>Large-scale application deployment and scaling</li>
                  <li>Efficient database management with MongoDB Atlas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}