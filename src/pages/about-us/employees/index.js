// artamedicus.com/about-us/employees
import Layout from "@/components/Layout/Layout";
import Employees from "@/components/AboutUs/Employees/Employees";
const EmployeesPage = () => {
  return (
    <Layout onSideBar={true} highlight="employees">
      <Employees></Employees>
    </Layout>
  );
};

export default EmployeesPage;
