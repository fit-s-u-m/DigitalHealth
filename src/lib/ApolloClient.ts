import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      // See more information about this GraphQL endpoint at https://studio.apollographql.com/public/spacex-l4uc6p/variant/main/home
      uri: "https://digital-health.hasura.app/v1/graphql",
      // you can configure the Next.js fetch cache here if you want to
      fetchOptions: { cache: "force-cache" },
      headers: {
        "x-hasura-admin-secret": process.env.NEXT_PUBLIC_HASURA_SECRET as string,
      },
      // alternatively you can override the default `fetchOptions` on a per query basis
      // ```js
      // const result = await getClient().query({
      //   query: MY_QUERY,
      //   context: {
      //     fetchOptions: { cache: "force-cache" },
      //   },
      // });
      // ```
    }),
  });
});
