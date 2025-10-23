import type { FC } from 'react';
import InputNumber from '@components/ui/input/number';

interface Props {
  position: 'Fore' | 'Mid' | 'Aft';
}

const DraftPoint: FC<Props> = ({ position }) => {
  return (
    <div className="blockLineHoriz">
      <InputNumber labelText={`${position} PS`} />
      <InputNumber labelText="Dist Btw" />
      <InputNumber labelText={`${position} SB`} />
    </div>
  );
};

export default DraftPoint;
