import { useGetAllSemesterQuery } from "../../../../app/features/academicSemester/academicSemesterApi";

function AcademicSemester() {
  const ac = useGetAllSemesterQuery(undefined);
  console.log(ac);
  return <div>AcademicSemester</div>;
}

export default AcademicSemester;
