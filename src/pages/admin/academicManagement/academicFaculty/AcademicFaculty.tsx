import { Button, Table, TableColumnsType } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { TAcademicFacultyTableData } from "../../../../types/admin/academicManagement";
import { useGetAllAcademicFacultyQuery } from "../../../../app/features/admin/academicManagement/academicFaculty";

function AcademicSemester() {
  const { data: academicFaculty, isFetching } =
    useGetAllAcademicFacultyQuery(undefined);

  const tableData = academicFaculty?.data?.map(({ _id, name }) => ({
    key: _id,
    name,
  }));

  const columns: TableColumnsType<TAcademicFacultyTableData> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
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

export default AcademicSemester;
