import { DefaultApolloClient } from "@vue/apollo-composable"
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client/core"


const httpLink = createHttpLink({
    uri: "http://localhost:4000/graphql",
});

const cache =  new InMemoryCache();

const apolloClient = new ApolloClient({
    link: httpLink,
    cache
});

export const apolloPlugin = {
    install(app) {
        app.provide(DefaultApolloClient, apolloClient);
    }
};