import React from "react";
import Background from "../Background/Background";
import QuickContainer from "../QuickResponse/QuickContainer";
import Advance from "../Advance/Advance";
import Findteacher from "../FindTeacher/Findteacher";
import Sucess from "../Sucess/Sucess";
import Help from "../Help/Help";
import Dark from "../Dark/Dark";

const Home = () => {
  return (
    <div>
      <Background />
      <QuickContainer />
      <Advance />
      <Findteacher />
      <Sucess />
      <Help />
      <Dark />
    </div>
  );
};

export default Home;
