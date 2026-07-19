import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaHandsHelping, FaAward } from 'react-icons/fa'; 

function Leadership() {
  const leadershipRoles = [
    {
      role: "Council Member ",
      community: "FOSS Community , NSBM Green University",
      duration: "2026 - 2027",
      icon: <FaUsers />
    },
    {
      role: "Member",
      community: "IEEE Student Branch  · Hackathon Hub · Mathematics & Statistics Circle, NSBM Green University",
      duration: "2025 - 2026",
      icon: <FaAward />
    },
    {
      role: "Volunteer",
      community: [
        "Arduino Day & Open Squid (FOSS Community)",
        "DYNALAB (Mathematics & Statistics Circle)"
      ],
      duration: "2025",
      icon: <FaHandsHelping />
    }
  ];

  return (
    <section id="leadership" className="section leadership-section">
      <div className="container" style={{ maxWidth: '950px', margin: '0 auto', padding: '0 20px' }}>
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '50px' }}
        >
          Leadership & Community
        </motion.h2>

        <div className="leadership-horizontal-timeline" style={{ position: 'relative', paddingLeft: '10px' }}>
          {leadershipRoles.map((item, index) => (
            <motion.div 
              className="leadership-horizontal-item"
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '20px',
                padding: '20px 0',
                borderBottom: index !== leadershipRoles.length - 1 ? '1px solid var(--border-color, rgba(255,255,255,0.08))' : 'none'
              }}
            >
              {/* Icon Box */}
              <div style={{
                fontSize: '1.4rem',
                color: 'var(--accent-color, #00e5ff)',
                background: 'rgba(255, 255, 255, 0.02)',
                width: '45px',
                height: '45px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center', 
                borderRadius: '10px',
                border: '1px solid var(--border-color, rgba(255,255,255,0.1))',
                flexShrink: 0,
                boxShadow: '0 0 10px rgba(0, 229, 255, 0.1)'
              }}>
                {item.icon}
              </div>

              {/* Text Context Area */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%', flexWrap: 'wrap', gap: '15px' }}>
                
                <div style={{ flex: 1, fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  {}
                  <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', alignItems: 'start' }}>
                    
                    {}
                    <div style={{ gridRow: '1 / span 10' }}>
                      <strong style={{ color: 'var(--text-primary)', fontWeight: '600' }}>{item.role}</strong>
                    </div>

                    {}
                    {Array.isArray(item.community) ? (
                      item.community.map((comm, subIndex) => (
                        <div key={subIndex} style={{ gridColumn: '2', display: 'flex', alignItems: 'start' }}>
                          <span style={{ color: 'var(--accent-color, #00e5ff)', margin: '0 10px', flexShrink: 0 }}>—</span>
                          <span>{comm}</span>
                        </div>
                      ))
                    ) : (
                      
                      <div style={{ gridColumn: '2', display: 'flex', alignItems: 'start' }}>
                        <span style={{ color: 'var(--accent-color, #00e5ff)', margin: '0 10px', flexShrink: 0 }}>—</span>
                        <span>{item.community}</span>
                      </div>
                    )}

                  </div>
                </div>

                {/* Years Duration Badge */}
                <span className="edu-duration" style={{ 
                  fontSize: '0.8rem', 
                  fontWeight: '600', 
                  color: 'var(--accent-color, #00e5ff)',
                  background: 'rgba(0, 229, 255, 0.08)',
                  padding: '4px 14px',
                  borderRadius: '20px',
                  border: '1px solid rgba(0, 229, 255, 0.2)',
                  whiteSpace: 'nowrap',
                  marginTop: '2px'
                }}>
                  {item.duration}
                </span>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Leadership;