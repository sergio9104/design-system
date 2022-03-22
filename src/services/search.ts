export interface ISearch {
  took: number;
  timed_out: boolean;
  _shards: {
      total: number;
      successful: number;
      skipped: number;
      failed: number;
  };
  hits: {
      total: {
          value: number;
          relation: string;
      };
      max_score: number;
      hits: {
          _index: string;
          _id: string;
          _score: number;
          _source: {
              uuid: string;
              name: string;
              slug: string;
              url_internal: string;
              keywords: {
                name: string;
              }[];
              keywords_indexing: string[];
              created_at: string;
              number_of_connections: number;
              number_company_connections: number;
              number_content_connections: number;
              number_topics_connections: number;
              connected_companies: number;
              connected_content: number;
              number_of_curators: number;
              last_updated: string;
          }
      }[]
  }
}

interface IArg {
  query: string;
  entity: string;
  from?: number;
}

export default async function Search({
  query,
  entity,
  from = 0,
}: IArg): Promise<ISearch> {
  const res = await fetch('/api/search', {
    method: 'POST',
    body: JSON.stringify({ query, entity, from })
  })
  return res.json();
}
