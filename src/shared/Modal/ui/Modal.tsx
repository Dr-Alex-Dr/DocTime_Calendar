import { Dialog } from '@mui/material';
import { IModalParams } from '../types/types';
import { createObserver } from '../../utils';
import CloseIcon from '@mui/icons-material/Close';
import styles from './Modal.module.scss';

export const Modal: React.FC<IModalParams> = createObserver(
  ({ open, handleClose, title, children }) => {
    return (
      <div>
        <Dialog open={open} onClose={handleClose}>
          <div className={styles.container}>
            <div className={styles.header}>
              {title}
              <CloseIcon className={styles.closeIcon} onClick={handleClose} />
            </div>
            {children}
          </div>
        </Dialog>
      </div>
    );
  },
  'CreateEvent'
);
