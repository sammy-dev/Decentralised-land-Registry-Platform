
import React from 'react'
import StatCard from '../shared/StatCard';
import AssetCard from '../shared/AssetCard';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Assets"
          value="12"
          description="Total assets in your portfolio"
        />
        <StatCard
          title="Portfolio Value"
          value="$2.5M"
          change={5.2}
          description="Total value of your assets"
        />
        <StatCard
          title="Active Trades"
          value="3"
          description="Number of ongoing trades"
        />
        <StatCard
          title="Pending Verifications"
          value="2"
          description="Assets awaiting verification"
        />
      </div>

      <h2 className="mt-8 text-xl font-semibold text-gray-900">Recent Assets</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <AssetCard
          type="real-estate"
          name="Luxury Apartment"
          value={750000}
          status="verified"
          description="Modern 3-bedroom apartment in downtown"
          owner="John Doe"
        />
        <AssetCard
          type="art"
          name="Abstract Painting"
          value={25000}
          status="pending"
          description="Original artwork by Jane Smith"
          owner="John Doe"
        />
      </div>
    </div>
  );
}