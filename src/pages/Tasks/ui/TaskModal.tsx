import React from 'react';
import { Modal } from '../../../shared/Modal/ui/Modal';
import type { Task } from '../model/TasksStore';
import { Button } from '../../../shared/Button';
import styles from './TaskModal.module.scss';

interface TaskModalProps {
  open: boolean;
  onClose: () => void;
  task: Task | null;
  onDone?: (taskId: string) => void;
}

export const TaskModal: React.FC<TaskModalProps> = ({ open, onClose, task, onDone }) => {
  if (!task) return null;

  const handleDone = () => {
    onDone?.(task.id);
    onClose();
  };

  return (
    <Modal open={open} handleClose={onClose} title="Напоминание о посещении" height={270}>
      <div className={styles.content}>
        <div>
          <span className={styles.label}>Пациент:</span> {task.patientName}
        </div>
        <div>
          <span className={styles.label}>Телефон:</span> {task.phone}
        </div>
        <div>
          <span className={styles.label}>Врач:</span> {task.doctorName}
        </div>
        <div>
          <span className={styles.label}>Дата:</span> {task.date}
        </div>
        <div>
          <span className={styles.label}>Время:</span> {task.time}
        </div>
        {task.notes && (
          <div>
            <span className={styles.label}>Заметки:</span> {task.notes}
          </div>
        )}
        <Button className={styles.doneButton} fullWidth onClick={handleDone} variant="contained">
          Выполнено
        </Button>
      </div>
    </Modal>
  );
};
