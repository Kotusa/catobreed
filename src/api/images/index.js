import URI from 'urijs';

import { clientApi } from '@api';

const imagesApi = clientApi.injectEndpoints({
  endpoints: (builder) => ({
    getImages: builder.query({
      query: (params) => {
        const URL = new URI('/images/search');

        URL.addQuery({ ...params });

        return URL.toString();
      },
      providesTags: (result) => ['Images'],
      transformResponse: (response, meta) => {
        return { data: response, total: meta.response.headers.get('pagination-count') };
      },
    }),
    getImageById: builder.query({
      query: (params) => {
        const URL = new URI('/images');

        URL.segment(`${params.id}`);

        return URL.toString();
      },
      providesTags: (result) => ['Images'],
    }),
    getCategories: builder.query({
      query: () => {
        const URL = new URI('/categories');

        return URL.toString();
      },
      providesTags: (result) => ['Images'],
    }),
  }),
});

export const { useGetImagesQuery, useGetImageByIdQuery, useGetCategoriesQuery } = imagesApi;
