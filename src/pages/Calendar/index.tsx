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
    workDataObj.id = item.doctor.id;
    workDataObj.Name = item.doctor.first_name;

    const start: string = item.start.split("T")[1].split(":");
    const end: string = item.end.split("T")[1].split(":");

    const workData = item.start.split('T')[0];

    const workTimeString: string = `${start[0]}:${start[1]}-${end[0]}:${end[1]} ${item.cabinet.number}`;


    workDataObj[workData] = workTimeString;
  };

  const map = new Map();

  for (let item of data) {
    if (map.has(item.doctor.id)) {
      const workDataObj = map.get(item.doctor.id);

      formatData(workDataObj, item);
      map.set(item.doctor.id, workDataObj);
    } else {
      const workDataObj: any = {};

      formatData(workDataObj, item);
      map.set(item.doctor.id, workDataObj);
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
  console.log(data)
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
