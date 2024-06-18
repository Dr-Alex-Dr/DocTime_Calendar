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

    const getCabinet = (): string => {
        return params?.cabinet?.number || '-';
    }

    const handleOpenForm = () => {
        dispatch(setIntervalId(params?.id ?? ''));
        dispatch(openForm());
    };

    const isExist = () => {
        if (params) {
            return params?.start.split('T')[1] !== '00:00:00'
        }
        return false
    }

    return (
        <div
            className={classNames(styles.container, {[styles.active]: isExist()})}
            onClick={handleOpenForm}
        >
            <p>{getInterval(params)}</p>
            <p>{getCabinet()}</p>
        </div>
    )
}

export {Cell}