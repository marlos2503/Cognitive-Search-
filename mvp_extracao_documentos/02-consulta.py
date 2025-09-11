from azure.search.documents import SearchClient
from azure.core.credentials import AzureKeyCredential

# Replace with your Azure Search details
parametro_pesquisa = "Essex"
service_name = "mvp_pesquisa_01"
index_name = "margies-index"
api_key = ""

# Create the endpoint URL
endpoint = f""

# Initialize the SearchClient
search_client = SearchClient(endpoint=endpoint, index_name=index_name, credential=AzureKeyCredential(api_key))


# Perform a search query
results = search_client.search(parametro_pesquisa)

# Print the results
for result in results:
    print(result)
