import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {IInterval} from "../model";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import {baseUrl} from "../../../shared/const/url";
import { ITransformSchedule } from '../../../pages/Calendar/model/types';


const initialState = {
    intervals: [] as IInterval[],
    transformSchedule: [] as ITransformSchedule[],
    intervalId: '',
    isOpenFormEdit: false,
    status: 'idle',
    error: null as string | null,
};

export const getIntervals = createAsyncThunk<IInterval[]>('intervals/getInterval', async () => {
    const response = await axios.get(`${baseUrl}/intervals`)

    return response?.data
})

const intervalSlice = createSlice({
    name: 'intervals',
    initialState: initialState,
    reducers: {
        setIntervalD: (state, action) => {
            state.intervals = state.intervals.map((interval) => {
                if (interval.id === action.payload.id) {
                    return action.payload;
                }
                return interval;
            });
        },
        setInterval: (state, action) => {
            state.intervals = state.intervals.map((interval) => {
                if (interval.id === action.payload.id) {
                    return action.payload;
                }
                return interval;
            });
        },
        setIntervalId: (state, action) => {
            state.intervalId = action.payload;
        },
        setIntervals: (state, action) => {
            if (action.payload) {
                state.intervals = action.payload.map((interval: IInterval) => {
                    const newInterval: IInterval = { ... interval }
                    newInterval.id = uuidv4();

                    return newInterval
                })
            }
        },
        addInterval: (state, action) => {
            const isExist = state.intervals.some(interval => interval.id === action.payload.id);

            if (isExist) {
                state.intervals = state.intervals.map((interval) => {
                    if (interval.id === action.payload.id) {
                        return action.payload;
                    }
                    return interval;
                });
            } else {
                state.intervals = [...state.intervals, action.payload]
            }
        },
        updateIntervals: (state, action) => {
            state.intervals = [...action.payload]
        },
        openForm: (state) => {
            state.isOpenFormEdit = true;
        },
        closeForm: (state) => {
            state.isOpenFormEdit = false;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getIntervals.pending, state => {
                state.status = 'loading';
            })
            .addCase(getIntervals.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.intervals = action.payload;
            })
            .addCase(getIntervals.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch cabinets';
            });
    }

});

export const { setIntervals, setIntervalD, addInterval, openForm, closeForm, setIntervalId, updateIntervals, setInterval } = intervalSlice.actions;
export default intervalSlice.reducer;
