import base64
import io
import json
import logging
import os
import typing

import azure.functions as func
from dotenv import load_dotenv
from stability_sdk import client
import stability_sdk.interfaces.gooseai.generation.generation_pb2 as generation


load_dotenv()
stability_api = client.StabilityInference(
    key=os.environ['STABILITY_KEY'],
    verbose=True,
)


def main(msg: func.QueueMessage) -> None:
    # logging.info('Python queue trigger function processed a queue item: %s',
    #              msg.get_body().decode('utf-8'))
    message = msg.get_body().decode('utf-8')
    prompt_list = message.split(',')
    org_prompt = prompt_list[0]
    gen_promp = prompt_list[1]

    answers = stability_api.generate(
        prompt=org_prompt,
    )

    for resp in answers:
        for artifact in resp.artifacts:
            if artifact.finish_reason == generation.FILTER:
                logging.warn(
                    "Your request activated the API's safety filters and could not be processed."
                    "Please modify the prompt and try again.")
            if artifact.type == generation.ARTIFACT_IMAGE:
                img = io.BytesIO(artifact.binary)
                logging.info(org_prompt)
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
