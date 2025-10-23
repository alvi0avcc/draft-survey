import { Variant } from '@/const/enum';
import {
  type FC,
  type InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import clsx from 'clsx';
import styles from './input.module.css';

export interface Props
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'onChange' | 'value' | 'type'
  > {
  variant?: Variant;
  infoPosition?:
    | 'inside-right'
    | 'outside-left'
    | 'outside-right'
    | 'outside-top'
    | 'outside-bottom';
  labelText?: string;
  labelTextAdditional?: string;
  value?: string;
  infoBtn?: { text?: string; type?: 'result' | 'warning' | 'info' };
  onChange?: (value?: string) => void;
}

const Input: FC<Props> = ({
  variant = Variant.PRIMARY,
  className,
  infoPosition = 'inside-right',
  labelText,
  labelTextAdditional,
  value,
  infoBtn = { text: undefined, type: 'info' },
  onChange,
  ...rest
}: Props) => {
  const [stringValue, setStringValue] = useState<string>(
    value?.toString() ?? ''
  );
  const [currentLabelTextAdditional, setCurrentLabelTextAdditional] = useState<
    string | undefined
  >(labelTextAdditional);

  const handleOnChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue: string = event.target.value.trimStart();
      onChange?.(newValue);
      setStringValue(newValue);
    },
    [onChange]
  );

  const handleInfoBtnClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setInfoBtnState();
  };

  const handleInfoBtnEnter = (event: React.KeyboardEvent) => {
    event.stopPropagation();
    if (event.key === 'Enter') setInfoBtnState();
  };

  const setInfoBtnState = (
    text?: string,
    type?: 'result' | 'warning' | 'info'
  ) => {
    labelTextAdditional && setStringValue(labelTextAdditional);
    labelTextAdditional = undefined;
    setCurrentLabelTextAdditional(labelTextAdditional);
    infoBtn.text = text;
    infoBtn.type = type;
  };

  if (labelText) {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFieldsetClick = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    useEffect(() => {
      setCurrentLabelTextAdditional(labelTextAdditional);
    }, [labelTextAdditional]);

    return (
      <fieldset
        className={clsx(styles.inputContainer, styles[variant], className)}
        onClick={handleFieldsetClick}
      >
        <legend>
          {labelText}
          {currentLabelTextAdditional && `: ${currentLabelTextAdditional} m`}
        </legend>

        <input
          ref={inputRef}
          inputMode="text"
          className={clsx('', styles.input, styles[variant], className)}
          value={stringValue}
          onChange={handleOnChange}
          onKeyUp={handleInfoBtnEnter}
          {...rest}
        ></input>

        {infoBtn.text && (
          <span
            className={clsx(
              styles.inputInfo,
              styles[variant],
              infoBtn.type && styles[infoBtn.type],
              className
            )}
            onClick={handleInfoBtnClick}
          >
            {infoBtn.text}
          </span>
        )}
      </fieldset>
    );
  }

  return (
    <div>
      <input
        inputMode="text"
        className={clsx(styles.input, styles[variant], className)}
        value={stringValue}
        onChange={handleOnChange}
        {...rest}
      ></input>
    </div>
  );
};

export default Input;
