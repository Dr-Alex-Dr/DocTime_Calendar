import { ru } from 'react-day-picker/locale';
import 'react-day-picker/style.css';
import './SmallCalendar.scss';
import { DayPicker } from 'react-day-picker';
import { createObserver } from '../../../shared/utils/MobxUtils';
import { useEffect, useState } from 'react';
import { endOfWeek, startOfWeek, endOfMonth, startOfMonth } from 'date-fns';
import { GroupButtons } from './GroupButtons';
import { ISmallCalendarParams } from '../types';

export const SmallCalendar: React.FC<ISmallCalendarParams> = createObserver((params) => {
  const { rangeDate, setRangeDate, selectedRangeType, setSelectedRangeType } = params;
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  useEffect(() => {
    setRangeByDate(selectedDate);
  }, [selectedRangeType]);

  const setRangeByDate = (day: Date) => {
    setSelectedDate(day);

    if (selectedRangeType === 'day') {
      setRangeDate({
        from: day,
        to: day,
      });
    }
    if (selectedRangeType === 'week') {
      setRangeDate({
        from: startOfWeek(day, { weekStartsOn: 1 }),
        to: endOfWeek(day, { weekStartsOn: 1 }),
      });
    }
    if (selectedRangeType === 'month') {
      setRangeDate({
        from: startOfMonth(day),
        to: endOfMonth(day),
      });
    }
  };

  return (
    <div className="DayPickerContainer">
      <DayPicker
        locale={ru}
        showOutsideDays
        modifiers={{
          selected: rangeDate,
          range_start: rangeDate?.from,
          range_end: rangeDate?.to,
        }}
        onDayClick={setRangeByDate}
      />
      <GroupButtons
        setSelectedRangeType={setSelectedRangeType}
        selectedRangeType={selectedRangeType}
      />
    </div>
  );
}, 'SmallCalendar');
