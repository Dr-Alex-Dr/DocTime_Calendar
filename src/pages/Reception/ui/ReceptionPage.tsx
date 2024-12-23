import { RecordsCalendar } from '../../../widget/RecordsCalendar';
import styles from './ReceptionPage.module.scss';

export const ReceptionPage = () => {
  return (
    <div className={styles.ReceptionContainer}>
      <RecordsCalendar />;
    </div>
  );
};
