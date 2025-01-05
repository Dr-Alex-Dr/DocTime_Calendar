import { ButtonProps } from '@mui/material/Button';

export type ButtonVariant = ButtonProps['variant'];

export interface ButtonParams {
  title?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  variant?: ButtonVariant;
  color?: React.CSSProperties['color'];
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
