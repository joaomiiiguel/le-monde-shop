import { client } from "@/utils/shopify-client";

const GRAPHQL_QUERY = `
  query {
    shop {
      name
    }
  }
`;

export async function useProducts() {
    const response = await fetch(client.getStorefrontApiUrl(), {
      body: JSON.stringify({
        query: GRAPHQL_QUERY,
      }),
      headers: client.getPrivateTokenHeaders({buyerIp: '...'}),
      method: 'POST',
    });
  
    if (!response.ok) {
      throw new Error(response.statusText);
    }
  
    const ShopifyData = await response.json();
  
    return ShopifyData;
  }