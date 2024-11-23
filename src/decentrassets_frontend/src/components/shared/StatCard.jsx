import React from 'react';

export default function StatCard({ title, value, change, description }) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <div className="mt-2 flex items-baseline">
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
        {change !== undefined && (
          <span className={`ml-2 text-sm ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {change >= 0 ? '+' : ''}{change}%
          </span>
        )}
      </div>
      <p className="mt-1 text-sm text-gray-500">{description}</p>
    </div>
  );
}
