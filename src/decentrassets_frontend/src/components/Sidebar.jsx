import { Link, useLocation } from 'react-router-dom';

export default function Sidebar({ links, portalName }) {
  const location = useLocation();

  return (
    <div className="flex h-screen w-64 flex-col bg-gray-900 text-white">
      <div className="p-4">
        <h2 className="text-xl font-bold">{portalName}</h2>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2 px-2">
          {links.map((link) => {
            const Icon = link.icon; // You can use the icon directly from the links array
            return (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`flex items-center rounded-lg px-4 py-2 text-sm transition-colors ${
                    location.pathname === link.to
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="border-t border-gray-800 p-4">
        <button className="w-full rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700">
          Logout
        </button>
      </div>
    </div>
  );
}
