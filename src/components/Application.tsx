import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { WhitelistApplication } from '../types';

export default function Application() {
  const [formData, setFormData] = useState<WhitelistApplication>({
    name: '',
    discord_id: '',
    rp_experience: '',
    character_story: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const { error } = await supabase.from('whitelist_applications').insert([formData]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        name: '',
        discord_id: '',
        rp_experience: '',
        character_story: '',
      });

      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="apply" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Apply for Whitelist
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-green-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Fill out the application form below. Please be honest and detailed in your responses.
            Applications are reviewed within 24-48 hours.
          </p>
        </div>

        {submitStatus === 'success' && (
          <div className="mb-8 bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/30 rounded-lg p-6 flex items-start gap-4 animate-fade-in">
            <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="text-green-400 font-semibold text-lg mb-2">Application Submitted!</h3>
              <p className="text-gray-400">
                Your application has been received. Check your Discord for updates within 24-48 hours.
              </p>
            </div>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-8 bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/30 rounded-lg p-6 flex items-start gap-4 animate-fade-in">
            <AlertCircle className="text-red-400 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="text-red-400 font-semibold text-lg mb-2">Submission Failed</h3>
              <p className="text-gray-400">{errorMessage || 'Please try again later.'}</p>
            </div>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-cyan-500/5 to-transparent border border-cyan-500/20 rounded-lg p-8 space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-cyan-400 font-semibold mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="discord_id" className="block text-cyan-400 font-semibold mb-2">
              Discord ID *
            </label>
            <input
              type="text"
              id="discord_id"
              name="discord_id"
              value={formData.discord_id}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
              placeholder="username#1234"
            />
          </div>

          <div>
            <label htmlFor="rp_experience" className="block text-cyan-400 font-semibold mb-2">
              Roleplay Experience *
            </label>
            <textarea
              id="rp_experience"
              name="rp_experience"
              value={formData.rp_experience}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
              placeholder="Describe your previous roleplay experience, including servers you've played on and characters you've played..."
            />
          </div>

          <div>
            <label htmlFor="character_story" className="block text-cyan-400 font-semibold mb-2">
              Character Backstory *
            </label>
            <textarea
              id="character_story"
              name="character_story"
              value={formData.character_story}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
              placeholder="Write your character's backstory. Include their background, personality, goals, and how they ended up in Los Santos..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Submitting...
              </>
            ) : (
              <>
                <Send size={20} />
                Submit Application
              </>
            )}
          </button>

          <p className="text-gray-500 text-sm text-center">
            By submitting this application, you agree to follow all server rules and guidelines.
          </p>
        </form>
      </div>
    </section>
  );
}
