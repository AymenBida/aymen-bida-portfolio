import Meta from "../Meta/Meta";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      {children}
    </>
  );
};

export default Layout;
