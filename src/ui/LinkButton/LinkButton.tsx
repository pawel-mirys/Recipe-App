import clsx from 'clsx';
import { Link } from 'react-router-dom';

import styles from './LinkButton.module.scss';

type LinkButtonProps = {
  to: string;
  className?: string;
  children: string | JSX.Element;
  onClick?: () => void;
};

export const LinkButton = ({ to, className, children, onClick }: LinkButtonProps) => {
  return (
    <Link
      onClick={() => {
        onClick?.();
      }}
      to={to}
      className={clsx(styles.linkButton, className)}
    >
      {children}
    </Link>
  );
};
