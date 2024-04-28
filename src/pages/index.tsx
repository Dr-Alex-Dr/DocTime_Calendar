import {DataGrid, GridColDef, GridRenderCellParams, GridRowsProp} from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { Cell } from '../components/cell/Cell';


const rows: GridRowsProp = [
    { "id": 1, "Name": "Иванов И.В", "Monday": "14:30-17:30 204", "Tuesday": "09:00-12:00 101", "Wednesday": "13:00-16:00 305", "Thursday": "10:30-13:30 402", "Friday": "08:00-11:00 107", "Saturday": "15:00-18:00 203", "Sunday": "11:30-14:30 301" },
    {
        "id": 2,
        "Name": "Петров П.П",
        "Monday": "09:00-12:00 203",
        "Tuesday": "13:30-16:30 107",
        "Wednesday": "11:00-14:00 305",
        "Thursday": "08:30-11:30 402",
        "Friday": "14:00-17:00 101",
        "Saturday": "10:30-13:30 204",
        "Sunday": "16:00-19:00 301"
    },
    {
        "id": 3,
        "Name": "Сидоров С.С",
        "Monday": "13:00-16:00 101",
        "Tuesday": "08:00-11:00 301",
        "Wednesday": "14:30-17:30 204",
        "Thursday": "15:00-18:00 107",
        "Friday": "10:30-13:30 305",
        "Saturday": "11:30-14:30 402",
        "Sunday": "09:00-12:00 203"
    },
    {
        "id": 4,
        "Name": "Кузнецов К.К",
        "Monday": "08:30-11:30 107",
        "Tuesday": "14:00-17:00 402",
        "Wednesday": "09:30-12:30 203",
        "Thursday": "13:30-16:30 301",
        "Friday": "11:00-14:00 204",
        "Saturday": "08:00-11:00 305",
        "Sunday": "15:00-18:00 101"
    },
    {
        "id": 5,
        "Name": "Иванова А.И",
        "Monday": "10:00-13:00 305",
        "Tuesday": "15:30-18:30 204",
        "Wednesday": "08:30-11:30 101",
        "Thursday": "09:00-12:00 203",
        "Friday": "13:00-16:00 402",
        "Saturday": "14:30-17:30 107",
        "Sunday": "11:30-14:30 301"
    },
    {
        "id": 6,
        "Name": "Петрова Е.П",
        "Monday": "14:00-17:00 402",
        "Tuesday": "09:30-12:30 107",
        "Wednesday": "08:00-11:00 301",
        "Thursday": "14:30-17:30 203",
        "Friday": "10:00-13:00 204",
        "Saturday": "13:30-16:30 305",
        "Sunday": "08:30-11:30 101"
    },
    {
        "id": 7,
        "Name": "Сидорова М.С",
        "Monday": "12:30-15:30 107",
        "Tuesday": "10:00-13:00 402",
        "Wednesday": "15:30-18:30 101",
        "Thursday": "08:00-11:00 204",
        "Friday": "09:30-12:30 305",
        "Saturday": "14:00-17:00 203",
        "Sunday": "10:30-13:30 301"
    },
    {
        "id": 8,
        "Name": "Кузнецова О.К",
        "Monday": "11:30-14:30 204",
        "Tuesday": "14:30-17:30 305",
        "Wednesday": "10:00-13:00 107",
        "Thursday": "09:30-12:30 301",
        "Friday": "12:30-15:30 203",
        "Saturday": "08:00-11:00 402",
        "Sunday": "13:00-16:00 101"
    },
    {
        "id": 9,
        "Name": "Иванов И.И",
        "Monday": "08:00-11:00 101",
        "Tuesday": "12:30-15:30 305",
        "Wednesday": "10:30-13:30 107",
        "Thursday": "13:00-16:00 203",
        "Friday": "15:30-18:30 301",
        "Saturday": "09:00-12:00 204",
        "Sunday": "14:30-17:30 402"
    },
    {
        "id": 10,
        "Name": "Петров П.П",
        "Monday": "13:30-16:30 107",
        "Tuesday": "11:30-14:30 305",
        "Wednesday": "08:00-11:00 402",
        "Thursday": "09:00-12:00 203",
        "Friday": "14:00-17:00 204",
        "Saturday": "10:30-13:30 301",
        "Sunday": "15:30-18:30 101"
    },
    {
        "id": 11,
        "Name": "Сидоров С.С",
        "Monday": <div>df</div>,
        "Tuesday": "14:30-17:30 101",
        "Wednesday": "08:30-11:30 305",
        "Thursday": "12:00-15:00 107",
        "Friday": "09:30-12:30 203",
        "Saturday": "13:00-16:00 402",
        "Sunday": "English"
    },
    {
        "id": 12,
        "Name": 'Долобов А.Д',
        "slots": ["11:00-14:00 204", "14:30-17:30 101"]
    }
];

const columns: GridColDef[] = [
    { field: 'Name', headerName: 'ФИО', width: 150 },
    { field: 'Monday', headerName: 'пн 22', width: 150, cellClassName: 'cell', renderCell: (params: GridRenderCellParams<any, any>) => (<Cell params={params}></Cell>)},
    { field: 'Tuesday', headerName: 'вт 23', width: 150 },
    { field: 'Wednesday', headerName: 'ср 24', width: 150 },
    { field: 'Thursday', headerName: 'чт 25', width: 150 },
    { field: 'Friday', headerName: 'пт 26', width: 150 },
    { field: 'Saturday ', headerName: 'сб 27', width: 150 },
    { field: 'Sunday', headerName: 'вс 28', width: 150 },
];

const rootStyles = {
    '& .cell': {
        padding: '0px !important',
        height: 30
    },
};

const Calendar = () => {
  return (
      <Box sx={rootStyles}>
        <DataGrid
            rows={rows}
            columns={columns}
            disableRowSelectionOnClick
            hideFooter
            showCellVerticalBorder
            showColumnVerticalBorder
        />
      </Box>
  );
}

export { Calendar };
