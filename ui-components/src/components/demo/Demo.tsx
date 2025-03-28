'use client';

import clsx from 'clsx';
import { useEffect } from 'react';
import type { DemoProps } from './Demo.style';

export const Demo = ({ className }: DemoProps) => {
  useEffect(() => {
    console.log("This is demo component's effect :)");
  }, []);

  console.log('Demo component rendered');
  //"ag-btn bg-red-300"
  // const className = demo({ ...props });

  return (
    <div className={clsx(className, 'ag-btn ag-btn-primary bg-green-300')}>
      Demo Component
    </div>
  );
};
