import { createObserver } from '../../../shared/utils/MobxUtils';
import { Breadcrumbs } from '../../../entities/Breadcrumbs';
import styles from './TasksPage.module.scss';
import { Task } from '../../../entities/Task';
import { TasksStore, Task as TaskType } from '../model/TasksStore';
import { useMemo, useState } from 'react';
import { TaskModal } from './TaskModal';
import Skeleton from '@mui/material/Skeleton';

export const skeletonCount = 2;

export const TasksPage = createObserver(() => {
  const store = useMemo(() => new TasksStore(), []);
  const [selectedTask, setSelectedTask] = useState<TaskType | null>(null);

  const handleOpen = (task: TaskType) => {
    setSelectedTask(task);
    store.openModal();
  };

  const handleClose = () => {
    setSelectedTask(null);
    store.closeModal();
  };

  const handleDone = (taskId: string) => {
    store.removeTask(taskId);
  };

  return (
    <div className={styles.tasksContainer}>
      <Breadcrumbs title="Задачи" />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2 className={styles.tasksTitle}>Список задач</h2>
      </div>
      <div className={styles.container}>
        {store.isLoading
          ? Array.from({ length: skeletonCount }).map((value, index) => (
              <Skeleton
                key={index}
                variant="rectangular"
                height={90}
                width="100%"
                className={styles.skeleton}
              />
            ))
          : store.getTasks.map((task: TaskType) => (
              <div key={task.id} onClick={() => handleOpen(task)}>
                <Task {...task} />
              </div>
            ))}
      </div>
      <TaskModal
        open={store.isModalOpen}
        onClose={handleClose}
        task={selectedTask}
        onDone={handleDone}
      />
    </div>
  );
}, 'TasksPage');
