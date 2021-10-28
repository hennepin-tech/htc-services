const fetch = require('node-fetch')
import type { QuerySanityParams } from './types'

export const querySanity = async ({apiVersion, dataset, query}:QuerySanityParams) => {

  const url = `https://${process.env.SANITY_PROJECT_ID}.apicdn.sanity.io/${apiVersion}/data/query/${dataset}?query=${query}`
  
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