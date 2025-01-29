import React from "react";
import {
  prevYearOptions,
  semesterNameOptions,
  yearOptions,
} from "../../../../constants";
import { TQueryParam } from "../../../../types/Global.Types";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Table, TableColumnsType, TableProps } from "antd";
import { TTableData } from "../../../../types/admin/academicManagement";
import { useGetAllSemesterQuery } from "../../../../app/features/admin/academicManagement/academicSemesterApi";

function AcademicSemester() {
  const [params, setParams] = React.useState<TQueryParam[]>([]);
  const { data: academicSemester, isFetching } = useGetAllSemesterQuery(params);
  // console.log(error);
  // console.log(academicSemester);

  const tableData = academicSemester?.data?.map(
    ({ _id, name, startMonth, endMonth, year }) => ({
      key: _id,
      name,
      startMonth,
      endMonth,
      year,
    })
  );

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
      filters: semesterNameOptions.map(({ label }) => ({
        text: label,
        value: label,
      })),
    },
    {
      title: "Year",
      key: "year",
      dataIndex: "year",
      filters: [...prevYearOptions, ...yearOptions].map(({ label }) => ({
        text: label,
        value: label,
      })),
    },
    {
      title: "Start Month",
      key: "startMonth",
      dataIndex: "startMonth",
    },
    {
      title: "End Month",
      key: "endMonth",
      dataIndex: "endMonth",
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

  const onChange: TableProps<TTableData>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const queryParams: TQueryParam[] = [];

      filters.name?.forEach((item) =>
        queryParams.push({ key: "name", value: item })
      );

      filters.year?.forEach((item) =>
        queryParams.push({ key: "year", value: item })
      );

      setParams(queryParams);
    }
  };

  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
    />
  );
}

export default AcademicSemester;
