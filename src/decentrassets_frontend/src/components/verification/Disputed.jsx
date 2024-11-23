import AssetCard from '../shared/AssetCard';
import StatCard from '../shared/StatCard';

const disputedAssets = [
  {
    type: 'real-estate',
    name: 'Historic Building',
    value: 4200000,
    status: 'disputed',
    description: 'Heritage-listed property with ownership dispute',
    owner: 'Heritage Trust',
  },
  {
    type: 'art',
    name: 'Renaissance Sculpture',
    value: 850000,
    status: 'disputed',
    description: 'Authenticity under review',
    owner: 'Private Collector',
  },
  {
    type: 'digital',
    name: 'Digital Rights Package',
    value: 320000,
    status: 'disputed',
    description: 'Intellectual property rights in dispute',
    owner: 'Digital Media Corp',
  },
];

export default function Disputed() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Disputed Assets</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Active Disputes"
          value="8"
          change={-2}
          description="Current disputed assets"
        />
        <StatCard
          title="Resolution Time"
          value="15 days"
          description="Average resolution time"
        />
        <StatCard
          title="Resolution Rate"
          value="85%"
          change={5}
          description="Successful resolutions"
        />
        <StatCard
          title="Under Review"
          value="3"
          description="Cases under review"
        />
      </div>

      <div className="rounded-lg bg-white p-6 shadow-md">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Active Disputes</h2>
          <div className="flex space-x-2">
            <button className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700">
              Resolve Selected
            </button>
            <button className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700">
              Escalate Selected
            </button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {disputedAssets.map((asset, index) => (
            <AssetCard key={index} {...asset} />
          ))}
        </div>
      </div>

      <div className="rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-4 text-lg font-semibold text-gray-900">Dispute Resolution Process</h2>
        <div className="flex justify-between">
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-blue-100 p-3">
              <span className="text-lg font-bold text-blue-600">1</span>
            </div>
            <span className="mt-2 text-sm text-gray-600">Review</span>
          </div>
          <div className="relative flex-1">
            <div className="absolute inset-y-1/2 h-0.5 w-full bg-gray-200"></div>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-blue-100 p-3">
              <span className="text-lg font-bold text-blue-600">2</span>
            </div>
            <span className="mt-2 text-sm text-gray-600">Investigation</span>
          </div>
          <div className="relative flex-1">
            <div className="absolute inset-y-1/2 h-0.5 w-full bg-gray-200"></div>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-blue-100 p-3">
              <span className="text-lg font-bold text-blue-600">3</span>
            </div>
            <span className="mt-2 text-sm text-gray-600">Mediation</span>
          </div>
          <div className="relative flex-1">
            <div className="absolute inset-y-1/2 h-0.5 w-full bg-gray-200"></div>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-blue-100 p-3">
              <span className="text-lg font-bold text-blue-600">4</span>
            </div>
            <span className="mt-2 text-sm text-gray-600">Resolution</span>
          </div>
        </div>
      </div>
    </div>
  );
}
