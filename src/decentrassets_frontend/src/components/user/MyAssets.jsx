import React from 'react';
import AssetCard from '../shared/AssetCard';

// Asset data
const userAssets = [
  {
    type: 'real-estate',
    name: 'Luxury Apartment',
    value: 750000,
    status: 'verified',
    description: 'Modern 3-bedroom apartment in downtown',
    owner: 'John Doe',
  },
  {
    type: 'vehicle',
    name: 'Tesla Model S',
    value: 85000,
    status: 'verified',
    description: 'Electric vehicle with premium features',
    owner: 'John Doe',
  },
  {
    type: 'art',
    name: 'Abstract Painting',
    value: 25000,
    status: 'pending',
    description: 'Original artwork by Jane Smith',
    owner: 'John Doe',
  },
  {
    type: 'digital',
    name: 'Digital Art Collection',
    value: 15000,
    status: 'verified',
    description: 'Collection of rare NFTs',
    owner: 'John Doe',
  },
];

// MyAssets Component
export default function MyAssets() {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">My Assets</h1>
        <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          Register New Asset
        </button>
      </div>

      {/* Asset Cards Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {userAssets.map((asset, index) => (
          <AssetCard key={index} {...asset} />
        ))}
      </div>
    </div>
  );
}
