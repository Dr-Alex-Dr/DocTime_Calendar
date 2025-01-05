import { purple } from '@mui/material/colors';
import { ButtonParams } from '../types';
import styles from './Button.module.scss';
import { ButtonProps, Button as MUIButton, styled } from '@mui/material';

export const Button: React.FC<ButtonParams> = (params) => {
  const ColorButton = styled(MUIButton)<ButtonProps>(({ theme, variant }) => ({
    boxShadow: 'none',
    padding: '6px 16px',
    textTransform: 'capitalize',
    fontSize: 16,
    color: variant === 'text' ? theme.palette.text.primary : '#fff',
    backgroundColor: variant === 'contained' ? '#2AC6FF' : 'transparent',
    '&:hover': {
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
    },
  }));

  return (
    <ColorButton
      variant={params.variant}
      disabled={params.disabled}
      onClick={params.onClick}
      title={params.title}
    >
      {params.children}
    </ColorButton>
  );
};
