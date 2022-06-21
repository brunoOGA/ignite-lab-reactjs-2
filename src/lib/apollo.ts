import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4ny9a7h01xw01xnbltne7a4/master",
  cache: new InMemoryCache(),
});
