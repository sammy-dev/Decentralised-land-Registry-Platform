import { useState } from 'react';
import AssetCard from '../shared/AssetCard';
import StatCard from '../shared/StatCard';

const marketAssets = [
  {
    type: 'real-estate',
    name: 'Downtown Office Space',
    value: 1200000,
    description: 'Prime location commercial property',
    owner: 'Commercial RE Corp',
  },
  {
    type: 'vehicle',
    name: 'Vintage Porsche 911',
    value: 175000,
    description: 'Fully restored classic car',
    owner: 'Classic Motors Ltd',
  },
  {
    type: 'art',
    name: 'Modern Sculpture',
    value: 45000,
    description: 'Contemporary bronze sculpture',
    owner: 'Art Gallery X',
  },
  {
    type: 'digital',
    name: 'Crypto Punk #1234',
    value: 85000,
    description: 'Rare NFT from popular collection',
    owner: 'Digital Assets Fund',
  },
];

export default function Market() {
  const [filter, setFilter] = useState('all');

  const filteredAssets = filter === 'all'
    ? marketAssets
    : marketAssets.filter((asset) => asset.type === filter);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Market</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Market Cap"
          value="$1.5B"
          change={2.5}
          description="Total market capitalization"
        />
        <StatCard
          title="24h Volume"
          value="$25M"
          change={-1.2}
          description="Trading volume in last 24 hours"
        />
        <StatCard
          title="Active Listings"
          value="156"
          change={5}
          description="Currently listed assets"
        />
        <StatCard
          title="Avg. Transaction"
          value="$125K"
          change={0.8}
          description="Average transaction value"
        />
      </div>

      <div className="flex space-x-4">
        <button
          onClick={() => setFilter('all')}
          className={`rounded-lg px-4 py-2 text-sm font-medium ${
            filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('real-estate')}
          className={`rounded-lg px-4 py-2 text-sm font-medium ${
            filter === 'real-estate' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Real Estate
        </button>
        <button
          onClick={() => setFilter('vehicle')}
          className={`rounded-lg px-4 py-2 text-sm font-medium ${
            filter === 'vehicle' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Vehicles
        </button>
        <button
          onClick={() => setFilter('art')}
          className={`rounded-lg px-4 py-2 text-sm font-medium ${
            filter === 'art' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Art
        </button>
        <button
          onClick={() => setFilter('digital')}
          className={`rounded-lg px-4 py-2 text-sm font-medium ${
            filter === 'digital' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Digital
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filteredAssets.map((asset, index) => (
          <AssetCard key={index} {...asset} />
        ))}
      </div>
    </div>
  );
}
