import React, { useState } from 'react';
import TeamForecastView from './TeamForecastView';
import DealProgressTracking from './DealProgressTracking';
import StakeholderInsights from './StakeholderInsights';
import OrgChartMapping from './OrgChartMapping';
import ConversationIntelligence from './ConversationIntelligence';

const ReportingTab: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState('Team Forecast');

  const subTabs = [
    'Team Forecast',
    'Deal Progress',
    'Stakeholder Insights',
    'Org Chart Mapping',
    'Conversation Intelligence'
  ];

  const renderContent = () => {
    switch (activeSubTab) {
      case 'Team Forecast':
        return <TeamForecastView />;
      case 'Deal Progress':
        return <DealProgressTracking />;
      case 'Stakeholder Insights':
        return <StakeholderInsights />;
      case 'Org Chart Mapping':
        return <OrgChartMapping />;
      case 'Conversation Intelligence':
        return <ConversationIntelligence />;
      default:
        return <TeamForecastView />;
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Forecast Accuracy & Key Reporting</h2>
        <p className="text-gray-600">Comprehensive reporting dashboard for improved forecast accuracy and deal confidence</p>
      </div>

      {/* Sub-tab navigation */}
      <nav className="border-b border-gray-200 mb-6">
        <div className="flex space-x-8">
          {subTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveSubTab(tab)}
              className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeSubTab === tab
                  ? 'border-[#605BFF] text-[#605BFF]'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>

      {/* Content */}
      <div className="min-h-96">
        {renderContent()}
      </div>
    </div>
  );
};

export default ReportingTab;