import { useGetAllSemesterQuery } from "../../../../app/features/admin/academicManagement/academicSemester/academicSemesterApi";

function AcademicSemester() {
  const ac = useGetAllSemesterQuery(undefined);
  console.log(ac);
  return <div>AcademicSemester</div>;
}

export default AcademicSemester;
