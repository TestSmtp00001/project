import React, { useState } from 'react';
import { Search, Filter, ChevronDown, TrendingUp, TrendingDown, User, DollarSign, Calendar } from 'lucide-react';

const TeamForecastView: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('Q1 2024');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSegment, setSelectedSegment] = useState('All');

  const teamData = [
    {
      id: 1,
      name: 'Sarah Johnson',
      avatar: 'SJ',
      commit: { deals: 5, value: 450000, stage: 'Proposal' },
      bestCase: { deals: 8, value: 750000, stage: 'Negotiation' },
      pipeline: { deals: 12, value: 1200000, stage: 'Discovery' },
      trend: 'up',
      confidence: 85
    },
    {
      id: 2,
      name: 'Michael Chen',
      avatar: 'MC',
      commit: { deals: 3, value: 320000, stage: 'Negotiation' },
      bestCase: { deals: 6, value: 580000, stage: 'Proposal' },
      pipeline: { deals: 9, value: 890000, stage: 'Qualification' },
      trend: 'up',
      confidence: 78
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      avatar: 'ER',
      commit: { deals: 4, value: 380000, stage: 'Proposal' },
      bestCase: { deals: 7, value: 680000, stage: 'Discovery' },
      pipeline: { deals: 11, value: 1100000, stage: 'Prospecting' },
      trend: 'down',
      confidence: 72
    },
    {
      id: 4,
      name: 'David Kim',
      avatar: 'DK',
      commit: { deals: 6, value: 520000, stage: 'Negotiation' },
      bestCase: { deals: 9, value: 830000, stage: 'Proposal' },
      pipeline: { deals: 13, value: 1350000, stage: 'Discovery' },
      trend: 'up',
      confidence: 91
    }
  ];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 85) return 'text-green-600 bg-green-50';
    if (confidence >= 70) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <div className="flex flex-wrap gap-4">
          <div className="relative">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-[#605BFF]"
            >
              <option>Q1 2024</option>
              <option>Q2 2024</option>
              <option>Q3 2024</option>
              <option>Q4 2024</option>
            </select>
            <ChevronDown className="absolute right-2 top-2.5 w-4 h-4 text-gray-400" />
          </div>

          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-[#605BFF]"
            >
              <option>All Categories</option>
              <option>Commit</option>
              <option>Best Case</option>
              <option>Pipeline</option>
            </select>
            <ChevronDown className="absolute right-2 top-2.5 w-4 h-4 text-gray-400" />
          </div>

          <div className="relative">
            <select
              value={selectedSegment}
              onChange={(e) => setSelectedSegment(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-[#605BFF]"
            >
              <option>All Segments</option>
              <option>Enterprise</option>
              <option>Mid-Market</option>
              <option>SMB</option>
            </select>
            <ChevronDown className="absolute right-2 top-2.5 w-4 h-4 text-gray-400" />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search team members..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#605BFF]"
            />
          </div>
          <button className="p-2 text-gray-500 hover:text-[#605BFF] transition-colors">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Pipeline</p>
              <p className="text-2xl font-bold text-gray-900">$4.54M</p>
            </div>
            <DollarSign className="w-8 h-8 text-[#605BFF]" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Deals</p>
              <p className="text-2xl font-bold text-gray-900">45</p>
            </div>
            <User className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Avg Confidence</p>
              <p className="text-2xl font-bold text-gray-900">81%</p>
            </div>
            <TrendingUp className="w-8 h-8 text-green-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Forecast Period</p>
              <p className="text-2xl font-bold text-gray-900">Q1</p>
            </div>
            <Calendar className="w-8 h-8 text-purple-600" />
          </div>
        </div>
      </div>

      {/* Team Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Team Performance Dashboard</h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Team Member
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Commit
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Best Case
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Pipeline
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Trend
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Confidence
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {teamData.map((member) => (
                <tr key={member.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-[#605BFF] rounded-full flex items-center justify-center text-white font-medium">
                        {member.avatar}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{member.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      <div className="font-medium">{formatCurrency(member.commit.value)}</div>
                      <div className="text-gray-500">{member.commit.deals} deals • {member.commit.stage}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      <div className="font-medium">{formatCurrency(member.bestCase.value)}</div>
                      <div className="text-gray-500">{member.bestCase.deals} deals • {member.bestCase.stage}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      <div className="font-medium">{formatCurrency(member.pipeline.value)}</div>
                      <div className="text-gray-500">{member.pipeline.deals} deals • {member.pipeline.stage}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {member.trend === 'up' ? (
                        <TrendingUp className="w-5 h-5 text-green-600" />
                      ) : (
                        <TrendingDown className="w-5 h-5 text-red-600" />
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getConfidenceColor(member.confidence)}`}>
                      {member.confidence}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Forecast Categories Breakdown */}
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Commit Category</h4>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Total Value</span>
              <span className="font-medium">$1,670,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Deal Count</span>
              <span className="font-medium">18</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Avg Deal Size</span>
              <span className="font-medium">$92,778</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Close Rate</span>
              <span className="font-medium text-green-600">78%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Best Case Category</h4>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Total Value</span>
              <span className="font-medium">$2,840,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Deal Count</span>
              <span className="font-medium">30</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Avg Deal Size</span>
              <span className="font-medium">$94,667</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Close Rate</span>
              <span className="font-medium text-yellow-600">52%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Pipeline Category</h4>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Total Value</span>
              <span className="font-medium">$4,540,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Deal Count</span>
              <span className="font-medium">45</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Avg Deal Size</span>
              <span className="font-medium">$100,889</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Close Rate</span>
              <span className="font-medium text-blue-600">32%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamForecastView;