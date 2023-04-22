import logging

import azure.functions as func
import json
import os
import openai
import typing

openai.api_key = os.environ['CHATGPT_KEY']


def main(req: func.HttpRequest, texts: func.Out[typing.List[str]]) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')
    req_body_bytes = req.get_body()  # byte型で返ってくる
    req_body = req_body_bytes.decode("utf-8")  # デコードする
    data = json.loads(req_body)  # jsonとして読み込む
    prompt = data["prompt"]  # promptを取り出す
    # logging.info(prompt)
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "100字以内にまとめて"},
            {"role": "system", "content": "日記風で書いて"},  # 制約はなんとか考える
            {"role": "user", "content":  prompt},
        ],
    )

    resp_text = response.choices[0].message.content
    # print(resp_text)
    obj = {
        "reply": resp_text
    }
    data = json.dumps(obj)
    prompts = prompt + "," + resp_text
    # return func.HttpResponse(data)

    if resp_text:
        texts.set(prompts)
        return 'OK'
    else:
        return func.HttpResponse(
            "No ChatGPT response.",
            status_code=200
        )
    # texts.set("white cat,resp_text")
    # return func.HttpResponse(prompt)
