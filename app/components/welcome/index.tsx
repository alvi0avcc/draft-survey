import Logo from "../logo";
import style from './welcome.module.css';

export function Welcome() {
  return (
    <section className={style.welcomeContainer}>
      <Logo/>
      <span className={style.welcomeTitle}>Draft-Survey</span>
    </section>
  );
}
