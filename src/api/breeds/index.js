import URI from 'urijs';

import { clientApi } from '@api';

const breedsApi = clientApi.injectEndpoints({
  endpoints: (builder) => ({
    getBreeds: builder.query({
      query: (params) => {
        const URL = new URI('/breeds');

        if (params.query) {
          URL.segment('/search');
          URL.addQuery({ q: params.query });
        } else {
          URL.addQuery({ ...params });
        }

        return URL.toString();
      },
      providesTags: (result) => ['Breeds'],
      transformResponse: (response, meta) => {
        return { data: response, total: meta.response.headers.get('pagination-count') };
      },
    }),
    getBreed: builder.query({
      query: ({ id: breedId }) => {
        const URL = new URI('/breeds');

        URL.segment(`${breedId}`);

        return URL.toString();
      },
    }),
  }),
});

export const { useGetBreedsQuery, useGetBreedQuery, usePrefetch } = breedsApi;
