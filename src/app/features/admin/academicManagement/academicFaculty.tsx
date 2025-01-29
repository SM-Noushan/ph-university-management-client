import { baseApi } from "../../../api/baseApi";
import { TResponseRedux } from "../../../../types/Global.Types";
import { TAcademicFaculty } from "../../../../types/admin/academicManagement";
import { AcademicFacultyBaseApi } from "../../../../constants/api/admin/academicManagement";

const academicFacultyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllFaculty: builder.query({
      query: () => ({
        url: AcademicFacultyBaseApi,
        method: "GET",
      }),
      transformResponse: (response: TResponseRedux<TAcademicFaculty[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    createAcademicFaculty: builder.mutation({
      query: (data) => ({
        url: AcademicFacultyBaseApi + "/create-academic-faculty",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetAllFacultyQuery, useCreateAcademicFacultyMutation } =
  academicFacultyApi;
