import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { Cell } from "../../entities/table";
import { useGetIntervalsQuery } from "../../entities/table/api/api";
import React, { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ru";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import styles from "./calendar.module.scss";

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

const generateTable = (startData: Dayjs | null, endData: Dayjs | null) => {
    
  if (!startData || !endData) {
    return [];
  }

  console.log(startData, endData)

  dayjs.locale("ru");
  const differenceInDays: number = endData.diff(startData, "day");

  const newColumns: GridColDef[] = [
    { field: "Name", headerName: "ФИО", width: 160 },
  ];

  for (let numberDay = 0; numberDay < differenceInDays + 1; numberDay++) {
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
  const [startData, setStartData] = React.useState<Dayjs | null>(dayjs());
  const [endData, setEndData] = React.useState<Dayjs | null>(
    dayjs().add(7, "day")
  );

  const { data } = useGetIntervalsQuery();
  const newData = transformData(data);

  useEffect(() => {
    setColumns(generateTable(startData, endData));
  }, []);

  const rootStyles = {
    "& .cell": {
      padding: "0px !important",
      height: 30,
    },
  };

  return (
    <div>
      <div className={styles.inputContainer}>
        <div className={styles.inputData}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Дата начала интервала"
              value={startData}
              onChange={(newValue) => {
                setStartData(newValue);
                setColumns(generateTable(newValue, endData));
              }}
            />
          </LocalizationProvider>
        </div>
        <div className={styles.inputData}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Дата конца интервала"
              value={endData}
              onChange={(newValue) => {
                setEndData(newValue);
                setColumns(generateTable(startData, newValue));
              }}
            />
          </LocalizationProvider>
        </div>
      </div>

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
    </div>
  );
};

export { Calendar };
