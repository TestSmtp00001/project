import React from 'react';
import { useState } from 'react';
import { LayoutDashboard, Brain, Menu, X, Home, MessageSquare } from 'lucide-react';
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
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Mobile App Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-center shadow-sm">
        <h1 className="text-lg font-semibold text-gray-900">Meeting Intelligence</h1>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-hidden">
        {renderContent()}
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-gray-200 px-4 py-2 safe-area-bottom">
        <div className="flex justify-around">
          <button
            onClick={() => setActiveView('dashboard')}
            className={`flex flex-col items-center py-2 px-4 rounded-lg transition-colors ${
              activeView === 'dashboard'
                ? 'text-[#605BFF]'
                : 'text-gray-500'
            }`}
          >
            <Home className="w-6 h-6 mb-1" />
            <span className="text-xs font-medium">Dashboard</span>
          </button>
          
          <button
            onClick={() => setActiveView('meeting-intelligence')}
            className={`flex flex-col items-center py-2 px-4 rounded-lg transition-colors ${
              activeView === 'meeting-intelligence'
                ? 'text-[#605BFF]'
                : 'text-gray-500'
            }`}
          >
            <MessageSquare className="w-6 h-6 mb-1" />
            <span className="text-xs font-medium">Meetings</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;