import { IInterval } from "../../../entities/table/model";
import { ITransformSchedule } from "../model/types";

export const TransformData = (data: IInterval[]): ITransformSchedule[] => {
    if (!data) {
        return [];
    }

    const formatData = (workDataObj: any, item: any) => {
        workDataObj.id = item.doctor.id;
        workDataObj.Name = item.doctor.first_name + ' ' + item.doctor.last_name[0] + '.' + item.doctor.father_name[0];

        const start: string = item.start.split("T")[1].split(":");
        const end: string = item.end.split("T")[1].split(":");

        const workData = item.start.split('T')[0];

        const workTimeString: string = `${start[0]}:${start[1]}-${end[0]}:${end[1]} ${item.cabinet ? item.cabinet.number : '-'}`;


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