import { TCommonResponseData } from "../../Global.Types";
import { TAcademicFaculty } from "./AcademicFaculty.Types";

export type TAcademicDepartment = {
  name: string;
  academicFaculty: TAcademicFaculty;
} & TCommonResponseData;

// dynamic extractions better for maintainability
export type TAcademicDepartmentTableData = Pick<TAcademicDepartment, "name"> & {
  academicFaculty: TAcademicDepartment["academicFaculty"]["name"];
};

// export type TAcademicDepartmentTableData = {
//   name: string;
//   academicFaculty: string;
// };
