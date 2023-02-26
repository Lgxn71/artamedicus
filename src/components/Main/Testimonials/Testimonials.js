import { useState } from "react";

import Container from "@/components/UI/Container/Container";
import TitleEyebrow from "@/components/TitleEyebrow/TitleEybrow";

import TestimonialsBody from "./TestimonialsBody";

const Testimonials = () => {
  return (
    <div className="background-color-dark-white ">
      <Container>
        <TitleEyebrow
          readMoreExist={false}
          linkPath=""
          eyebrowText="Отзывы"
          titleText={`Что говорят наши пациенты`}
          paragraph={`Врачи Arta Medicus Clinic — эксперты в своих областях медицины и владеют всеми передовыми методиками. `}
        />

        <TestimonialsBody />
      </Container>
    </div>
  );
};
export default Testimonials;
