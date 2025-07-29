import React, { useState } from 'react';
import { TrendingUp, Target, Award, AlertTriangle, Lightbulb, BarChart3, Users, BookOpen } from 'lucide-react';
import OverviewTab from './CoachingTabs/OverviewTab';
import QualificationEffectivenessTab from './CoachingTabs/QualificationEffectivenessTab';
import { UpskillTab } from './CoachingTabs/UpskillTab';

const CoachingTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'qualification' | 'upskill'>('overview');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab />;
      case 'qualification':
        return <QualificationEffectivenessTab />;
      case 'upskill':
        return <UpskillTab />;
      default:
        return <OverviewTab />;
    }
  };

  const getTabIcon = (tab: string) => {
    switch (tab) {
      case 'overview':
        return <BarChart3 className="w-5 h-5" />;
      case 'qualification':
        return <Target className="w-5 h-5" />;
      case 'upskill':
        return <BookOpen className="w-5 h-5" />;
      default:
        return <BarChart3 className="w-5 h-5" />;
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Stats Overview Cards - Mobile Optimized */}
      <div className="bg-white p-4 border-b border-gray-200">
        <div className="space-y-3">
          {/* First Row */}
          <div className="grid grid-cols-2 gap-3">
            {/* Overall Score Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-3 relative">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-[#605BFF]">73%</div>
                  <div className="text-sm text-[#605BFF]">Overall Score</div>
                </div>
                <Target className="w-6 h-6 text-[#605BFF]" />
              </div>
            </div>

            {/* Action Items Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-[#FF8E1C]">12</div>
                  <div className="text-sm text-gray-600">Action Items</div>
                </div>
                <Lightbulb className="w-6 h-6 text-[#FF8E1C]" />
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-3 gap-2">
            {/* Strengths Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-green-600">3</div>
                  <div className="text-sm text-gray-600">Strengths</div>
                </div>
                <Award className="w-6 h-6 text-green-600" />
              </div>
            </div>

            {/* Improve Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-yellow-600">2</div>
                  <div className="text-sm text-gray-600">Improve</div>
                </div>
                <TrendingUp className="w-6 h-6 text-yellow-600" />
              </div>
            </div>

            {/* Critical Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-red-600">1</div>
                  <div className="text-sm text-gray-600">Critical</div>
                </div>
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="flex">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex-1 flex flex-col items-center py-2 px-1 transition-colors ${
              activeTab === 'overview'
                ? 'text-[#605BFF] bg-blue-50'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {getTabIcon('overview')}
          </button>
          <button
            onClick={() => setActiveTab('qualification')}
            className={`flex-1 flex flex-col items-center py-2 px-1 transition-colors ${
              activeTab === 'qualification'
                ? 'text-[#605BFF] bg-blue-50'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {getTabIcon('qualification')}
          </button>
          {/*<button
            onClick={() => setActiveTab('upskill')}
            className={`flex flex-col items-center py-3 px-4 rounded-lg transition-colors ${
              activeTab === 'upskill'
                ? 'bg-[#605BFF] text-white'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
            }`}
          >
            {getTabIcon('upskill')}
          </button>*/}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full bg-white">
          {/* Tab Content */}
          <div className="h-full overflow-y-auto p-4">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachingTab;