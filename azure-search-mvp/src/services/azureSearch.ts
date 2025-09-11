
import axios from 'axios';

interface SearchResponse {
  value: any[]; // ajuste conforme necessário
}

const AZURE_SEARCH_ENDPOINT = '';
const API_KEY = '';

export const searchDocuments = async (query: string) => {
  try {
    const response = await axios.get<SearchResponse>(AZURE_SEARCH_ENDPOINT, {
      params: {
        search: query,
        'api-version': '2021-04-30-Preview'
      },
      headers: {
        'Content-Type': 'application/json',
        'api-key': API_KEY
      }
    });
// ...existing code...
    return response.data.value;
  } catch (error) {
    console.error('Error searching documents:', error);
    throw error;
  }
};