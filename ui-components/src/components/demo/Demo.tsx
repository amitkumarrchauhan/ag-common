'use client'

import { useEffect } from "react";

export const Demo = () => {
  useEffect(() => {
    console.log('This is demo component\'s effect :)');
  }, []);

  console.log('Demo component rendered');

  return (
    <div>Demo Component</div>
  );
}
