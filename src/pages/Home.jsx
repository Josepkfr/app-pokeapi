import React, { useEffect, useState } from "react";
// import api from "../helpers/httpcommon";
import axios from "axios";
import CardMain from "../components/Cards/CardMain";
import { Button } from "reactstrap";

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
    <div>
      <Button color="primary" outline>
        Back
      </Button>
      <Button color="primary" outline>
        Next
      </Button>
      {listPokemons.map((pokemon, index) => {
        return <CardMain key={index} name={pokemon.name} />;
      })}
    </div>
  );
};

export default Home;
