import { Meta } from "./Meta";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import styles from "./../styles/Layout.module.scss";

const Layout = ({ children }) => {
  let changeModalDisplay;
  children[1].props.changeModalDisplay
    ? (changeModalDisplay = children[1].props.changeModalDisplay)
    : (changeModalDisplay = children[0].props.changeModalDisplay);

  return (
    <>
      <Meta />
      <Header changeModalDisplay={changeModalDisplay} />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
