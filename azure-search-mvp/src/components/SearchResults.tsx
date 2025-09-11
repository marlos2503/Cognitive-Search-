import React from 'react';

interface SearchResult {
    id: string;
    title: string;
    link: string;
}

interface SearchResultsProps {
    results: SearchResult[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
    return (
        <div>
            <h2>Search Results</h2>
            {results.length > 0 ? (
                <ul>
                    {results.map(result => (
                        <li key={result.id}>
                            <a href={result.link} target="_blank" rel="noopener noreferrer">
                                {result.title}
                            </a>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No results found.</p>
            )}
        </div>
    );
};

export default SearchResults;