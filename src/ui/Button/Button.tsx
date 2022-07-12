import clsx from 'clsx';
import { ReactElement } from 'react';

import styles from './Button.module.scss';

type ButtonProps = {
  className?: string;
  children: ReactElement | JSX.Element | string;
  onClick: Function;
};

export const Button = ({ className, children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        event.stopPropagation();
        onClick();
      }}
      className={clsx(styles.button, className)}
    >
      {children}
    </button>
  );
};
