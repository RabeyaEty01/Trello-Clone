import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const TrelloCard = ({ text }) => {
  return (
    <div>
      <Card style={styles.cardContainer}>
        <CardContent>
          {" "}
          <Typography gutterBottom>{text}</Typography>{" "}
        </CardContent>
      </Card>
    </div>
  );
};

const styles={
    cardContainer:{
        marginBottom:8

    }
}

export default TrelloCard;
