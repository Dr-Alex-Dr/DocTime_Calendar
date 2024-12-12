import React from 'react';

export interface IAppointmentEventParams {
  name: string;
  status: string;
  cabinetNumber: string;
}

export type EventItem = {
  start?: Date;
  end?: Date;
  data?: { appointment?: IAppointmentEventParams };
  resourceId?: number;
};
