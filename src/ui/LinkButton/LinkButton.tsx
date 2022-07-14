import clsx from 'clsx';
import { Link } from 'react-router-dom';

import styles from './LinkButton.module.scss';

type LinkButtonProps = {
  to: string;
  className?: string;
  children: string | JSX.Element;
};

export const LinkButton = ({ to, className, children }: LinkButtonProps) => {
  return (
    <Link to={to} className={clsx(styles.linkButton, className)}>
      {children}
    </Link>
  );
};
