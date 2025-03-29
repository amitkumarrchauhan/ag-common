'use client';

import { Logger } from '@ag-common/core-utils';
import clsx from 'clsx';
import React from 'react';
import { OnClickCallbackArg } from '../base/BaseProps';
import { Color } from './Button.enum';
import { ButtonProps } from './Button.type';

const logger = Logger.getLogger('Button');

const Button: React.FC<ButtonProps> = (props) => {
  const { id, text, ref, children, onClick, ...restProps } = props;
  const {
    color = Color.NEUTRAL,
    styleTo,
    behavior,
    size,
    modifier,
    className,
    ...otherProps
  } = restProps;

  logger.log('Button.render');

  const onButtonClick = () => {
    if (onClick) onClick({ id, text } as OnClickCallbackArg);
  };

  return (
    <button
      ref={ref}
      id={id}
      data-testid="button"
      className={clsx(
        'ag-btn',
        color,
        styleTo,
        behavior,
        size,
        modifier,
        className
      )}
      onClick={onButtonClick}
      {...otherProps}
    >
      {children || text}
    </button>
  );
};

export { Button };
