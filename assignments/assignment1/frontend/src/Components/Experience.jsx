import React from 'react';

export default function Experience({ data }) {
  return (
    <section style={{ padding: '15px 10px' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>Experience</h2>
      {data.map((exp, i) => (
        <div key={i} style={{ marginBottom: '12px' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '3px' }}>{exp.company}</h3>
          <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '2px' }}>{exp.role}</h4>
          <small style={{ display: 'block', marginBottom: '5px' }}>{exp.duration}</small>
          <p style={{ margin: 0 }}>{exp.description}</p>
        </div>
      ))}
    </section>
  );
}
