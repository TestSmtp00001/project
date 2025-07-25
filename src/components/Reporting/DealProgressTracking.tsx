import React, { useState } from 'react';
import { Search, Filter, AlertCircle, CheckCircle, Clock, Users, ArrowRight } from 'lucide-react';

const DealProgressTracking: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStage, setSelectedStage] = useState('All');

  const deals = [
    {
      id: 1,
      name: 'Acme Corp - Enterprise License',
      value: 250000,
      stage: 'Negotiation',
      progress: 75,
      nextStep: 'Final pricing review',
      blockers: ['Legal review pending'],
      stakeholders: 4,
      owner: 'Sarah Johnson',
      lastActivity: '2 hours ago',
      probability: 85,
      closeDate: '2024-02-15'
    },
    {
      id: 2,
      name: 'TechStart Inc - Platform Integration',
      value: 180000,
      stage: 'Proposal',
      progress: 60,
      nextStep: 'Technical demo scheduled',
      blockers: [],
      stakeholders: 3,
      owner: 'Michael Chen',
      lastActivity: '1 day ago',
      probability: 70,
      closeDate: '2024-02-28'
    },
    {
      id: 3,
      name: 'Global Solutions - Multi-year Contract',
      value: 450000,
      stage: 'Discovery',
      progress: 40,
      nextStep: 'Requirements gathering',
      blockers: ['Budget approval needed', 'Key stakeholder unavailable'],
      stakeholders: 6,
      owner: 'Emily Rodriguez',
      lastActivity: '3 days ago',
      probability: 45,
      closeDate: '2024-03-15'
    },
    {
      id: 4,
      name: 'Innovation Labs - Custom Solution',
      value: 320000,
      stage: 'Negotiation',
      progress: 80,
      nextStep: 'Contract finalization',
      blockers: [],
      stakeholders: 2,
      owner: 'David Kim',
      lastActivity: '4 hours ago',
      probability: 90,
      closeDate: '2024-02-10'
    }
  ];

  const stages = ['All', 'Discovery', 'Proposal', 'Negotiation', 'Closed Won', 'Closed Lost'];

  const filteredDeals = deals.filter(deal => {
    const matchesSearch = deal.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStage = selectedStage === 'All' || deal.stage === selectedStage;
    return matchesSearch && matchesStage;
  });

  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'Discovery': return 'bg-blue-100 text-blue-800';
      case 'Proposal': return 'bg-yellow-100 text-yellow-800';
      case 'Negotiation': return 'bg-purple-100 text-purple-800';
      case 'Closed Won': return 'bg-green-100 text-green-800';
      case 'Closed Lost': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getProbabilityColor = (probability: number) => {
    if (probability >= 80) return 'text-green-600';
    if (probability >= 60) return 'text-yellow-600';
    if (probability >= 40) return 'text-orange-600';
    return 'text-red-600';
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="space-y-6">
      {/* Header and Filters */}
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search deals..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#605BFF]"
            />
          </div>
          
          <select
            value={selectedStage}
            onChange={(e) => setSelectedStage(e.target.value)}
            className="bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#605BFF]"
          >
            {stages.map(stage => (
              <option key={stage} value={stage}>{stage}</option>
            ))}
          </select>
        </div>

        <button className="flex items-center space-x-2 px-4 py-2 bg-[#605BFF] text-white rounded-lg hover:bg-[#524AE6] transition-colors">
          <Filter className="w-4 h-4" />
          <span>Advanced Filters</span>
        </button>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-5 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="text-sm text-gray-600">Total Pipeline</div>
          <div className="text-2xl font-bold text-gray-900">$1.2M</div>
          <div className="text-sm text-green-600">+12% from last month</div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="text-sm text-gray-600">Active Deals</div>
          <div className="text-2xl font-bold text-gray-900">4</div>
          <div className="text-sm text-blue-600">2 in negotiation</div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="text-sm text-gray-600">Avg Deal Size</div>
          <div className="text-2xl font-bold text-gray-900">$300K</div>
          <div className="text-sm text-gray-600">Enterprise focused</div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="text-sm text-gray-600">Win Rate</div>
          <div className="text-2xl font-bold text-gray-900">73%</div>
          <div className="text-sm text-green-600">Above target</div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="text-sm text-gray-600">Avg Sales Cycle</div>
          <div className="text-2xl font-bold text-gray-900">45 days</div>
          <div className="text-sm text-yellow-600">Within range</div>
        </div>
      </div>

      {/* Deal Cards */}
      <div className="space-y-4">
        {filteredDeals.map((deal) => (
          <div key={deal.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{deal.name}</h3>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span className="font-medium">{formatCurrency(deal.value)}</span>
                  <span className="text-gray-400">•</span>
                  <span>Owner: {deal.owner}</span>
                  <span className="text-gray-400">•</span>
                  <span>Last activity: {deal.lastActivity}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStageColor(deal.stage)}`}>
                  {deal.stage}
                </span>
                <span className={`text-sm font-medium ${getProbabilityColor(deal.probability)}`}>
                  {deal.probability}%
                </span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Deal Progress</span>
                <span>{deal.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-[#605BFF] h-2 rounded-full transition-all duration-300"
                  style={{ width: `${deal.progress}%` }}
                />
              </div>
            </div>

            {/* Next Steps and Blockers */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="flex items-center space-x-2">
                <ArrowRight className="w-4 h-4 text-[#605BFF]" />
                <div>
                  <div className="text-sm font-medium text-gray-900">Next Step</div>
                  <div className="text-sm text-gray-600">{deal.nextStep}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-blue-600" />
                <div>
                  <div className="text-sm font-medium text-gray-900">Stakeholders</div>
                  <div className="text-sm text-gray-600">{deal.stakeholders} active</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-green-600" />
                <div>
                  <div className="text-sm font-medium text-gray-900">Expected Close</div>
                  <div className="text-sm text-gray-600">{deal.closeDate}</div>
                </div>
              </div>
            </div>

            {/* Blockers */}
            {deal.blockers.length > 0 && (
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertCircle className="w-4 h-4 text-red-500" />
                  <span className="text-sm font-medium text-red-700">Blockers ({deal.blockers.length})</span>
                </div>
                <div className="space-y-1">
                  {deal.blockers.map((blocker, index) => (
                    <div key={index} className="text-sm text-red-600 ml-6">
                      • {blocker}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* No Blockers */}
            {deal.blockers.length === 0 && (
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium text-green-700">No current blockers</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Stage Pipeline View */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Pipeline by Stage</h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">1</div>
            <div className="text-sm text-gray-600">Discovery</div>
            <div className="text-sm font-medium text-blue-600">$450K</div>
          </div>
          
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <div className="text-2xl font-bold text-yellow-600">1</div>
            <div className="text-sm text-gray-600">Proposal</div>
            <div className="text-sm font-medium text-yellow-600">$180K</div>
          </div>
          
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">2</div>
            <div className="text-sm text-gray-600">Negotiation</div>
            <div className="text-sm font-medium text-purple-600">$570K</div>
          </div>
          
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">0</div>
            <div className="text-sm text-gray-600">Closed Won</div>
            <div className="text-sm font-medium text-green-600">$0</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealProgressTracking;