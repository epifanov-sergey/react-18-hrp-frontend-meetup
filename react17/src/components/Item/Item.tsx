import React from 'react';
import {useLocation } from 'react-router-dom';

export const Item: React.FC = () => {
  const { pathname } = useLocation();

  return <div>{pathname}</div>
};