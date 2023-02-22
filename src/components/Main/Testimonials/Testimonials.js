import { useState } from "react";

import Eyebrow from "@/components/UI/Eyebrow/Eyebrow";
import Container from "@/components/UI/Container/Container";
import Title from "@/components/UI/Title/Title";
import TestimonialsBody from "./TestimonialsBody";

const Testimonials = () => {
  return (
    <div className="background-color-dark-white ">
      <Container>
        <Eyebrow
          readMoreExist={true}
          linkPath=""
          eyebrowText="Отзывы"
        ></Eyebrow>
        <Title
          titleText={`Что говорят наши пациенты`}
          paragraph={`Врачи Arta Medicus Clinic — эксперты в своих областях медицины и владеют всеми передовыми методиками. `}
        />
        <TestimonialsBody />
      </Container>
    </div>
  );
};
export default Testimonials;
