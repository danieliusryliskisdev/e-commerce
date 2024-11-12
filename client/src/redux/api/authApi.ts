import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://e-commerce-7727.onrender.com/",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userCredentials) => ({
        url: "api/auth/login",
        method: "POST",
        body: userCredentials,
      }),
    }),
    register: builder.mutation({
      query: (newUser) => ({
        url: "api/auth/register",
        method: "POST",
        body: newUser,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "api/auth/logout",
        method: "POST",
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useLogoutMutation } =
  authApi;
