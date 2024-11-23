import { useState } from 'react';
import { Area, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import StatCard from '../shared/StatCard';
import AssetCard from '../shared/AssetCard';

const portfolioData = [
  { date: '2024-01', value: 2100000 },
  { date: '2024-02', value: 2300000 },
  { date: '2024-03', value: 2250000 },
  { date: '2024-04', value: 2400000 },
  { date: '2024-05', value: 2600000 },
  { date: '2024-06', value: 2550000 },
];

const portfolioAssets = [
  {
    type: 'real-estate',
    name: 'Beachfront Property',
    value: 1500000,
    status: 'verified',
    description: 'Luxury beachfront villa with private access',
    owner: 'Trading Account',
  },
  {
    type: 'art',
    name: 'Contemporary Collection',
    value: 750000,
    status: 'verified',
    description: 'Collection of modern art pieces',
    owner: 'Trading Account',
  },
  {
    type: 'vehicle',
    name: 'Classic Car Collection',
    value: 450000,
    status: 'verified',
    description: 'Three restored vintage automobiles',
    owner: 'Trading Account',
  },
];

export default function Portfolio() {
  const [timeRange, setTimeRange] = useState('6M');

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Portfolio</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Value"
          value="$2.7M"
          change={4.8}
          description="Current portfolio value"
        />
        <StatCard
          title="Monthly Return"
          value="5.2%"
          change={1.2}
          description="Return over last month"
        />
        <StatCard
          title="Assets"
          value="8"
          description="Number of assets held"
        />
        <StatCard
          title="Pending Orders"
          value="3"
          description="Active buy/sell orders"
        />
      </div>

      <div className="rounded-lg bg-white p-6 shadow-md">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Portfolio Value</h2>
          <div className="flex space-x-2">
            {['1M', '3M', '6M', '1Y', 'ALL'].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`rounded-lg px-3 py-1 text-sm ${
                  timeRange === range
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={portfolioData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="date" 
                tickFormatter={(date) => new Date(date).toLocaleDateString('default', { month: 'short' })}
              />
              <YAxis 
                tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
              />
              <Tooltip 
                formatter={(value) => [`$${value.toLocaleString()}`, 'Value']}
                labelFormatter={(label) => new Date(label).toLocaleDateString()}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#2563eb"
                fill="#3b82f6"
                fillOpacity={0.1}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <h2 className="text-xl font-semibold text-gray-900">Portfolio Assets</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {portfolioAssets.map((asset, index) => (
          <AssetCard key={index} {...asset} />
        ))}
      </div>
    </div>
  );
}
