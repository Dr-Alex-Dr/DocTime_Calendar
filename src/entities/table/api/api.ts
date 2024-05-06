import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IDoctor } from '../model';

const BASE_URL = "http://localhost:8010/proxy/api/v1/";
  
export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['WorkTime'],
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL
    }),
    endpoints: (builder) => ({
        getIntervals: builder.query<any, void>({
            query: () => '/intervals'
        }),
    })
});

export const { useGetIntervalsQuery } = api