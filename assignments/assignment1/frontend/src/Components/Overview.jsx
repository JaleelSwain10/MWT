import React from 'react';

export default function Overview({ data }) {
  return (
    <section style={{ padding: '15px 10px', borderBottom: '1px solid #ccc' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '5px' }}>{data.name}</h1>
      <h2 style={{ fontSize: '18px', color: '#007bff', marginBottom: '10px' }}>{data.title}</h2>
      <p style={{ fontSize: '16px', lineHeight: '1.4' }}>{data.summary}</p>
    </section>
  );
}
