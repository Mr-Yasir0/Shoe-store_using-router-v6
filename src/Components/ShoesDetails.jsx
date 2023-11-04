import React from "react";
import data from "../Temp/data.json";
import { Link, useParams } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

export default function ShoesDetails() {
  const { id } = useParams();

  const style = {
    main: {
      marginTop: 36,
      marginBottom: 18,
    },
    name: {
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
    },

    back: {
      position: "absolute",
      display: "flex",
      marginLeft: "22%",
      cursor: "pointer",
    },
    images: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };
  return (
    <div>
      <div>
        {data.map((item) => {
          if (Number(id) === item.id) {
            return (
              <div style={style.main}>
                <span style={style.back}>
                  <Link to="/">
                    <ArrowLeftIcon />
                  </Link>
                </span>
                <span style={style.name}>
                  <Typography variant="h6" gutterBottom>
                    {item.name}
                  </Typography>
                </span>
              </div>
            );
          }
        })}
      </div>
      <div style={style.images}>
        {data.map((items, index) => {
          if (Number(id) === items.id) {
            return (
              <>
                <ImageList
                  sx={{
                    width: 700,
                    height: 650,
                    margin: 0,
                  }}
                  cols={3}
                  key={index}
                >
                  {items.img.map((item, ind) => (
                    <ImageListItem key={ind}>
                      <img src={item} />
                    </ImageListItem>
                  ))}
                </ImageList>
              </>
            );
          }
        })}
      </div>
    </div>
  );
}
