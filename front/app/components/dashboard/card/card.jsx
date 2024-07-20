import styles from "./card.module.css";

const Card = ({ icon: Icon, title, number, detail, change }) => {
  return (
    <div className={styles.container}>
      <Icon size={24} />
      <div className={styles.texts}>
        <span className={styles.title}> {title}</span>
        <span className={styles.number}>{number}</span>
        <span className={styles.detail}>
        <span className={styles.positive}>{change}</span> {detail}
        </span>
      </div>
    </div>
  );
};

export default Card;
