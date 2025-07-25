import React from 'react';
import { useState } from 'react';
import { LayoutDashboard, Brain } from 'lucide-react';
import MeetingIntelligence from './components/MeetingIntelligence';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  const [activeView, setActiveView] = useState<'dashboard' | 'meeting-intelligence'>('dashboard');

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
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Navigation Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6">
          <h1 className="text-xl font-bold text-gray-900">IFS Version</h1>
        </div>
        
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            <button
              onClick={() => setActiveView('dashboard')}
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
              onClick={() => setActiveView('meeting-intelligence')}
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
      <div className="flex-1">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;