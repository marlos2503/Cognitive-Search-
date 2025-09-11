import React, { useState } from 'react';
import SearchField from './components/SearchField';
import SearchResults from './components/SearchResults';
import { searchDocuments } from './services/azureSearch';

export default function App() {
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = async (query) => {
    const data = await searchDocuments(query);
    setResults(data);
    setShowResults(true);
  };

  return (
    <div style={{ padding: 32 }}>
      {!showResults ? (
        <SearchField onSearch={handleSearch} />
      ) : (
        <SearchResults results={results} onBack={() => setShowResults(false)} />
      )}
    </div>
  );
}
