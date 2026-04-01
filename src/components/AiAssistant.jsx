import React, { useState } from 'react';
import './AiAssistant.css';

const AiAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'Hello! Im your Port IT Consultant. Need help sizing a Proxmox cluster or setting up Zero-Trust?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Add user message
    const newMessages = [...messages, { role: 'user', text: input }];
    setMessages(newMessages);
    setInput('');
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'ai', 
        text: 'Based on your request, I recommend reviewing our Hybrid Cloud solutions. Our engineering team can deploy a secure, highly-available cluster in 48 hours.'
      }]);
    }, 1000);
  };

  return (
    <div className={`ai-assistant-wrapper ${isOpen ? 'open' : ''}`}>
      {!isOpen && (
        <button 
          className="ai-toggle-btn glass"
          onClick={() => setIsOpen(true)}
          aria-label="Open AI Assistant"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <span className="ai-status-pulse"></span>
        </button>
      )}

      {isOpen && (
        <div className="ai-chat-window glass-panel animate-slide-up">
          <div className="ai-chat-header">
            <div className="ai-avatar">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4"></path>
                <path d="M12 8h.01"></path>
              </svg>
            </div>
            <div>
              <h4 style={{ margin: 0, fontSize: '1rem', color: 'white' }}>Ask Port</h4>
              <span style={{ fontSize: '0.75rem', color: '#10b981' }}>Online</span>
            </div>
            <button className="ai-close-btn" onClick={() => setIsOpen(false)} aria-label="Close Assistant">
              ×
            </button>
          </div>
          
          <div className="ai-chat-body">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.role}`}>
                <div className="message-bubble">{msg.text}</div>
              </div>
            ))}
          </div>
          
          <form className="ai-chat-footer" onSubmit={handleSend}>
            <input 
              type="text" 
              placeholder="Ask about IT solutions..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="ai-input"
            />
            <button type="submit" className="ai-send-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AiAssistant;
