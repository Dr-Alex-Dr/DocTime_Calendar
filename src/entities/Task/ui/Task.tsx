import React from 'react';
import { createObserver } from '../../../shared/utils';
import styles from './Task.module.scss';
import type { Task as TaskType } from '../../../pages/Tasks/model/TasksStore';

export const Task: React.FC<TaskType> = createObserver((params) => {
  const { patientName, doctorName, isNew } = params;

  return (
    <div className={styles.container}>
      <div className={styles.taskContainer}>
        <h2 className={styles.title}>{patientName}</h2>
        {isNew ? <span className={styles.status}>Новая</span> : null}
      </div>
      <div className={styles.doctorName}>
        <span>ФИО врача: </span>
        {doctorName}
      </div>
    </div>
  );
}, 'Task');
