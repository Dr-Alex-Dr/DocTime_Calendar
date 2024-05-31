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
import { AddUserForm } from "../../entities/table";
import styles from "./calendar.module.scss";
import { IInterval } from "../../entities/table/model";
import { SelectDataInterval } from "../../entities/table";
import { TransformData } from "./lib/transformData";
import { GenerateTable } from "../../features/ui/generateTable/generateTabel";
import { ITransformSchedule } from "./model/types";

const Calendar = () => {
  const [columns, setColumns] = useState<GridColDef[]>([]);
  const [startData, setStartData] = React.useState<Dayjs | null>(dayjs());
  const [endData, setEndData] = React.useState<Dayjs | null>(dayjs().add(7, "day"));

  const { data, error, isLoading } = useGetIntervalsQuery();

  const newData: ITransformSchedule[] = data ? TransformData(data) : [];

  useEffect(() => {
    setColumns(GenerateTable(startData, endData));
  }, []);

  
  const handleDateChange = (newValue: Dayjs | null, type: 'start' | 'end'): void => {
    console.log(type)
    if (type === 'start') {
      setStartData(newValue);
      setColumns(GenerateTable(newValue, endData));
    } else {
      setEndData(newValue);
      setColumns(GenerateTable(startData, newValue));
    }  
  };

  const rootStyles = {
    "& .cell": {
      padding: "0px !important",
      height: 30,
    },
  };

  return (
    <div>
      <div className={styles.inputContainer}>
        <SelectDataInterval
          type="start"
          label="Дата начала интервала"
          startData={startData}
          endData={endData}
          handleDateChange={handleDateChange}
        />
        <SelectDataInterval
          type="end"
          label="Дата конца интервала"
          startData={startData}
          endData={endData}
          handleDateChange={handleDateChange}
        />
        <AddUserForm />
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
