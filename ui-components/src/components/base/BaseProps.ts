import { ButtonHTMLAttributes, ReactNode, Ref } from 'react';
import { Color } from '../../enums/color/Color.enum';

export type OnClickCallbackArg = {
  id: string;
  text?: string;
};

export type BaseProps = {
  id?: string;
  text?: string;
  title?: string;
  color?: Color;
  style?: string;
  behavior?: string;
  size?: string;
  modifier?: string;
};

export type ButtonBaseProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    onClick?: (onClickCallbackArg: OnClickCallbackArg) => void;
  };

export type ButtonProps = ButtonBaseProps & {
  children?: ReactNode;
  ref?: Ref<HTMLButtonElement>;
};
