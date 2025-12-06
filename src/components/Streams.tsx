import { Twitch, Youtube, Calendar, Play } from 'lucide-react';

export default function Streams() {
  const schedule = [
    { day: 'Monday', time: '8:00 PM EST', streamer: 'OfficerJohnson', platform: 'Twitch' },
    { day: 'Wednesday', time: '7:00 PM EST', streamer: 'MedicMike', platform: 'Twitch' },
    { day: 'Friday', time: '9:00 PM EST', streamer: 'GangLeader', platform: 'YouTube' },
    { day: 'Saturday', time: '6:00 PM EST', streamer: 'CivLife', platform: 'Twitch' },
  ];

  const recentClips = [
    {
      title: 'Epic Police Chase Through Downtown',
      thumbnail: 'https://images.pexels.com/photos/12935080/pexels-photo-12935080.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: '15K',
    },
    {
      title: 'Bank Heist Gone Wrong',
      thumbnail: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: '22K',
    },
    {
      title: 'Medical Emergency Downtown',
      thumbnail: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: '8K',
    },
  ];

  return (
    <section id="streams" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Live Streams & Media
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-green-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Watch our community members stream their roleplay adventures live.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-cyan-500/5 to-transparent border border-cyan-500/20 rounded-lg overflow-hidden">
              <div className="aspect-video bg-black/50 flex items-center justify-center relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-green-500/10"></div>
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-cyan-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform">
                    <Play size={32} className="text-cyan-400" />
                  </div>
                  <p className="text-gray-400">
                    No streams currently live. Check back later!
                  </p>
                  <div className="mt-4 flex items-center justify-center gap-4">
                    <a
                      href="https://twitch.tv/yourchannel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Twitch size={20} />
                      <span>Twitch</span>
                    </a>
                    <a
                      href="https://youtube.com/yourchannel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors"
                    >
                      <Youtube size={20} />
                      <span>YouTube</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500/5 to-transparent border border-green-500/20 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="text-green-400" size={24} />
              <h3 className="text-white font-bold text-xl">Stream Schedule</h3>
            </div>
            <div className="space-y-4">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className="bg-black/30 rounded-lg p-4 border border-green-500/10 hover:border-green-500/30 transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-green-400 font-semibold">{item.day}</span>
                    <span className="text-gray-400 text-sm">{item.time}</span>
                  </div>
                  <div className="text-white text-sm">{item.streamer}</div>
                  <div className="flex items-center gap-1 mt-2">
                    {item.platform === 'Twitch' ? (
                      <Twitch size={14} className="text-cyan-400" />
                    ) : (
                      <Youtube size={14} className="text-red-400" />
                    )}
                    <span className="text-gray-500 text-xs">{item.platform}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-white font-bold text-2xl mb-8">Recent Highlights</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {recentClips.map((clip, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-cyan-500/5 to-transparent border border-cyan-500/20 rounded-lg overflow-hidden hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={clip.thumbnail}
                    alt={clip.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-cyan-500/30 rounded-full flex items-center justify-center">
                      <Play size={24} className="text-white ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-white font-semibold mb-2 line-clamp-2">{clip.title}</h4>
                  <p className="text-gray-400 text-sm">{clip.views} views</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
