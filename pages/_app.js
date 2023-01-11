import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "../styles/globals.css";
import Layout from "../components/layouts/layout";

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    // https://afriopia.herokuapp.com/graphql
    uri: "https://api.afriopia.com/graphql",
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          articles: {
            merge(existing, incoming) {
              return incoming;
            },
          },
        },
      },
    }),
  });

  return (
    <>
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
