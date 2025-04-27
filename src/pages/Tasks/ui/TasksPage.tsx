import { createObserver } from '../../../shared/utils/MobxUtils';
import { Breadcrumbs } from '../../../entities/Breadcrumbs';
import styles from './TasksPage.module.scss';

export const TasksPage = createObserver(() => {
  return (
    <div className={styles.tasksContainer}>
      <Breadcrumbs title="Задачи" />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2 className={styles.tasksTitle}>Список задач</h2>
      </div>
    </div>
  );
}, 'TasksPage');
