import { useState } from 'react';
import StatCard from '../shared/StatCard';

const verificationHistory = [
  {
    id: '1',
    asset: 'Luxury Penthouse',
    type: 'real-estate',
    owner: 'Prime Properties LLC',
    date: '2024-02-15',
    status: 'verified',
    verifier: 'John Smith',
  },
  {
    id: '2',
    asset: 'Classic Mercedes',
    type: 'vehicle',
    owner: 'Vintage Cars Co',
    date: '2024-02-14',
    status: 'rejected',
    verifier: 'Emma Johnson',
  },
  {
    id: '3',
    asset: 'Modern Art Collection',
    type: 'art',
    owner: 'Art Gallery X',
    date: '2024-02-13',
    status: 'disputed',
    verifier: 'Michael Brown',
  },
  // Add more history records as needed
];

const statusColors = {
  verified: 'bg-green-100 text-green-800',
  rejected: 'bg-red-100 text-red-800',
  disputed: 'bg-yellow-100 text-yellow-800',
};

export default function History() {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredHistory = verificationHistory.filter(record => {
    const matchesFilter = filter === 'all' || record.status === filter;
    const matchesSearch = record.asset.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.owner.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Verification History</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Processed"
          value="324"
          description="Total verifications processed"
        />
        <StatCard
          title="Approval Rate"
          value="89%"
          change={3}
          description="Overall approval rate"
        />
        <StatCard
          title="Average Time"
          value="2.8 days"
          description="Average processing time"
        />
        <StatCard
          title="Dispute Rate"
          value="5%"
          change={-1}
          description="Verification dispute rate"
        />
      </div>

      <div className="rounded-lg bg-white p-6 shadow-md">
        <div className="mb-6 grid gap-4 md:grid-cols-3">
          <div>
            <label className="block text-sm font-medium text-gray-700">Search</label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              placeholder="Search assets or owners..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Status Filter</label>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
            >
              <option value="all">All Status</option>
              <option value="verified">Verified</option>
              <option value="rejected">Rejected</option>
              <option value="disputed">Disputed</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Export</label>
            <button className="mt-1 block w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
              Export to CSV
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Asset
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Owner
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Verifier
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {filteredHistory.map((record) => (
                <tr key={record.id}>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                    {record.asset}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                    {record.type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                    {record.owner}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                    {new Date(record.date).toLocaleDateString()}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm">
                    <span className={`rounded-full px-2 py-1 text-xs font-medium ${statusColors[record.status]}`}>
                      {record.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                    {record.verifier}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
