import React from "react";
import { CardImg, CardTitle } from "reactstrap";
import useFetch from "../../hooks/useFetch";
import CardComponent from "./CardComponent";

const CardPokemon = ({ url }) => {
  const dataPokemon = useFetch(url);

  return (
    <CardComponent>
      <CardTitle tag="h5">{dataPokemon.name} </CardTitle>
      <CardImg
        alt="Card image cap"
        src={dataPokemon.sprites.back_default}
        top
        width="100%"
      />
    </CardComponent>
  );
};

export default CardPokemon;
