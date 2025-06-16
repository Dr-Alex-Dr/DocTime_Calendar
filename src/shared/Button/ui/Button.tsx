import { ButtonParams } from '../types';
import { Button as MUIButton } from '@mui/material';
import styles from './Button.module.scss';
import cn from 'classnames';

export const Button: React.FC<ButtonParams> = (params) => {
  const buttonContainer = cn(styles.colorButton, {
    [styles.contained]: params.variant === 'contained',
    [styles.text]: params.variant === 'text',
  });

  return (
    <MUIButton
      style={params.styles}
      className={buttonContainer}
      variant={params.variant}
      disabled={params.disabled}
      onClick={params.onClick}
      title={params.title}
    >
      {params.children}
    </MUIButton>
  );
};
