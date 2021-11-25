import Meta from "../Meta/Meta";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Header />
      {children}
    </>
  );
};

export default Layout;
