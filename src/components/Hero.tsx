import { ArrowRight, Users, Radio } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #000000, #0a0a0a, #111111)',
      }}
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-transparent to-green-500/20 animate-pulse"></div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-cyan-400/20 rounded-full animate-pulse"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 3 + 's',
              animationDuration: Math.random() * 3 + 2 + 's',
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
            <Radio size={16} className="text-cyan-400 animate-pulse" />
            <span className="text-cyan-400 text-sm font-medium">Server Online</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
            Los Santos RP
          </span>
          <br />
          <span className="text-white text-3xl md:text-5xl">Your Story Begins Here</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Experience immersive roleplay in a serious, streamer-friendly community.
          Join hundreds of players in the most realistic GTA V RP experience.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="https://discord.gg/yourserver"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2 hover:scale-105"
          >
            <Users size={20} />
            Join Discord
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>

          <button
            onClick={() =>
              document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="px-8 py-4 bg-transparent border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
          >
            Apply for Whitelist
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/30 rounded-lg p-6 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
            <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
            <div className="text-gray-400">Active Members</div>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/30 rounded-lg p-6 backdrop-blur-sm hover:border-green-500/50 transition-all duration-300">
            <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
            <div className="text-gray-400">Server Uptime</div>
          </div>

          <div className="bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/30 rounded-lg p-6 backdrop-blur-sm hover:border-orange-500/50 transition-all duration-300">
            <div className="text-3xl font-bold text-orange-400 mb-2">Serious</div>
            <div className="text-gray-400">Roleplay Quality</div>
          </div>
        </div>

        <div className="mt-12 p-6 bg-black/50 border border-cyan-500/20 rounded-lg backdrop-blur-sm max-w-md mx-auto">
          <div className="text-cyan-400 font-semibold mb-3">Server Connection</div>
          <div className="text-gray-300 font-mono text-sm">
            connect cfx.re/join/your-server-code
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-cyan-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
