import { ReactNode, Ref } from 'react';
import { BaseProps, OnClickCallbackArg } from '../base/BaseProps';
import { Behavior, Color, Modifier, Size, StyleTo } from './Button.enum';

export type ButtonBaseProps =
  BaseProps & /* ButtonHTMLAttributes<HTMLButtonElement> & */ {
    // daisyui attributes
    color?: Color;
    styleTo?: StyleTo;
    behavior?: Behavior;
    size?: Size;
    modifier?: Modifier;
    //
    onClick?: (onClickCallbackArg: OnClickCallbackArg) => void;
  };

export type ButtonProps = ButtonBaseProps & {
  children?: ReactNode;
  ref?: Ref<HTMLButtonElement>;
};
