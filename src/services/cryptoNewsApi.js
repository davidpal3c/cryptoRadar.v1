import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


// const cryptoNewsHeaders = {
//     'x-rapidapi-key': '90dfd14556mshc25bd0c893e047dp1b8724jsn1d00d0c7e052',
//     'x-rapidapi-host': 'google-news22.p.rapidapi.com'
// }


// const cryptoNewsHeaders = {
//     'x-rapidapi-key': 'b8ae3c7402mshb60477b04eb7700p185cf2jsnbdc11d1f4095',
// 		'x-rapidapi-host': 'google-news22.p.rapidapi.com'
// }


const cryptoNewsHeaders = {
    'x-rapidapi-key': 'c4be12e225msh34f51a59c5553d2p1cc773jsn2c47bb4a325c',
	'x-rapidapi-host': 'google-news22.p.rapidapi.com'
}


// const cryptoNewsHeaders = {
//     'x-rapidapi-key': '3719881583msh7f33b1f0c915318p1908e1jsn6ce8ec657efe',
//     'x-rapidapi-host': 'google-news22.p.rapidapi.com'
// }
		


const baseUrl = 'https://google-news22.p.rapidapi.com';


const createRequest = (url) => ({ url, headers: cryptoNewsHeaders })

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsapi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/v1/search?q=${newsCategory}&country=us&language=en`),
        })
    })
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;