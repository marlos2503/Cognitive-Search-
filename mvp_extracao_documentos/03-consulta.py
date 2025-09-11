from azure.search.documents.indexes import SearchIndexClient
from azure.core.credentials import AzureKeyCredential

from azure.identity import DefaultAzureCredential
import os

# Initialize the client (similar to what you already have)
search_endpoint = os.environ[""]
api_key = ""
credential = AzureKeyCredential(api_key)
index_name = "margies-index"  # or use your existing index_name variable

# Create the SearchIndexClient
index_client = SearchIndexClient(endpoint=search_endpoint, credential=credential)

try:
    # Get the existing index schema
    index = index_client.get_index(index_name)
    
    print(f"Index name: {index.name}")
    print(f"Number of fields: {len(index.fields)}")
    
    # Print field details
    for field in index.fields:
        print(f"Field: {field.name}, Type: {field.type}, Searchable: {field.searchable}")
    
    # Access semantic configuration if it exists
    if index.semantic_search and index.semantic_search.configurations:
        for config in index.semantic_search.configurations:
            print(f"Semantic config: {config.name}")
            if config.prioritized_fields.title_field:
                print(f"Title field: {config.prioritized_fields.title_field.field_name}")
    else:
        print("No semantic configuration exists for this index")

except Exception as ex:
    print(f"Error retrieving index: {ex}")