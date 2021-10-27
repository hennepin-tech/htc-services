import { Handler } from '@netlify/functions'
import fetch from 'node-fetch'

export const handler: Handler = async (event, context) => {

  const { 
    apiVersion = 'v2021-06-07',
    dataset = 'marcomm',
    tag = 'default',
    query
  } = event.queryStringParameters

  const url = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v1/graphql/${dataset}/${tag}`
  const res = await fetch(url, { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: query
    })})

  return {
    statusCode: 200,
    body: JSON.stringify({
      dataset,
      apiVersion,
      data: await res.json()
    }),
  }
}
