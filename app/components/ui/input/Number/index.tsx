import { useState, useCallback, type FC } from "react";
import Input, { type Props as InputProps } from "..";
import { Variant } from "@/const/enum";
import styles from './InputNumber.module.css';
import clsx from "clsx";
import calculateByString from "@/utils/calculateByString";
import type { StringForCalculatingResult } from "@/types";

interface Props extends InputProps {
  min?: number;
  max?: number;
  step?: number;
  allowFloat?: boolean;
  showControls?: boolean;
}

const InputNumber: FC<Props> = ({
  value,
  labelTextAdditional,
  onChange,
  min,
  max,
  step = 1,
  allowFloat = false,
  showControls = true,
  variant = Variant.PRIMARY,
  className,
  ...rest
}) => {
  const [stringValue, setStringValue] = useState(value?.toString() ?? '');
  const [infoBtn, setInfoBtn] = useState<{text:string|undefined, type: 'result' | 'warning' | 'info'}>({text:undefined, type: 'info'});
  const [newLabelTextAdditional, setNewLabelTextAdditional] = useState<string|undefined>(labelTextAdditional);
  
  const handleOnChange = useCallback((newValue?: string) => {
    const result:StringForCalculatingResult = calculateByString(newValue);

    if (result.type === 'error' || result.type === 'calculable-error'){
        setInfoBtn({text:'!',type: "warning"})
    }

    if (result.type !== 'error' && result.type !== 'calculable-error')
    {
      setInfoBtn({text:'✓',type: "result"})
      setStringValue(result.string ?? '');
      setNewLabelTextAdditional(`${result.result}`)
      onChange?.(`${result.result}`);
    }

    console.log(result);
    
  }, [onChange]);

  return (
    <div className={clsx(styles.inputNumberContainer, className)}>
      <Input
        value={stringValue}
        onChange={handleOnChange}
        variant={variant}
        className={clsx( styles.inputNumber )}
        infoBtn={infoBtn}
        labelTextAdditional={newLabelTextAdditional}
        {...rest}
      />
    </div>
  );
};

export default InputNumber;