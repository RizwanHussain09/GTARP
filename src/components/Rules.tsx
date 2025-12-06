import { Shield, Users, Gavel, AlertTriangle } from 'lucide-react';

export default function Rules() {
  const ruleCategories = [
    {
      icon: Shield,
      title: 'Server Rules',
      color: 'cyan',
      rules: [
        'No cheating, hacking, or exploiting',
        'Respect all players and staff members',
        'No offensive or discriminatory language',
        'No advertising or self-promotion',
        'English only in public channels',
        'Follow staff instructions at all times',
      ],
    },
    {
      icon: Users,
      title: 'Roleplay Rules',
      color: 'green',
      rules: [
        'Stay in character at all times',
        'No Random Deathmatch (RDM)',
        'No Vehicle Deathmatch (VDM)',
        'Value your life (Fear RP)',
        'Realistic character development',
        'No metagaming or powergaming',
      ],
    },
    {
      icon: Gavel,
      title: 'Punishment System',
      color: 'orange',
      rules: [
        '1st Offense: Warning',
        '2nd Offense: 24-hour ban',
        '3rd Offense: 7-day ban',
        '4th Offense: 30-day ban',
        '5th Offense: Permanent ban',
        'Severe violations result in immediate permanent ban',
      ],
    },
  ];

  return (
    <section id="rules" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Server Rules
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-green-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Please read and understand all rules before applying. Ignorance of rules is not an excuse.
          </p>
        </div>

        <div className="bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/30 rounded-lg p-6 mb-12 flex items-start gap-4">
          <AlertTriangle className="text-orange-400 flex-shrink-0 mt-1" size={24} />
          <div>
            <h3 className="text-orange-400 font-semibold text-lg mb-2">Important Notice</h3>
            <p className="text-gray-400">
              Breaking any of these rules will result in punishment. Severe or repeated violations
              may lead to permanent removal from the community. Staff decisions are final.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ruleCategories.map((category, index) => {
            const Icon = category.icon;
            const colorClasses = {
              cyan: 'from-cyan-500/5 border-cyan-500/30 hover:border-cyan-500/50 text-cyan-400 bg-cyan-500/10',
              green: 'from-green-500/5 border-green-500/30 hover:border-green-500/50 text-green-400 bg-green-500/10',
              orange: 'from-orange-500/5 border-orange-500/30 hover:border-orange-500/50 text-orange-400 bg-orange-500/10',
            };

            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${colorClasses[category.color as keyof typeof colorClasses].split(' ')[0]} to-transparent border ${colorClasses[category.color as keyof typeof colorClasses].split(' ')[1]} rounded-lg p-8 hover:${colorClasses[category.color as keyof typeof colorClasses].split(' ')[2]} transition-all duration-300`}
              >
                <div className={`inline-flex items-center justify-center p-3 ${colorClasses[category.color as keyof typeof colorClasses].split(' ')[4]} rounded-lg mb-6`}>
                  <Icon className={colorClasses[category.color as keyof typeof colorClasses].split(' ')[3]} size={32} />
                </div>
                <h3 className="text-white font-bold text-xl mb-6">{category.title}</h3>
                <ul className="space-y-3">
                  {category.rules.map((rule, ruleIndex) => (
                    <li key={ruleIndex} className="flex items-start gap-3 text-gray-400">
                      <span className={`${colorClasses[category.color as keyof typeof colorClasses].split(' ')[3]} mt-1 flex-shrink-0`}>
                        •
                      </span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-br from-cyan-500/5 to-transparent border border-cyan-500/20 rounded-lg p-8">
          <h3 className="text-white font-bold text-2xl mb-4">Additional Guidelines</h3>
          <div className="grid md:grid-cols-2 gap-6 text-gray-400">
            <div>
              <h4 className="text-cyan-400 font-semibold mb-3">Character Guidelines</h4>
              <ul className="space-y-2">
                <li>• Characters must be realistic and well-developed</li>
                <li>• No overpowered or unrealistic backstories</li>
                <li>• Each character must have unique traits and flaws</li>
                <li>• Criminal records should be earned through RP</li>
              </ul>
            </div>
            <div>
              <h4 className="text-green-400 font-semibold mb-3">Communication</h4>
              <ul className="space-y-2">
                <li>• Use /ooc for out-of-character chat sparingly</li>
                <li>• Report rule violations to staff immediately</li>
                <li>• No arguing with staff in public channels</li>
                <li>• Keep voice chat professional and in-character</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
