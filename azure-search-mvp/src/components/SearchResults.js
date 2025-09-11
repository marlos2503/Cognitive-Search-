import React from 'react';

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  const pad = n => n.toString().padStart(2, '0');
  const day = pad(d.getDate());
  const month = pad(d.getMonth() + 1);
  const year = d.getFullYear();
  const hours = pad(d.getHours());
  const minutes = pad(d.getMinutes());
  const seconds = pad(d.getSeconds());
  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

export default function SearchResults({ results, onBack }) {
  return (
    <div>
      <button onClick={onBack} style={{ marginBottom: 16 }}>Voltar</button>
      <h2>Resultados</h2>
      {results && results.length > 0 ? (
        <ul>
          {results.map((item, idx) => (
            <li key={idx} style={{ marginBottom: 24 }}>
              <strong>Arquivo:</strong> {item.metadata_storage_name}<br />
              <strong>Modificado em:</strong> {formatDate(item.metadata_storage_last_modified)}<br />
              <strong>Conteúdo:</strong>
              <pre style={{ background: '#f4f4f4', padding: 8 }}>{item.content}</pre>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum resultado encontrado.</p>
      )}
    </div>
  );
}
