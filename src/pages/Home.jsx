import React, { useState } from "react";
// import api from "../helpers/httpcommon";
import { Button, Container } from "reactstrap";
import CardPokemon from "../components/Cards/CardPokemon";
import "../styles/Home.css";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const data = useFetch(url);
  const { results } = data;

  const nextPage = () => {
    setUrl(data.next);
  };

  const previousPage = () => {
    setUrl(data.previous);
  };

  return (
    <Container>
      <Container className="d-flex justify-content-between">
        <Button onClick={previousPage} color="primary" outline>
          Back
        </Button>
        <Button onClick={nextPage} color="primary" outline>
          Next
        </Button>
      </Container>
      {results && (
        <div className="Card-Grid">
          {results.map((pokemon, index) => {
            return <CardPokemon key={index} url={pokemon.url} />;
          })}
        </div>
      )}
    </Container>
  );
};

export default Home;
