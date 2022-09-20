import { Meta } from "./Meta";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import styles from "./../styles/Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
