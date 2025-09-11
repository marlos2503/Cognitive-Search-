import azure.functions as func
import logging
import requests
import os

app = func.FunctionApp(http_auth_level=func.AuthLevel.FUNCTION)

@app.route(route="searchai", methods=["GET"])
def search_ai(req: func.HttpRequest) -> func.HttpResponse:
    query = req.params.get("q", "")
    logging.info(f"Processing Azure AI Search GET request. Query: {query}")

    # Configurações do Azure Search
    search_endpoint = os.environ.get("AZURE_SEARCH_ENDPOINT", "")
    api_key = os.environ.get("AZURE_SEARCH_API_KEY", "")
    index_name = os.environ.get("AZURE_SEARCH_INDEX_NAME", "margies-index")

    if not (search_endpoint and api_key and index_name):
        return func.HttpResponse(
            "Azure Search configuration missing.",
            status_code=500
        )

    url = f"{search_endpoint}/indexes/{index_name}/docs/search?api-version=2023-07-01-Preview"
    headers = {
        "Content-Type": "application/json",
        "api-key": api_key
    }
    payload = {
        "search": query
    }
    try:
        response = requests.post(url, headers=headers, json=payload)
        response.raise_for_status()
        return func.HttpResponse(response.text, mimetype="application/json")
    except Exception as e:
        logging.error(f"Azure Search error: {e}")
        return func.HttpResponse(
            f"Error querying Azure Search: {str(e)}",
            status_code=500
        )



@app.route(route="httpget", methods=["GET"])
def http_get(req: func.HttpRequest) -> func.HttpResponse:
    name = req.params.get("name", "World")
    logging.info(f"Processing GET request. Name: {name}")
    return func.HttpResponse(f"Hello, {name}!")

@app.route(route="httppost", methods=["POST"])
def http_post(req: func.HttpRequest) -> func.HttpResponse:
    try:
        req_body = req.get_json()
        name = req_body.get('name')
        age = req_body.get('age')
        
        logging.info(f"Processing POST request. Name: {name}")

        if name and isinstance(name, str) and age and isinstance(age, int):
            return func.HttpResponse(f"Hello, {name}! You are {age} years old!")
        else:
            return func.HttpResponse(
                "Please provide both 'name' and 'age' in the request body.",
                status_code=400
            )
    except ValueError:
        return func.HttpResponse(
            "Invalid JSON in request body",
            status_code=400
        )
