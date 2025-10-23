import style from './logo.module.css';
import logo from './logo.svg';

const Logo = () => {
  return (
    <div className={style.logoContainer}>
      <img className={style.logoImage} src={logo} alt="AVCC Logo" />
    </div>
  );
};

export default Logo;
