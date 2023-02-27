import Navbar from "./Navbar";
import Footer from "./Footer/Footer";
function Layout(props) {
  return (
    <div>
      <Navbar
        activeNavbar={props.activeNavbar}
        onSideBar={props.onSideBar}
        highlightSideBar={props.highlightSideBar}
      />
      {props.children}
      <Footer/>
    </div>
  );
}

export default Layout;
