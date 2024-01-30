import { AboutComp } from "../../components/aboutComp";
import { Feedback } from "../../components/feedbacks";
import { Intro } from "../../components/intro";
import { Layouts } from "../../components/layouts";

export const About = () => {
  return (
    <Layouts>
      <AboutComp />
      <Intro />
      <Feedback/>
    </Layouts>
  );
};
