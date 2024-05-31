import dayjs, {Dayjs} from "dayjs";
import { IColumn } from "../../../entities/table/model/table";
import { Cell } from "../../../entities/table";
import { GridRenderCellParams } from "@mui/x-data-grid";


export const GenerateTable = (startData: Dayjs | null, endData: Dayjs | null): IColumn[] | [] => {  
    if (!startData || !endData) {
      return [];
    }
  
    dayjs.locale("ru");
    const differenceInDays: number = endData.diff(startData, "day");
  
    const newColumns: IColumn[] = [
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