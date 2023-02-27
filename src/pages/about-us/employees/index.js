// artamedicus.com/about-us/employees
import Layout from "@/components/Layout/Layout";
import Employees from "@/components/AboutUs/Employees/Employees";
const EmployeesPage = () => {
  return (
    <Layout activeNavbar="aboutUs" onSideBar={true} highlightSideBar="employees">
      <Employees onSideBar={true}></Employees>
    </Layout>
  );
};

export default EmployeesPage;
