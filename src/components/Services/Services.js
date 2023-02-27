import { useState } from "react";
import Hero from "../Hero/Hero";
import ServiceData from "@/DataForComponents/services/ServiceData.json";
import Service from "./Service";
import ContainerWithoutSpace from "../UI/Container/ContainerWithoutSpace";
import styles from "./Services.module.css";
const Services = () => {
  const [services, setService] = useState(ServiceData);

  const clickHandler = (id) => {
    setService((prevService) =>
      prevService.map((service) =>
        service.id === id
          ? { ...service, isOpen: !service.isOpen }
          : { ...service, isOpen: false }
      )
    );
  };
  return (
    <>
      <Hero
        spaceBottom="50"
        titleWidth="888"
        textBeforeHighlight="Мы предоставляем "
        highlighted="качественные"
        textAfterHighlight=" услуги"
        paragraphWidth="narrow"
        greyishText="Врачи Arta Medicus Clinic — эксперты в своих областях медицины и владеют всеми передовыми методиками."
      />
      <ContainerWithoutSpace>
        <div className={styles["service-container"]}>
          {services.map((service) => (
            <Service
              key={service.id}
              service={service}
              onClickHandler={clickHandler}
            >
              {console.log(service)}
            </Service>
          ))}
        </div>
      </ContainerWithoutSpace>
    </>
  );
};
export default Services;
