import { ReactNode } from 'react';

export interface IModalParams {
  open: boolean;
  handleClose?: () => void;
  title?: string;
  children?: ReactNode;
}
