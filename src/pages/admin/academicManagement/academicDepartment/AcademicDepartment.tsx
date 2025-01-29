import { Button, Table, TableColumnsType } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { TAcademicFacultyTableData } from "../../../../types/admin/academicManagement";
import { useGetAllDepartmentQuery } from "../../../../app/features/admin/academicManagement/academicDepartment";

function AcademicDepartment() {
  const { data: academicFaculty, isFetching } =
    useGetAllDepartmentQuery(undefined);

  const tableData = academicFaculty?.data?.map(
    ({ _id, name, academicFaculty: { name: academicFaculty } }) => ({
      key: _id,
      name,
      academicFaculty,
    })
  );

  const columns: TableColumnsType<TAcademicFacultyTableData> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Academic Faculty",
      key: "academicFaculty",
      dataIndex: "academicFaculty",
    },
    {
      title: "Action",
      key: "x",
      render: () => {
        return (
          <div style={{ display: "flex", gap: "8px" }}>
            <Button variant="outlined" color="blue" icon={<EditOutlined />}>
              Update
            </Button>
            <Button danger icon={<DeleteOutlined />}>
              Delete
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <Table loading={isFetching} columns={columns} dataSource={tableData} />
  );
}

export default AcademicDepartment;
