import Layout from "@/components/Layout/Layout";
import AboutCompanyComponent from "@/components/AboutUs/AboutCompany/AboutCompanyComponent";
const AboutCompany = () => {
  return (
    <Layout onSideBar={true} highlight="aboutCompany">
      <AboutCompanyComponent></AboutCompanyComponent>
    </Layout>
  );
};
export default AboutCompany;
