import os
from azure.ai.vision.imageanalysis import ImageAnalysisClient
from azure.ai.vision.imageanalysis.models import VisualFeatures
from azure.core.credentials import AzureKeyCredential
import json

# Replace with your endpoint and API key
endpoint =  os.getenv("FR_ENDPOINT", "")
api_key =  os.getenv("FR_KEY", "")

# Authenticate Azure AI Vision client
cv_client = ImageAnalysisClient(
    endpoint=endpoint,
    credential=AzureKeyCredential(api_key))

image_url = "documentos/uso_geral.png"

# Read text in image
with open(image_url, "rb") as f:
    image_data = f.read()
print (f"\nReading text in {image_url}")
 
result = cv_client.analyze(
    image_data=image_data,
    visual_features=[VisualFeatures.READ])

# Convert the analysis result to JSON
result_json = result.as_dict()

# Save the JSON to a local file
output_json_path = "extracao_00.json"
with open(output_json_path, "w") as output_file:
    json.dump(result_json, output_file, indent=4)
print("Analysis result saved to:", output_json_path)
  
# Print the text
if result.read is not None:
    print("\nText:")

    for line in result.read.blocks[0].lines:
        print(f" {line.text}")        
  

