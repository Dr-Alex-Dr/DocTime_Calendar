export interface ICabinet {
    id: string;
    number: string;
    description: string;
}

export interface IDoctor {
    id: string;
    first_name: string;
    last_name: string;
    father_name: string;
    priority_cabinet: string;
    cabinet: ICabinet;
}

export interface IInterval {
    start: string;
    end: string;
    doctor: IDoctor;
    cabinets: ICabinet[];
}

export interface ICell {
    interval: string,
    cabinet: number
}