import { Crown, Shield, Users as UsersIcon, Code } from 'lucide-react';
import type { StaffMember } from '../types';

export default function Staff() {
  const staffCategories = [
    {
      title: 'Owners',
      icon: Crown,
      color: 'cyan',
      members: [
        {
          name: 'John Martinez',
          role: 'Server Owner',
          avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
          discord: 'JohnM#0001',
        },
        {
          name: 'Sarah Chen',
          role: 'Co-Owner',
          avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
          discord: 'SarahC#0002',
        },
      ],
    },
    {
      title: 'Administrators',
      icon: Shield,
      color: 'green',
      members: [
        {
          name: 'Mike Johnson',
          role: 'Head Admin',
          avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
          discord: 'MikeJ#0003',
        },
        {
          name: 'Emily Davis',
          role: 'Admin',
          avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
          discord: 'EmilyD#0004',
        },
      ],
    },
    {
      title: 'Moderators',
      icon: UsersIcon,
      color: 'orange',
      members: [
        {
          name: 'Alex Rodriguez',
          role: 'Senior Moderator',
          avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200',
          discord: 'AlexR#0005',
        },
        {
          name: 'Lisa Wang',
          role: 'Moderator',
          avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200',
          discord: 'LisaW#0006',
        },
      ],
    },
    {
      title: 'Developers',
      icon: Code,
      color: 'cyan',
      members: [
        {
          name: 'Chris Taylor',
          role: 'Lead Developer',
          avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200',
          discord: 'ChrisT#0007',
        },
      ],
    },
  ];

  const iconMap = {
    Crown,
    Shield,
    UsersIcon,
    Code,
  };

  return (
    <section id="staff" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Our Staff Team
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-green-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Meet the dedicated team working behind the scenes to make your roleplay experience exceptional.
          </p>
        </div>

        <div className="space-y-12">
          {staffCategories.map((category, catIndex) => {
            const Icon = category.icon;
            const colorClasses = {
              cyan: 'from-cyan-500/10 border-cyan-500/30 text-cyan-400 bg-cyan-500/20',
              green: 'from-green-500/10 border-green-500/30 text-green-400 bg-green-500/20',
              orange: 'from-orange-500/10 border-orange-500/30 text-orange-400 bg-orange-500/20',
            };

            return (
              <div key={catIndex}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 ${colorClasses[category.color as keyof typeof colorClasses].split(' ')[3]} rounded-lg`}>
                    <Icon className={colorClasses[category.color as keyof typeof colorClasses].split(' ')[2]} size={24} />
                  </div>
                  <h3 className="text-white font-bold text-2xl">{category.title}</h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.members.map((member, memberIndex) => (
                    <div
                      key={memberIndex}
                      className={`bg-gradient-to-br ${colorClasses[category.color as keyof typeof colorClasses].split(' ')[0]} to-transparent border ${colorClasses[category.color as keyof typeof colorClasses].split(' ')[1]} rounded-lg p-6 hover:border-${category.color}-500/50 transition-all duration-300 hover:transform hover:scale-105`}
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-${category.color}-500/50">
                          <img
                            src={member.avatar}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="text-white font-semibold text-lg mb-1">{member.name}</h4>
                        <p className={`${colorClasses[category.color as keyof typeof colorClasses].split(' ')[2]} text-sm mb-3`}>
                          {member.role}
                        </p>
                        {member.discord && (
                          <div className="text-gray-400 text-xs font-mono">{member.discord}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-br from-cyan-500/5 to-transparent border border-cyan-500/20 rounded-lg p-8 text-center">
          <h3 className="text-white font-bold text-2xl mb-4">Want to Join Our Team?</h3>
          <p className="text-gray-400 mb-6">
            We're always looking for dedicated, passionate individuals to help grow our community.
            Staff applications open periodically.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
            Join Discord for Updates
          </button>
        </div>
      </div>
    </section>
  );
}
