import Hero from "@/components/Hero/Hero";
import PersonCard from "@/components/UI/PersonCard/PersonCard";
import styles from "./Employees.module.css";
import EmployeesData from "@/DataForComponents/about-company/employees/EmployeesData.json";
import ContainerWithoutSpace from "@/components/UI/Container/ContainerWithoutSpace";
const Employees = () => {
  return (
    <>
      <Hero
        titleWidth="employees"
        paragraphWidth="narrow"
        greyishText="Врачи Arta Medicus Clinic — эксперты в своих областях медицины и владеют всеми передовыми методиками. "
        textBeforeHighlight="Наша "
        highlighted="Команда"
        textAfterHighlight=""
        imgURL=""
        isImageExist={false}
      ></Hero>
      <ContainerWithoutSpace>
        <div className={styles["employees-container"]}>
          {EmployeesData.map((employee) => {
            return (
              <PersonCard
                key={employee.id}
                imageSrc={employee.imageSrc}
                fullname={employee.fullname}
                occupation={employee.occupation}
              />
            );
          })}
        </div>
      </ContainerWithoutSpace>
    </>
  );
};
export default Employees;
