import { useState } from 'react';
import { RecordsCalendar } from '../entities/RecordsCalendar';
import './styles/index.scss';
import 'moment/locale/ru';
import moment from 'moment';
import { Views } from 'react-big-calendar';

export const App = () => {
  const [count, setCount] = useState(1);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentView, setCurrentView] = useState('week');

  const onClick = () => {
    setCount(count + 1);

    if (count === 1) {
      goToNextWeek();
    }
    if (count === 2) {
      goToPreviousWeek();
    }
    if (count === 3) {
      setCurrentView('day');
    }
    if (count === 4) {
      setCurrentView('month');
    }
    if (count === 5) {
      setCurrentView('week');
    }
  };

  // Функция переключения на следующую неделю
  const goToNextWeek = () => {
    const nextWeek = moment(currentDate).add(1, 'week').toDate();
    setCurrentDate(nextWeek);
  };

  // Функция переключения на предыдущую неделю
  const goToPreviousWeek = () => {
    const previousWeek = moment(currentDate).subtract(1, 'week').toDate();
    setCurrentDate(previousWeek);
  };

  return (
    <div>
      <div>
        <img style={{ width: '100%' }} src="../images/Header.svg" />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ marginTop: 16 }}>
          <img src="../images/menu.svg" />
        </div>

        <div style={{ width: '100%' }}>
          <div
            style={{
              fontSize: 16,
              padding: 16,
              borderRadius: '10px 0 0 10px',
              border: `1px solid #E0E0E0`,
              marginTop: 16,
              marginLeft: 16,
              paddingLeft: 16,
            }}
          >
            Главная
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ fontSize: 34, paddingLeft: 16, marginTop: 16, marginBottom: 16 }}>
              Расписание на месяц
            </div>
            <div>
              <img style={{ marginRight: 16 }} src="../images/filter.svg" />
              <img style={{ marginRight: 16 }} src="../images/reload.svg" />
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginRight: 10,
            }}
          >
            <div style={{ marginLeft: 16, marginRight: 16 }} onClick={onClick}>
              <img style={{ width: 323, height: 365 }} src={`../images/c-${count}.svg`} />
            </div>
            <div style={{ width: '100%' }}>
              <RecordsCalendar
                currentDate={currentDate}
                setCurrentDate={setCurrentDate}
                currentView={currentView}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
