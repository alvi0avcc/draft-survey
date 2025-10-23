import InputNumber from '@ui/input/number';
import styles from './generalDimensions.module.css';

const GeneralDimensions = () => {
  return (
    <section className={styles.generalDimensionsContainer}>
      <div className={styles.generalDimensionsLine}>
        <InputNumber labelText="L.B.P." />
        <InputNumber labelText="Breadth" />
      </div>
      <div className={styles.generalDimensionsLine}>
        <InputNumber labelText="Light Ship" />
        <InputNumber labelText="Constant" />
      </div>
    </section>
  );
};

export default GeneralDimensions;
