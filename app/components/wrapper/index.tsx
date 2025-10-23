import type { FC, PropsWithChildren } from 'react';
import { wrapperId } from '@const/uiConst';
import { clsx } from 'clsx';
import styles from './wrapper.module.css';

interface WrapperProps extends PropsWithChildren {
  id?: string;
  className?: string;
}

export const Wrapper: FC<PropsWithChildren<WrapperProps>> = ({
  children,
  id = wrapperId,
  className = '',
}) => {
  return (
    <div id={id} className={clsx(styles.wrapper, className)}>
      {children}
    </div>
  );
};

export default Wrapper;
