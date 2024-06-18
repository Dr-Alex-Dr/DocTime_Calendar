import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {ICabinet, IInterval} from "../model";
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
    const response = await axios.get(`${baseUrl}/intervals/`)

    return response?.data
})

export const addIntervals = createAsyncThunk<IInterval, any>('intervals/addInterval', async ({newInterval, cabinet}) => {
    const response = await axios.post(`${baseUrl}/intervals/`, {
        start: newInterval.start,
        end: newInterval.end,
        doctor_id: newInterval.doctor.id,
        schedule_id: newInterval.schedule.id,
        cabinet_id: cabinet?.id,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
  
      return response?.data;
});

export const updateInterval = createAsyncThunk<any, any>('intervals/updateInterval', async ({newInterval, cabinet}) => {
    console.log(newInterval, cabinet)
    
    const response = await axios.put(`${baseUrl}/intervals/${newInterval.id}`, {
        start: newInterval.start,
        end: newInterval.end,
        doctor_id: newInterval.doctor.id,
        schedule_id: newInterval.schedule.id,
        cabinet_id: cabinet?.id,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
  
      return response?.data;
})

export const deleteInterval = createAsyncThunk<any, any>('intervals/deleteInterval', async (newInterval) => {
    await axios.delete(`${baseUrl}/intervals/${newInterval.id}`)
  
    return newInterval.id;  
})

const intervalSlice = createSlice({
    name: 'intervals',
    initialState: initialState,
    reducers: {
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
            })

            .addCase(addIntervals.pending, state => {
                state.status = 'loading';
            })
            .addCase(addIntervals.fulfilled, (state, action) => {
                state.status = 'succeeded';

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
            })
            .addCase(addIntervals.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch cabinets';
            })

            .addCase(deleteInterval.pending, state => {
                state.status = 'loading';
            })
            .addCase(deleteInterval.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const filterArray = state.intervals.filter(interval => interval.id !== action.payload);
                state.intervals = [...filterArray];
                
            })
            .addCase(deleteInterval.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch cabinets';
            })

            .addCase(updateInterval.pending, state => {
                state.status = 'loading';
            })
            .addCase(updateInterval.fulfilled, (state, action) => {
                state.status = 'succeeded';
                
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
            })
            .addCase(updateInterval.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch cabinets';
            })
    }

});

export const { addInterval, openForm, closeForm, setIntervalId, updateIntervals, setInterval } = intervalSlice.actions;
export default intervalSlice.reducer;
