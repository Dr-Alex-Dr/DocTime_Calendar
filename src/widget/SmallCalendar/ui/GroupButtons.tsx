import { Button } from '../../../shared/Button';
import { IButtonConfig, IGroupButtonsParams, SelectedRangeType } from '../types';
import styles from './GroupButtons.module.scss';

export const GroupButtons: React.FC<IGroupButtonsParams> = ({
  setSelectedRangeType,
  selectedRangeType,
}) => {
  const buttons: IButtonConfig[] = [
    { label: 'День', type: 'day' },
    { label: 'Неделя', type: 'week' },
    { label: 'Месяц', type: 'month' },
  ];

  const getButtonVariant = (typeRange: SelectedRangeType) => {
    if (typeRange === selectedRangeType) {
      return 'contained';
    }
    return 'text';
  };

  return (
    <div className={styles.container}>
      {buttons.map(({ label, type }) => (
        <Button
          key={type}
          onClick={() => setSelectedRangeType(type)}
          variant={getButtonVariant(type)}
        >
          {label}
        </Button>
      ))}
    </div>
  );
};
