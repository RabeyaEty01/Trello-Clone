import React from "react";
import TrelloActionButton from "./TrelloActionButton";
import TrelloCard from "./TrelloCard";

const TrelloList = ({ title, cards,listID }) => {
  return (
    <div style={styles.container}>
      <h4>{title}</h4>
      {cards.map((card) => (
        <TrelloCard key={card.id} text={card.text} />
      ))}
      <TrelloActionButton listID={listID}></TrelloActionButton>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#dfe3e6",
    borderRadius: 3,
    width: 300,
    padding: 8,
    height:"100%",
    marginRight:8

  },
};

export default TrelloList;
