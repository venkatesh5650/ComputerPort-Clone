import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';
import './Compare.css';

const comparisons = {
  vmware: {
    name: "VMware vSphere",
    cost: "Very High — perpetual + annual support fees",
    lockin: "Very High — proprietary APIs, formats, tooling",
    flexibility: "Medium — enterprise but rigid licensing",
    performance: "Excellent — mature hypervisor",
    openSource: "No — fully proprietary",
    support: "Paid enterprise support only",
    migration: "Complex — requires VMware tools",
    verdict: "Powerful but prohibitively expensive. Broadcom acquisition has worsened pricing and licensing terms significantly.",
    color: "#ef4444"
  },
  hyperv: {
    name: "Microsoft Hyper-V",
    cost: "Medium — bundled with Windows Server Datacenter",
    lockin: "High — requires Windows Server ecosystem",
    flexibility: "Low — deeply tied to Microsoft stack",
    performance: "Good — adequate for Windows workloads",
    openSource: "No — proprietary Microsoft product",
    support: "Microsoft-backed enterprise support",
    migration: "Moderate — tooling available",
    verdict: "Adequate for Windows-only shops but adds significant Microsoft licensing dependency.",
    color: "#f59e0b"
  },
  nutanix: {
    name: "Nutanix AHV",
    cost: "Very High — proprietary HCI licensing",
    lockin: "Very High — hardware + software bundle lock-in",
    flexibility: "Low — tied to Nutanix hardware/subscription",
    performance: "Excellent — optimized for HCI",
    openSource: "No — fully proprietary",
    support: "Premium paid support only",
    migration: "Complex — proprietary data formats",
    verdict: "Enterprise HCI powerhouse but extremely expensive with deep vendor lock-in.",
    color: "#8b5cf6"
  }
};

const proxmox = {
  cost: "Very Low — only pay for support subscription",
  lockin: "None — fully open-source KVM/LXC",
  flexibility: "Very High — runs any OS, any workload",
  performance: "Excellent — bare-metal KVM performance",
  openSource: "Yes — Apache 2.0 Licensed",
  support: "Community + paid subscription options",
  migration: "Easy — import from VMware/Hyper-V/Nutanix",
  verdict: "The modern, cost-effective virtualization champion. Up to 70% cost savings vs. proprietary alternatives."
};

const specLabels = [
  { key: 'cost', label: '💰 Cost' },
  { key: 'lockin', label: '🔒 Vendor Lock-in' },
  { key: 'flexibility', label: '⚙️ Flexibility' },
  { key: 'performance', label: '⚡ Performance' },
  { key: 'openSource', label: '🌍 Open-Source' },
  { key: 'support', label: '🛟 Support' },
  { key: 'migration', label: '🔄 Migration Ease' },
];

const Compare = () => {
  const [activeTab, setActiveTab] = useState('vmware');
  const competitor = comparisons[activeTab];

  return (
    <div className="page-wrapper">
      <div className="page-hero" style={{ minHeight: '40vh' }}>
        <div className="page-hero-content animate-slide-up">
          <span className="page-badge glass">Hypervisor Comparison</span>
          <h1>Proxmox vs <span className="text-gradient">The Competition</span></h1>
          <p>
            See exactly why leading enterprises are migrating to Proxmox VE —
            with objective, side-by-side comparisons.
          </p>
        </div>
      </div>

      <div className="page-section">

        {/* Tabs */}
        <div className="compare-tabs glass-panel">
          {Object.entries(comparisons).map(([key, val]) => (
            <button
              key={key}
              className={`compare-tab-btn ${activeTab === key ? 'active' : ''}`}
              style={activeTab === key ? { borderBottom: `3px solid ${val.color}`, color: 'white' } : {}}
              onClick={() => setActiveTab(key)}
            >
              Proxmox vs {val.name.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Comparison Grid */}
        <div className="compare-grid">

          {/* Proxmox Column */}
          <div className="compare-column proxmox-col glass-panel">
            <div className="compare-col-badge">⭐ Our Recommendation</div>
            <h2>Proxmox VE</h2>
            <ul className="compare-spec-list">
              {specLabels.map(({ key, label }) => (
                <li key={key}>
                  <span className="spec-label-text">{label}</span>
                  <span className="spec-value-text positive">{proxmox[key]}</span>
                </li>
              ))}
            </ul>
            <div className="compare-verdict proxmox-verdict">{proxmox.verdict}</div>
          </div>

          {/* VS Divider */}
          <div className="vs-label">VS</div>

          {/* Competitor Column */}
          <div className="compare-column competitor-col glass-panel" key={activeTab}>
            <h2>{competitor.name}</h2>
            <ul className="compare-spec-list">
              {specLabels.map(({ key, label }) => (
                <li key={key}>
                  <span className="spec-label-text">{label}</span>
                  <span className="spec-value-text negative">{competitor[key]}</span>
                </li>
              ))}
            </ul>
            <div className="compare-verdict competitor-verdict">{competitor.verdict}</div>
          </div>

        </div>

        {/* CTA */}
        <div className="cta-banner glass-panel" style={{ marginTop: '3rem' }}>
          <div className="cta-content">
            <h2>Ready to <span className="text-gradient">Migrate to Proxmox?</span></h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
              As Proxmox Silver Partners in India, we handle the full migration — zero data loss guaranteed.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link to="/contact"><button className="btn-primary">Start Migration</button></Link>
              <Link to="/cloud"><button className="btn-secondary">Learn More →</button></Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Compare;
