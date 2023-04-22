export const FetchChatgpt = async (prompt) => {
  const param = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
            prompt
        })
}
  const endpoint = "/Chatgpt-httptrigger?"
  const res = await fetch(endpoint,param)
  const data = await res.json()
  console.log(prompt)
  return data
}