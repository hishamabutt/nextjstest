import NavbarComponent from './Navbar';

const Layout = (props) => (
  <div>
    <NavbarComponent />
    {props.children}
  </div>
);

export default Layout;
