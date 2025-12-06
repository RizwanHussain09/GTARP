import { Heart, MessageCircle, Youtube, Twitch, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: MessageCircle, label: 'Discord', url: 'https://discord.gg/yourserver', color: 'hover:text-cyan-400' },
    { icon: Twitch, label: 'Twitch', url: 'https://twitch.tv/yourchannel', color: 'hover:text-purple-400' },
    { icon: Youtube, label: 'YouTube', url: 'https://youtube.com/yourchannel', color: 'hover:text-red-400' },
    { icon: Instagram, label: 'Instagram', url: 'https://instagram.com/yourpage', color: 'hover:text-pink-400' },
    { icon: Twitter, label: 'Twitter', url: 'https://twitter.com/yourpage', color: 'hover:text-blue-400' },
  ];

  return (
    <footer className="bg-black border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent mb-4">
              Los Santos RP
            </h3>
            <p className="text-gray-400 mb-4">
              Experience immersive roleplay in the most realistic GTA V RP community.
              Your story begins here.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Server Online - 127 Players</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Rules', 'Apply', 'Departments', 'Staff'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() =>
                      document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
                    }
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
            <div className="flex flex-wrap gap-4 mb-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transition-colors`}
                    aria-label={social.label}
                  >
                    <Icon size={24} />
                  </a>
                );
              })}
            </div>

            <a
              href="https://discord.gg/yourserver"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-green-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
            >
              <MessageCircle size={20} />
              Join Discord
            </a>
          </div>
        </div>

        <div className="border-t border-cyan-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 Los Santos RP. All rights reserved.
            </div>

            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart size={16} className="text-red-400 animate-pulse" />
              <span>for the community</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
