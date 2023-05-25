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
        updateWebsite: builder.mutation({
            query: website => ({
                url: `/websites/${website.id}`,
                method: "PUT",
                body: website
            }),
            invalidatesTags: (result, error, arg) => [{ type: 'Website', id: arg.id }]
        }),
        createWebsite: builder.mutation({
            query: website => ({
                url: `/websites`,
                method: "POST",
                body: website
            }),
            invalidatesTags: ['Website']
        }),
        deleteWebsite: builder.mutation({
            query: website => ({
                url: `/websites/${website.id}`,
                method: "DELETE",
            }),
            invalidatesTags: (result, error, arg) => [{ type: 'Website', id: arg.id }]
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
    useCreateWebsiteMutation,
    useUpdateWebsiteMutation,
    useDeleteWebsiteMutation,
    useGetCategoriesQuery,
    useGetTagsQuery,
    useGetUserQuery,
} = apiSlice
