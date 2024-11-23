import React from 'react';
import { FiHome, FiImage, FiFileText } from 'react-icons/fi';
import { FaCar } from 'react-icons/fa';

// Asset icons mapping
const assetIcons = {
  'real-estate': FiHome,
  'vehicle': FaCar,
  'art': FiImage,
  'digital': FiFileText,
};

// Status colors for styling
const statusColors = {
  pending: 'bg-yellow-100 text-yellow-800',
  verified: 'bg-green-100 text-green-800',
  disputed: 'bg-red-100 text-red-800',
};

// AssetCard component
export default function AssetCard({ type, name, value, status, description, owner }) {
  const Icon = assetIcons[type];

  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <div className="flex items-start justify-between">
        <div className="flex items-center">
          <div className="rounded-full bg-blue-100 p-3">
            <Icon className="h-6 w-6 text-blue-600" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
            <p className="text-sm text-gray-500">Owned by {owner}</p>
          </div>
        </div>
        {status && (
          <span className={`rounded-full px-3 py-1 text-xs font-medium ${statusColors[status]}`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        )}
      </div>
      <p className="mt-4 text-gray-600">{description}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xl font-bold text-gray-900">${value.toLocaleString()}</span>
        <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          View Details
        </button>
      </div>
    </div>
  );
}
