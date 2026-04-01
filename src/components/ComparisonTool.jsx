import React, { useState } from 'react';
import './ComparisonTool.css';

const ComparisonTool = () => {
  const [activeTab, setActiveTab] = useState('vmware');

  const comparisons = {
    vmware: {
      name: "VMware",
      cost: "Very High (Recurring licensing)",
      lockin: "High (Proprietary ecosystem)",
      flexibility: "Medium",
      scale: "Enterprise",
      verdict: "Expensive legacy choice with restrictive licensing."
    },
    hyperv: {
      name: "Hyper-V",
      cost: "Medium (Requires Windows Datacenter)",
      lockin: "High (Microsoft ecosystem)",
      flexibility: "Low",
      scale: "Enterprise",
      verdict: "Tightly coupled to Windows Server infrastructure."
    },
    proxmox: {
      name: "Proxmox VE",
      cost: "Low (Subscription for support only)",
      lockin: "None (Open-source KVM/LXC)",
      flexibility: "Very High",
      scale: "Infinite cluster scale",
      verdict: "The modern, cost-effective virtualization champion."
    }
  };

  return (
    <section className="comparison-section">
      <div className="comparison-container animate-slide-up">
        
        <div className="comparison-header">
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            Why migrate to <span className="text-gradient">Proxmox?</span>
          </h2>
          <p style={{ color: 'var(--color-text-muted)' }}>
            Compare industry-leading hypervisors and discover the open-source advantage.
          </p>
        </div>

        <div className="comparison-dashboard glass-panel">
          
          <div className="comparison-tabs">
            <button 
              className={`tab-btn ${activeTab === 'vmware' ? 'active' : ''}`}
              onClick={() => setActiveTab('vmware')}
            >
              vs VMware
            </button>
            <button 
              className={`tab-btn ${activeTab === 'hyperv' ? 'active' : ''}`}
              onClick={() => setActiveTab('hyperv')}
            >
              vs Hyper-V
            </button>
          </div>

          <div className="comparison-content">
            <div className="comparison-grid">
              
              {/* Proxmox Side (Constant) */}
              <div className="competitor-card proxmox-highlight">
                <div className="competitor-badge">Our Recommendation</div>
                <h3 className="competitor-title">{comparisons.proxmox.name}</h3>
                
                <ul className="spec-list">
                  <li>
                    <span className="spec-label">Cost</span>
                    <span className="spec-value positive">{comparisons.proxmox.cost}</span>
                  </li>
                  <li>
                    <span className="spec-label">Vendor Lock-in</span>
                    <span className="spec-value positive">{comparisons.proxmox.lockin}</span>
                  </li>
                  <li>
                    <span className="spec-label">Flexibility</span>
                    <span className="spec-value positive">{comparisons.proxmox.flexibility}</span>
                  </li>
                </ul>
                <div className="verdict gradient-bg">
                  {comparisons.proxmox.verdict}
                </div>
              </div>

              <div className="vs-divider">VS</div>

              {/* Dynamic Competitor Side */}
              <div className="competitor-card">
                <h3 className="competitor-title">{comparisons[activeTab].name}</h3>
                
                <ul className="spec-list">
                  <li>
                    <span className="spec-label">Cost</span>
                    <span className="spec-value negative">{comparisons[activeTab].cost}</span>
                  </li>
                  <li>
                    <span className="spec-label">Vendor Lock-in</span>
                    <span className="spec-value negative">{comparisons[activeTab].lockin}</span>
                  </li>
                  <li>
                    <span className="spec-label">Flexibility</span>
                    <span className="spec-value neutral">{comparisons[activeTab].flexibility}</span>
                  </li>
                </ul>
                <div className="verdict dark-bg">
                  {comparisons[activeTab].verdict}
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ComparisonTool;
