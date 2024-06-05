import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IInterval } from '../model';
import { ICabinet } from '../model';
import {baseUrl} from "../../../shared/const/url";


export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['WorkTime'],
    baseQuery: fetchBaseQuery({
        baseUrl: "https://redrock.mycum.ru/api/v1"
    }),
    endpoints: (builder) => ({
        getIntervals: builder.query<IInterval[], void>({
            query: () => '/intervals'
        })
    })
});

export const { useGetIntervalsQuery } = api