import { React, useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Data from "../Temp/Data.json";
import Grid from "@mui/material/Grid";

export default function ActionAreaCard() {
  //   const [data, setData] = useState([]);

  const style = {
    card: {
      margin: "18px",
      maxWidth: 345,
    },
    container: {
      margin: 0,
    },
    content: { height: 110 },
  };

  //   useEffect(() => {
  //     const fetch = async () => {
  //       try {
  //         const initialData = await globleData();
  //         console.log(initialData);
  //         setData(initialData);
  //       } catch (e) {
  //         console.log(e);
  //       }
  //     };
  //     fetch();
  //   }, []);

  //   console.log(data);
  return (
    <>
      <Grid container spacing={0} style={style.container}>
        {Data.map((item) => (
          <Grid item xs={12} sm={6} md={3}>
            <Card style={style.card}>
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
          </Grid>
        ))}
      </Grid>
    </>
  );
}
