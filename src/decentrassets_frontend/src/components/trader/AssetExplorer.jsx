import { useState } from 'react';
import AssetCard from '../shared/AssetCard';

const allAssets = [
  {
    type: 'real-estate',
    name: 'Mountain Villa',
    value: 2500000,
    description: 'Luxury villa with panoramic mountain views',
    owner: 'Alpine Properties LLC',
  },
  {
    type: 'vehicle',
    name: 'Ferrari F40',
    value: 1800000,
    description: 'Classic supercar in pristine condition',
    owner: 'Exotic Cars Ltd',
  },
  {
    type: 'art',
    name: 'Renaissance Painting',
    value: 350000,
    description: 'Original 16th century masterpiece',
    owner: 'Heritage Gallery',
  },
  {
    type: 'digital',
    name: 'Virtual Real Estate',
    value: 95000,
    description: 'Prime metaverse property',
    owner: 'Digital Ventures',
  },
];

export default function AssetExplorer() {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 5000000]);
  const [selectedTypes, setSelectedTypes] = useState(new Set());

  const filteredAssets = allAssets.filter(asset => {
    const matchesSearch =
      asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asset.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = asset.value >= priceRange[0] && asset.value <= priceRange[1];
    const matchesType = selectedTypes.size === 0 || selectedTypes.has(asset.type);
    return matchesSearch && matchesPrice && matchesType;
  });

  const handleTypeToggle = (type) => {
    const newTypes = new Set(selectedTypes);
    if (newTypes.has(type)) {
      newTypes.delete(type);
    } else {
      newTypes.add(type);
    }
    setSelectedTypes(newTypes);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Asset Explorer</h1>

      <div className="rounded-lg bg-white p-6 shadow-md">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <label className="block text-sm font-medium text-gray-700">Search</label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              placeholder="Search assets..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Price Range</label>
            <div className="mt-1 grid grid-cols-2 gap-4">
              <input
                type="number"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                placeholder="Min"
              />
              <input
                type="number"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                placeholder="Max"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Asset Types</label>
            <div className="mt-2 flex flex-wrap gap-2">
              {['real-estate', 'vehicle', 'art', 'digital'].map((type) => (
                <button
                  key={type}
                  onClick={() => handleTypeToggle(type)}
                  className={`rounded-full px-3 py-1 text-sm ${
                    selectedTypes.has(type)
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  {type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filteredAssets.map((asset, index) => (
          <AssetCard key={index} {...asset} />
        ))}
      </div>
    </div>
  );
}
