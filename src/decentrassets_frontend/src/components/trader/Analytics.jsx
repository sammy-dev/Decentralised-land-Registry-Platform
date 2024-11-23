import { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import StatCard from '../shared/StatCard';

const performanceData = [
  { month: 'Jan', return: 2.5 },
  { month: 'Feb', return: 1.8 },
  { month: 'Mar', return: -0.5 },
  { month: 'Apr', return: 3.2 },
  { month: 'May', return: 2.1 },
  { month: 'Jun', return: 1.5 },
];

const volumeData = [
  { month: 'Jan', volume: 1200000 },
  { month: 'Feb', volume: 950000 },
  { month: 'Mar', volume: 1500000 },
  { month: 'Apr', volume: 1100000 },
  { month: 'May', volume: 1300000 },
  { month: 'Jun', volume: 1400000 },
];

const allocationData = [
  { name: 'Real Estate', value: 45 },
  { name: 'Vehicles', value: 25 },
  { name: 'Art', value: 20 },
  { name: 'Digital Assets', value: 10 },
];

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

export default function Analytics() {
  const [timeRange, setTimeRange] = useState('6M');

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Return"
          value="12.5%"
          change={2.3}
          description="Overall portfolio return"
        />
        <StatCard
          title="Best Performing"
          value="Real Estate"
          change={8.2}
          description="Best asset category"
        />
        <StatCard
          title="Trade Count"
          value="28"
          description="Total trades this month"
        />
        <StatCard
          title="Success Rate"
          value="92%"
          change={5}
          description="Profitable trades ratio"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-lg font-semibold text-gray-900">Performance</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis tickFormatter={(value) => `${value}%`} />
                <Tooltip formatter={(value) => [`${value}%`, 'Return']} />
                <Line
                  type="monotone"
                  dataKey="return"
                  stroke="#3b82f6"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-lg font-semibold text-gray-900">Trading Volume</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={volumeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis tickFormatter={(value) => `$${value / 1000000}M`} />
                <Tooltip
                  formatter={(value) => [`$${value.toLocaleString()}`, 'Volume']}
                />
                <Bar dataKey="volume" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md lg:col-span-2">
          <h2 className="mb-4 text-lg font-semibold text-gray-900">Asset Allocation</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={allocationData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {allocationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`, 'Allocation']} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-col justify-center space-y-2">
              {allocationData.map((item, index) => (
                <div key={item.name} className="flex items-center">
                  <div
                    className="mr-2 h-4 w-4 rounded"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  />
                  <span className="text-sm text-gray-600">
                    {item.name}: {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
