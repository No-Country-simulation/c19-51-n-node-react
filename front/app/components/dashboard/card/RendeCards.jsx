'use client';
import Card from "./card";
import cardsData from "../../data/cards";
import styles from "./card.module.css";

const RendeCards = () => {
    return (
      <div className={styles.containerRender}>
        {cardsData.map((card, index) => (
          <Card 
            key={index}
            icon={card.icon}
            title={card.title}
            number={card.number}
            detail={card.detail}
            change={card.change}
          />
        ))}
      </div>
    );
  };
  
  export default RendeCards;