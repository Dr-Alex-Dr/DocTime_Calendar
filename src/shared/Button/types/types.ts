import { ButtonProps } from '@mui/material/Button';

export type ButtonVariant = ButtonProps['variant'];

export interface ButtonParams extends ButtonProps {
  title?: string;
  children?: React.ReactNode;
  variant?: ButtonVariant;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
