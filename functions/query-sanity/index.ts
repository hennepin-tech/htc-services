import type { Handler } from '@netlify/functions'
const { querySanity } = require('./internal/query-sanity')

export const handler: Handler = async (event, context) => {

  const { 
    apiVersion = 'v2021-06-07',
    dataset = 'marcomm',
    query = '*[0]'
  } = event.queryStringParameters

  return querySanity({apiVersion, dataset, query});
}
