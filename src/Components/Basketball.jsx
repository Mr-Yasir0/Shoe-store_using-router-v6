import React from "react";
import data from "../Temp/data.json";

export default function Running(props) {
  return (
    <>
      {data.map((i) => {
        if (props.value === i.categorie) return <h1>{i.id}</h1>;
      })}
    </>
  );
}
