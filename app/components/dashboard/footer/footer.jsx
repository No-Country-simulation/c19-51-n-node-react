import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}> No Country</div>
      <div className={styles.text}>@All rigths reserved</div>
    </div>
  );
};

export default Footer;
