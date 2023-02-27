import Hero from "@/components/Hero/Hero";
import PersonCard from "@/components/UI/PersonCard/PersonCard";
import styles from "./Employees.module.css";
import EmployeesData from "@/DataForComponents/about-company/employees/EmployeesData.json";
import ContainerWithoutSpace from "@/components/UI/Container/ContainerWithoutSpace";
const Employees = (props) => {
  return (
    <>
      <Hero
        onSideBar={props.onSideBar}
        spaceBottom="100"
        titleWidth="762"
        paragraphWidth="narrow"
        greyishText="Врачи Arta Medicus Clinic — эксперты в своих областях медицины и владеют всеми передовыми методиками. "
        textBeforeHighlight="Наша "
        highlighted="Команда"
      />

      <ContainerWithoutSpace>
        <div className={styles["employees-container"]}>
          {EmployeesData.map((employee) => (
            <PersonCard
              key={employee.id}
              imageSrc={employee.imageSrc}
              fullname={employee.fullname}
              occupation={employee.occupation}
            />
          ))}
        </div>
      </ContainerWithoutSpace>
    </>
  );
};
export default Employees;
