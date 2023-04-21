import logging

import azure.functions as func

import io
import os
import json
import base64
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
                img_bytes = base64.b64encode(
                    img.getvalue())  # bytesIO型からbytes型にエンコード
                img_base64 = img_bytes.decode()  # bytes型からstr型にデコード
                obj = {
                    "img_base64": img_base64
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
