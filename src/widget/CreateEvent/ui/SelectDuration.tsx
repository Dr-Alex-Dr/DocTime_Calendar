import { Button } from '../../../shared/Button';

export interface ISelectDurationParams {
  selectedDuration: number | null;
  setSelectedDuration: (duration: number | null) => void;
}

export const SelectDuration: React.FC<ISelectDurationParams> = (params) => {
  const { selectedDuration, setSelectedDuration } = params;

  const durations = [5, 10, 15, 20, 25, 30, 45, 60];

  const handleClick = (duration: number) => {
    setSelectedDuration(duration);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {durations.map((duration) => (
        <Button
          key={duration}
          variant={selectedDuration === duration ? 'contained' : 'outlined'}
          onClick={() => handleClick(duration)}
        >
          {duration}`
        </Button>
      ))}
    </div>
  );
};
