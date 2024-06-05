import {IInterval} from "../../../entities/table/model";

export interface ITransformSchedule {
    id: string;
    Name: string;
    [date: string]: any | IInterval;
}