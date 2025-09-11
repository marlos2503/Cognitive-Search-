const express = require('express');
const cors = require('cors');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const { AZURE_SEARCH_ENDPOINT, API_KEY } = require('./config');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/search', async (req, res) => {
  const query = req.query.q || '';
  const url = `${AZURE_SEARCH_ENDPOINT}?api-version=2021-04-30-Preview&search=${encodeURIComponent(query)}`;
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'api-key': API_KEY
      }
    });
    const data = await response.json();
    res.json(data.value || []);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar no Azure Search', details: err.message });
  }
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Backend rodando em http://localhost:${PORT}`);
});
