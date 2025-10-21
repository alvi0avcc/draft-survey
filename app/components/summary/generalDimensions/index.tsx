import styles from './generalDimensions.module.css';
import Input from "@ui/input";

const GeneralDimensions = () =>{
  return (
      <section className={styles.generalDimensionsContainer}>
        <div className={styles.generalDimensionsLine}>
          <Input labelText="L.B.P."/>
          <Input labelText="Breadth"/>
        </div>
        <div className={styles.generalDimensionsLine}>
          <Input labelText="Light Ship"/>
          <Input labelText="Constant"/>
        </div>
      </section>
  )
}

export default GeneralDimensions;