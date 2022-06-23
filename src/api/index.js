import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.thecatapi.com/v1',
  prepareHeaders: (headers) => {
    const token = process.env.REACT_APP_THE_CAT_API_KEY;

    headers.set('x-api-key', `${token}`);

    return headers;
  },
});

export const clientApi = createApi({
  reducerPath: 'clientApi',
  baseQuery,
  tagTypes: ['Breeds', 'Images'],
  endpoints: () => ({}),
});
