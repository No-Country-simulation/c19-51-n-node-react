import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}> InvenTrack </div>
      <div className={styles.text}>@All rigths reserved</div>
    </div>
  );
};

export default Footer;
