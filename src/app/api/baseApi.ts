import { toast } from "sonner";
import { RootState } from "../store";
import {
  BaseQueryApi,
  BaseQueryFn,
  createApi,
  DefinitionType,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { BaseApiUrl } from "../../constants/api/baseApiUrl";
import { logout, setUser } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: BaseApiUrl,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("authorization", token);
    }
    return headers;
  },
});

const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error?.status === 401) {
    const res = await fetch(BaseApiUrl + "/auth/refresh-token", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (data.success) {
      const user = (api.getState() as RootState).auth.user;
      const token = data.data.accessToken;
      sessionStorage.setItem("auth", JSON.stringify({ user, token }));
      api.dispatch(
        setUser({
          user,
          token,
        })
      );
      result = await baseQuery(args, api, extraOptions);
    } else {
      sessionStorage.removeItem("auth");
      api.dispatch(logout());
      toast.success("Session expired, please login again");
    }
    // console.log(data);
  }
  // console.log(result);
  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
});
