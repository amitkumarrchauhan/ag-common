'use client';

import clsx from 'clsx';
import { ReactNode, Ref } from 'react';
import { Color } from '../../enums/color/Color.enum';
import { ButtonBaseProps, OnClickCallbackArg } from '../base/BaseProps';

export type ButtonProps = ButtonBaseProps & {
  children?: ReactNode;
  ref?: Ref<HTMLButtonElement>;
};

const getClassNames = (btnProps: ButtonProps) => {
  const { color = Color.NEUTRAL } = btnProps;
  const cls = clsx(color);

  return cls;
};

const Button: React.FC = (props: ButtonProps) => {
  const { id, text, ref, children, onClick, ...restProps } = props;
  console.log('rest => ', restProps);

  const onButtonClick = () => {
    if (onClick) onClick({ id, text } as OnClickCallbackArg);
  };

  return (
    <button
      ref={ref}
      id={id}
      className={clsx('ag-btn', getClassNames(props))}
      onClick={onButtonClick}
    >
      {children}
      {!children && text}
    </button>
  );
};

export { Button };
