import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Users, MessageSquare, Clock, Target, CheckCircle, AlertTriangle, XCircle, User, Mic, MicOff, BarChart3, Activity, ArrowRight, ThumbsUp, ThumbsDown, ListTodo, HelpCircle, Zap, Shield, Heart, Brain, CheckCircle as CircleCheckBig, Volume2 } from 'lucide-react';

const AnalyticsTab: React.FC = () => {
  const [selectedFlowSteps, setSelectedFlowSteps] = useState<number[]>([]);

  const toggleFlowStep = (stepNumber: number) => {
    setSelectedFlowSteps(prev => 
      prev.includes(stepNumber) 
        ? prev.filter(step => step !== stepNumber)
        : [...prev, stepNumber]
    );
  };

  const getSentimentColor = (sentiment: 'positive' | 'negative' | 'neutral') => {
    switch (sentiment) {
      case 'positive': return 'text-green-600';
      case 'negative': return 'text-red-600';
      case 'neutral': return 'text-yellow-600';
      default: return 'text-gray-600';
    }
  };

  const getSentimentBg = (sentiment: 'positive' | 'negative' | 'neutral') => {
    switch (sentiment) {
      case 'positive': return 'bg-green-50';
      case 'negative': return 'bg-red-50';
      case 'neutral': return 'bg-yellow-50';
      default: return 'bg-gray-50';
    }
  };

  const getPerformanceIcon = (performance: 'excellent' | 'good' | 'average' | 'poor') => {
    switch (performance) {
      case 'excellent': return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'good': return <CheckCircle className="w-5 h-5 text-blue-600" />;
      case 'average': return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
      case 'poor': return <XCircle className="w-5 h-5 text-red-600" />;
      default: return <AlertTriangle className="w-5 h-5 text-gray-600" />;
    }
  };

  const getTalkListenEvaluation = (ratio: string) => {
    const [talk, listen] = ratio.split(':').map(Number);
    const talkPercentage = (talk / (talk + listen)) * 100;
    
    if (talkPercentage >= 30 && talkPercentage <= 40) {
      return { 
        evaluation: 'Optimal Range', 
        badge: 'Good Balance',
        color: 'text-green-600',
        badgeColor: 'text-green-600 border-green-600'
      };
    } else if (talkPercentage >= 25 && talkPercentage <= 45) {
      return { 
        evaluation: 'Good Balance', 
        badge: 'Good Balance',
        color: 'text-emerald-600',
        badgeColor: 'text-emerald-600 border-emerald-600'
      };
    } else if (talkPercentage < 25) {
      return { 
        evaluation: 'Too Little Talking', 
        badge: 'Needs Improvement',
        color: 'text-yellow-600',
        badgeColor: 'text-yellow-600 border-yellow-600'
      };
    } else {
      return { 
        evaluation: 'Too Much Talking', 
        badge: 'Needs Improvement',
        color: 'text-red-600',
        badgeColor: 'text-red-600 border-red-600'
      };
    }
  };

  const talkListenRatio = "38:62";
  const talkListenEval = getTalkListenEvaluation(talkListenRatio);

  return (
    <div className="p-3 space-y-4">
      {/* Level 1 - Meeting Outcome, Reason For Win/Loss, and Sales Process Adherence */}
      <div className="grid grid-cols-1 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center space-x-3 mb-4">
            <Target className="w-6 h-6 text-[#605BFF]" />
            <h3 className="text-base font-semibold text-gray-900">Meeting Outcome</h3>
          </div>
          <div className="flex items-center space-x-3 mb-4">
            <TrendingUp className="h-8 text-green-600" style={{ width: 'auto' }} />
            <p className="text-xl font-bold text-green-600 mb-0 leading-6">Won</p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-green-500">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <span className="text-sm text-gray-900">Next meeting scheduled</span>
            </div>
            <div className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-green-500">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <span className="text-sm text-gray-900">Budget confirmed</span>
            </div>
            <div className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-green-500">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <span className="text-sm text-gray-900">Decision timeline clear</span>
            </div>
            <div className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-green-500">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <span className="text-sm text-gray-900">Key stakeholders aligned</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center space-x-3 mb-4">
            <ListTodo className="w-6 h-6 text-[#605BFF]" />
            <h3 className="text-base font-semibold text-gray-900">Reason For Win/Loss</h3>
          </div>
          <div className="space-y-2">
            <div className="space-y-3">
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-900">Strong product-market fit</span>
                </div>
                <div className="ml-4">
                  <span className="text-xs text-gray-600">Buyer expressed high interest in automation features</span>
                </div>
              </div>
              
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-900">Competitive advantage</span>
                </div>
                <div className="ml-4">
                  <span className="text-xs text-gray-600">Superior integration capabilities vs competitors</span>
                </div>
              </div>
              
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-900">Timing alignment</span>
                </div>
                <div className="ml-4">
                  <span className="text-xs text-gray-600">Implementation timeline matches their Q1 goals</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="w-6 h-6 text-[#605BFF]" />
            <h3 className="text-base font-semibold text-gray-900">Sales Process Adherence</h3>
          </div>
          
          {/* Overall Adherence at top */}
          <div className="mb-4 pb-3 border-b border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-900">Overall Adherence</span>
              <span className="text-lg font-bold text-[#605BFF]">75%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-[#605BFF] h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm text-gray-900">Discovery Questions</span>
              </div>
              <span className="text-sm font-medium text-green-600">Complete</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm text-gray-900">Pain Point Identification</span>
              </div>
              <span className="text-sm font-medium text-green-600">Complete</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-4 h-4 text-yellow-600" />
                <span className="text-sm text-gray-900">Budget Qualification</span>
              </div>
              <span className="text-sm font-medium text-yellow-600">Partial</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <XCircle className="w-4 h-4 text-red-600" />
                <span className="text-sm text-gray-900">Decision Timeline</span>
              </div>
              <span className="text-sm font-medium text-red-600">Missing</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm text-gray-900">Next Steps Defined</span>
              </div>
              <span className="text-sm font-medium text-green-600">Complete</span>
            </div>
          </div>
        </div>
      </div>

      {/* Level 2 - Meeting Metrics Cards */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white rounded-lg border border-gray-200 p-3">
          <div className="flex items-center space-x-2 mb-2">
            <Clock className="w-4 h-4 text-[#605BFF]" />
            <h4 className="text-sm font-semibold text-gray-900">Meeting Time</h4>
          </div>
          <div className="text-lg font-bold text-[#605BFF] mb-1">45m</div>
          <div className="text-xs text-gray-600">Standard duration</div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-3">
          <div className="flex items-center space-x-2 mb-2">
            <User className="w-4 h-4 text-[#605BFF]" />
            <h4 className="text-sm font-semibold text-gray-900">Buyer Talk Time</h4>
          </div>
          <div className="text-lg font-bold text-[#605BFF] mb-1">28m</div>
          <div className="text-xs text-gray-600">62% of meeting</div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-3">
          <div className="flex items-center space-x-2 mb-2">
            <Mic className="w-4 h-4 text-[#605BFF]" />
            <h4 className="text-sm font-semibold text-gray-900">Seller Talk Time</h4>
          </div>
          <div className="text-lg font-bold text-[#605BFF] mb-1">17m</div>
          <div className="text-xs text-gray-600">38% of meeting</div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-3">
          <div className="flex items-center space-x-2 mb-2">
            <BarChart3 className="w-4 h-4 text-[#605BFF]" />
            <h4 className="text-sm font-semibold text-gray-900">Talk vs Listen</h4>
          </div>
          <div className="text-lg font-bold text-[#605BFF] mb-1">{talkListenRatio}</div>
          <div className="text-xs text-gray-600">Talk to listen balance</div>
        </div>
      </div>

      {/* Level 3 - Conversation Analytics */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex items-center space-x-3 mb-3">
          <Brain className="w-5 h-5 text-[#605BFF]" />
          <h3 className="text-base font-semibold text-gray-900">Conversation Analytics</h3>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <Activity className="w-4 h-4 text-[#605BFF]" />
                <div>
                  <div className="text-sm font-medium text-gray-900">Pacing</div>
                  <div className="text-xs text-gray-600">Speaking speed and rhythm</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-[#605BFF]">142 WPM</div>
                <div className="text-xs text-gray-500">Optimal pace</div>
              </div>
            </div>

            <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <MicOff className="w-4 h-4 text-yellow-600" />
                <div>
                  <div className="text-sm font-medium text-gray-900">Filler Words</div>
                  <div className="text-xs text-gray-600">Um, uh, like frequency</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-yellow-600">12</div>
                <div className="text-xs text-gray-500">Low usage</div>
              </div>
            </div>

            <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-blue-600" />
                <div>
                  <div className="text-sm font-medium text-gray-900">Interactivity Score</div>
                  <div className="text-xs text-gray-600">Engagement level measurement</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-blue-600">8.2/10</div>
                <div className="text-xs text-gray-500">High interaction</div>
              </div>
            </div>

            <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <Heart className="w-4 h-4 text-green-600" />
                <div>
                  <div className="text-sm font-medium text-gray-900">Sentiment</div>
                  <div className="text-xs text-gray-600">Overall conversation tone</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-green-600">Positive</div>
                <div className="text-xs text-gray-500">Favorable tone</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Level 4 - Seller Effectiveness & Buyer Engagement */}
      <div className="grid grid-cols-1 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center space-x-3 mb-3">
            <Zap className="w-5 h-5 text-[#605BFF]" />
            <h3 className="text-base font-semibold text-gray-900">Seller Effectiveness</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-green-500">
                  <path d="M7 10v12"></path>
                  <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
                </svg>
                <div>
                  <div className="font-medium text-gray-900">Questions</div>
                  <div className="text-sm text-gray-600">18 questions asked</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900 mb-1">95%</div>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-green-500">
                  <path d="M7 10v12"></path>
                  <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
                </svg>
                <div>
                  <div className="font-medium text-gray-900">Listening</div>
                  <div className="text-sm text-gray-600">Balance between talking and listening</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900 mb-1">88%</div>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '88%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-green-500">
                  <path d="M7 10v12"></path>
                  <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
                </svg>
                <div>
                  <div className="font-medium text-gray-900">Communication</div>
                  <div className="text-sm text-gray-600">Clarity, tone, engagement</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900 mb-1">82%</div>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '82%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-red-500">
                  <path d="M17 14V2"></path>
                  <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"></path>
                </svg>
                <div>
                  <div className="font-medium text-gray-900">Objection Handling</div>
                  <div className="text-sm text-gray-600">Response quality assessment</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900 mb-1">45%</div>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center space-x-3 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#605BFF]">
              <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            <h3 className="text-base font-semibold text-gray-900">Buyer Engagement</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-green-500">
                  <path d="M7 10v12"></path>
                  <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
                </svg>
                <div>
                  <div className="font-medium text-gray-900">Questions</div>
                  <div className="text-sm text-gray-600">12 questions asked</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900 mb-1">85%</div>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-orange-500">
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                  <path d="M12 9v4"></path>
                  <path d="M12 17h.01"></path>
                </svg>
                <div>
                  <div className="font-medium text-gray-900">Objections</div>
                  <div className="text-sm text-gray-600">3 objections raised</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900 mb-1">60%</div>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-green-500">
                  <path d="M7 10v12"></path>
                  <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
                </svg>
                <div>
                  <div className="font-medium text-gray-900">Agreement</div>
                  <div className="text-sm text-gray-600">8 agreements noted</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900 mb-1">90%</div>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-green-500">
                  <path d="M7 10v12"></path>
                  <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
                </svg>
                <div>
                  <div className="font-medium text-gray-900">Confirmation</div>
                  <div className="text-sm text-gray-600">5 confirmations</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900 mb-1">75%</div>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Level 5 - Conversation Flow & Buyer Sentiment Journey */}
      <div className="grid grid-cols-1 gap-4">
        {/* Conversation Flow */}
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center space-x-3 mb-3">
            <MessageSquare className="w-5 h-5 text-[#605BFF]" />
            <h3 className="text-base font-semibold text-gray-900">Conversation Flow</h3>
          </div>
          <div className="space-y-3">
            <div className="relative">
              <div className="flex items-center py-3 px-3 bg-gray-50 border border-gray-200 rounded-lg hover:border-[#605BFF] hover:bg-blue-50 transition-all cursor-pointer">
                <div className="flex items-center space-x-3 flex-1">
                  <Volume2 className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-medium text-gray-700">Introduction and Rapport</span>
                </div>
                <span className="text-xs text-gray-600 bg-gray-200 px-2 py-1 rounded-full">0:40</span>
              </div>
              <div className="absolute left-5 top-12 w-0.5 h-6 bg-gray-300"></div>
            </div>
            
            <div className="relative">
              <div className="flex items-center py-3 px-3 bg-gray-50 border border-gray-200 rounded-lg hover:border-[#605BFF] hover:bg-blue-50 transition-all cursor-pointer">
                <div className="flex items-center space-x-3 flex-1">
                  <Volume2 className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-medium text-gray-700">Needs Assessment</span>
                </div>
                <span className="text-xs text-gray-600 bg-gray-200 px-2 py-1 rounded-full">1:45</span>
              </div>
              <div className="absolute left-5 top-12 w-0.5 h-6 bg-gray-300"></div>
            </div>
            
            <div className="relative">
              <div className="flex items-center py-3 px-3 bg-gray-50 border border-gray-200 rounded-lg hover:border-[#605BFF] hover:bg-blue-50 transition-all cursor-pointer">
                <div className="flex items-center space-x-3 flex-1">
                  <Volume2 className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-medium text-gray-700">Product Presentation</span>
                </div>
                <span className="text-xs text-gray-600 bg-gray-200 px-2 py-1 rounded-full">4:15</span>
              </div>
              <div className="absolute left-5 top-12 w-0.5 h-6 bg-gray-300"></div>
            </div>
            
            <div className="relative">
              <div className="flex items-center py-3 px-3 bg-gray-50 border border-gray-200 rounded-lg hover:border-[#605BFF] hover:bg-blue-50 transition-all cursor-pointer">
                <div className="flex items-center space-x-3 flex-1">
                  <Volume2 className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-medium text-gray-700">Price Discussion</span>
                </div>
                <span className="text-xs text-gray-600 bg-gray-200 px-2 py-1 rounded-full">7:30</span>
              </div>
              <div className="absolute left-5 top-12 w-0.5 h-6 bg-gray-300"></div>
            </div>
            
            <div className="relative">
              <div className="flex items-center py-3 px-3 bg-gray-50 border border-gray-200 rounded-lg hover:border-[#605BFF] hover:bg-blue-50 transition-all cursor-pointer">
                <div className="flex items-center space-x-3 flex-1">
                  <Volume2 className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-medium text-gray-700">Answering Questions</span>
                </div>
                <span className="text-xs text-gray-600 bg-gray-200 px-2 py-1 rounded-full">10:50</span>
              </div>
              <div className="absolute left-5 top-12 w-0.5 h-6 bg-gray-300"></div>
            </div>
            
            <div className="relative">
              <div className="flex items-center py-3 px-3 bg-gray-50 border border-gray-200 rounded-lg hover:border-[#605BFF] hover:bg-blue-50 transition-all cursor-pointer">
                <div className="flex items-center space-x-3 flex-1">
                  <Volume2 className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-medium text-gray-700">Closing</span>
                </div>
                <span className="text-xs text-gray-600 bg-gray-200 px-2 py-1 rounded-full">14:00</span>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-900">Flow Quality</span>
              <span className="text-lg font-bold text-green-600">Good</span>
            </div>
            <div className="text-xs text-gray-500 mt-1">
              Well-structured conversation with clear progression
            </div>
          </div>
        </div>

        {/* Buyer Sentiment Journey */}
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center space-x-3 mb-3">
            <Heart className="w-5 h-5 text-[#605BFF]" />
            <h3 className="text-base font-semibold text-gray-900">Buyer Sentiment Journey</h3>
          </div>
          <div className="space-y-4">
            {/* Timeline */}
            <div className="relative">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="relative">
                    <ThumbsUp className="w-5 h-5 text-green-600" />
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-gray-200"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">Opening - Positive Reception</p>
                      <span className="text-xs text-gray-500">0:00 - 2:30</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Buyer showed enthusiasm about the product introduction and asked clarifying questions</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="relative">
                    <ThumbsUp className="w-5 h-5 text-green-600" />
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-gray-200"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">Discovery - High Engagement</p>
                      <span className="text-xs text-gray-500">2:30 - 8:15</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Strong interest in features, multiple follow-up questions, positive language patterns</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="relative">
                    <AlertTriangle className="w-5 h-5 text-yellow-600" />
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-gray-200"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">Pricing Discussion - Neutral/Cautious</p>
                      <span className="text-xs text-gray-500">8:15 - 12:45</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Tone shifted to more analytical, budget concerns raised, longer pauses in conversation</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="relative">
                    <ThumbsDown className="w-5 h-5 text-red-600" />
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-gray-200"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">Objection Phase - Resistance</p>
                      <span className="text-xs text-gray-500">12:45 - 18:20</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Multiple objections raised, skeptical tone, questioning ROI and implementation complexity</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="relative">
                    <HelpCircle className="w-5 h-5 text-blue-600" />
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-gray-200"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">Clarification - Seeking Understanding</p>
                      <span className="text-xs text-gray-500">18:20 - 25:10</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Asked detailed technical questions, seeking specific use cases and implementation details</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="relative">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">Resolution - Positive Conclusion</p>
                      <span className="text-xs text-gray-500">25:10 - 30:00</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Concerns addressed, agreement on next steps, positive closing with scheduled follow-up</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsTab;