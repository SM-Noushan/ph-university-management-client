import { TCommonResponseData } from "../../Global.Types";

export type TAcademicSemester = {
  name: string;
  code: string;
  year: number;
  startMonth: string;
  endMonth: string;
} & TCommonResponseData;

export type TAcademicSemesterTableData = Pick<
  TAcademicSemester,
  "name" | "year" | "startMonth" | "endMonth"
>;
