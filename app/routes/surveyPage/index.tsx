import { Outlet } from 'react-router';
import NavBar from '@/components/navBar';

const SurveyPage = () => {
  return (
    <>
      <NavBar />

      <Outlet />
    </>
  );
};

export default SurveyPage;
