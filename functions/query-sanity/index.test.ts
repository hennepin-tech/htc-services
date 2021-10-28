const { querySanity } = require('./internal/query-sanity')

const sampleData = {
  apiVersion: "v2021-06-07",
  dataset: "marcomm",
  query: "*[_type == 'homepage']{_id}"
}

test('Returns a JSON Payload with this ID of the blog homepage from Sanity.', async () => {
  const data = await querySanity(sampleData);
  expect(data).toBe(JSON.stringify(
    {
      "dataset": "marcomm",
      "apiVersion": "v2021-06-07",
      "data": {
        "ms": 32,
        "query": "*[_type=='homepage']{_id}",
        "result": [
          {
            "_id": "homepage"
          }
        ]
      }
    }
  ));
})