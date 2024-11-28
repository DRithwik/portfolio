import React from 'react';
import { Code2, Server, Terminal, Shield, Brain, Blocks } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code2,
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'JavaScript', level: 92 },
      { name: 'SCSS/SASS', level: 88 },
      { name: 'Tailwind CSS', level: 90 }
    ]
  },
  {
    title: 'Backend Development',
    icon: Server,
    skills: [
      { name: 'Express.js', level: 85 },
      { name: 'REST APIs', level: 88 },
      { name: 'MongoDB', level: 85 },
      { name: 'Mongoose', level: 83 }
    ]
  },
  {
    title: 'Programming Languages',
    icon: Terminal,
    skills: [
      { name: 'C++', level: 95 },
      { name: 'Python', level: 88 },
      { name: 'JavaScript', level: 92 }
    ]
  },
  {
    title: 'Cybersecurity',
    icon: Shield,
    skills: [
      { name: 'Ethical Hacking', level: 85 },
      { name: 'Penetration Testing', level: 82 }
    ]
  },
  {
    title: 'Problem Solving',
    icon: Brain,
    skills: [
      { name: 'Data Structures', level: 90 },
      { name: 'Algorithms', level: 88 },
      { name: 'Competitive Programming', level: 85 }
    ]
  },
  {
    title: 'Blockchain',
    icon: Blocks,
    skills: [
      { name: 'Ethereum', level: 80 },
      { name: 'Smart Contracts', level: 78 }
    ]
  }
];

export default function Skills() {
  return (
    <div className="space-y-12">
      {skillCategories.map((category) => (
        <div key={category.title} className="space-y-6">
          <div className="flex items-center gap-2">
            <category.icon className="text-blue-400" size={24} />
            <h3 className="text-xl font-semibold">{category.title}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {category.skills.map((skill) => (
              <div key={skill.name} className="skill-card group">
                <div className="flex justify-between mb-2">
                  <span>{skill.name}</span>
                  <span className="text-blue-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-400 to-purple-500 transform origin-left transition-transform duration-1000 scale-x-0 group-hover:scale-x-100"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}