import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IInterval } from '../model';

// const BASE_URL = "http://localhost:8010/proxy/api/v1/";
const BASE_URL = "https://redrock.mycum.ru/api/v1";

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['WorkTime'],
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL
    }),
    endpoints: (builder) => ({
        getIntervals: builder.query<IInterval[], void>({
            query: () => '/intervals'
        }),
    })
});

export const { useGetIntervalsQuery } = api