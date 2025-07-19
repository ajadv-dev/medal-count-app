import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {CountryMedals} from "@/services/medals/types";

export const medalsAPI = createApi({
    reducerPath: 'medalsAPI',
    baseQuery: fetchBaseQuery({ baseUrl: '/' }),
    endpoints: (builder) => ({
        getMedals: builder.query<CountryMedals[], void>({
            query: () => '/mock/medals.json',
        }),
    }),
});


export const { useGetMedalsQuery } = medalsAPI;
