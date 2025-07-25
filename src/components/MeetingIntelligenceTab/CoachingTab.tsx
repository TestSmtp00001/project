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
        return <BarChart3 className="w-6 h-6" />;
      case 'qualification':
        return <Target className="w-6 h-6" />;
      case 'upskill':
        return <BookOpen className="w-6 h-6" />;
      default:
        return <BarChart3 className="w-6 h-6" />;
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Stats Overview Cards - Mobile Optimized */}
      <div className="bg-white p-4 border-b border-gray-200">
        <div className="grid grid-cols-2 gap-3">
          {/* Overall Score Card */}
          <div className="bg-gradient-to-r from-[#605BFF] to-[#7C78FF] rounded-lg p-4 text-white relative">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">73%</div>
                <div className="text-sm opacity-90">Overall Score</div>
              </div>
              <Target className="w-8 h-8 opacity-80" />
            </div>
            <div className="absolute top-2 right-2 flex items-center text-xs bg-white bg-opacity-20 rounded-full px-2 py-1">
              <TrendingUp className="w-3 h-3 mr-1" />
              <span>+5%</span>
            </div>
          </div>

          {/* Action Items Card */}
          <div className="bg-gradient-to-r from-[#FF8E1C] to-[#FFB366] rounded-lg p-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">12</div>
                <div className="text-sm opacity-90">Action Items</div>
              </div>
              <Lightbulb className="w-8 h-8 opacity-80" />
            </div>
          </div>

          {/* Strengths Card */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">3</div>
                <div className="text-sm opacity-90">Strengths</div>
              </div>
              <Award className="w-8 h-8 opacity-80" />
            </div>
          </div>

          {/* Improvements Card */}
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg p-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xl font-bold">2 + 1</div>
                <div className="text-xs opacity-90">Improve + Critical</div>
              </div>
              <div className="flex flex-col space-y-1">
                <TrendingUp className="w-4 h-4 opacity-80" />
                <AlertTriangle className="w-4 h-4 opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Navigation */}
      <div className="bg-white border-b border-gray-200 px-4 py-2">
        <div className="flex justify-around">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex flex-col items-center py-3 px-4 rounded-lg transition-colors ${
              activeTab === 'overview'
                ? 'bg-[#605BFF] text-white'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
            }`}
          >
            {getTabIcon('overview')}
          </button>
          <button
            onClick={() => setActiveTab('qualification')}
            className={`flex flex-col items-center py-3 px-4 rounded-lg transition-colors ${
              activeTab === 'qualification'
                ? 'bg-[#605BFF] text-white'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
            }`}
          >
            {getTabIcon('qualification')}
          </button>
          <button
            onClick={() => setActiveTab('upskill')}
            className={`flex flex-col items-center py-3 px-4 rounded-lg transition-colors ${
              activeTab === 'upskill'
                ? 'bg-[#605BFF] text-white'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
            }`}
          >
            {getTabIcon('upskill')}
          </button>
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