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
      id: 'overview',
      title: 'Overview',
      icon: null,
      items: [
        "Jennifer from Employment Hero had a call with David to discuss Employment Hero's employer of record services, particularly for David's company's potential expansion into the US. David is currently using contractors in Ukraine and Australia. The discussion covered the setup of Employment Hero, costs associated with hiring through them (including health insurance), onboarding processes, and support provided during and after employment. David offered to send David a follow-up email with details on costs and other information."
      ]
    },
    {
      id: 'opening',
      title: 'Opening',
      icon: null,
      items: [
        "Jennifer initiated the conversation by asking David about his work arrangement, inquiring about working remotely versus in the office.",
        "Jennifer acknowledged and validated David's points about office distractions, creating a common ground.",
        "Jennifer briefly introduced Employment Hero's remote-first approach and global presence.",
        "Jennifer confirmed David's prior knowledge about Employment Hero's funding and expressed appreciation for David's time.",
        "Jennifer transitioned into the purpose of the call, referencing a previous conversation with Mark about David's company's potential expansion."
      ],
      observations: [
        "Jennifer established rapport effectively by discussing work arrangements and validating David's perspective on office distractions.",
        "The transition to business discussion was smooth and natural, referencing previous conversations to maintain continuity.",
        "Jennifer demonstrated preparation by acknowledging David's existing knowledge about the company's funding status."
      ]
    },
    {
      id: 'discovery',
      title: 'Discovery',
      icon: null,
      items: [
        'David mentioned they have two part-time contractors in Ukraine and two in Australia and are planning to expand to the US with full-time employees.',
        'David clarified that the US hires would be sales-oriented (SDRs and AEs), while tech roles are based in Sydney and Ukraine.',
        'David stated that they are passively looking for US talent and will actively hire once they secure a few clients, but are open to exceptional candidates.',
        'David confirmed familiarity with the employer of record model at a high level.'
      ],
      observations: [
        "David clearly communicated his current team structure and future hiring plans.",
        "David outlined the roles he's looking to fill in the US, providing Jennifer with specific information to tailor her pitch.",
        "David shared his timeline and criteria for hiring, allowing Jennifer to understand the urgency and decision-making process."
      ]
    },
    {
      id: 'demonstration',
      title: 'Demonstration',
      icon: null,
      items: [
        'Jennifer explained that Employment Hero acts as the legal employer, ensuring compliance with local laws and handling payroll.',
        'Jennifer clarified the entity structure, noting that while Employment Hero has internal entities in some countries, they partner in the US for better health and benefit options.',
        'Jennifer detailed the pricing structure, with the US being in Tier 2 at $600 USD per employee per month, plus statutory costs and benefits.',
        'Jennifer offered to provide a cost estimate for a hypothetical employee with a $100k AUD salary to illustrate the total cost.'
      ],
      observations: [
        "Jennifer provided clear explanations of the service structure and compliance benefits.",
        "The pricing information was presented transparently with specific tier details and additional costs.",
        "Jennifer proactively offered concrete examples to help David understand the total investment required."
      ]
    },
    {
      id: 'objection',
      title: 'Objection Handling',
      icon: null,
      items: [
        'David mentioned they have two part-time contractors in Ukraine and two in Australia and are planning to expand to the US with full-time employees.',
        'David clarified that the US hires would be sales-oriented (SDRs and AEs), while tech roles are based in Sydney and Ukraine.',
        'David stated that they are passively looking for US talent and will actively hire once they secure a few clients, but are open to exceptional candidates.',
        'David confirmed familiarity with the employer of record model at a high level.'
      ],
      observations: [
        "David raised practical questions about service availability in different regions.",
        "Jennifer handled the Ukraine service limitation professionally, explaining the business rationale.",
        "The discussion remained focused on viable solutions rather than dwelling on limitations."
      ]
    },
    {
      id: 'closing',
      title: 'Closing',
      icon: null,
      items: [
        'Jennifer offered to be a resource for David as he begins interviewing and ramping up his hiring process, offering to clarify any questions about employee requests or market standards.',
        'Jennifer confirmed that Employment Hero does not currently offer services in Ukraine due to the political climate.',
        'Jennifer offered to send a follow-up email outlining the information discussed and an estimated cost for US-based employees.'
      ],
      observations: [
        "Jennifer positioned herself as an ongoing resource, extending the relationship beyond the immediate sales opportunity.",
        "Clear next steps were established with the follow-up email commitment.",
        "The call ended on a positive note with mutual appreciation and defined action items."
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
                    {/* Observation Section */}
                      {section.observations && section.observations.length > 0 && (
                        <div className="mt-4">
                          <h4 className="text-sm font-medium text-[#605BFF] mb-2">Observation:</h4>
                          <ul className="space-y-2 ml-4">
                            {section.observations.map((observation, index) => (
                              <li key={index} className="flex items-start space-x-3">
                                <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-700 leading-relaxed">{observation}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
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