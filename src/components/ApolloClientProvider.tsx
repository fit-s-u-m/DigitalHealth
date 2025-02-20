"use client";

import { HttpLink } from "@apollo/client";
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr";

function makeClient() {
  const httpLink = new HttpLink({
    // See more information about this GraphQL endpoint at https://studio.apollographql.com/public/spacex-l4uc6p/variant/main/home
    uri: "https://digital-health.hasura.app/v1/graphql",
    // you can configure the Next.js fetch cache here if you want to
    fetchOptions: { cache: "force-cache" },
    headers: {
      "x-hasura-admin-secret": process.env.NEXT_PUBLIC_HASURA_SECRET as string,
    },

    // alternatively you can override the default `fetchOptions` on a per query basis
    // via the `context` property on the options passed as a second argument
    // to an Apollo Client data fetching hook, e.g.:
    // ```js
    // const { data } = useSuspenseQuery(
    //   MY_QUERY,
    //   {
    //     context: {
    //       fetchOptions: {
    //         cache: "no-store"
    //       }
    //     }
    //   }
    // );
    // ```
  });

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: httpLink,
  });
}

// you need to create a component to wrap your app in
export function ApolloClientProvider({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
