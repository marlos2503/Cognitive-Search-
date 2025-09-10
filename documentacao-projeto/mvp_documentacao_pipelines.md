# Documentação do MVP Cognitive Search :


Essa combinação permite criar soluções escaláveis, inteligentes e altamente automatizadas. 

**Visão Geral da Arquitetura:**

- Ingestão de Documentos
Documentos (PDFs, imagens, etc.) são enviados via Web App ou API e armazenados no Blob Storage.
- Disparo via Fila (Service Bus)
Uma mensagem dispara uma instância de Função Durável para iniciar o pipeline.
- Processamento com Document Intelligence
- OCR e extração de layout (tabelas, seções, marcas de seleção)
- Classificação de tipo de documento
- Extração de campos com modelos pré-construídos ou personalizados
- Classificação e Enriquecimento com LLMs
- Uso de Document Intelligence para classificar documentos e extrair dados estruturados com base em texto + imagem
- Indexação com AI Search
- Dados extraídos são vetorizados e indexados para permitir busca semântica e RAG (Retrieval-Augmented Generation)
- Chat com seus dados
- Usuários podem interagir com os documentos via chat, usando Azure OpenAI para responder perguntas com base nos documentos indexados

**Projeto de Referência:**

A Microsoft disponibiliza um template no GitHub que já integra Document Intelligence, GPT-4o e Funções Duráveis. Ele inclui:

- Classificador de documentos com GPT-4o
- Extrator multimodal (texto + imagem) com Pydantic
- Orquestração com Funções Duráveis
- Hospedagem escalável com Azure Container Apps 

[Pipeline de processamento de documentos de IA do Azure usando funções duráveis do Python
](https://github.com/Azure/ai-document-processing-pipeline
)


