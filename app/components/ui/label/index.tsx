import { Variant } from '@/const/enum';
import type { FC, LabelHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './label.module.css';

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
  variant?: Variant;
  children?: ReactNode;
}

const InputTest: FC<Props> = ({
  variant = Variant.PRIMARY,
  className,
  children,
  ...rest
}: Props) => {
  return (
    <label className={clsx(styles.label, styles[variant], className)} {...rest}>
      {children}
    </label>
  );
};

export default InputTest;
