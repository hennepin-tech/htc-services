import { Handler } from '@netlify/functions'
import fetch from 'node-fetch'

export const handler: Handler = async (event, context) => {

  console.log(context)

  const { 
    apiVersion = 'v2021-06-07',
    dataset = 'marcomm',
    groq = '*[0]'
  } = event.queryStringParameters

  const url = `https://${process.env.SANITY_PROJECT_ID}.apicdn.sanity.io/${apiVersion}/data/query/${dataset}?query=${groq}`
  const res = await fetch(url)

  return {
    statusCode: 200,
    body: JSON.stringify({
      dataset,
      apiVersion,
      data: await res.json()
    }),
  }
}
