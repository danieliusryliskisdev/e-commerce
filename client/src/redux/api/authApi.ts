import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://e-commerce-server289.vercel.app/api/auth",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userCredentials) => ({
        url: "/login",
        method: "POST",
        body: userCredentials,
      }),
    }),
    register: builder.mutation({
      query: (newUser) => ({
        url: "/register",
        method: "POST",
        body: newUser,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useLogoutMutation } =
  authApi;
