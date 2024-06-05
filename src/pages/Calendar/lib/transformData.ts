import { IInterval } from "../../../entities/table/model";
import { ITransformSchedule } from "../model/types";
import dayjs, { Dayjs } from "dayjs";
import {GridRenderCellParams} from "@mui/x-data-grid";
import {Cell} from "../../../entities/table";
import {v4 as uuidv4} from "uuid";

export const TransformData = (intervals: IInterval[], startDate: Dayjs | null, endDate: Dayjs | null): ITransformSchedule[] => {
    if (!intervals) {
        return [];
    }

    if (!startDate || !endDate) {
       return []
    }

    const differenceInDays: number = endDate.diff(startDate, "day");

    const formatData = (workDataObj: ITransformSchedule, item: IInterval) => {

        workDataObj.id = item.doctor.id;
        workDataObj.Name = item.doctor.first_name + ' ' + item.doctor.last_name[0] + '.' + item.doctor.father_name[0];

        const date: string = item.start.split('T')[0];

        workDataObj[date] = item;

    };

    const map = new Map();


    const generateBlank = (interval: IInterval) => {
        const datesObj: any = {}
        let id = uuidv4()
        const blankInterval: any = { ...interval }
        blankInterval.end = '';
        blankInterval.start = '';
        blankInterval.cabinet = null;
        blankInterval.id = id;

        for (let numberDay = 0; numberDay < differenceInDays + 1; numberDay++) {
            id = uuidv4();
            const nextDate = startDate.add(numberDay, "day");
            const date = nextDate.format("YYYY-MM-DD");
            blankInterval.end = `${interval?.end.split('T')[0]}T00:00:00`;
            blankInterval.start = `${interval?.start.split('T')[0]}T00:00:00`;

            datesObj[date] = blankInterval;
        }

        return datesObj
    }

    for (let interval of intervals) {

        if (map.has(interval.doctor.id)) {
            const workDataObj = map.get(interval.doctor.id);

            formatData(workDataObj, interval);
            map.set(interval.doctor.id, workDataObj);
        } else {
            const workDataObj: any = {...generateBlank(interval)};

            formatData(workDataObj, interval);
            map.set(interval.doctor.id, workDataObj);
        }
    }


    return Array.from(map.values());
};