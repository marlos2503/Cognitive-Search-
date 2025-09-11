import React, { useState } from 'react';

export default function SearchField({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <h2>Pesquisa Azure AI Search</h2>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Digite sua busca..."
        style={{ padding: 8, fontSize: 16 }}
      />
      <button type="submit" style={{ padding: 8, fontSize: 16 }}>Buscar</button>
    </form>
  );
}
