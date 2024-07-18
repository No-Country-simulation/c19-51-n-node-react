import NavBar from "../components/dashboard/navbar/navbar";
import SideBar from "../components/dashboard/sidebar/sidebar";
import styles from "../components/dashboard/dashboard.module.css";
import Footer from "../components/dashboard/footer/footer";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <SideBar />
      </div>

      <div className={styles.content}>
        <NavBar />
        {children}
        <Footer/>
      </div>
    </div>
  );
};

export default Layout;
