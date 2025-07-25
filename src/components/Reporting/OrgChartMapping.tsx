import React, { useState } from 'react';
import { Users, Crown, Shield, AlertTriangle, CheckCircle, User } from 'lucide-react';

const OrgChartMapping: React.FC = () => {
  const [selectedDeal, setSelectedDeal] = useState('Acme Corp - Enterprise License');

  const deals = [
    'Acme Corp - Enterprise License',
    'TechStart Inc - Platform Integration',
    'Global Solutions - Multi-year Contract',
    'Innovation Labs - Custom Solution'
  ];

  const orgData = {
    ceo: {
      name: 'Robert Williams',
      title: 'CEO',
      influence: 'Decision Maker',
      engagement: 'Not Engaged',
      status: 'inactive',
      notes: 'Final sign-off required',
      avatar: 'RW'
    },
    executives: [
      {
        name: 'John Smith',
        title: 'CTO',
        influence: 'Decision Maker',
        engagement: 'High',
        status: 'champion',
        notes: 'Strong technical advocate',
        avatar: 'JS'
      },
      {
        name: 'Patricia Davis',
        title: 'CFO',
        influence: 'Decision Maker',
        engagement: 'Low',
        status: 'blocker',
        notes: 'Budget concerns',
        avatar: 'PD'
      }
    ],
    managers: [
      {
        name: 'Sarah Wilson',
        title: 'VP of Engineering',
        influence: 'Influencer',
        engagement: 'Medium',
        status: 'neutral',
        notes: 'Integration timeline concerns',
        avatar: 'SW'
      },
      {
        name: 'Michael Johnson',
        title: 'Procurement Manager',
        influence: 'Blocker',
        engagement: 'Low',
        status: 'blocker',
        notes: 'Cost reduction focus',
        avatar: 'MJ'
      },
      {
        name: 'Lisa Chen',
        title: 'Product Manager',
        influence: 'Champion',
        engagement: 'High',
        status: 'champion',
        notes: 'User experience advocate',
        avatar: 'LC'
      }
    ],
    team: [
      {
        name: 'David Brown',
        title: 'Senior Developer',
        influence: 'Influencer',
        engagement: 'Medium',
        status: 'neutral',
        notes: 'Technical evaluation lead',
        avatar: 'DB'
      },
      {
        name: 'Emma Taylor',
        title: 'Security Engineer',
        influence: 'Influencer',
        engagement: 'High',
        status: 'champion',
        notes: 'Security requirements satisfied',
        avatar: 'ET'
      }
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'champion': return 'bg-green-100 border-green-300 text-green-800';
      case 'blocker': return 'bg-red-100 border-red-300 text-red-800';
      case 'neutral': return 'bg-yellow-100 border-yellow-300 text-yellow-800';
      case 'inactive': return 'bg-gray-100 border-gray-300 text-gray-800';
      default: return 'bg-gray-100 border-gray-300 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'champion': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'blocker': return <AlertTriangle className="w-4 h-4 text-red-600" />;
      case 'neutral': return <User className="w-4 h-4 text-yellow-600" />;
      case 'inactive': return <User className="w-4 h-4 text-gray-600" />;
      default: return <User className="w-4 h-4 text-gray-600" />;
    }
  };

  const getInfluenceIcon = (influence: string) => {
    switch (influence) {
      case 'Decision Maker': return <Crown className="w-4 h-4 text-purple-600" />;
      case 'Influencer': return <Users className="w-4 h-4 text-blue-600" />;
      case 'Champion': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'Blocker': return <Shield className="w-4 h-4 text-red-600" />;
      default: return <User className="w-4 h-4 text-gray-600" />;
    }
  };

  const PersonCard = ({ person, level }: { person: any; level: string }) => (
    <div className={`bg-white rounded-lg border-2 p-4 ${getStatusColor(person.status)} hover:shadow-md transition-shadow cursor-pointer`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-[#605BFF] rounded-full flex items-center justify-center text-white font-medium">
            {person.avatar}
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{person.name}</h4>
            <p className="text-sm text-gray-600">{person.title}</p>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          {getInfluenceIcon(person.influence)}
          {getStatusIcon(person.status)}
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Influence:</span>
          <span className="font-medium">{person.influence}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Engagement:</span>
          <span className="font-medium">{person.engagement}</span>
        </div>
        <div className="border-t pt-2">
          <p className="text-xs text-gray-600">{person.notes}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Organization Chart Mapping</h2>
          <p className="text-gray-600 mt-1">Visual representation of decision-makers, influencers, and champions</p>
        </div>
        
        <select
          value={selectedDeal}
          onChange={(e) => setSelectedDeal(e.target.value)}
          className="bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#605BFF]"
        >
          {deals.map(deal => (
            <option key={deal} value={deal}>{deal}</option>
          ))}
        </select>
      </div>

      {/* Legend */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <h3 className="font-semibold text-gray-900 mb-3">Legend</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Crown className="w-4 h-4 text-purple-600" />
              <span className="text-sm">Decision Maker</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-blue-600" />
              <span className="text-sm">Influencer</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-sm">Champion</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-red-600" />
              <span className="text-sm">Blocker</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-100 border border-green-300 rounded"></div>
              <span className="text-sm">Champion Status</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-red-100 border border-red-300 rounded"></div>
              <span className="text-sm">Blocker Status</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-yellow-100 border border-yellow-300 rounded"></div>
              <span className="text-sm">Neutral Status</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gray-100 border border-gray-300 rounded"></div>
              <span className="text-sm">Not Engaged</span>
            </div>
          </div>
        </div>
      </div>

      {/* Org Chart */}
      <div className="space-y-8">
        {/* CEO Level */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Executive Leadership</h3>
          <div className="flex justify-center">
            <div className="w-80">
              <PersonCard person={orgData.ceo} level="ceo" />
            </div>
          </div>
        </div>

        {/* Executive Level */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">C-Suite</h3>
          <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
            {orgData.executives.map((exec, index) => (
              <PersonCard key={index} person={exec} level="executive" />
            ))}
          </div>
        </div>

        {/* Manager Level */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Management Team</h3>
          <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
            {orgData.managers.map((manager, index) => (
              <PersonCard key={index} person={manager} level="manager" />
            ))}
          </div>
        </div>

        {/* Team Level */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Technical Team</h3>
          <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
            {orgData.team.map((member, index) => (
              <PersonCard key={index} person={member} level="team" />
            ))}
          </div>
        </div>
      </div>

      {/* Stakeholder Summary */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Stakeholder Summary</h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">3</div>
            <div className="text-sm text-gray-600">Champions</div>
          </div>
          
          <div className="text-center p-4 bg-red-50 rounded-lg">
            <div className="text-2xl font-bold text-red-600">2</div>
            <div className="text-sm text-gray-600">Blockers</div>
          </div>
          
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <div className="text-2xl font-bold text-yellow-600">2</div>
            <div className="text-sm text-gray-600">Neutral</div>
          </div>
          
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-gray-600">1</div>
            <div className="text-sm text-gray-600">Not Engaged</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrgChartMapping;