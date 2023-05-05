import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
    tagTypes: ['Website'],
    endpoints: (builder) => ({
        getWebsites: builder.query({
            query: () => '/websites',
            providesTags: (result = [], error, arg) => [
                'Website',
                ...result.map(({ id }) => ({ type: 'Website', id })),
            ]
        }),
        getCategories: builder.query({
            query: () => '/categories'
        }),
        getTags: builder.query({
            query: () => '/tags'
        }),
        getUser: builder.query({
            query: () => '/login'
        })
    })
})

export const {
    useGetWebsitesQuery,
    useGetCategoriesQuery,
    useGetTagsQuery,
    useGetUserQuery,
} = apiSlice
