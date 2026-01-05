import { GraphQLClient } from "@refinedev/nestjs-query";
import { fetchWrapper } from "./fetchWrapper";

const API_URL = "https://api.nestjs-query.refine.dev/graphql";
export const client = new GraphQLClient(API_URL, {
    fetch: (url: string, options: RequestInit) => {
        try {
            return fetchWrapper(url, options);
    }
    catch (error) {
        return Promise.reject(error as Error);
    }
},
});

