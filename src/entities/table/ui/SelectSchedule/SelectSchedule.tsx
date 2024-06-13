import React, { useEffect, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useAppDispatch, useAppSelector } from '../../../../shared/lib/store/redux';
import { getSchedules, setSchedule } from '../../lib/schedulesSlice';
import { ISchdule } from '../../model';

const SelectSchedule = () => {
    const dispatch = useAppDispatch();

    const schedules = useAppSelector((state) => state.schedules.items);
    const schedule = useAppSelector((state) => state.schedules.currentSchedule);

    const handleChange = (event: SelectChangeEvent) => {
        const selectedSchedule: ISchdule | undefined = schedules.find((schedule) => schedule.id === event.target.value);
        if (selectedSchedule) {
            dispatch(setSchedule(selectedSchedule));
        }
    };

    useEffect(() => {
        dispatch(getSchedules())
    }, [dispatch])

    useEffect(() => {
        dispatch(setSchedule(schedules[0]))
    }, [schedules])


    return (
        <div>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={schedule?.id || ''}
                label="Выберите расписание"
                onChange={handleChange}             
            >
                {schedules && schedules.map((item: ISchdule) => (
                     <MenuItem value={item.id} key={item.id}>{item.name}</MenuItem>
                ))}
            </Select>
        </div>
    )
}

export { SelectSchedule }