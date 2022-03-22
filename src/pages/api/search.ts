import { NextApiRequest, NextApiResponse } from 'next'
import { Client } from '@elastic/elasticsearch';

export default function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { query, entity, from } = JSON.parse(req.body);
    const { ELASTIC_SEARCH_URL, ELASTIC_SEARCH_USERNAME, ELASTIC_SEARCH_PASSWORD } = process.env;
    const client = new Client({ 
        node: ELASTIC_SEARCH_URL, 
        auth: {
          username: ELASTIC_SEARCH_USERNAME,
          password: ELASTIC_SEARCH_PASSWORD
        }
      });
      client.search({
        index: entity,
        q: query,
        size: 10,
        from: from
      }).then((val) => {
        res.status(200).json(val);
      }).catch((e) => {
        res.status(500).json(e);
      })
  } else {
    res.status(200).json({});
  }    
}