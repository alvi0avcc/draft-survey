import { Link } from 'react-router';
import style from './welcomeNavMenu.module.css';
import { Routes, Variant } from '@/const/enum';
import ButtonLink from '@ui/ButtonLink';

const WelcomeNavMenu = () => {
  return (
    <section className={style.welcomeNavMenuContainer}>
            <span className="">
              What&apos;s next?
            </span>
          <nav className={style.welcomeNavMenu}>
            <ul>
              <li>
                <ButtonLink
                  variant={Variant.BUTTON}
                  to={Routes.DRAFT}
                  >Offline work</ButtonLink>
              </li>
              <li>
                <ButtonLink
                  variant={Variant.BUTTON}
                  to={Routes.SIGN_IN}
                  disabled
                  >SignIn</ButtonLink>
              </li>
              <li>
                <ButtonLink
                  variant={Variant.BUTTON}
                  to={Routes.DRAFT_PREV}
                  disabled
                  >Prev last work</ButtonLink>
              </li>
              <li>
                <ButtonLink
                  variant={Variant.BUTTON}
                  to={Routes.HISTORY}
                  disabled
                  >Go to list Prev work</ButtonLink>
              </li>
            </ul>
          </nav>
        </section>
  );
}

export default WelcomeNavMenu;