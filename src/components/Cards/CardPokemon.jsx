import React from "react";
import { CardImg, CardTitle, Spinner } from "reactstrap";
import useFetch from "../../hooks/useFetch";
import CardComponent from "./CardComponent";

const CardPokemon = ({ url }) => {
  const dataPokemon = useFetch(url);
  const { sprites } = dataPokemon;

  return (
    <CardComponent>
      {sprites ? (
        <>
          <CardTitle tag="h5">{dataPokemon.name} </CardTitle>
          <CardImg
            alt={"Image " + dataPokemon.name}
            src={sprites.back_default}
            top
            width="100%"
          />
        </>
      ) : (
        <div className="d-flex justify-content-center">
          <Spinner size="sm">Loading...</Spinner>
        </div>
      )}
    </CardComponent>
  );
};

export default CardPokemon;
