import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const itemsAPI = createApi({
    reducerPath: 'itemsAPI',
    tagTypes: ['Items'],
    baseQuery: fetchBaseQuery({baseUrl: 'https://hite-ae54f-default-rtdb.europe-west1.firebasedatabase.app/'}),
    endpoints: (build) => ({
        getItems: build.query({
            query: () => `items.json`
        }),
        getItem: build.query({
            query: (id) => `items/i${id}.json`
        })
    })
})

export const { useGetItemsQuery, useGetItemQuery } = itemsAPI;