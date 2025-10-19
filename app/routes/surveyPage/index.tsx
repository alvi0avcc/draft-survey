import NavBar from "@/components/navBar";
import { Outlet } from "react-router";
 
const SurveyPage = () =>{

  return (
    <>
      <NavBar/>
      
      <h1>Summary information</h1>

      Vessel
      Port
      Grade
      Terminal

      Draftmark Distances
      L.B.P.
      L.B.M.
      Forward
      Midship
      Aft
      Displacement Seawater at
      <Outlet/>
    </>
  )
}

export default SurveyPage;
