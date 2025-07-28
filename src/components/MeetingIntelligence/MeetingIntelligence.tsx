import React, { useState, useEffect } from 'react';
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
  MoreVertical,
  Download,
  Gauge,
  FileText as TranscriptIcon,
  BookOpen,
  Send,
  BarChart3,
  GraduationCap,
  Bot,
  ChevronUp
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
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 200);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const tabs = [
    { id: 'transcript', label: 'Transcript', icon: TranscriptIcon },
    { id: 'summary', label: 'Meeting Summary', icon: BookOpen },
    { id: 'followup', label: 'Follow-up Letter', icon: Send },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'coaching', label: 'Coaching', icon: GraduationCap },
    { id: 'asksam', label: 'Ask SAM', icon: Bot }
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
      {/* Compact Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-1.5 flex-shrink-0">
        {/* Top Row: Meeting Info + Actions */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <span className="text-xs font-medium text-gray-900 flex items-center">
              <Edit className="w-4 h-4 text-[#605BFF] mr-2" />
              Driving Rapid Revenue Growth
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <button className="p-1 bg-[#605BFF] text-white rounded" title="Add Transcript">
              <Plus className="w-4 h-4" />
            </button>
            <button className="p-1 border border-[#605BFF] text-[#605BFF] rounded" title="Link">
              <Link className="w-4 h-4" />
            </button>
            <button className="p-1 border border-[#605BFF] text-[#605BFF] rounded" title="File">
              <FileText className="w-4 h-4" />
            </button>
            {/*<button className="p-1 text-[#605BFF] hover:bg-gray-100 rounded">
              <Share2 className="w-4 h-4" />
            </button>*/}
            <button className="p-1 text-[#605BFF] hover:bg-gray-100 rounded">
              <MoreVertical className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        {/* Bottom Row: Audio Player */}
        <div className="flex items-center space-x-2">
          <button className="w-6 h-6 bg-[#605BFF] rounded-full flex items-center justify-center text-white">
            <Play className="w-2.5 h-2.5 ml-0.5" fill="currentColor" />
          </button>
          
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-gray-600 font-mono">1:22</span>
              <span className="text-xs text-gray-600 font-mono">6:04</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-1.5">
              <div className="bg-[#605BFF] h-1.5 rounded-full" style={{ width: '22%' }}></div>
            </div>
          </div>
          
          <button className="flex items-center justify-center h-6 w-6 text-gray-600">
            <Volume2 className="w-4 h-4" />
          </button>
          
          <button 
            onClick={() => setShowActionMenu(!showActionMenu)}
            className="p-1 text-gray-600 relative"
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

      {/* Tab Navigation - Icon Only */}
      <div className="bg-white border-b border-gray-200 flex-shrink-0">
        <div className="px-4 py-2">
          <div className="flex justify-between items-center">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    activeTab === tab.id
                      ? tab.id === 'asksam'
                        ? 'bg-[#fd7e14] text-white shadow-lg'
                        : 'bg-[#605BFF] text-white shadow-lg'
                      : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
                  }`}
                  title={tab.label}
                >
                  <IconComponent className="w-5 h-5" />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-hidden">
        {renderTabContent()}
      </div>
      
      {/* Back to Top Button */}
      {showBackToTop && (
         <button
           onClick={scrollToTop}
           className="fixed bottom-20 right-6 w-10 h-10 bg-black bg-opacity-20 text-[#605BFF] rounded-full shadow-lg hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center z-50"
           title="返回顶部"
         >
           <ChevronUp className="w-4 h-4" />
         </button>
       )}
    </div>
  );
};

export default MeetingIntelligence;