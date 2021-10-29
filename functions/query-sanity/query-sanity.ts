import { Handler } from '@netlify/functions'
import fetch from 'node-fetch'

export const handler: Handler = async (event, context) => {

  const { 
    apiVersion = 'v2021-06-07',
    dataset = 'marcomm',
    query = '*[0]'
  } = event.queryStringParameters

  const url = `https://${process.env.SANITY_PROJECT_ID}.apicdn.sanity.io/${apiVersion}/data/query/${dataset}?query=${query}`
  const res = await fetch(url, { headers: { Authorization: `Bearer ${process.env.SANITY_READ_TOKEN}` }})
  

  return {
    statusCode: 200,
    body: JSON.stringify({
      dataset,
      apiVersion,
      data: await res.json()
    }),
  }
}
