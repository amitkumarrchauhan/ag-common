'use client';

import clsx from 'clsx';
import { Color } from '../../enums/color/Color.enum';
import { ButtonProps, OnClickCallbackArg } from '../base/BaseProps';

const getClassNames = (btnProps: ButtonProps) => {
  const { color = Color.NEUTRAL } = btnProps;
  const cls = clsx(color);

  return cls;
};

const Button: React.FC<ButtonProps> = (props) => {
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
      {children || text}
    </button>
  );
};

export { Button };
