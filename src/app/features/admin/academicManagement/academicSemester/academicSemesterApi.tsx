import { baseApi } from "../../../../api/baseApi";
import { AcademicSemesterBaseApi } from "../../../../../constants/api/admin/academicManagement";

const academicSemesterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemester: builder.query({
      query: () => ({
        url: AcademicSemesterBaseApi,
        method: "GET",
      }),
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
