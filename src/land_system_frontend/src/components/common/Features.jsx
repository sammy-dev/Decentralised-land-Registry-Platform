import React from 'react';
import { Shield, Globe2, Coins, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Secure Transactions',
    description: 'Advanced blockchain technology ensures your assets are protected',
  },
  {
    icon: Globe2,
    title: 'Global Access',
    description: 'Trade assets with verified partners worldwide',
  },
  {
    icon: Coins,
    title: 'Asset Tokenization',
    description: 'Convert real-world assets into digital tokens',
  },
  {
    icon: BarChart3,
    title: 'Market Analytics',
    description: 'Real-time insights and market trends',
  },
];

export default function Features() {
  return (
    <section className="relative py-24 bg-blue-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Why Choose GlobalAssets?
          </h2>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Experience the future of asset trading with our cutting-edge platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-6 bg-blue-900/50 backdrop-blur-sm rounded-xl border border-blue-800/50 hover:bg-blue-900/70 transition-colors"
              >
                <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-blue-200">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}