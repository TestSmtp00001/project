import React, { useState } from 'react';
import { Search, Mail, Phone, Calendar, User, MessageSquare, TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react';

const StakeholderInsights: React.FC = () => {
  const [selectedDeal, setSelectedDeal] = useState('Acme Corp - Enterprise License');

  const deals = [
    'Acme Corp - Enterprise License',
    'TechStart Inc - Platform Integration',
    'Global Solutions - Multi-year Contract',
    'Innovation Labs - Custom Solution'
  ];

  const stakeholders = [
    {
      id: 1,
      name: 'John Smith',
      role: 'CTO',
      company: 'Acme Corp',
      influence: 'Decision Maker',
      engagement: 'High',
      sentiment: 'positive',
      lastContact: '2024-01-15',
      contactType: 'email',
      summary: 'Expressed strong interest in security features and scalability options',
      avatar: 'JS',
      riskLevel: 'low'
    },
    {
      id: 2,
      name: 'Sarah Wilson',
      role: 'VP of Engineering',
      company: 'Acme Corp',
      influence: 'Influencer',
      engagement: 'Medium',
      sentiment: 'neutral',
      lastContact: '2024-01-12',
      contactType: 'call',
      summary: 'Has concerns about integration complexity and timeline',
      avatar: 'SW',
      riskLevel: 'medium'
    },
    {
      id: 3,
      name: 'Michael Johnson',
      role: 'Procurement Manager',
      company: 'Acme Corp',
      influence: 'Blocker',
      engagement: 'Low',
      sentiment: 'negative',
      lastContact: '2024-01-08',
      contactType: 'meeting',
      summary: 'Focused on cost reduction and questioning ROI projections',
      avatar: 'MJ',
      riskLevel: 'high'
    },
    {
      id: 4,
      name: 'Lisa Chen',
      role: 'Product Manager',
      company: 'Acme Corp',
      influence: 'Champion',
      engagement: 'High',
      sentiment: 'positive',
      lastContact: '2024-01-16',
      contactType: 'email',
      summary: 'Advocate for the solution, highlighting user experience benefits',
      avatar: 'LC',
      riskLevel: 'low'
    }
  ];

  const getSentimentColor = (sentiment: 'positive' | 'negative' | 'neutral') => {
    switch (sentiment) {
      case 'positive': return 'text-green-600 bg-green-50';
      case 'negative': return 'text-red-600 bg-red-50';
      case 'neutral': return 'text-yellow-600 bg-yellow-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getEngagementColor = (engagement: string) => {
    switch (engagement) {
      case 'High': return 'text-green-600 bg-green-50';
      case 'Medium': return 'text-yellow-600 bg-yellow-50';
      case 'Low': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getInfluenceColor = (influence: string) => {
    switch (influence) {
      case 'Decision Maker': return 'text-purple-600 bg-purple-50';
      case 'Influencer': return 'text-blue-600 bg-blue-50';
      case 'Champion': return 'text-green-600 bg-green-50';
      case 'Blocker': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'text-green-600';
      case 'medium': return 'text-yellow-600';
      case 'high': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getContactIcon = (type: string) => {
    switch (type) {
      case 'email': return <Mail className="w-4 h-4" />;
      case 'call': return <Phone className="w-4 h-4" />;
      case 'meeting': return <Calendar className="w-4 h-4" />;
      default: return <MessageSquare className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header and Deal Selection */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Stakeholder Engagement Insights</h2>
          <p className="text-gray-600 mt-1">Track stakeholder sentiment, engagement, and activity across deals</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <select
            value={selectedDeal}
            onChange={(e) => setSelectedDeal(e.target.value)}
            className="bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#605BFF]"
          >
            {deals.map(deal => (
              <option key={deal} value={deal}>{deal}</option>
            ))}
          </select>
          
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search stakeholders..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#605BFF]"
            />
          </div>
        </div>
      </div>

      {/* Engagement Summary */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Stakeholders</p>
              <p className="text-2xl font-bold text-gray-900">4</p>
            </div>
            <User className="w-8 h-8 text-[#605BFF]" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">High Engagement</p>
              <p className="text-2xl font-bold text-green-600">2</p>
            </div>
            <TrendingUp className="w-8 h-8 text-green-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">At Risk</p>
              <p className="text-2xl font-bold text-red-600">1</p>
            </div>
            <AlertTriangle className="w-8 h-8 text-red-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Avg Sentiment</p>
              <p className="text-2xl font-bold text-yellow-600">Neutral</p>
            </div>
            <TrendingDown className="w-8 h-8 text-yellow-600" />
          </div>
        </div>
      </div>

      {/* Stakeholder Cards */}
      <div className="space-y-4">
        {stakeholders.map((stakeholder) => (
          <div key={stakeholder.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#605BFF] rounded-full flex items-center justify-center text-white font-medium">
                  {stakeholder.avatar}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{stakeholder.name}</h3>
                  <p className="text-sm text-gray-600">{stakeholder.role} • {stakeholder.company}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getInfluenceColor(stakeholder.influence)}`}>
                  {stakeholder.influence}
                </span>
                <div className={`w-3 h-3 rounded-full ${getRiskColor(stakeholder.riskLevel) === 'text-red-600' ? 'bg-red-500' : getRiskColor(stakeholder.riskLevel) === 'text-yellow-600' ? 'bg-yellow-500' : 'bg-green-500'}`}></div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Engagement Level</p>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getEngagementColor(stakeholder.engagement)}`}>
                  {stakeholder.engagement}
                </span>
              </div>
              
              <div>
                <p className="text-sm text-gray-600 mb-1">Sentiment</p>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getSentimentColor(stakeholder.sentiment)}`}>
                  {stakeholder.sentiment}
                </span>
              </div>
              
              <div>
                <p className="text-sm text-gray-600 mb-1">Last Contact</p>
                <div className="flex items-center space-x-2">
                  {getContactIcon(stakeholder.contactType)}
                  <span className="text-sm text-gray-900">{stakeholder.lastContact}</span>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <p className="text-sm text-gray-600 mb-2">Recent Activity Summary</p>
              <p className="text-sm text-gray-900">{stakeholder.summary}</p>
            </div>

            <div className="mt-4 flex space-x-2">
              <button className="px-3 py-1 bg-[#605BFF] text-white text-sm rounded-lg hover:bg-[#524AE6] transition-colors">
                Schedule Follow-up
              </button>
              <button className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition-colors">
                View History
              </button>
              <button className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition-colors">
                Update Status
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Engagement Timeline */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Engagement Timeline</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-2 h-2 bg-[#605BFF] rounded-full"></div>
            <div className="flex-1">
              <p className="text-sm text-gray-900">Lisa Chen sent email - Product demo follow-up</p>
              <p className="text-xs text-gray-500">2 hours ago</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <div className="flex-1">
              <p className="text-sm text-gray-900">John Smith scheduled meeting - Technical review</p>
              <p className="text-xs text-gray-500">1 day ago</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <div className="flex-1">
              <p className="text-sm text-gray-900">Sarah Wilson raised concerns - Integration timeline</p>
              <p className="text-xs text-gray-500">3 days ago</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <div className="flex-1">
              <p className="text-sm text-gray-900">Michael Johnson requested cost breakdown</p>
              <p className="text-xs text-gray-500">1 week ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StakeholderInsights;