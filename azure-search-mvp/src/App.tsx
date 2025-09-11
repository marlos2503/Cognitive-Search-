import React, { useState } from 'react';
import SearchField from './components/SearchField';
import SearchResults from './components/SearchResults';
import { searchDocuments } from './services/azureSearch';
import { SearchResult } from './types';

const App: React.FC = () => {
    const [results, setResults] = useState<SearchResult[]>([]);
    const [query, setQuery] = useState<string>('');

    const handleSearch = async (searchQuery: string) => {
        setQuery(searchQuery);
        const searchResults = await searchDocuments(searchQuery);
        setResults(searchResults);
    };

    return (
        <div>
            <h1>Document Search</h1>
            <SearchField onSearch={handleSearch} />
            <SearchResults results={results} />
        </div>
    );
};

export default App;
