import logging

import azure.functions as func

import io
import os
import json
import uuid
import supabase
# import base64
# from PIL import Image
from dotenv import load_dotenv
from stability_sdk import client
import stability_sdk.interfaces.gooseai.generation.generation_pb2 as generation

# APIインタフェースの準備
load_dotenv()
stability_api = client.StabilityInference(
    key=os.environ['STABILITY_KEY'],
    verbose=True,
)
# supabase準備
supabase_url = 'https://tjqqjderebfvgebxuppx.supabase.co'
supabase_key = os.environ['SUPABASE_KEY']


def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')
    req_body_bytes = req.get_body()  # byte型で返ってくる
    req_body = req_body_bytes.decode("utf-8")  # デコードする
    data = json.loads(req_body)  # jsonとして読み込む
    prompt = data["prompt"]  # promptを取り出す

    answers = stability_api.generate(
        prompt=prompt,
    )

    for resp in answers:
        for artifact in resp.artifacts:
            if artifact.finish_reason == generation.FILTER:
                logging.warn(
                    "Your request activated the API's safety filters and could not be processed."
                    "Please modify the prompt and try again.")
            if artifact.type == generation.ARTIFACT_IMAGE:
                img = io.BytesIO(artifact.binary)
                binary_data = img.getvalue()
                client = supabase.create_client(supabase_url, supabase_key)
                bucket = 'img_diary'
                file_name = str(uuid.uuid4()) + ".png"
                response = client.storage.from_(
                    bucket).upload(file_name, binary_data)
                logging.info('Upload successful')
                url_signed = client.storage.from_(
                    bucket).create_signed_url(file_name, 60000)
                logging.info(url_signed)
                url_puplic = client.storage.from_(
                    bucket).get_public_url(file_name)
                obj = {
                    "signed": url_signed["signedURL"],
                    "public": url_puplic
                }
                data = json.dumps(obj)
                return func.HttpResponse(data)


# for resp in answers:
#     for artifact in resp.artifacts:
#         if artifact.finish_reason == generation.FILTER:
#             print("NSFW")
#         if artifact.type == generation.ARTIFACT_IMAGE:
#             img = Image.open(io.BytesIO(artifact.binary))
#             img.save('output.png')
