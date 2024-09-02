 import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '90dfd14556mshc25bd0c893e047dp1b8724jsn1d00d0c7e052'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';


// utility function adding url and headers
const createRequest = (url) => ({ url, headers:cryptoApiHeaders })


export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: ( builder ) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory: builder.query({
            // query: ({ coinId, timePeriod }) => createRequest(`/coin/${coinId}/history/${timePeriod}`)
            query: ({ coinId, timePeriod }) => createRequest(`/coin/${coinId}/history?timeperiod=${timePeriod}`)
        })
    })
});


export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } = cryptoApi;


// const options = {
// 	method: 'GET',
// 	hostname: 'coinranking1.p.rapidapi.com',
// 	port: null,
// 	path: '/exchanges?referenceCurrencyUuid=yhjMzLPhuIDI&limit=50&offset=0&orderBy=24hVolume&orderDirection=desc',
// 	headers: {
// 		'x-rapidapi-key': '90dfd14556mshc25bd0c893e047dp1b8724jsn1d00d0c7e052',
// 		'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
// 	}
// };