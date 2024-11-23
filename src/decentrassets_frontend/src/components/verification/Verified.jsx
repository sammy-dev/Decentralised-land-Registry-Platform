import AssetCard from '../shared/AssetCard';
import StatCard from '../shared/StatCard';

const verifiedAssets = [
  {
    type: 'real-estate',
    name: 'City Center Complex',
    value: 12500000,
    status: 'verified',
    description: 'Mixed-use development in prime location',
    owner: 'Urban Developers Corp',
  },
  {
    type: 'art',
    name: 'Impressionist Collection',
    value: 4500000,
    status: 'verified',
    description: 'Collection of authenticated impressionist paintings',
    owner: 'National Gallery',
  },
  {
    type: 'vehicle',
    name: 'Classic Car Portfolio',
    value: 2800000,
    status: 'verified',
    description: 'Collection of rare vintage automobiles',
    owner: 'Heritage Motors',
  },
  {
    type: 'digital',
    name: 'NFT Collection',
    value: 950000,
    status: 'verified',
    description: 'Curated collection of premium NFTs',
    owner: 'Digital Arts DAO',
  },
];

export default function Verified() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Verified Assets</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Verified"
          value="156"
          change={12}
          description="Total verified assets"
        />
        <StatCard
          title="Total Value"
          value="$89.5M"
          change={5.2}
          description="Value of verified assets"
        />
        <StatCard
          title="This Month"
          value="28"
          description="Assets verified this month"
        />
        <StatCard
          title="Verification Rate"
          value="94%"
          change={2}
          description="Successful verifications"
        />
      </div>

      <div className="rounded-lg bg-white p-6 shadow-md">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Recently Verified Assets</h2>
          <div className="flex items-center space-x-4">
            <select className="rounded-lg border border-gray-300 px-4 py-2 text-sm">
              <option>Sort by Date</option>
              <option>Sort by Value</option>
              <option>Sort by Type</option>
            </select>
            <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
              Export List
            </button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {verifiedAssets.map((asset, index) => (
            <AssetCard key={index} {...asset} />
          ))}
        </div>
      </div>
    </div>
  );
}
