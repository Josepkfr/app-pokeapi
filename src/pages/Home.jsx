import React, { useEffect, useState } from "react";
// import api from "../helpers/httpcommon";
import axios from "axios";
import { Button, CardGroup, Container, Row } from "reactstrap";
import CardPokemon from "../components/Cards/CardPokemon";

const Home = () => {
  const [listPokemons, setListPokemons] = useState([]);

  const getPokemons = async (url) => {
    const { data } = await axios.get(url);
    const { results } = data;
    setListPokemons(results);
  };

  useEffect(() => {
    getPokemons("https://pokeapi.co/api/v2/pokemon/");
  }, []);
  return (
    <Container>
      <Button color="primary" outline>
        Back
      </Button>
      <Button color="primary" outline>
        Next
      </Button>
      <Row md="4" sm="2" xs="1" className="">
        {listPokemons.map((pokemon, index) => {
          return <CardPokemon key={index} url={pokemon.url} />;
        })}
      </Row>
    </Container>
  );
};

export default Home;
