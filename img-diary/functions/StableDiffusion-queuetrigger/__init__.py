import base64
import io
import json
import logging
import os
import typing
import uuid

import azure.functions as func
from PIL import Image
from dotenv import load_dotenv
from stability_sdk import client
from azure.identity import DefaultAzureCredential
import stability_sdk.interfaces.gooseai.generation.generation_pb2 as generation
from azure.storage.blob import BlobServiceClient, BlobClient, ContainerClient


load_dotenv()
stability_api = client.StabilityInference(
    key=os.environ['STABILITY_KEY'],
    verbose=True,
)


def main(msg: func.QueueMessage) -> None:
    # logging.info('Python queue trigger function processed a queue item: %s',
    #              msg.get_body().decode('utf-8'))

    message = msg.get_body().decode('utf-8')

    answers = stability_api.generate(
        prompt=message,
    )

    for resp in answers:
        for artifact in resp.artifacts:
            if artifact.finish_reason == generation.FILTER:
                logging.warn(
                    "Your request activated the API's safety filters and could not be processed."
                    "Please modify the prompt and try again.")
            if artifact.type == generation.ARTIFACT_IMAGE:
                img = Image.open(io.BytesIO(artifact.binary))
                logging.info(message)

                try:

                    print("Azure Blob Storage Python quickstart sample")
                    account_url = "https://zinbeea369.blob.core.windows.net"
                    default_credential = DefaultAzureCredential()

                    # Create the BlobServiceClient object
                    blob_service_client = BlobServiceClient(
                        account_url, credential=default_credential)
                    # Create a local directory to hold blob data
                    # local_path = "./StableDiffusion-queuetrigger/data"
                    # Create a file in the local data directory to upload and download
                    blob_name = "output.png"
                    # local_file_name = str(uuid.uuid4()) + ".png"
                    # upload_file_path = os.path.join(
                    #     local_path, local_file_name)

                    diary = io.BytesIO()
                    img.save(diary, "PNG", quality=95)

                    # Create a blob client using the local file name as the name for the blob
                    blob_client = blob_service_client.get_blob_client(
                        container="diary-images", blob=blob_name)

                    print("\nUploading to Azure Storage as blob:\n\t" +
                          blob_name)

                    # Upload the created file
                    # with open(file=upload_file_path, mode="rb") as data:
                    #     blob_client.upload_blob(data)
                    # os.remove(upload_file_path)
                    data = diary.getvalue()
                    blob_client.upload_blob(data, overwrite=True)

                except Exception as ex:
                    print('Exception:')
                    print(ex)
                # img_bytes = base64.b64encode(
                #     img.getvalue())  # bytesIO型からbytes型にエンコード
                # img_base64 = img_bytes.decode()  # bytes型からstr型にデコード
                # obj = {
                #     "img_base64": img_base64
                # }
                # data = json.dumps(obj)
                # msg.set(gen_promp)


# for resp in answers:
#     for artifact in resp.artifacts:
#         if artifact.finish_reason == generation.FILTER:
#             print("NSFW")
#         if artifact.type == generation.ARTIFACT_IMAGE:
#             img = Image.open(io.BytesIO(artifact.binary))
#             img.save('output.png')
