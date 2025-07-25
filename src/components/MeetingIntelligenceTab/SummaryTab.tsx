import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Info, Volume2 } from 'lucide-react';

interface SectionData {
  id: string;
  title: string;
  icon: React.ReactNode;
  items: string[];
}

const SummaryTab: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const sections: SectionData[] = [
    {
      id: 'attendees',
      title: 'Attendees',
      icon: null,
      items: [
        'David Miller - Sales Representative (Our Company)',
        'Jennifer Walsh - VP of Operations (Prospect)',
        'Robert Chen - CFO (Prospect)',
        'Lisa Martinez - Procurement Director (Mentioned, not present)'
      ]
    },
    {
      id: 'overview',
      title: 'Overview',
      icon: null,
      items: [
        'Quarterly business review meeting to discuss partnership expansion',
        'Review of successful pilot program results showing 23% efficiency improvement',
        'Discussion of full East Coast rollout with volume pricing',
        'Technical integration requirements and timeline planning',
        'Next steps for proposal review and decision-making process'
      ]
    },
    {
      id: 'keypoints',
      title: 'Key Points',
      icon: null,
      items: [
        'Pilot program exceeded expectations with 23% efficiency improvement',
        '15% volume discount offered for expanded deployment',
        '8-week implementation timeline proposed',
        'Pre-built CRM connectors available for major platforms',
        'Zero-downtime migration using parallel processing approach',
        '99.9% uptime SLA and 98% customer retention rate highlighted'
      ]
    },
    {
      id: 'opportunities',
      title: 'Sales Opportunities',
      icon: null,
      items: [
        'Full East Coast operations expansion (significant revenue opportunity)',
        'Volume pricing creates competitive advantage over other vendors',
        'Strong ROI case based on pilot results',
        'Potential for additional regional office implementations',
        'Long-term partnership opportunity with Fortune 500 company',
        'Reference customer potential for future sales'
      ]
    },
    {
      id: 'issues',
      title: 'Issues, Implication & Influence',
      icon: null,
      items: [
        'IT team concerns about CRM integration and data migration',
        'Procurement team involvement required for contract terms',
        'Board focus on cash flow impact this quarter',
        'Competing with two other vendors in evaluation process',
        'Zero-downtime requirement for customer-facing operations',
        'Need for comprehensive risk assessment and customer references'
      ]
    },
    {
      id: 'money',
      title: 'Money & Metrics',
      icon: null,
      items: [
        '23% efficiency improvement achieved in pilot program',
        '15% volume discount for expanded deployment',
        'ROI projections to be included in detailed proposal',
        'Phased payment structure aligned with cash flow preferences',
        'Cost per unit reduction through volume pricing',
        'Executive committee presentation required for budget approval'
      ]
    },
    {
      id: 'processes',
      title: 'Processes, Parameters & Priorities for Decision',
      icon: null,
      items: [
        'Executive committee presentation scheduled for next Friday',
        'Procurement team review of contract terms and SLAs',
        'IT department technical integration assessment',
        'Comparison matrix with two competing vendors',
        'Customer reference calls from similar implementations',
        'Site visit to existing customer location in Chicago'
      ]
    },
    {
      id: 'access',
      title: 'Access To Decision Makers',
      icon: null,
      items: [
        'Direct access to CFO (Robert Chen) - budget decision maker',
        'Strong relationship with VP of Operations (Jennifer Walsh)',
        'Procurement Director (Lisa Martinez) involvement confirmed',
        'IT Director participation scheduled for technical review',
        'Executive committee presentation opportunity secured',
        'Board-level visibility through CFO reporting'
      ]
    },
    {
      id: 'competition',
      title: 'Competition, Champion & Coach',
      icon: null,
      items: [
        'Two other vendors currently being evaluated',
        'Jennifer Walsh (VP Operations) appears to be champion based on pilot success',
        'Robert Chen (CFO) focused on financial metrics and ROI',
        'Need to differentiate on reliability (99.9% uptime) and retention (98%)',
        'Customer references and case studies critical for competitive advantage',
        'Technical superiority through zero-downtime migration capability'
      ]
    },
    {
      id: 'timing',
      title: 'Timing & Timeframe',
      icon: null,
      items: [
        'Detailed proposal due by end of day Thursday',
        'Follow-up meeting scheduled for next Tuesday at 2 PM EST',
        'Executive committee presentation next Friday',
        'Q4 planning alignment with 8-week implementation timeline',
        'Site visit to Chicago customer location to be arranged',
        'Decision timeline driven by quarterly planning cycle'
      ]
    },
    {
      id: 'consequences',
      title: 'Consequences Of Inaction',
      icon: null,
      items: [
        'Missing Q4 efficiency targets without solution implementation',
        'Continued operational inefficiencies costing 23% productivity loss',
        'Competitive disadvantage if other vendors are selected',
        'Delayed ROI realization pushing benefits into next fiscal year',
        'Potential for competitor to establish foothold in organization',
        'Lost opportunity for volume pricing and favorable terms'
      ]
    },
    {
      id: 'actions',
      title: 'Recommended Action Points',
      icon: null,
      items: [
        'Prepare comprehensive proposal with volume pricing by Thursday EOD',
        'Include three customer case studies and reference contacts',
        'Schedule technical call between our team and their IT department',
        'Arrange site visit to Chicago customer location',
        'Prepare competitive differentiation materials highlighting 99.9% uptime',
        'Coordinate with legal team for enterprise agreement customization',
        'Confirm Tuesday 2 PM follow-up meeting with all stakeholders'
      ]
    },
    {
      id: 'questions',
      title: 'Questions',
      icon: null,
      items: [
        'What specific CRM platform are they currently using?',
        'What are the exact contract terms and SLA requirements from procurement?',
        'Who are the two competing vendors and what are their key differentiators?',
        'What is the total budget allocated for this initiative?',
        'Are there any compliance or regulatory requirements we need to address?',
        'What are the specific success metrics they will use to evaluate the solution?',
        'Is there flexibility in the implementation timeline if needed?'
      ]
    }
  ];

  // Reorder sections to put actions before questions
  const reorderedSections = sections.map(section => {
    if (section.id === 'actions') {
      return { ...section, order: sections.length - 1 }; // Put actions second to last
    } else if (section.id === 'questions') {
      return { ...section, order: sections.length }; // Put questions last
    } else {
      return { ...section, order: sections.findIndex(s => s.id === section.id) };
    }
  }).sort((a, b) => a.order - b.order);

  return (
    <div className="h-full overflow-y-auto">
      <div className="p-4">
        <div className="space-y-3">
          {reorderedSections.map((section) => (
            <div key={section.id} className="border border-gray-200 rounded-lg bg-white">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-3 py-2 flex items-center justify-between hover:bg-gray-50 transition-colors rounded-lg text-left"
              >
                <div className="flex items-center space-x-2">
                  <h3 className={`text-xs font-medium ${
                  section.id === 'issues' || section.id === 'money' || section.id === 'processes' || 
                  section.id === 'access' || section.id === 'competition' || section.id === 'timing' || 
                  section.id === 'consequences' || section.id === 'actions'
                    ? 'text-[#605BFF]' 
                    : 'text-gray-900'
                  }`}>{section.title}</h3>
                  {(section.id === 'opportunities' || section.id === 'issues' || section.id === 'money' || 
                    section.id === 'processes' || section.id === 'access' || section.id === 'competition' || 
                    section.id === 'timing' || section.id === 'consequences' || section.id === 'questions' || 
                    section.id === 'actions') && (
                    <Info className="w-2.5 h-2.5 text-gray-400" />
                  )}
                </div>
                <div className="text-gray-400">
                  {expandedSections.has(section.id) ? (
                    <ChevronDown className="w-2.5 h-2.5" />
                  ) : (
                    <ChevronRight className="w-2.5 h-2.5" />
                  )}
                </div>
              </button>
              
              {expandedSections.has(section.id) && (
                <div className="px-3 pb-3">
                  <div className="border-t border-gray-100 pt-2">
                    <ul className="space-y-1">
                      {section.items.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2 group">
                          <div className="w-1 h-1 bg-black rounded-full mt-1.5 flex-shrink-0"></div>
                          <div className="flex items-start space-x-2 flex-1 min-w-0">
                            <span className="text-xs text-gray-700 leading-tight break-words">{item}</span>
                            {(section.id === 'opportunities' || section.id === 'issues' || section.id === 'money' || 
                              section.id === 'processes' || section.id === 'access' || section.id === 'competition' || 
                              section.id === 'timing' || section.id === 'actions') && (
                              <Volume2 className="w-2.5 h-2.5 text-[#605BFF] flex-shrink-0" />
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SummaryTab;