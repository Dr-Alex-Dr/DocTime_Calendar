import React from 'react';
import { IAppointmentEventParams } from '../types';
import './RecordsCalendar';

export const AppointmentEvent: React.FC<IAppointmentEventParams> = (props) => {
  const { name, status, cabinetNumber } = props;

  return (
    <div className="EventContainer">
      <div style={{ fontWeight: 600, display: 'flex', justifyContent: 'space-between' }}>
        <div>{name}</div>
        <div>{cabinetNumber}</div>
      </div>
      <div style={{ marginTop: '2px ' }}>{status}</div>
    </div>
  );
};
