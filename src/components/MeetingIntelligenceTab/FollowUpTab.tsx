import React, { useState } from 'react';
import { 
  Send, 
  Copy, 
  Share2,
  Download, 
  Edit3, 
  RefreshCw, 
  Settings, 
  Mail, 
  Clock, 
  User, 
  FileText,
  Sparkles,
  Eye,
  Save
} from 'lucide-react';

interface EmailTemplate {
  id: string;
  name: string;
  subject: string;
  tone: 'professional' | 'friendly' | 'formal';
}

const FollowUpTab: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('summary');
  const [emailContent, setEmailContent] = useState('');
  const [subject, setSubject] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [tone, setTone] = useState<'professional' | 'friendly' | 'formal'>('professional');

  const templates: EmailTemplate[] = [
    { id: 'summary', name: 'Meeting Summary', subject: 'Follow-up: Quarterly Business Review - Next Steps', tone: 'professional' },
    { id: 'proposal', name: 'Proposal Follow-up', subject: 'Proposal Submission - Partnership Expansion', tone: 'formal' },
    { id: 'thankyou', name: 'Thank You Note', subject: 'Thank you for your time today', tone: 'friendly' },
    { id: 'action', name: 'Action Items', subject: 'Action Items from Today\'s Meeting', tone: 'professional' }
  ];

  const generateEmailContent = (templateId: string) => {
    const baseContent = {
      summary: `Dear Jennifer and Robert,

Thank you for taking the time to meet with me today to discuss our partnership expansion opportunities. I wanted to follow up on our productive conversation and outline the key points we covered.

**Meeting Summary:**
• Reviewed pilot program results showing 23% efficiency improvement
• Discussed full East Coast rollout with 15% volume discount pricing
• Addressed technical integration requirements and timeline
• Confirmed 8-week implementation schedule

**Next Steps:**
• I will provide a comprehensive proposal by end of day Thursday
• Technical call scheduled between our teams next week
• Follow-up meeting scheduled for Tuesday at 2 PM EST
• Site visit to Chicago customer location to be arranged

**Key Deliverables:**
• Detailed pricing breakdown with volume discount
• Customer case studies and reference contacts
• Technical integration specifications
• Risk assessment and mitigation plan

I'm excited about the opportunity to expand our partnership and help you achieve your Q4 efficiency targets. Please don't hesitate to reach out if you have any questions before our next meeting.

Best regards,
David Miller
Senior Sales Representative`,

      proposal: `Dear Jennifer and Robert,

As promised during our meeting today, I'm writing to confirm the next steps for our proposal submission.

**Proposal Timeline:**
• Comprehensive proposal delivery: Thursday EOD
• Executive committee presentation: Next Friday
• Decision timeline: Aligned with Q4 planning cycle

**Proposal Contents:**
• Volume pricing with 15% discount for East Coast expansion
• 8-week implementation timeline with milestone-based payments
• Technical specifications and CRM integration details
• Customer references and case studies
• Service level agreements and support structure

**Competitive Advantages:**
• 99.9% uptime SLA guarantee
• 98% customer retention rate
• Zero-downtime migration capability
• 24/7 technical support for first 90 days

I look forward to presenting this opportunity to your executive committee and answering any questions they may have.

Best regards,
David Miller`,

      thankyou: `Hi Jennifer and Robert,

I wanted to personally thank you both for the engaging discussion today. Your insights into the operational challenges and growth opportunities were incredibly valuable.

It's clear that your team has done excellent work with the pilot program, and I'm impressed by the 23% efficiency gains you've achieved. The enthusiasm from your operations team speaks volumes about the potential for broader implementation.

I'm looking forward to our continued collaboration and helping you scale these results across your East Coast operations. The next few weeks should be exciting as we move forward with the proposal and technical discussions.

Thank you again for your time and consideration.

Warm regards,
David Miller`,

      action: `Dear Jennifer and Robert,

Following up on today's meeting, here are the specific action items we discussed:

**My Action Items:**
□ Deliver comprehensive proposal by Thursday EOD
□ Include three customer case studies with reference contacts
□ Coordinate technical call between our teams
□ Arrange Chicago customer site visit
□ Prepare competitive differentiation materials
□ Work with legal team on enterprise agreement customization

**Your Action Items:**
□ Include procurement team (Lisa Martinez) in next discussion
□ Arrange IT director participation for technical review
□ Schedule executive committee presentation for next Friday
□ Confirm Tuesday 2 PM follow-up meeting attendance

**Shared Action Items:**
□ Technical integration assessment call
□ Customer reference calls
□ Contract terms and SLA review

**Timeline:**
• Proposal delivery: Thursday EOD
• Follow-up meeting: Tuesday 2 PM EST
• Executive presentation: Next Friday

I'll send calendar invites for the scheduled meetings and coordinate with your team on the technical discussions.

Best regards,
David Miller`
    };

    return baseContent[templateId as keyof typeof baseContent] || baseContent.summary;
  };

  const handleTemplateChange = (templateId: string) => {
    setSelectedTemplate(templateId);
    const template = templates.find(t => t.id === templateId);
    if (template) {
      setSubject(template.subject);
      setTone(template.tone);
      setEmailContent(generateEmailContent(templateId));
    }
  };

  const handleRegenerateContent = () => {
    setEmailContent(generateEmailContent(selectedTemplate));
  };

  React.useEffect(() => {
    handleTemplateChange('summary');
  }, []);

  return (
    <div className="h-full flex flex-col bg-gray-50">
      {/* Header Controls - Mobile Optimized */}
      <div className="bg-white border-b border-gray-200 p-3 flex-shrink-0">
        {/* Template and Tone Selection */}
        <div className="space-y-3">
          <div className="flex space-x-2">
            <div className="flex-1">
              <select
                value={selectedTemplate}
                onChange={(e) => handleTemplateChange(e.target.value)}
                className="w-full pl-2 pr-6 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#605BFF] focus:border-transparent appearance-none bg-white text-xs"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                  backgroundPosition: 'right 0.5rem center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '0.75rem 0.75rem'
                }}
              >
                {templates.map(template => (
                  <option key={template.id} value={template.id}>
                    {template.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <select
                value={tone}
                onChange={(e) => setTone(e.target.value as 'professional' | 'friendly' | 'formal')}
                className="w-full pl-2 pr-6 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#605BFF] focus:border-transparent appearance-none bg-white text-xs"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                  backgroundPosition: 'right 0.5rem center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '0.75rem 0.75rem'
                }}
              >
                <option value="professional">Professional</option>
                <option value="friendly">Friendly</option>
                <option value="formal">Formal</option>
              </select>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex space-x-2">
            <button
              onClick={handleRegenerateContent}
              className="flex-1 flex items-center justify-center space-x-1 px-2 py-2 bg-[#605BFF] text-white rounded-lg hover:bg-[#4B46CC] transition-colors"
            >
              <Sparkles className="w-2.5 h-2.5" />
              <span className="text-xs">Regenerate</span>
            </button>
            <button
              onClick={() => setShowPreview(!showPreview)}
              className={`flex items-center justify-center p-2 rounded-lg transition-colors ${
                showPreview 
                  ? 'bg-[#605BFF] text-white' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Eye className="w-4 h-4" />
            </button>
            <button className="flex items-center justify-center p-2 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              <Save className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Email Composition Area - Mobile Optimized */}
      <div className="flex-1 p-3">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-full flex flex-col">
          {/* Email Header */}
          <div className="p-3 border-b border-gray-200">
            <div>
              <label className="text-xs font-medium text-gray-700 block mb-1">Subject</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#605BFF] focus:border-transparent text-xs"
                placeholder="Email subject..."
              />
            </div>
          </div>

          {/* Email Content */}
          <div className="flex-1 p-3" style={{minHeight: '400px'}}>
            {showPreview ? (
              <div className="h-full overflow-y-auto" style={{minHeight: '360px'}}>
                <div className="prose max-w-none">
                  <div className="whitespace-pre-wrap text-gray-900 leading-relaxed text-xs">
                    {emailContent}
                  </div>
                </div>
              </div>
            ) : (
              <textarea
                value={emailContent}
                onChange={(e) => setEmailContent(e.target.value)}
                className="w-full h-full resize-none border-none focus:ring-0 focus:outline-none text-gray-900 leading-relaxed text-xs"
                placeholder="Your follow-up email content will appear here..."
                style={{minHeight: '360px'}}
              />
            )}
          </div>

          {/* Email Footer Actions - Mobile Optimized */}
          <div className="p-1.5 border-t border-gray-200 bg-gray-50">
             {/* Action Buttons Row */}
             <div className="flex justify-center space-x-2">
               <button className="flex items-center justify-center p-1 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors">
                 <Share2 className="w-5 h-5" />
               </button>
               <button className="flex items-center justify-center p-1 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors">
                 <Copy className="w-5 h-5" />
               </button>
               <button className="flex items-center justify-center p-1 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors">
                 <Download className="w-5 h-5" />
               </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowUpTab;