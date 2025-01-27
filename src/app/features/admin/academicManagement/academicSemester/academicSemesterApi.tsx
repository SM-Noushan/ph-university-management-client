import { baseApi } from "../../../../api/baseApi";
import { TQueryParam, TResponseRedux } from "../../../../../types/Global.Types";
import { TAcademicSemester } from "../../../../../types/admin/academicManagement";
import { AcademicSemesterBaseApi } from "../../../../../constants/api/admin/academicManagement";

const academicSemesterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemester: builder.query({
      query: (args: TQueryParam[]) => {
        const params = new URLSearchParams();
        args.forEach((arg) => params.append(arg.key, String(arg.value)));
        return {
          url: AcademicSemesterBaseApi,
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
        // console.log({ response });
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    createSemester: builder.mutation({
      query: (data) => ({
        url: AcademicSemesterBaseApi + "/create-academic-semester",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetAllSemesterQuery, useCreateSemesterMutation } =
  academicSemesterApi;
