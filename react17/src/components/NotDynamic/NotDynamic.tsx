import React, { useEffect, useState } from 'react';

export const NotDynamic = () => {
  const [state, setState] = useState<number>(1);
  useEffect(() => {
    setState((prevState => {
      console.log('prevState', prevState);
      return prevState + 1;
    }));
  }, []);

  return (
    <div>
      {state}
    </div>
  );
};