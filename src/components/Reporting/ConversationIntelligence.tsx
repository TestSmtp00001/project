import React, { useState } from 'react';
import { Search, Play, Download, MessageSquare, TrendingUp, TrendingDown, Clock, Users, Star, AlertCircle } from 'lucide-react';

const ConversationIntelligence: React.FC = () => {
  const [selectedDeal, setSelectedDeal] = useState('Acme Corp - Enterprise License');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const deals = [
    'Acme Corp - Enterprise License',
    'TechStart Inc - Platform Integration',
    'Global Solutions - Multi-year Contract',
    'Innovation Labs - Custom Solution'
  ];

  const conversations = [
    {
      id: 1,
      title: 'Discovery Call - Technical Requirements',
      date: '2024-01-15',
      duration: '45 min',
      participants: ['John Smith (CTO)', 'Sarah Wilson (VP Eng)', 'Rep: Michael Chen'],
      confidenceScore: 85,
      sentiment: 'positive',
      keyInsights: [
        'Strong interest in security features',
        'Scalability is a key requirement',
        'Integration timeline is important'
      ],
      criticalMoments: [
        { time: '12:30', type: 'pricing', content: 'Discussed pricing structure' },
        { time: '28:15', type: 'objection', content: 'Concerns about implementation time' },
        { time: '38:45', type: 'next-steps', content: 'Agreed on technical demo' }
      ],
      flags: ['missing-pricing-discussion'],
      coachingNotes: 'Great job building rapport. Consider addressing pricing concerns earlier.',
      hasRecording: true
    },
    {
      id: 2,
      title: 'Technical Demo Follow-up',
      date: '2024-01-12',
      duration: '30 min',
      participants: ['John Smith (CTO)', 'Rep: Michael Chen'],
      confidenceScore: 78,
      sentiment: 'neutral',
      keyInsights: [
        'Positive response to demo',
        'Questions about customization',
        'Need internal approval process'
      ],
      criticalMoments: [
        { time: '08:20', type: 'intent', content: 'Expressed buying intent' },
        { time: '18:45', type: 'objection', content: 'Customization complexity concerns' },
        { time: '25:30', type: 'next-steps', content: 'Will discuss with team' }
      ],
      flags: ['no-next-steps-alignment'],
      coachingNotes: 'Good technical presentation. Need to secure firmer next steps.',
      hasRecording: true
    },
    {
      id: 3,
      title: 'Stakeholder Alignment Call',
      date: '2024-01-10',
      duration: '60 min',
      participants: ['John Smith (CTO)', 'Sarah Wilson (VP Eng)', 'Michael Johnson (Procurement)', 'Rep: Michael Chen'],
      confidenceScore: 65,
      sentiment: 'mixed',
      keyInsights: [
        'CTO is supportive',
        'VP Engineering has concerns',
        'Procurement focused on cost'
      ],
      criticalMoments: [
        { time: '15:45', type: 'objection', content: 'Budget concerns raised' },
        { time: '32:10', type: 'pricing', content: 'Detailed pricing discussion' },
        { time: '48:20', type: 'urgency', content: 'Timeline pressure mentioned' }
      ],
      flags: ['multiple-objections', 'budget-concerns'],
      coachingNotes: 'Need to address procurement concerns and align on value proposition.',
      hasRecording: true
    }
  ];

  const getConfidenceColor = (score: number) => {
    if (score >= 80) return 'text-green-600 bg-green-50';
    if (score >= 60) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return 'text-green-600 bg-green-50';
      case 'negative': return 'text-red-600 bg-red-50';
      case 'neutral': return 'text-gray-600 bg-gray-50';
      case 'mixed': return 'text-yellow-600 bg-yellow-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getMomentTypeColor = (type: string) => {
    switch (type) {
      case 'pricing': return 'text-blue-600 bg-blue-50';
      case 'objection': return 'text-red-600 bg-red-50';
      case 'intent': return 'text-green-600 bg-green-50';
      case 'urgency': return 'text-orange-600 bg-orange-50';
      case 'next-steps': return 'text-purple-600 bg-purple-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getFlagIcon = (flag: string) => {
    switch (flag) {
      case 'missing-pricing-discussion': return <AlertCircle className="w-4 h-4 text-red-500" />;
      case 'no-next-steps-alignment': return <AlertCircle className="w-4 h-4 text-yellow-500" />;
      case 'multiple-objections': return <AlertCircle className="w-4 h-4 text-red-500" />;
      case 'budget-concerns': return <AlertCircle className="w-4 h-4 text-orange-500" />;
      default: return <AlertCircle className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Conversation Intelligence & Forecasting</h2>
          <p className="text-gray-600 mt-1">AI-powered insights from sales conversations to improve forecast accuracy</p>
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
          
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#605BFF]"
          >
            <option value="All">All Conversations</option>
            <option value="High Confidence">High Confidence</option>
            <option value="Flagged">Flagged Issues</option>
            <option value="Recent">Recent</option>
          </select>
        </div>
      </div>

      {/* Summary Dashboard */}
      <div className="grid grid-cols-5 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Calls</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
            <MessageSquare className="w-8 h-8 text-[#605BFF]" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Avg Confidence</p>
              <p className="text-2xl font-bold text-green-600">76%</p>
            </div>
            <TrendingUp className="w-8 h-8 text-green-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Talk Time</p>
              <p className="text-2xl font-bold text-blue-600">8.5h</p>
            </div>
            <Clock className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Stakeholders</p>
              <p className="text-2xl font-bold text-purple-600">8</p>
            </div>
            <Users className="w-8 h-8 text-purple-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Flagged Issues</p>
              <p className="text-2xl font-bold text-red-600">3</p>
            </div>
            <AlertCircle className="w-8 h-8 text-red-600" />
          </div>
        </div>
      </div>

      {/* Conversation List */}
      <div className="space-y-4">
        {conversations.map((conversation) => (
          <div key={conversation.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{conversation.title}</h3>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>{conversation.date}</span>
                  <span className="text-gray-400">•</span>
                  <span>{conversation.duration}</span>
                  <span className="text-gray-400">•</span>
                  <span>{conversation.participants.length} participants</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getConfidenceColor(conversation.confidenceScore)}`}>
                  {conversation.confidenceScore}% confidence
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getSentimentColor(conversation.sentiment)}`}>
                  {conversation.sentiment}
                </span>
              </div>
            </div>

            {/* Participants */}
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">Participants:</p>
              <div className="flex flex-wrap gap-2">
                {conversation.participants.map((participant, index) => (
                  <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg">
                    {participant}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Insights */}
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">Key Insights:</p>
              <ul className="space-y-1">
                {conversation.keyInsights.map((insight, index) => (
                  <li key={index} className="text-sm text-gray-900 flex items-start">
                    <span className="text-[#605BFF] mr-2">•</span>
                    {insight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Critical Moments */}
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">Critical Moments:</p>
              <div className="space-y-2">
                {conversation.criticalMoments.map((moment, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-xs text-gray-500 font-mono">{moment.time}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getMomentTypeColor(moment.type)}`}>
                      {moment.type}
                    </span>
                    <span className="text-sm text-gray-700">{moment.content}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Flags */}
            {conversation.flags.length > 0 && (
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">Flags:</p>
                <div className="flex flex-wrap gap-2">
                  {conversation.flags.map((flag, index) => (
                    <div key={index} className="flex items-center space-x-1 px-2 py-1 bg-red-50 text-red-700 text-sm rounded-lg">
                      {getFlagIcon(flag)}
                      <span>{flag.replace('-', ' ')}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Coaching Notes */}
            <div className="mb-4 p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-900">
                <strong>Coaching Notes:</strong> {conversation.coachingNotes}
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-2">
              <button className="flex items-center space-x-2 px-3 py-1 bg-[#605BFF] text-white text-sm rounded-lg hover:bg-[#524AE6] transition-colors">
                <Play className="w-4 h-4" />
                <span>Play Recording</span>
              </button>
              <button className="flex items-center space-x-2 px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition-colors">
                <Download className="w-4 h-4" />
                <span>Download</span>
              </button>
              <button className="flex items-center space-x-2 px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition-colors">
                <Star className="w-4 h-4" />
                <span>Add to Favorites</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* AI Insights Summary */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">AI-Generated Deal Insights</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Positive Signals</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Strong technical interest from CTO
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Clear use case identified
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Budget allocated for Q1
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Risk Factors</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">⚠</span>
                Procurement concerns about cost
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">⚠</span>
                Implementation timeline pressure
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">⚠</span>
                Multiple stakeholder alignment needed
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationIntelligence;