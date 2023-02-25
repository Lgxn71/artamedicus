import Navbar from "./Navbar";
import Footer from "./Footer/Footer";
function Layout(props) {
  return (
    <div>
      <Navbar onSideBar={props.onSideBar} highlight={props.highlight}></Navbar>
      {props.children}
      <Footer></Footer>
    </div>
  );
}

export default Layout;
