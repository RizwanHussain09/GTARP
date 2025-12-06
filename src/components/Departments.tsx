import { Shield, Heart, Skull, Users, Building } from 'lucide-react';
import type { Department } from '../types';

export default function Departments() {
  const departments: Department[] = [
    {
      name: 'Los Santos Police',
      icon: 'Shield',
      description: 'Protect and serve the citizens of Los Santos. Enforce the law and maintain order.',
      color: 'cyan',
    },
    {
      name: 'Emergency Medical',
      icon: 'Heart',
      description: 'Save lives and provide medical assistance. First responders to emergencies.',
      color: 'green',
    },
    {
      name: 'Criminal Organizations',
      icon: 'Skull',
      description: 'Run illegal operations, control territory, and build your criminal empire.',
      color: 'orange',
    },
    {
      name: 'Civilian Life',
      icon: 'Users',
      description: 'Live an honest life with various jobs including mechanics, taxi drivers, and business owners.',
      color: 'cyan',
    },
    {
      name: 'Government',
      icon: 'Building',
      description: 'Shape the city through politics, create laws, and manage public services.',
      color: 'green',
    },
  ];

  const iconMap = {
    Shield,
    Heart,
    Skull,
    Users,
    Building,
  };

  return (
    <section id="departments" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Departments & Factions
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-green-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Choose your path and make your mark in Los Santos. Each role offers unique gameplay and opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => {
            const Icon = iconMap[dept.icon as keyof typeof iconMap];
            const colorClasses = {
              cyan: 'from-cyan-500/10 border-cyan-500/30 hover:border-cyan-500/50 text-cyan-400 shadow-cyan-500/20',
              green: 'from-green-500/10 border-green-500/30 hover:border-green-500/50 text-green-400 shadow-green-500/20',
              orange: 'from-orange-500/10 border-orange-500/30 hover:border-orange-500/50 text-orange-400 shadow-orange-500/20',
            };

            return (
              <div
                key={index}
                className={`group bg-gradient-to-br ${colorClasses[dept.color as keyof typeof colorClasses].split(' ')[0]} to-transparent border ${colorClasses[dept.color as keyof typeof colorClasses].split(' ')[1]} rounded-lg p-8 hover:${colorClasses[dept.color as keyof typeof colorClasses].split(' ')[2]} transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-${colorClasses[dept.color as keyof typeof colorClasses].split(' ')[4]}`}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-black/50 rounded-lg mb-6 group-hover:scale-110 transition-transform">
                  <Icon className={colorClasses[dept.color as keyof typeof colorClasses].split(' ')[3]} size={32} />
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{dept.name}</h3>
                <p className="text-gray-400">{dept.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-br from-cyan-500/5 to-transparent border border-cyan-500/20 rounded-lg p-8 text-center">
          <h3 className="text-white font-bold text-2xl mb-4">Ready to Join?</h3>
          <p className="text-gray-400 mb-6">
            Submit your whitelist application and start your journey in Los Santos today.
          </p>
          <button
            onClick={() =>
              document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
          >
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
}
