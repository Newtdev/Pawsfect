import React from 'react';
import type {JSX, ReactNode} from 'react';

interface IFProps {
  condition: unknown;
  children: ReactNode;
}

const If = ({condition, children}: IFProps): JSX.Element | null => {
  if (condition) {
    return <>{children}</>;
  }
  return null;
};

export default If;
