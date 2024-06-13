import { Interface } from "readline";
import { IInterval, ISchdule, } from "../../../entities/table/model";
import { ITransformSchedule } from "../model/types";
import dayjs, { Dayjs } from "dayjs";
import {v4 as uuidv4} from "uuid";
import { ITransformDataProps } from "../model/types";


export const TransformData = (intervals: IInterval[], startDate: Dayjs | null, endDate: Dayjs | null, currentSchedule: ISchdule): ITransformDataProps => {
    console.log(intervals)
    
    if (!intervals) {
        return {
            transformSchedule: [],
            completionSchedule: []
        }
    }

    if (!startDate || !endDate) {
        return {
            transformSchedule: [],
            completionSchedule: []
        }
    }


    const differenceInDays: number = endDate.diff(startDate, "day");

    const formatData = (workDataObj: ITransformSchedule, interval: IInterval) => {    
        const newInterval = { ...interval, id: uuidv4() };
        
        workDataObj.id = newInterval.doctor.id;
        workDataObj.Name = newInterval.doctor.first_name + ' ' + newInterval.doctor.last_name[0] + '.' + newInterval.doctor.father_name[0];

        const date: string = newInterval.start.split('T')[0];
        workDataObj[date] = newInterval;
    };

    const generateBlank = (interval: IInterval) => {
        const datesObj: any = {}
    
        for (let numberDay = 0; numberDay < differenceInDays + 1; numberDay++) {
            const nextDate = startDate.add(numberDay, "day").format("YYYY-MM-DD");
            const newData = {
                ...interval,
                cabinet: null,
                start: `${nextDate}T00:00:00`,
                end: `${nextDate}T00:00:00`,
                schedule: currentSchedule,
                id: uuidv4(),
            };
            datesObj[nextDate] = newData;
           
        }

       
        return datesObj
    }

    const map = new Map();

    for (let interval of intervals) {
        if (map.has(interval.doctor.id)) {
            const workDataObj = {...map.get(interval.doctor.id)};

            formatData(workDataObj, interval);
            map.set(interval.doctor.id, workDataObj);
        } else {
            const workDataObj: any = {...generateBlank(interval)};
            

            formatData(workDataObj, interval);
            map.set(interval.doctor.id, workDataObj);
        }
    }


    function isValidDate(dateString: string) {
        return !isNaN(Date.parse(dateString));
    }

    const resultArray: IInterval[] = []
    
    for (let interval of Array.from(map.values())) {
        for (let key in interval) {
            if (interval.hasOwnProperty(key) && isValidDate(key)) {
                resultArray.push(interval[key])
            }
        }
    }


    return {
        transformSchedule: Array.from(map.values()),
        completionSchedule: resultArray
    }
};
