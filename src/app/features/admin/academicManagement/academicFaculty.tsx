import { baseApi } from "../../../api/baseApi";
import { TResponseRedux } from "../../../../types/Global.Types";
import { TAcademicFaculty } from "../../../../types/admin/academicManagement";
import { AcademicFacultyBaseApi } from "../../../../constants/api/admin/academicManagement";

const academicFacultyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAcademicFaculty: builder.query({
      query: () => ({
        url: AcademicFacultyBaseApi,
        method: "GET",
      }),
      transformResponse: (response: TResponseRedux<TAcademicFaculty[]>) => {
        return {
          data: response.data,
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

export const {
  useGetAllAcademicFacultyQuery,
  useCreateAcademicFacultyMutation,
} = academicFacultyApi;
