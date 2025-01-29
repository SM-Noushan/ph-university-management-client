import { baseApi } from "../../../api/baseApi";
import { TResponseRedux } from "../../../../types/Global.Types";
import { TAcademicDepartment } from "../../../../types/admin/academicManagement";
import { AcademicDepartmentBaseApi } from "../../../../constants/api/admin/academicManagement";

const academicDepartmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllDepartment: builder.query({
      query: () => ({
        url: AcademicDepartmentBaseApi,
        method: "GET",
      }),
      transformResponse: (response: TResponseRedux<TAcademicDepartment[]>) => {
        return {
          data: response.data,
        };
      },
    }),
    createAcademicDepartment: builder.mutation({
      query: (data) => ({
        url: AcademicDepartmentBaseApi + "/create-academic-department",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetAllDepartmentQuery, useCreateAcademicDepartmentMutation } =
  academicDepartmentApi;
