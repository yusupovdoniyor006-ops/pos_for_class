import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';
import { InventoryProvider } from './context/InventoryContext';
import { CartProvider } from './context/CartContext';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'pos':
        return <div className="p-8 text-slate-500 text-center">Savdo interfeysi tez kunda...</div>;
      case 'inventory':
        return <Inventory />;
      case 'customers':
        return <div className="p-8 text-slate-500 text-center">Mijozlar bazasi tez kunda...</div>;
      case 'settings':
        return <div className="p-8 text-slate-500">Settings (Coming Soon)</div>;
      default:
        return <Dashboard />;
    }
  };

  const getTitle = () => {
    const titles: Record<string, string> = {
      dashboard: 'Dashboard',
      pos: 'Savdo (POS)',
      inventory: 'Ombor Boshqaruvi',
      customers: 'Mijozlar Bazasi',
      settings: 'Tizim Sozlamalari',
    };
    return titles[activeTab] || 'Dashboard';
  };

  return (
    <InventoryProvider>
      <CartProvider>
        <div className="min-h-screen bg-slate-50 flex">
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          <main className="flex-1 ml-64 min-h-screen">
            <Header title={getTitle()} />
            {renderContent()}
          </main>
        </div>
      </CartProvider>
    </InventoryProvider>
  );
}

export default App;
