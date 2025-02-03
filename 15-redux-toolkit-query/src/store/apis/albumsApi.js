import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

const albumsApi = createApi({
  reducerPath: 'albums',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005',
    fetchFn: async (...args)=>{
      await pause(1000);
      return fetch(...args);
    }
  }),
  endpoints(builder){
    return {

      addAlbum: builder.mutation({
        invalidatesTags: (result, error, user)=>{
          console.log('onFly1', user);
          return [{type: 'Album', id: user.name}];
        },
        query: (user) => {
          return {
            url: '/albums',
            params: { userId: user.name },
            method: 'POST',
            body: {
              title: faker.commerce.productName(),
              userId: user.id,
            },
          }
        }
      }),

      fetchAlbums: builder.query({
        providesTags: (result, error, user) => {
          console.log('onFly', user);
          return [{type: 'Album', id: user.name}];
        },
        query: (user) =>{
          return {
            url: '/albums',
            params: { userId: user.id },
            method: 'GET',
          }
        },
      }),
      
    }
  }
});

export const { useFetchAlbumsQuery, useAddAlbumMutation  } = albumsApi;
export { albumsApi };