import { Routes, Route } from 'react-router-dom';
import { FiHome, FiBox, FiDollarSign, FiSettings } from 'react-icons/fi';
import Layout from '../components/Layouts';
import Dashboard from '../components/user/Dashboard';
import MyAssets from '../components/user/MyAssets';
import Transactions from '../components/user/Transactions';
import Settings from '../components/user/Settings';

const links = [
  { to: '/user', label: 'Dashboard', icon: FiHome },
  { to: '/user/assets', label: 'My Assets', icon: FiBox },
  { to: '/user/transactions', label: 'Transactions', icon: FiDollarSign },
  { to: '/user/settings', label: 'Settings', icon: FiSettings },
];

export default function UserPortal() {
  return (
    <Layout links={links} portalName="User Portal">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/assets" element={<MyAssets />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Layout>
  );
}