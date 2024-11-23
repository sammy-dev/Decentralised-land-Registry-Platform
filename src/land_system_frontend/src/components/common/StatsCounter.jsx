import React from 'react';

export default function StatsCounter({ icon:Icon, label, value }) {
  return (
    <div className="flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
      <Icon className="w-6 h-6 text-yellow-400 mb-2" />
      <p className="text-white font-bold text-2xl">{value}</p>
      <p className="text-blue-200 text-sm">{label}</p>
    </div>
  );
}
