import React from 'react';
import { ArrowRight, Globe2, Shield, Lock, Coins } from 'lucide-react';
import StatsCounter from './StatsCounter';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="relative container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-blue-800/30 rounded-full mb-6 backdrop-blur-sm border border-blue-700/30">
              <span className="text-yellow-400 text-sm font-semibold">Trusted by 10,000+ users worldwide</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                Empowering Secure Global
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                Asset Transactions
              </span>
            </h1>
            <p className="text-blue-100 text-lg mb-8 max-w-xl">
              Join the revolution in decentralized asset trading. Secure, transparent, and globally accessible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                Explore Assets
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 backdrop-blur-sm transition-all flex items-center justify-center gap-2">
                Register Asset
                <Globe2 className="w-5 h-5" />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <StatsCounter icon={Shield} label="Verified Assets" value="50K+" />
              <StatsCounter icon={Lock} label="Secure Transactions" value="100K+" />
              <StatsCounter icon={Coins} label="Total Volume" value="$2B+" />
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Dashboard Preview */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                  alt="Dashboard Preview"
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-blue-900/30">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center">
                        <Globe2 className="w-6 h-6 text-blue-900" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Real-time Dashboard</h3>
                        <p className="text-blue-200 text-sm">Track your assets globally</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                        <p className="text-blue-200 text-sm">Total Assets</p>
                        <p className="text-white font-bold text-xl">$1.2M</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                        <p className="text-blue-200 text-sm">Active Trades</p>
                        <p className="text-white font-bold text-xl">24</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}