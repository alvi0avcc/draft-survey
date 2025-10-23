import { AppRoutes, Variant } from '@/const/enum';
import ButtonLink from '@/components/ui/buttonLink';
import style from './welcomeNavMenu.module.css';

const WelcomeNavMenu = () => {
  return (
    <section className={style.welcomeNavMenuContainer}>
      <span className="">What&apos;s next?</span>
      <nav className={style.welcomeNavMenu}>
        <ul>
          <li>
            <ButtonLink variant={Variant.BUTTON} to={AppRoutes.SUMMARY}>
              Offline work
            </ButtonLink>
          </li>
          <li>
            <ButtonLink
              variant={Variant.BUTTON}
              to={AppRoutes.SIGN_IN}
              disabled
            >
              SignIn
            </ButtonLink>
          </li>
          <li>
            <ButtonLink
              variant={Variant.BUTTON}
              to={AppRoutes.DRAFT_PREV}
              disabled
            >
              Prev last work
            </ButtonLink>
          </li>
          <li>
            <ButtonLink
              variant={Variant.BUTTON}
              to={AppRoutes.HISTORY}
              disabled
            >
              Go to list Prev work
            </ButtonLink>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default WelcomeNavMenu;
