import { Routes, Route } from 'react-router-dom';
import { FiTrendingUp, FiSearch, FiBookOpen, FiActivity } from 'react-icons/fi';
import Layout from '../components/Layouts';
import Market from '../components/trader/Market';
import AssetExplorer from '../components/trader/AssetExplorer';
import Portfolio from '../components/trader/Portfolio';
import Analytics from '../components/trader/Analytics';

const links = [
  { to: '/trader', label: 'Market', icon: FiTrendingUp },
  { to: '/trader/explorer', label: 'Asset Explorer', icon: FiSearch },
  { to: '/trader/portfolio', label: 'Portfolio', icon: FiBookOpen },
  { to: '/trader/analytics', label: 'Analytics', icon: FiActivity },
];

export default function TraderPortal() {
  return (
    <Layout links={links} portalName="Trader Portal">
      <Routes>
        <Route path="/" element={<Market />} />
        <Route path="/explorer" element={<AssetExplorer />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </Layout>
  );
}