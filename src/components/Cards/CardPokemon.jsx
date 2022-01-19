import axios from "axios";
import React, { useEffect, useState } from "react";
import { CardImg, CardTitle } from "reactstrap";
import CardComponent from "./CardComponent";

const CardPokemon = ({ url }) => {
  const [dataPokemon, setDataPokemon] = useState({});

  const getDataPokemon = async (url) => {
    const { data } = await axios.get(url);
    setDataPokemon(data);
  };

  useEffect(() => {
    getDataPokemon(url);
  }, [url]);

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
