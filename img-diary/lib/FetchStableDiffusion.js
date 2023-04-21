export const FetchStableDiffusion = async (prompt) => {
  const param = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
            prompt
        })
}
  const endpoint = "https://atrm-stablediffusion.azurewebsites.net/api/HttpTrigger1?"
  const res = await fetch(endpoint,param)
  const data = await res.json()
  return data
}