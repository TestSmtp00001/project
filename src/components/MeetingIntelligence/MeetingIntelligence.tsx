import React, { useState } from 'react';
import { 
  Info, 
  Edit, 
  Share2, 
  MessageCircle, 
  Copy, 
  Printer, 
  Mail,
  Plus,
  Link,
  FileText,
  Play,
  Volume2,
  MoreHorizontal,
  Download,
  Gauge
} from 'lucide-react';
import TranscriptTab from '../MeetingIntelligenceTab/TranscriptTab';
import SummaryTab from '../MeetingIntelligenceTab/SummaryTab';
import FollowUpTab from '../MeetingIntelligenceTab/FollowUpTab';
import AnalyticsTab from '../MeetingIntelligenceTab/AnalyticsTab';
import CoachingTab from '../MeetingIntelligenceTab/CoachingTab';
import AskSamTab from '../MeetingIntelligenceTab/AskSamTab';

const MeetingIntelligence: React.FC = () => {
  const [activeTab, setActiveTab] = useState('transcript');
  const [showActionMenu, setShowActionMenu] = useState(false);
  
  const tabs = [
    { id: 'transcript', label: 'Transcript' },
    { id: 'summary', label: 'Meeting Summary' },
    { id: 'followup', label: 'Follow-up Letter' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'coaching', label: 'Coaching' },
    { id: 'asksam', label: 'Ask SAM' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'transcript':
        return <TranscriptTab />;
      case 'summary':
        return <SummaryTab />;
      case 'followup':
        return <FollowUpTab />;
      case 'analytics':
        return <AnalyticsTab />;
      case 'coaching':
        return <CoachingTab />;
      case 'asksam':
        return <AskSamTab />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 lg:px-6 py-4">
        <div>
          {/* Top row - Title and Actions */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 mb-4">
            <div className="flex items-center space-x-2">
              <h1 className="text-xl lg:text-2xl font-bold text-gray-900">Meeting Intelligence</h1>
              <Info className="w-5 h-5 text-[#605BFF] cursor-pointer hover:text-[#4B46CC] transition-colors" />
            </div>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
              {/* Action Buttons */}
              <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-[#605BFF] text-white rounded-lg hover:bg-[#4B46CC] transition-colors">
                <Plus className="w-4 h-4" />
                <span className="text-sm font-medium">Add Transcript</span>
              </button>
              
              <div className="flex space-x-2">
              <button className="flex items-center justify-center space-x-2 px-3 py-2 border border-[#605BFF] text-[#605BFF] rounded-lg hover:bg-[#605BFF] hover:text-white transition-colors text-sm">
                <Link className="w-4 h-4" />
                <span className="hidden sm:inline text-sm font-medium">Associate With</span>
              </button>
              
              <button className="flex items-center justify-center space-x-2 px-3 py-2 border border-[#605BFF] text-[#605BFF] rounded-lg hover:bg-[#605BFF] hover:text-white transition-colors text-sm">
                <FileText className="w-4 h-4" />
                <span className="hidden sm:inline text-sm font-medium">Meeting Info</span>
              </button>
              </div>
              
              {/* Icon Actions */}
              <div className="flex items-center justify-center space-x-3 sm:ml-4 sm:pl-4 sm:border-l border-gray-200">
                <button className="p-2 text-[#605BFF] hover:text-[#4B46CC] hover:bg-gray-100 rounded-lg transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
                <button className="p-2 text-[#605BFF] hover:text-[#4B46CC] hover:bg-gray-100 rounded-lg transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </button>
                <button className="p-2 text-[#605BFF] hover:text-[#4B46CC] hover:bg-gray-100 rounded-lg transition-colors">
                  <Copy className="w-5 h-5" />
                </button>
                <button className="p-2 text-[#605BFF] hover:text-[#4B46CC] hover:bg-gray-100 rounded-lg transition-colors">
                  <Printer className="w-5 h-5" />
                </button>
                <button className="p-2 text-[#605BFF] hover:text-[#4B46CC] hover:bg-gray-100 rounded-lg transition-colors">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Bottom row - Transcript info */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <span className="text-sm lg:text-base text-gray-700 font-medium">Jul 18, 10:45 - in field sales fan 1.mp4</span>
              <Edit className="w-4 h-4 text-[#605BFF] cursor-pointer hover:text-[#4B46CC] transition-colors" />
            </div>
          </div>
        </div>
      </div>

      {/* Body Card */}
      <div className="flex-1 p-2 lg:p-4">
        <div className="bg-white rounded-lg h-full flex flex-col">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            {/* Audio Player */}
            <div className="px-6 py-2 border-b border-gray-100 bg-gray-50">
              <div className="flex items-center justify-center space-x-4">
                {/* Play Button */}
                <button className="w-8 h-8 lg:w-6 lg:h-6 flex items-center justify-center hover:text-[#4B46CC] transition-colors flex-shrink-0 text-[#605BFF]">
                  <Play className="w-4 h-4 ml-0.5" fill="currentColor" />
                </button>
                
                {/* Play Time */}
                <span className="text-sm text-gray-600 font-mono flex-shrink-0">1:22 / 6:04</span>
                
                {/* Progress Bar */}
                <div className="flex-1 max-w-xs mx-4">
                  <div className="w-full bg-gray-300 rounded-full h-1 cursor-pointer">
                    <div className="bg-[#605BFF] h-1 rounded-full transition-all" style={{ width: '22%' }}></div>
                  </div>
                </div>
                
                {/* Mute Icon */}
                <button className="text-gray-600 hover:text-[#605BFF] transition-colors flex-shrink-0 p-1">
                  <Volume2 className="w-4 h-4" />
                </button>
                
                {/* Action Button with Menu */}
                <div className="relative flex-shrink-0">
                  <button 
                    onClick={() => setShowActionMenu(!showActionMenu)}
                    className="text-gray-600 hover:text-[#605BFF] transition-colors p-2"
                  >
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                  
                  {/* Dropdown Menu */}
                  {showActionMenu && (
                    <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-10 min-w-[180px]">
                      <button className="w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2">
                        <Download className="w-4 h-4" />
                        <span>Download</span>
                      </button>
                      <button className="w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2">
                        <Gauge className="w-4 h-4" />
                        <span>Playback Speed</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="px-4 lg:px-6 overflow-x-auto">
              <nav className="flex space-x-4 lg:space-x-8 justify-start min-w-max">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? tab.id === 'asksam' 
                          ? 'border-[#fd7e14] text-[#fd7e14]'
                          : 'border-[#605BFF] text-[#605BFF]'
                        : tab.id === 'asksam'
                          ? 'border-transparent text-[#fd7e14] hover:text-[#fd7e14] hover:border-[#fd7e14]'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <span className="whitespace-nowrap">{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Tab Content */}

          <div className="flex-1">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingIntelligence;