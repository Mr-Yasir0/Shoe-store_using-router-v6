import { React, useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import data from "../Temp/data.json";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

export default function ActionAreaCard() {
  const style = {
    card: {
      maxWidth: 345,
      padding: 20,
      margin: "auto",
    },
    container: {
      marginTop: 30,
    },
    content: { height: 112 },
  };

  return (
    <>
      <div style={style.container}>
        <Grid container spacing={0}>
          {data.map((item) => (
            <Grid item xs={12} sm={6} md={3}>
              <Link to={`/ShoesDetails/${item.id}`}>
                <div style={style.card}>
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={item.img[0]}
                        alt="Picture"
                      />
                      <CardContent style={style.content}>
                        <Typography gutterBottom variant="h5" component="div">
                          {item.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.categorie}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          {item.price}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </div>
              </Link>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}
