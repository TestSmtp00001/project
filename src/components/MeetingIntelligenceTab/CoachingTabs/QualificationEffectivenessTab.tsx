import React, { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Target, 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  Lightbulb, 
  Award, 
  MessageSquare, 
  Clock, 
  Users, 
  Brain,
  Star,
  ArrowRight,
  BookOpen,
  Play,
  ChevronRight,
  ThumbsUp,
  ThumbsDown,
  HelpCircle,
  Zap,
  Shield,
  Eye,
  Mic,
  Volume2,
  Search,
  Filter,
  BarChart3,
  DollarSign,
  Settings,
  UserCheck,
  Trophy,
  AlertCircle,
  FileText
} from 'lucide-react';

interface QualificationSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  score: number;
  maxScore: number;
  whatWasUncovered: string[];
  gap: string[];
  recommendedQuestions: string[];
}

const QualificationEffectivenessTab: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [expandedRecommendations, setExpandedRecommendations] = useState<boolean>(false);
  const [expandedConsequences, setExpandedConsequences] = useState<boolean>(false);

  // Sample recommendations data from backend
  const recommendations = [
    "David needs to understand the key business issues that Realtor are facing.",
    "David needs to follow up with Chris around mid to late July to see if Capa Services are needed.",
    "David needs to find out who are the key stakeholders involved in the decision making process.",
    "David needs to understand the specific metric Realtor is trying to improve."
  ];

  const qualificationSections: QualificationSection[] = [
    {
      id: 'preparation',
      title: 'Preparation',
      subParts: [
        {
          id: 'pre-call-research',
          title: 'Pre-Call Research Quality',
          review: 'Analysis of whether the rep arrived with accurate customer details, site context, and tailored pricing.',
          whatWorkedWell: [
            'David knew that Jennifer was looking to expand his offshore teams and was aware of their recent funding.',
            'David confirmed that Jennifer had spoken with his colleague Mark previously.'
          ],
          whatToImprove: [
            'David could have researched the specific number of employees Jennifer\'s company had.'
          ]
        },
        {
          id: 'visual-aids',
          title: 'Visual Aids Readiness',
          review: 'Assessment of preparation and use of visual materials during the presentation.',
          whatWorkedWell: [
            'David had relevant materials ready for the discussion.',
            'Presentation materials were well-organized and accessible.'
          ],
          whatToImprove: [
            'Could have prepared more specific visual examples for Jennifer\'s industry.',
            'Interactive elements could enhance engagement.'
          ]
        },
        {
          id: 'zero-surprises',
          title: 'Zero Surprises',
          review: 'Evaluation of how well the rep anticipated and prepared for potential questions or objections.',
          whatWorkedWell: [
            'David was prepared for questions about pricing structure.',
            'Had clear answers about service availability in different regions.'
          ],
          whatToImprove: [
            'Could have anticipated questions about implementation timeline.',
            'More preparation for competitive comparison questions.'
          ]
        }
      ]
    },
    {
      id: 'opening',
      title: 'Opening',
      subParts: [
        {
          id: 'rapport-building',
          title: 'Rapport Building',
          review: 'Analysis of how effectively the rep established connection and trust with the prospect.',
          whatWorkedWell: [
            'David established rapport effectively by discussing work arrangements.',
            'Validated Jennifer\'s perspective on office distractions, creating common ground.',
            'Maintained a friendly and professional tone throughout.'
          ],
          whatToImprove: [
            'Could have spent more time on personal connection before business discussion.',
            'More active listening techniques could strengthen rapport.'
          ]
        },
        {
          id: 'adaptability',
          title: 'Adaptability',
          review: 'Assessment of the rep\'s ability to adjust approach based on prospect responses.',
          whatWorkedWell: [
            'Adjusted pitch based on Jennifer\'s updates regarding expansion plans.',
            'Smoothly transitioned from casual conversation to business discussion.'
          ],
          whatToImprove: [
            'Could have adapted questioning style based on Jennifer\'s communication preferences.',
            'More flexibility in presentation structure based on prospect interest.'
          ]
        },
        {
          id: 'body-language',
          title: 'Body Language',
          review: 'Evaluation of non-verbal communication and presence during the opening.',
          whatWorkedWell: [
            'Maintained professional posture and engagement.',
            'Demonstrated active listening through body language.'
          ],
          whatToImprove: [
            'Could use more open gestures to encourage dialogue.',
            'Mirror prospect\'s energy level more effectively.'
          ]
        }
      ]
    },
    {
      id: 'discovery',
      title: 'Discovery',
      subParts: [
        {
          id: 'open-ended-questions',
          title: 'Open-Ended Questions',
          review: 'Analysis of the quality and effectiveness of open-ended questions used.',
          whatWorkedWell: [
            'Asked about current team structure and expansion plans.',
            'Inquired about hiring timeline and criteria.',
            'Explored familiarity with employer of record model.'
          ],
          whatToImprove: [
            'Could have asked more probing questions about pain points.',
            'More questions about decision-making process and criteria.'
          ]
        },
        {
          id: 'depth-of-probing',
          title: 'Depth of Probing',
          review: 'Assessment of how deeply the rep explored prospect needs and challenges.',
          whatWorkedWell: [
            'Gathered specific information about role types and locations.',
            'Understood the passive vs. active hiring approach.'
          ],
          whatToImprove: [
            'Could have probed deeper into current challenges with contractors.',
            'More exploration of budget constraints and approval process.'
          ]
        },
        {
          id: 'listening-behaviours',
          title: 'Listening Behaviours',
          review: 'Evaluation of active listening skills and response to prospect input.',
          whatWorkedWell: [
            'Allowed Jennifer to express concerns without interruption.',
            'Built on Jennifer\'s responses with relevant follow-up questions.'
          ],
          whatToImprove: [
            'Could have used more summarizing to confirm understanding.',
            'More paraphrasing to demonstrate active listening.'
          ]
        }
      ]
    },
    {
      id: 'demo',
      title: 'Demo',
      subParts: [
        {
          id: 'relevance',
          title: 'Relevance',
          review: 'Assessment of how well the demonstration addressed prospect-specific needs.',
          whatWorkedWell: [
            'Focused on employer of record benefits relevant to Jennifer\'s expansion.',
            'Addressed compliance and legal employer aspects.'
          ],
          whatToImprove: [
            'Could have tailored examples more specifically to Jennifer\'s industry.',
            'More focus on sales role hiring challenges.'
          ]
        },
        {
          id: 'clarity',
          title: 'Clarity',
          review: 'Evaluation of how clearly the solution was explained and demonstrated.',
          whatWorkedWell: [
            'Clearly explained the entity structure and partnership model.',
            'Provided transparent pricing information with specific tiers.'
          ],
          whatToImprove: [
            'Could have simplified technical explanations.',
            'More visual aids to illustrate complex concepts.'
          ]
        },
        {
          id: 'engagement',
          title: 'Engagement',
          review: 'Analysis of prospect engagement and interaction during the demonstration.',
          whatWorkedWell: [
            'Jennifer asked relevant questions throughout the demo.',
            'Maintained interactive dialogue rather than one-way presentation.'
          ],
          whatToImprove: [
            'Could have encouraged more hands-on interaction.',
            'More frequent check-ins for understanding and questions.'
          ]
        },
        {
          id: 'proof-points',
          title: 'Proof Points',
          review: 'Assessment of evidence and credibility provided during the demonstration.',
          whatWorkedWell: [
            'Mentioned specific pricing tiers and cost structure.',
            'Referenced partnership model for better benefits.'
          ],
          whatToImprove: [
            'Could have provided customer success stories.',
            'More specific ROI examples and case studies.'
          ]
        }
      ]
    },
    {
      id: 'solution-framing',
      title: 'Solution Framing',
      subParts: [
        {
          id: 'simplicity',
          title: 'Simplicity',
          review: 'Evaluation of how simply and clearly the solution was presented.',
          whatWorkedWell: [
            'Explained complex compliance issues in understandable terms.',
            'Broke down pricing structure clearly.'
          ],
          whatToImprove: [
            'Could have used more analogies to simplify concepts.',
            'Reduce technical jargon in explanations.'
          ]
        },
        {
          id: 'options-presented',
          title: 'Options Presented',
          review: 'Analysis of solution options and flexibility demonstrated.',
          whatWorkedWell: [
            'Offered to provide cost estimates for different scenarios.',
            'Showed flexibility in service approach.'
          ],
          whatToImprove: [
            'Could have presented multiple service tier options.',
            'More customization possibilities based on company size.'
          ]
        },
        {
          id: 'visual-support',
          title: 'Visual Support',
          review: 'Assessment of visual aids and materials used to support the solution presentation.',
          whatWorkedWell: [
            'Had structured approach to presenting information.',
            'Clear verbal explanation of service structure.'
          ],
          whatToImprove: [
            'Could have used visual diagrams to illustrate entity structure.',
            'More visual comparison of pricing tiers and benefits.'
          ]
        }
      ]
    },
    {
      id: 'objection-handling',
      title: 'Objection Handling',
      subParts: [
        {
          id: 'listening-acknowledging',
          title: 'Listening & Acknowledging',
          review: 'Analysis of how well the rep listened to and acknowledged objections.',
          whatWorkedWell: [
            'Listened carefully to Jennifer\'s questions about service availability.',
            'Acknowledged limitations regarding Ukraine services professionally.'
          ],
          whatToImprove: [
            'Could have probed deeper into underlying concerns.',
            'More empathetic acknowledgment of prospect challenges.'
          ]
        },
        {
          id: 'clarification',
          title: 'Clarification',
          review: 'Assessment of how effectively the rep clarified objections and concerns.',
          whatWorkedWell: [
            'Asked clarifying questions about specific needs.',
            'Confirmed understanding of Jennifer\'s expansion plans.'
          ],
          whatToImprove: [
            'Could have asked more follow-up questions to fully understand concerns.',
            'More detailed exploration of objection root causes.'
          ]
        },
        {
          id: 'confident-response',
          title: 'Confident Response',
          review: 'Evaluation of confidence and effectiveness in responding to objections.',
          whatWorkedWell: [
            'Provided clear explanation of business rationale for service limitations.',
            'Maintained professional tone when discussing limitations.'
          ],
          whatToImprove: [
            'Could have been more proactive in addressing potential concerns.',
            'More confident positioning of alternative solutions.'
          ]
        }
      ]
    },
    {
      id: 'closing',
      title: 'Closing & Next Steps',
      subParts: [
        {
          id: 'confidence-timing',
          title: 'Confidence & Timing',
          review: 'Analysis of confidence level and timing in moving toward close.',
          whatWorkedWell: [
            'Positioned himself as ongoing resource for future needs.',
            'Maintained positive tone throughout the conclusion.'
          ],
          whatToImprove: [
            'Could have been more assertive in securing immediate next steps.',
            'Better timing in asking for commitment to follow-up actions.'
          ]
        },
        {
          id: 'clarity-agreement',
          title: 'Clarity of Agreement',
          review: 'Assessment of how clearly agreements and commitments were established.',
          whatWorkedWell: [
            'Clear commitment to send follow-up email with information.',
            'Established mutual appreciation and positive relationship.'
          ],
          whatToImprove: [
            'Could have secured more specific timeline for follow-up.',
            'More concrete agreements on next conversation timing.'
          ]
        },
        {
          id: 'leave-behind',
          title: 'Leave-Behind',
          review: 'Evaluation of materials or information left with the prospect.',
          whatWorkedWell: [
            'Committed to providing detailed cost breakdown via email.',
            'Offered to include relevant case studies and examples.'
          ],
          whatToImprove: [
            'Could have provided immediate reference materials.',
            'More comprehensive information packet for prospect review.'
          ]
        }
      ]
    }
  ];

  const getScoreColor = (score: number, maxScore: number) => {
    const percentage = (score / maxScore) * 100;
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const overallScore = qualificationSections.reduce((sum, section) => sum + section.score, 0);
  const maxOverallScore = qualificationSections.reduce((sum, section) => sum + section.maxScore, 0);
  const overallPercentage = Math.round((overallScore / maxOverallScore) * 100);

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <div className="space-y-6">
      {/* Qualification Sections */}
      <div className="space-y-4">
        {qualificationSections.map((section) => {
          const percentage = Math.round((section.score / section.maxScore) * 100);
          const isExpanded = expandedSection === section.id;
          
          return (
            <div key={section.id} className="bg-white rounded-lg border border-gray-200">
              <div 
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => toggleSection(section.id)}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-[#FF8E1C]">
                    {section.icon}
                  </div>
                  <div>
                    <div className="flex items-center space-x-3">
                      <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
                    </div>
                  </div>
                </div>
                
                <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform ${
                    isExpanded ? 'rotate-90' : ''
                }`} />
              </div>
              
              {isExpanded && (
                <div className="px-4 pb-4">
                  <div className="border-t border-gray-100 pt-4">
                    <div className="space-y-6">
                      {/* What Was Uncovered */}
                      <div>
                        <h4 className="text-sm font-semibold text-green-700 mb-3 flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          What Was Uncovered
                        </h4>
                        <div className="space-y-2 ml-6">
                          {section.whatWasUncovered.map((item, index) => (
                            <div key={index} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-gray-700">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Gap */}
                      <div>
                        <h4 className="text-sm font-semibold text-red-700 mb-3 flex items-center">
                          <AlertTriangle className="w-4 h-4 mr-2" />
                          Gap
                        </h4>
                        <div className="space-y-2 ml-6">
                          {section.gap.map((item, index) => (
                            <div key={index} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-gray-700">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Recommended Questions */}
                      <div>
                        <h4 className="text-sm font-semibold text-blue-700 mb-3 flex items-center">
                          <HelpCircle className="w-4 h-4 mr-2" />
                          Recommended Questions
                        </h4>
                        <div className="space-y-2 ml-6">
                          {section.recommendedQuestions.map((question, index) => (
                            <div key={index} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-gray-700">{question}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Summary of Recommendations */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div 
          className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => setExpandedRecommendations(!expandedRecommendations)}
        >
          <div className="flex items-center space-x-4">
            <div className="text-[#FF8E1C]">
              {/* Space */}
            </div>
            <div>
              <div className="flex items-center space-x-3">
                <h3 className="text-lg font-semibold text-gray-900">Summary of Recommendations</h3>
              </div>
            </div>
          </div>
          
          <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform ${
              expandedRecommendations ? 'rotate-90' : ''
          }`} />
        </div>
        
        {expandedRecommendations && (
          <div className="px-4 pb-4">
            <div className="border-t border-gray-100 pt-4">
              <div className="space-y-3">
                {recommendations.map((recommendation, index) => (
                  <div key={index} className="flex items-start space-x-3">  
                    <div className="w-2 h-2 bg-[#605BFF] rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <p className="text-gray-900 leading-relaxed">{recommendation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Consequences of Inaction */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div 
          className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => setExpandedConsequences(!expandedConsequences)}
        >
          <div className="flex items-center space-x-4">
            <div className="text-[#FF8E1C]">
              {/* Space */}
            </div>
            <div>
              <div className="flex items-center space-x-3">
                <h3 className="text-lg font-semibold text-gray-900">Consequences of Inaction</h3>
              </div>
            </div>
          </div>
          
          <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform ${
              expandedConsequences ? 'rotate-90' : ''
          }`} />
        </div>
        
        {expandedConsequences && (
          <div className="px-4 pb-4">
            <div className="border-t border-gray-100 pt-4">
              <div className="space-y-4">
                <div className="p-4 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    The consequences of not moving forward with this solution were not explicitly outlined during the meeting, but based on the discussion, several critical risks emerge. The salesperson missed an opportunity to create urgency by not directly asking about the impact of maintaining the status quo with 23% efficiency losses and Q4 target pressures.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 flex items-center space-x-2">
                        <DollarSign className="w-5 h-5 text-red-600 flex-shrink-0" />
                        <span>Financial & Operational Impact</span>
                      </h4>
                      <div className="space-y-2 text-sm text-gray-700">
                        <div className="flex items-start space-x-2 ml-7">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Continued 23% efficiency losses costing significant productivity</span>
                        </div>
                        <div className="flex items-start space-x-2 ml-7">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Missing Q4 efficiency targets and board expectations</span>
                        </div>
                        <div className="flex items-start space-x-2 ml-7">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Increased operational costs due to inefficient processes</span>
                        </div>
                        <div className="flex items-start space-x-2 ml-7">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Delayed ROI realization pushing benefits into next fiscal year</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 flex items-center space-x-2">
                        <Shield className="w-5 h-5 text-red-600 flex-shrink-0" />
                        <span>Strategic & Competitive Risks</span>
                      </h4>
                      <div className="space-y-2 text-sm text-gray-700">
                        <div className="flex items-start space-x-2 ml-7">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Competitive disadvantage if other vendors are selected</span>
                        </div>
                        <div className="flex items-start space-x-2 ml-7">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Lost opportunities for volume pricing and favorable terms</span>
                        </div>
                        <div className="flex items-start space-x-2 ml-7">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Potential for competitor to establish foothold in organization</span>
                        </div>
                        <div className="flex items-start space-x-2 ml-7">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Team morale impact from continued operational challenges</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QualificationEffectivenessTab;