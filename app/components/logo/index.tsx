import logo from "./logo.svg";
import style from './logo.module.css';

const Logo = () => {
  return (
    <div className={style.logoContainer}>
      <img className={style.logoImage} src={logo} alt="AVCC Logo" />
    </div>
  )
}

export default Logo;
