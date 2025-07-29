import React, { useState } from 'react';
import { Search, Download, Copy, Settings, Clock, User, Share2 } from 'lucide-react';

interface TranscriptEntry {
  id: string;
  speaker: string;
  timestamp: string;
  content: string;
  speakerRole?: string;
}

const TranscriptTab: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpeaker, setSelectedSpeaker] = useState('all');

  // Sample sales meeting transcript data
  const transcriptData: TranscriptEntry[] = [
    {
      id: '1',
      speaker: 'David Miller',
      speakerRole: 'Sales Rep',
      timestamp: '00:15',
      content: 'Good morning everyone, thank you for joining today\'s quarterly business review. I\'m excited to discuss our partnership opportunities and how we can drive mutual growth in Q4. I know everyone\'s time is valuable, so I\'ve prepared a focused agenda covering our pilot results, expansion opportunities, and next steps for implementation.',
    },
    {
      id: '2',
      speaker: 'Jennifer Walsh',
      speakerRole: 'VP of Operations',
      timestamp: '00:42',
      content: 'Thanks David. We\'ve been really impressed with the results from our pilot program. The 23% efficiency improvement exceeded our expectations, and our team is eager to expand the implementation.',
    },
    {
      id: '3',
      speaker: 'David Miller',
      speakerRole: 'Sales Rep',
      timestamp: '01:18',
      content: 'That\'s fantastic to hear Jennifer. Based on those results, I\'d like to propose scaling this across your entire East Coast operations. We can offer a 15% volume discount for the expanded deployment. Given the success metrics you\'ve achieved, I believe we can replicate this across all your regional offices. The volume pricing would bring your per-unit cost down significantly.',
    },
    {
      id: '4',
      speaker: 'Robert Chen',
      speakerRole: 'CFO',
      timestamp: '01:45',
      content: 'The ROI numbers look compelling. What\'s the timeline for full implementation, and what kind of support can we expect during the transition period? I\'m particularly interested in understanding the upfront investment required and how quickly we can expect to see returns. Our board is very focused on cash flow impact this quarter.',
    },
    {
      id: '5',
      speaker: 'David Miller',
      speakerRole: 'Sales Rep',
      timestamp: '02:12',
      content: 'Great question Robert. We can have the full rollout completed within 8 weeks. Our implementation team will provide dedicated support throughout, including on-site training for your staff and 24/7 technical support for the first 90 days. We can also structure the payment terms to align with your cash flow preferences - perhaps a phased approach tied to implementation milestones.',
    },
    {
      id: '6',
      speaker: 'Jennifer Walsh',
      speakerRole: 'VP of Operations',
      timestamp: '02:38',
      content: 'That timeline works well with our Q4 planning. What about the integration with our existing CRM system? That was a concern raised by our IT team. They\'re worried about data migration and potential downtime during the transition. We can\'t afford any disruption to our customer-facing operations.',
    },
    {
      id: '7',
      speaker: 'David Miller',
      speakerRole: 'Sales Rep',
      timestamp: '03:05',
      content: 'Absolutely, we have pre-built connectors for Salesforce, HubSpot, and most major CRM platforms. Our technical team can schedule a call with your IT department next week to address any specific integration requirements. We\'ve done similar integrations with companies your size, and typically we can achieve zero-downtime migration using our parallel processing approach.',
    },
    {
      id: '8',
      speaker: 'Robert Chen',
      speakerRole: 'CFO',
      timestamp: '03:32',
      content: 'I\'d like to see a detailed proposal with the pricing breakdown and implementation timeline. When can we expect that? I\'ll need to present this to our executive committee next Friday, so having all the financial details and risk assessments would be crucial. Can you also include some customer references from similar implementations?',
    },
    {
      id: '9',
      speaker: 'David Miller',
      speakerRole: 'Sales Rep',
      timestamp: '03:48',
      content: 'I can have a comprehensive proposal to you by end of day Thursday. It will include the volume pricing, implementation schedule, support details, and ROI projections based on your current metrics. I\'ll also include three customer case studies from similar-sized organizations in your industry, along with their contact information for reference calls if needed.',
    },
    {
      id: '10',
      speaker: 'Jennifer Walsh',
      speakerRole: 'VP of Operations',
      timestamp: '04:15',
      content: 'Perfect. I think we should also include our procurement team in the next discussion. They\'ll want to review the contract terms and service level agreements. Our procurement director, Lisa Martinez, is quite thorough with vendor agreements. She\'ll want to understand the warranty terms, liability clauses, and termination conditions.',
    },
    {
      id: '11',
      speaker: 'David Miller',
      speakerRole: 'Sales Rep',
      timestamp: '04:32',
      content: 'Absolutely. I\'ll coordinate with our legal team to prepare the standard enterprise agreement. We\'re quite flexible on terms and can accommodate most procurement requirements. We understand that enterprise agreements need to meet specific compliance standards, and we\'ve worked with Fortune 500 companies to customize our terms accordingly.',
    },
    {
      id: '12',
      speaker: 'Robert Chen',
      speakerRole: 'CFO',
      timestamp: '04:58',
      content: 'This all sounds very promising. What are the next steps to move forward? I want to make sure we have a clear action plan and timeline. We\'re also evaluating two other vendors, so understanding your competitive advantages would be helpful for our decision matrix.',
    },
    {
      id: '13',
      speaker: 'David Miller',
      speakerRole: 'Sales Rep',
      timestamp: '05:12',
      content: 'I suggest we schedule a follow-up meeting for next Tuesday to review the proposal. I\'ll also arrange for our technical team to connect with your IT department, and we can bring in our procurement specialist to address any contract questions. Regarding competitive advantages, our platform offers 99.9% uptime SLA and our customer retention rate is 98%, which speaks to our reliability and service quality.',
    },
    {
      id: '14',
      speaker: 'Jennifer Walsh',
      speakerRole: 'VP of Operations',
      timestamp: '05:38',
      content: 'That sounds like a solid plan. I\'ll make sure our IT director and procurement lead are available for next Tuesday. What time works best for your team? I\'d also like to arrange a site visit to see the solution in action at one of your existing customer locations, if that\'s possible.',
    },
    {
      id: '15',
      speaker: 'David Miller',
      speakerRole: 'Sales Rep',
      timestamp: '05:52',
      content: 'How about 2 PM EST? That should give us enough time to cover all the technical details and contract terms thoroughly. Regarding the site visit, I can arrange that with our customer in Chicago - they have a very similar setup to what we\'re proposing for you. They\'ve been using our solution for 18 months now.',
    },
    {
      id: '16',
      speaker: 'Robert Chen',
      speakerRole: 'CFO',
      timestamp: '06:04',
      content: 'Perfect. I\'ll send out the calendar invite after this call. Looking forward to seeing the detailed proposal and moving this forward. David, thank you for a very productive discussion. This looks like it could be exactly what we need to hit our efficiency targets for next year.',
    }
  ];

  const speakers = ['all', ...Array.from(new Set(transcriptData.map(entry => entry.speaker)))];

  const filteredTranscript = transcriptData.filter(entry => {
    const matchesSearch = entry.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         entry.speaker.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpeaker = selectedSpeaker === 'all' || entry.speaker === selectedSpeaker;
    return matchesSearch && matchesSpeaker;
  });

  const getSpeakerColor = (speaker: string) => {
    const colors = [
      'bg-blue-100 text-blue-800',
      'bg-green-100 text-green-800',
      'bg-purple-100 text-purple-800',
      'bg-orange-100 text-orange-800',
      'bg-pink-100 text-pink-800',
    ];
    const index = transcriptData.findIndex(entry => entry.speaker === speaker) % colors.length;
    return colors[index];
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header Controls */}
      <div className="p-4 border-b border-gray-200 bg-gray-50 flex-shrink-0">
        {/* Search */}
        <div className="relative mb-3">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search transcript..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#605BFF] focus:border-transparent text-xs"
          />
        </div>
        
        {/* Speaker Filter */}
        <div className="flex space-x-2">
          <select
            value={selectedSpeaker}
            onChange={(e) => setSelectedSpeaker(e.target.value)}
            className="flex-1 pl-3 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#605BFF] focus:border-transparent appearance-none bg-white text-xs"
          >
            {speakers.map(speaker => (
              <option key={speaker} value={speaker}>
                {speaker === 'all' ? 'All Speakers' : speaker}
              </option>
            ))}
          </select>
          
          <div className="flex space-x-1">
            {/*<button className="p-2 text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg">
              <Share2 className="w-2.5 h-2.5" />
            </button>*/}
            <button className="p-2 text-gray-600 hover:text-gray-900 rounded-lg">
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Transcript Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 space-y-4">
          {filteredTranscript.map((entry) => (
            <div key={entry.id} className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
              {/* Speaker Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#605BFF] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-medium">
                      {entry.speaker.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-900">{entry.speaker}</div>
                    {entry.speakerRole && (
                      <div className="text-xs text-gray-500">{entry.speakerRole}</div>
                    )}
                  </div>
                </div>
                
                <button className="flex items-center space-x-1 text-xs text-[#605BFF]">
                  <Clock className="w-2.5 h-2.5" />
                  <span className="font-mono">{entry.timestamp}</span>
                </button>
              </div>
              
              {/* Content */}
              <div className="mb-3">
                <p className="text-xs text-gray-900 leading-relaxed">{entry.content}</p>
              </div>
              
              {/* Action buttons */}
              <div className="flex items-center space-x-3 pt-2 border-t border-gray-100">
                <button className="text-xs text-gray-500 hover:text-[#605BFF] transition-colors">
                  Copy
                </button>
                <button className="text-xs text-gray-500 hover:text-[#605BFF] transition-colors">
                  Highlight
                </button>
                <button className="text-xs text-gray-500 hover:text-[#605BFF] transition-colors">
                  Add Note
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Footer Stats */}
      <div className="p-4 border-t border-gray-200 bg-gray-50 flex-shrink-0">
        <div className="flex items-center justify-between text-xs text-gray-600">
          <span>{filteredTranscript.length} entries</span>
          <span>6:04 total</span>
        </div>
      </div>
    </div>
  );
};

export default TranscriptTab;