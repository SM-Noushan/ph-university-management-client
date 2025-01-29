import { TCommonResponseData } from "./../../Global.Types";

export type TAcademicFaculty = {
  name: string;
} & TCommonResponseData;

export type TAcademicFacultyTableData = Pick<TAcademicFaculty, "name">;
