import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { useGetIntervalsQuery } from "../../entities/table/api/api";
import React, { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ru";
import { AddUserForm } from "../../entities/table";
import styles from "./calendar.module.scss";
import { SelectDataInterval } from "../../entities/table";
import { TransformData } from "./lib/transformData";
import { GenerateTable } from "../../features/ui/generateTable/generateTabel";
import { ITransformSchedule } from "./model/types";
import { EditIntervalForm } from "../../entities/table/ui/editIntervalForm/editIntervalForm";
import { useAppDispatch, useAppSelector  } from "../../shared/lib/store/redux";
import { getCabinets } from "../../entities/table/lib/cabinetsSlice";
import {setIntervals} from "../../entities/table/lib/intervalSlice";
import {IInterval} from "../../entities/table/model";
import {getIntervals} from "../../entities/table/lib/intervalSlice";


const Calendar = () => {
  const [columns, setColumns] = useState<GridColDef[]>([]);
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs());
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs().add(7, "day"));
  const [formatData, setFormatData] = useState<ITransformSchedule[] | []>([]);

  const dispatch = useAppDispatch();

  const intervals = useAppSelector((state) => state.intervals.intervals);
  const status = useAppSelector((state) => state.intervals.status);
  const error = useAppSelector((state) => state.intervals.error);

  useEffect(() => {
    const newData: ITransformSchedule[] = intervals ? TransformData(intervals, startDate, endDate) : [];
    setFormatData(newData)
    console.log('update data')
  }, [intervals])

  useEffect(() => {
    setColumns(GenerateTable(startDate, endDate));
    dispatch(getCabinets());
    console.log(intervals[0])
  }, []);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getIntervals());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  const handleDateChange = (newValue: Dayjs | null, type: 'start' | 'end'): void => {
    if (type === 'start') {
      setStartDate(newValue);
      setColumns(GenerateTable(newValue, endDate));
    } else {
      setEndDate(newValue);
      setColumns(GenerateTable(startDate, newValue));
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
                  startDate={startDate}
                  endDate={endDate}
                  handleDateChange={handleDateChange}
              />
              <SelectDataInterval
                  type="end"
                  label="Дата конца интервала"
                  startDate={startDate}
                  endDate={endDate}
                  handleDateChange={handleDateChange}
              />
              <AddUserForm/>

            </div>

            <Box sx={rootStyles}>
              <DataGrid
                  rows={formatData}
                  columns={columns}
                  disableRowSelectionOnClick
                  hideFooter
                  showCellVerticalBorder
                  showColumnVerticalBorder
              />
            </Box>

            <EditIntervalForm />
          </div>
  );
};

export {Calendar};
