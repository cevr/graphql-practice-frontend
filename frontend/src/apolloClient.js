import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';

const cache = new InMemoryCache({
    dataIdFromObject: object => object.id
});
export const client = new ApolloClient({
    cache
});
