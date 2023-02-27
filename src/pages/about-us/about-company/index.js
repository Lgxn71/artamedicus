import Layout from "@/components/Layout/Layout";
import AboutCompanyComponent from "@/components/AboutUs/AboutCompany/AboutCompanyComponent";
const AboutCompany = () => {
  return (
    <Layout activeNavbar="aboutUs" onSideBar={true} highlightSideBar="aboutCompany">
      <AboutCompanyComponent onSideBar={true}></AboutCompanyComponent>
    </Layout>
  );
};
export default AboutCompany;
