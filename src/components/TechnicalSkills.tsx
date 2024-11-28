import React from 'react';
import { Code2, Database, Terminal, Brain, Globe, Shield, Blocks } from 'lucide-react';

export default function TechnicalSkills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code2,
      skills: [
        'React.js',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'SCSS/SASS',
        'HTML5/CSS3',
        'Redux',
        'Material UI'
      ]
    },
    {
      title: 'Backend Development',
      icon: Globe,
      skills: [
        'Node.js',
        'Express.js',
        'REST APIs',
        'MongoDB',
        'Mongoose',
        'SQL',
        'JWT',
        'WebSocket'
      ]
    },
    {
      title: 'CS Fundamentals',
      icon: Brain,
      skills: [
        'Data Structures',
        'Algorithms',
        'OOPS',
        'Operating Systems',
        'DBMS',
        'Computer Networks',
        'System Design'
      ]
    },
    {
      title: 'Other Skills',
      icon: Blocks,
      skills: [
        'Git/GitHub',
        'Docker',
        'AWS',
        'Blockchain',
        'Ethereum',
        'Smart Contracts',
        'Ethical Hacking',
        'Penetration Testing'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <Terminal className="text-blue-400" />
          <h2 className="text-3xl font-bold">Technical Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-category-card p-6 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <category.icon className="text-blue-400" size={20} />
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="tech-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}