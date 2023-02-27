// artamedicus.com/about-us/hiring
import Layout from "@/components/Layout/Layout";
import Hiring from "@/components/AboutUs/Hiring/Hiring";
const HiringPage = () => {
  return (
    <Layout activeNavbar="aboutUs" onSideBar={true} highlightSideBar="hiring">
      <Hiring onSideBar={true}></Hiring>
    </Layout>
  );
};

export default HiringPage;
