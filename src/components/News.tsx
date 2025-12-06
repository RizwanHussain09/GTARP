import { Calendar, TrendingUp } from 'lucide-react';
import type { NewsItem } from '../types';

export default function News() {
  const news: NewsItem[] = [
    {
      id: '1',
      title: 'New Department: Los Santos Medical',
      content:
        'We are excited to announce the launch of our new EMS department. Applications are now open for all medical roles.',
      date: '2024-12-05',
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: '2',
      title: 'Server Update v2.5',
      content:
        'Major performance improvements, new vehicles, and enhanced police mechanics. Check Discord for full patch notes.',
      date: '2024-12-03',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: '3',
      title: 'Community Event: Street Racing Championship',
      content:
        'Join us this Saturday for our monthly street racing championship. Prizes and exclusive rewards for winners!',
      date: '2024-12-01',
      image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Latest News
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-green-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Stay updated with the latest announcements, events, and updates from Los Santos RP.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div
              key={item.id}
              className="group bg-gradient-to-br from-cyan-500/5 to-transparent border border-cyan-500/20 rounded-lg overflow-hidden hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-lg px-3 py-1">
                    <TrendingUp size={14} className="text-cyan-400 inline mr-1" />
                    <span className="text-cyan-400 text-xs font-semibold">New</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                  <Calendar size={14} />
                  <span>{new Date(item.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>

                <h3 className="text-white font-bold text-xl mb-3 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">{item.content}</p>

                <button className="mt-4 text-cyan-400 text-sm font-semibold hover:text-cyan-300 transition-colors">
                  Read more →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
