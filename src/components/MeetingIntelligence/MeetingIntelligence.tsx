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
    <div className="h-full bg-white flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 flex-shrink-0">
        {/* Meeting Info */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-900">Jul 18, 10:45</span>
            <Edit className="w-4 h-4 text-[#605BFF]" />
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-[#605BFF] hover:bg-gray-100 rounded-lg">
              <Share2 className="w-4 h-4" />
            </button>
            <button className="p-2 text-[#605BFF] hover:bg-gray-100 rounded-lg">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <div className="text-xs text-gray-500 mb-3">in field sales fan 1.mp4</div>
        
        {/* Action Buttons - Mobile Optimized */}
        <div className="flex space-x-2 mb-3">
          <button className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-[#605BFF] text-white rounded-lg text-sm">
            <Plus className="w-4 h-4" />
            <span>Add Transcript</span>
          </button>
          <button className="px-3 py-2 border border-[#605BFF] text-[#605BFF] rounded-lg">
            <Link className="w-4 h-4" />
          </button>
          <button className="px-3 py-2 border border-[#605BFF] text-[#605BFF] rounded-lg">
            <FileText className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Audio Player - Mobile Optimized */}
      <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex-shrink-0">
        <div className="flex items-center space-x-3">
          <button className="w-10 h-10 bg-[#605BFF] rounded-full flex items-center justify-center text-white">
            <Play className="w-4 h-4 ml-0.5" fill="currentColor" />
          </button>
          
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-gray-600 font-mono">1:22</span>
              <span className="text-xs text-gray-600 font-mono">6:04</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2">
              <div className="bg-[#605BFF] h-2 rounded-full" style={{ width: '22%' }}></div>
            </div>
          </div>
          
          <button className="p-2 text-gray-600">
            <Volume2 className="w-4 h-4" />
          </button>
          
          <button 
            onClick={() => setShowActionMenu(!showActionMenu)}
            className="p-2 text-gray-600"
          >
            <MoreHorizontal className="w-4 h-4" />
          </button>
          
          {showActionMenu && (
            <div className="absolute right-4 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-10 min-w-[180px]">
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
            </div>

      {/* Tab Navigation - Mobile Optimized */}
      <div className="bg-white border-b border-gray-200 flex-shrink-0">
        <div className="px-4 overflow-x-auto">
          <nav className="flex space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-3 px-3 border-b-2 font-medium text-xs transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? tab.id === 'asksam' 
                      ? 'border-[#fd7e14] text-[#fd7e14]'
                      : 'border-[#605BFF] text-[#605BFF]'
                    : tab.id === 'asksam'
                      ? 'border-transparent text-[#fd7e14]'
                      : 'border-transparent text-gray-500'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
          </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-hidden">
        {renderTabContent()}
      </div>
    </div>
  );
};
        </div>
      </div>
    </div>
  );
};

export default MeetingIntelligence;