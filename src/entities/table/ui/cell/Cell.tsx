import styles from './Cell.module.scss';
import {useEffect, useState} from 'react';
import classNames from 'classnames';
import { EditIntervalForm } from '../editIntervalForm/editIntervalForm';
import { useDispatch } from 'react-redux';
import {IInterval} from "../../model";
import {useAppSelector, useAppDispatch} from '../../../../shared/lib/store/redux';
import {openForm, addInterval, setIntervalId} from "../../lib/intervalSlice";
import {getInterval} from "../../lib/getInterval";

const Cell = ({params}: IInterval | any): React.ReactElement => {
    const dispatch = useAppDispatch();
    const [interval, setInterval] = useState<IInterval>()

    // const intervals = useAppSelector((state) => state.intervals.intervals);
    // console.log(intervals)
    // const interval: IInterval | undefined = intervals.find((interval) => interval?.id === params?.id);

    useEffect(() => {
        dispatch(addInterval(params));
    }, [dispatch]);

    useEffect(() => {
        setInterval(params)
    }, [params]);



    const getCabinet = (): string => {
        return params?.cabinet?.number || '-';
    }

    const handleOpenForm = () => {
        dispatch(addInterval(params));
        dispatch(setIntervalId(params?.id ?? ''));
        dispatch(openForm());
    };

    return (
        <div
            className={classNames(styles.container, {[styles.active]: params})}
            onClick={handleOpenForm}
        >
            <p>{getInterval(params)}</p>
            <p>{getCabinet()}</p>
            {/* <p>{interval?.id || ''}</p> */}
        </div>
    )
}

export {Cell}