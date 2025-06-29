import React from 'react';

export default function Education({ data }) {
  return (
    <section style={{ padding: '15px 10px', borderBottom: '1px solid #ccc' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>Education</h2>
      {data.map((edu, i) => (
        <div key={i} style={{ marginBottom: '12px' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '3px' }}>{edu.school}</h3>
          <p style={{ fontSize: '16px', marginBottom: '2px' }}>{edu.degree}</p>
          <small>{edu.years}</small>
        </div>
      ))}
    </section>
  );
}
