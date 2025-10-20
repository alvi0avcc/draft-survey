import styles from './title.module.css';
import Input from "@ui/input";

const Title = () =>{
  return (
      <section className={styles.titleContainer}>
        <div className={styles.titleLine}>
          <Input labelText="Ref."/>
          <Input labelText="Place/Port"/>
          <Input labelText="Terminal/Pier"/>
        </div>
        <div className={styles.titleLine}>
          <Input labelText="Vessel"/>
          <Input labelText="Cargo"/>
          <Input labelText="Loading/Discharging"/>
        </div>
      </section>
  )
}

export default Title;