import { Routes, Route } from 'react-router-dom';
import { FiInbox, FiCheckCircle, FiAlertCircle, FiList } from 'react-icons/fi';
import Layout from '../components/Layouts';
import Requests from '../components/verification/Requests';
import Verified from '../components/verification/Verified';
import Disputed from '../components/verification/Disputed';
import History from '../components/verification/History';

const links = [
  { to: '/verification', label: 'Pending Requests', icon: FiInbox },
  { to: '/verification/verified', label: 'Verified Assets', icon: FiCheckCircle },
  { to: '/verification/disputed', label: 'Disputed Assets', icon: FiAlertCircle },
  { to: '/verification/history', label: 'History', icon: FiList },
];

export default function VerificationPortal() {
  return (
    <Layout links={links} portalName="Verification Portal">
      <Routes>
        <Route path="/" element={<Requests />} />
        <Route path="/verified" element={<Verified />} />
        <Route path="/disputed" element={<Disputed />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Layout>
  );
}