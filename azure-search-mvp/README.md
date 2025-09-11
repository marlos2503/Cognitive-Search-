# Azure Search MVP

Esta aplicação é um MVP web para pesquisa de documentos usando Azure AI Search.

## Tecnologias Utilizadas
- React (JavaScript)
- Node.js (Express)
- Azure AI Search
- Bibliotecas do servidor: express, cors, node-fetch
## Estrutura do Projeto
azure-search-mvp
├── src
│   ├── App.js                # Componente principal React
│   ├── components
│   │   ├── SearchField.js    # Campo de busca
│   │   └── SearchResults.js  # Exibição dos resultados
│   ├── services
│   │   └── azureSearch.js    # Função para buscar no backend
├── public
│   └── index.html            # HTML principal
├── server.js                 # Backend Node.js (proxy para Azure Search)
├── config.js                 # Configuração do endpoint e chave da API
├── package.json              # Configuração npm
└── README.md                 # Documentação
```

## Instalação das Dependências do Servidor
No diretório do projeto, execute:
```powershell
npm install express cors node-fetch
```

## Configuração do Backend
- As variáveis de configuração do Azure Search (endpoint e API key) estão em `config.js`.
- O backend importa essas variáveis automaticamente.

## Como Rodar o Backend
O servidor backend (proxy para Azure Search) roda na porta 4000. Para iniciar:
```powershell
node server.js
```

## Como Rodar o Frontend
Para iniciar a aplicação React, use o comando abaixo (necessário para Node.js 17+):
```powershell

```

## Como funciona a busca
- O frontend faz requisições para `http://localhost:4000/search?q=SEU_TERMO`.
- O backend faz a busca no Azure AI Search e retorna os resultados para o frontend.

## Observações
- Certifique-se de que o backend está rodando antes de usar a aplicação web.
- As dependências do backend devem estar instaladas.
- O frontend exibe os resultados formatados, incluindo nome do arquivo, data de modificação e conteúdo.
- As variáveis sensíveis do Azure Search estão em `config.js`.

## Licença
MIT$env:NODE_OPTIONS="--openssl-legacy-provider"; npm start