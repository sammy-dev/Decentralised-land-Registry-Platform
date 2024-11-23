import AssetCard from '../shared/AssetCard';
import StatCard from '../shared/StatCard';

const pendingAssets = [
  {
    type: 'real-estate',
    name: 'Seaside Resort',
    value: 3500000,
    status: 'pending',
    description: 'Luxury resort property with private beach access',
    owner: 'Coastal Developments Inc',
  },
  {
    type: 'vehicle',
    name: 'Limited Edition Supercar',
    value: 850000,
    status: 'pending',
    description: 'One of only 50 units produced worldwide',
    owner: 'Exotic Motors LLC',
  },
  {
    type: 'art',
    name: 'Ancient Artifact',
    value: 275000,
    status: 'pending',
    description: 'Authenticated 12th century ceremonial piece',
    owner: 'Heritage Collectors',
  },
];

export default function Requests() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Pending Verification Requests</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Pending Requests"
          value="12"
          description="Assets awaiting verification"
        />
        <StatCard
          title="Average Time"
          value="2.5 days"
          description="Average verification time"
        />
        <StatCard
          title="Success Rate"
          value="94%"
          change={2}
          description="Verification success rate"
        />
        <StatCard
          title="Today's Requests"
          value="5"
          description="New requests today"
        />
      </div>

      <div className="rounded-lg bg-white p-6 shadow-md">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Pending Assets</h2>
          <div className="flex space-x-2">
            <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
              Verify Selected
            </button>
            <button className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700">
              Reject Selected
            </button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {pendingAssets.map((asset, index) => (
            <AssetCard key={index} {...asset} />
          ))}
        </div>
      </div>
    </div>
  );
}
