'use client';

import { useEffect } from 'react';

export const Demo = () => {
  useEffect(() => {
    console.log("This is demo component's effect :)");
  }, []);

  console.log('Demo component rendered');

  return <div className="ag-btn bg-red-300">Demo Component</div>;
};
