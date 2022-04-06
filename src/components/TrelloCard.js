import { Card, Typography } from "@mui/material";
import React from "react";

const TrelloCard = () => {
  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <Typography gutterBottom>Word of the Day</Typography>
      </Card>
    </div>
  );
};

export default TrelloCard;
