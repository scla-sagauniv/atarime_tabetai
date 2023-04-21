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
  const endpoint = "https://atrm-functions.azurewebsites.net/api/HttpTrigger2?"
  const res = await fetch(endpoint,param)
  const data = await res.json()
  return data
}