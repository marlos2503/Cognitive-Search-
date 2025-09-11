export async function searchDocuments(query) {
  const url = `http://localhost:4000/search?q=${encodeURIComponent(query)}`;
  const response = await fetch(url);
  const data = await response.json();
  return data || [];
}

