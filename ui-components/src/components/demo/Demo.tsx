'use client';

// import { Logger } from '@ag-common/core-utils';
import clsx from 'clsx';
import React, { useEffect } from 'react';
import type { DemoProps } from './Demo.style';

const logger = console;

export const Demo: React.FC = ({ className }: DemoProps) => {
  useEffect(() => {
    logger.log("This is demo component's effect :)");
  }, []);

  logger.log('Demo component rendered');
  //"ag-btn bg-red-300"
  // const className = demo({ ...props });

  return (
    <div className={clsx(className, 'ag-btn ag-btn-primar bg-amber-400')}>
      Demo Component
    </div>
  );
};
