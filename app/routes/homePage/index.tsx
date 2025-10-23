import { Welcome } from '@components/welcome';
import WelcomeNavMenu from '@/components/welcomeNavMenu';
import style from './homePage.module.css';

export function meta() {
  return [
    { title: 'AVCC Draft-Survey App' },
    { name: 'description', content: 'Welcome to AVCC Draft-Survey App' },
  ];
}

const HomePage = () => {
  return (
    <main className={style.homePage}>
      <Welcome />

      <WelcomeNavMenu />
    </main>
  );
};

export default HomePage;
