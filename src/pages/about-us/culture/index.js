// artamedicus.com/about-us/about-company
import Layout from "@/components/Layout/Layout";
import Culture from "@/components/AboutUs/Culture/culture";
const CulturePage = () => {
  return (
    <Layout onSideBar={true} highlight="culture">
      <Culture></Culture>
    </Layout>
  );
};

export default CulturePage;
