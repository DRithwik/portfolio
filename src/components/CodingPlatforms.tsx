import React from 'react';
import { Code2, ExternalLink } from 'lucide-react';

export default function CodingPlatforms() {
  const platforms = [
    {
      name: 'GeeksforGeeks',
      username: 'rithwik_d',
      url: 'https://auth.geeksforgeeks.org/user/rithwik_d',
      achievements: 'Rank 1 in Institute (VCE), 210+ Days Streak'
    },
    {
      name: 'CodeChef',
      username: 'rithwik007',
      url: 'https://www.codechef.com/users/rithwik007',
      achievements: '150+ Days Streak'
    },
    {
      name: 'LeetCode',
      username: 'Rithwik_D',
      url: 'https://leetcode.com/u/Rithwik_D/',
      achievements: 'Consistent Problem Solving'
    },
    {
      name: 'Coding Ninjas',
      username: 'rithwik_d',
      url: 'https://www.naukri.com/code360/profile/e79ad955-af5d-4a19-beca-cb89b1e84273',
      achievements: 'Advanced Problem Solving'
    },
    {
      name: 'InterviewBit',
      username: 'rithwik-d',
      url: 'https://www.interviewbit.com/profile/rithwik-d/',
      achievements: 'Advanced Problem Solving'
    }
  ];

  return (
    <section id="coding-platforms" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <Code2 className="text-blue-400" />
          <h2 className="text-3xl font-bold">Coding Platforms</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {platforms.map((platform) => (
            <div key={platform.name} className="platform-card group">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{platform.name}</h3>
                <p className="text-gray-400 mb-2">@{platform.username}</p>
                <p className="text-gray-300 mb-4">{platform.achievements}</p>
                <a 
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Profile <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}