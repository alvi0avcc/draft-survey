import { Variant } from '@/const/enum';
import type { FC, LinkHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router';
import styles from './buttonLink.module.css';

interface Props extends LinkHTMLAttributes<HTMLAnchorElement> {
  to: string;
  variant?: Variant;
  children?: ReactNode;
  disabled?: boolean;
}

const ButtonLink: FC<Props> = ({
  variant = Variant.LINK,
  className,
  children,
  to,
  disabled = false,
  ...rest
}: Props) => {
  if (disabled) {
    return (
      <span
        className={clsx(
          styles.buttonLink,
          styles[variant],
          styles.disabled,
          className
        )}
        aria-disabled="true"
        {...rest}
      >
        {children}
      </span>
    );
  }

  return (
    <Link
      to={to}
      className={clsx(styles.buttonLink, styles[variant], className)}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
