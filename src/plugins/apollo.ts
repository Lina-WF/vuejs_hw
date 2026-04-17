import { DefaultApolloClient } from "@vue/apollo-composable"
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client/core"
import type { App } from "vue";


const httpLink = createHttpLink({
    uri: "http://localhost:4000/graphql",
});

const cache =  new InMemoryCache();

const apolloClient = new ApolloClient({
    link: httpLink,
    cache
});

export const apolloPlugin = {
    install(app: App) {
        app.provide(DefaultApolloClient, apolloClient);
    }
};