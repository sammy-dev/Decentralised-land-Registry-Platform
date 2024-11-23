import Sidebar from './Sidebar';

export default function Layout({ children, links, portalName }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar links={links} portalName={portalName} />
      <main className="flex-1 bg-gray-100">
        <div className="container mx-auto p-6">{children}</div>
      </main>
    </div>
  );
}
