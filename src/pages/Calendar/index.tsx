import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
} from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { Cell } from "../../entities/table";
import { useGetIntervalsQuery } from "../../entities/table/api/api";
import React, { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ru";


const transformData = (data: any) => {
  if (!data) {
    return [];
  }

  const formatData = (workDataObj: any, item: any) => {
    workDataObj.id = item.doctor_id;
    workDataObj.Name = item.doctor;

    const start = new Date(item.start * 1000);
    const end = new Date(item.end * 1000);

    const formatDate = (date: Date): string => {
      return `${("0" + date.getHours()).slice(-2)}:${(
        "0" + date.getMinutes()
      ).slice(-2)}`;
    };

    const workData = start.toISOString().slice(0, 10);
    const workTimeString = `${formatDate(start)}-${formatDate(end)} ${
      item.cabinet
    }`;

    workDataObj[workData] = workTimeString;
  };

  const map = new Map();

  for (let item of data) {
    if (map.has(item.doctor_id)) {
      const workDataObj = map.get(item.doctor_id);

      formatData(workDataObj, item);
      map.set(item.doctor_id, workDataObj);
    } else {
      const workDataObj: any = {};

      formatData(workDataObj, item);
      map.set(item.doctor_id, workDataObj);
    }
  }

  return Array.from(map.values());
};

const generateTable = (startData: Dayjs, endData: Dayjs) => {
  dayjs.locale("ru");
  const differenceInDays: number = endData.diff(startData, "day");

  const newColumns: GridColDef[] = [
    { field: "Name", headerName: "ФИО", width: 160 },
  ];

  for (let numberDay = 0; numberDay < differenceInDays; numberDay++) {
    const nextDate = startData.add(numberDay, "day");

    const column = {
      field: nextDate.format("YYYY-MM-DD"),
      headerName: nextDate.format("dd D"),
      width: (window.screen.width - 160) / 8,
      cellClassName: "cell",
      renderCell: (params: GridRenderCellParams<any, string>) => (
        <Cell params={params.value || ""}></Cell>
      ),
    };
    newColumns.push(column);
  }

  return newColumns;
};

const Calendar = () => {
  const [columns, setColumns] = useState<GridColDef[]>([]);

  const { data } = useGetIntervalsQuery();
  const newData = transformData(data);

  useEffect(() => {
    setColumns(generateTable(dayjs("2024-04-28"), dayjs("2024-05-06")));
  }, []);

  const rootStyles = {
    "& .cell": {
      padding: "0px !important",
      height: 30,
    },
  };

  return (
    <Box sx={rootStyles}>
      <DataGrid
        rows={newData}
        columns={columns}
        disableRowSelectionOnClick
        hideFooter
        showCellVerticalBorder
        showColumnVerticalBorder
      />
    </Box>
  );
};

export { Calendar };
