import React from 'react';
import { useState } from 'react';
import { LayoutDashboard, Brain, Menu, X } from 'lucide-react';
import MeetingIntelligence from './components/MeetingIntelligence';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  const [activeView, setActiveView] = useState<'dashboard' | 'meeting-intelligence'>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard />;
      case 'meeting-intelligence':
        return <MeetingIntelligence />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white border-b border-gray-200 p-4 flex items-center justify-between">
        <h1 className="text-lg font-bold text-gray-900">IFS Version</h1>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div className="flex">
        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Left Navigation Sidebar */}
        <div className={`
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50
          w-64 bg-white border-r border-gray-200 flex flex-col
          transition-transform duration-300 ease-in-out
        `}>
          <div className="p-4 lg:p-6">
            <h1 className="text-lg lg:text-xl font-bold text-gray-900">IFS Version</h1>
          </div>
        
          <nav className="flex-1 p-4">
            <div className="space-y-2">
              <button
                onClick={() => {
                  setActiveView('dashboard');
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeView === 'dashboard'
                    ? 'bg-[#605BFF] text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <LayoutDashboard className="w-5 h-5" />
                <span className="font-medium">Dashboard</span>
              </button>
              
              <button
                onClick={() => {
                  setActiveView('meeting-intelligence');
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeView === 'meeting-intelligence'
                    ? 'bg-[#605BFF] text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Brain className="w-5 h-5" />
                <span className="font-medium">Meeting Intelligence</span>
              </button>
            </div>
          </nav>
        </div>
        
        {/* Right Content Area */}
        <div className="flex-1 lg:ml-0">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default App;