import React from 'react';

// Sample data
const transactions = [
  {
    id: '1',
    type: 'buy',
    asset: 'Luxury Apartment',
    amount: 750000,
    date: '2024-02-15',
    status: 'completed',
  },
  {
    id: '2',
    type: 'sell',
    asset: 'Vintage Car',
    amount: 45000,
    date: '2024-02-14',
    status: 'pending',
  },
  // Add more transactions as needed
];

// Define status and type colors for styling
const statusColors = {
  completed: 'bg-green-100 text-green-800',
  pending: 'bg-yellow-100 text-yellow-800',
  failed: 'bg-red-100 text-red-800',
};

const typeColors = {
  buy: 'text-green-600',
  sell: 'text-red-600',
  transfer: 'text-blue-600',
};

export default function Transactions() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Transactions</h1>

      <div className="overflow-hidden rounded-lg bg-white shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Asset
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="whitespace-nowrap px-6 py-4">
                  <span className={`font-medium ${typeColors[transaction.type]}`}>
                    {transaction.type.toUpperCase()}
                  </span>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                  {transaction.asset}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                  ${transaction.amount.toLocaleString()}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                  {new Date(transaction.date).toLocaleDateString()}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">
                  <span className={`rounded-full px-2 py-1 text-xs font-medium ${statusColors[transaction.status]}`}>
                    {transaction.status.toUpperCase()}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
