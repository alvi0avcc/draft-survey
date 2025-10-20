import NavBar from "@/components/navBar";
import { Outlet } from "react-router";
 
const SurveyPage = () =>{

  return (
    <>
      <NavBar/>
      
      <Outlet/>
    </>
  )
}

export default SurveyPage;
