import Client from "shopify-buy";

export const client = Client.buildClient({
    domain: '30c0c5.myshopify.com',
    storefrontAccessToken: '08323887fec67ffe8a9ce929cea445f0',
    apiVersion: "2023-07"
});
