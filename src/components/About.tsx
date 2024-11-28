import React from 'react';
import { User, Code2, Rocket, Heart } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable and scalable solutions'
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'Optimizing for the best user experience'
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'Dedicated to creating impactful applications'
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-800/50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex items-center gap-2 mb-12">
          <User className="text-blue-400" />
          <h2 className="text-3xl font-bold">About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              As a passionate and driven Software Development Engineer (SDE), I thrive on solving challenging problems 
              and building impactful solutions. My journey in software development is fueled by a deep interest in 
              algorithms, data structures, and efficient system design.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              I have consistently honed my skills by working on diverse coding platforms like GeeksforGeeks, 
              CodeChef, and InterviewBit, where I have maintained impressive streaks and solved numerous 
              competitive programming problems.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              With a strong foundation in C++ and a knack for developing optimized solutions, I am enthusiastic 
              about creating high-quality software that makes a difference.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {highlights.map(({ icon: Icon, title, description }) => (
              <div key={title} className="highlight-card group">
                <Icon className="text-blue-400 group-hover:scale-110 transition-transform" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">{title}</h3>
                  <p className="text-gray-400 text-sm">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
    </section>
  );
}