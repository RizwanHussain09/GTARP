import { Target, Heart, Trophy, Shield } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Target,
      title: 'Serious Roleplay',
      description: 'Experience realistic, immersive roleplay with dedicated players who value quality storytelling.',
      color: 'cyan',
    },
    {
      icon: Heart,
      title: 'Streamer Friendly',
      description: 'Built for content creators with optimized performance and supportive community guidelines.',
      color: 'green',
    },
    {
      icon: Trophy,
      title: 'Active Community',
      description: 'Join a thriving community with regular events, updates, and dedicated staff support.',
      color: 'orange',
    },
    {
      icon: Shield,
      title: 'Professional Staff',
      description: 'Experienced moderators and admins ensure fair play and an enjoyable experience for everyone.',
      color: 'cyan',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              About Los Santos RP
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-green-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Welcome to Los Santos RP, where your story comes to life in the most immersive
            GTA V roleplay experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-cyan-500/5 to-transparent border border-cyan-500/20 rounded-lg p-8 hover:border-cyan-500/40 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-4">Our Story</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Founded by a passionate group of roleplayers and streamers, Los Santos RP was created
              to provide an authentic, serious roleplay environment where every interaction matters
              and every story is unique.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We've built a community that values quality over quantity, where character development
              and immersive storytelling are at the heart of everything we do. Whether you're a
              law-abiding citizen, a criminal mastermind, or anything in between, your journey starts here.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-500/5 to-transparent border border-green-500/20 rounded-lg p-8 hover:border-green-500/40 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-4">Roleplay Style</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              <span className="text-cyan-400 font-semibold">Serious RP:</span> We maintain high
              standards for roleplay quality. Every action should have consequences, and characters
              should be played realistically.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              <span className="text-green-400 font-semibold">Voice Required:</span> All interactions
              must be done via voice chat to maintain immersion and authenticity.
            </p>
            <p className="text-gray-400 leading-relaxed">
              <span className="text-orange-400 font-semibold">Whitelist Only:</span> All players
              must apply and be approved to ensure community quality and compatibility.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colorClasses = {
              cyan: 'from-cyan-500/10 border-cyan-500/30 hover:border-cyan-500/50 text-cyan-400',
              green: 'from-green-500/10 border-green-500/30 hover:border-green-500/50 text-green-400',
              orange: 'from-orange-500/10 border-orange-500/30 hover:border-orange-500/50 text-orange-400',
            };

            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${colorClasses[feature.color as keyof typeof colorClasses].split(' ')[0]} to-transparent border ${colorClasses[feature.color as keyof typeof colorClasses].split(' ')[1]} rounded-lg p-6 hover:${colorClasses[feature.color as keyof typeof colorClasses].split(' ')[2]} transition-all duration-300 hover:transform hover:scale-105`}
              >
                <Icon className={`${colorClasses[feature.color as keyof typeof colorClasses].split(' ')[3]} mb-4`} size={32} />
                <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
