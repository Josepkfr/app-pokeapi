import React, { useEffect, useRef, useState } from "react";
// import api from "../helpers/httpcommon";
import { Button, Col, Container, Input, Spinner } from "reactstrap";
import CardPokemon from "../components/Cards/CardPokemon";
import "../styles/Home.css";
import useFetch from "../hooks/useFetch";
import axios from "axios";

const Home = () => {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const data = useFetch(url);
  const [pokemons, setPokemons] = useState([]);
  const [search, Setsearch] = useState(false);
  const { results } = data;

  useEffect(() => {
    setPokemons(results);
  }, [results]);

  const [actualPage, setActualPage] = useState(20);
  let totalPage = Math.round(1118 / 20);
  const text = useRef(null);

  const nextPage = () => {
    setActualPage(actualPage + 20);
    setUrl(data.next);
  };

  const previousPage = () => {
    setActualPage(actualPage - 20);
    setUrl(data.previous);
  };

  const filter = () => {
    let value = text.current.value;

    const newData = results.filter((item) => {
      const itemData = item.name.toUpperCase();
      const textData = value.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    if (value === "") {
      Setsearch(false);
    }

    if (newData.length === 0) {
      Setsearch(true);
    }
    setPokemons(newData);
  };

  return (
    <Container>
      <div className="d-flex justify-content-end my-3">
        <Col sm={3}>
          <Input innerRef={text} onChange={filter} />
        </Col>
      </div>
      <Container className="d-flex justify-content-between">
        <Button onClick={previousPage} color="primary" outline>
          Back
        </Button>
        <p onClick={previousPage} color="primary" outline>
          {actualPage / 20 + "/" + totalPage}
        </p>
        <Button onClick={nextPage} color="primary" outline>
          Next
        </Button>
      </Container>
      {pokemons ? (
        search ? (
          <div className="Card-Grid">
            <CardPokemon
              url={`https://pokeapi.co/api/v2/pokemon/${text.current.value}`}
            ></CardPokemon>
          </div>
        ) : (
          <div className="Card-Grid">
            {pokemons.map((pokemon, index) => {
              let { url } = pokemon;
              return <CardPokemon key={index} url={url} />;
            })}
          </div>
        )
      ) : (
        <div className="d-flex justify-content-center">
          <Spinner color="primary" type="grow">
            Loading...
          </Spinner>
          <Spinner color="secondary" type="grow">
            Loading...
          </Spinner>
          <Spinner color="success" type="grow">
            Loading...
          </Spinner>
        </div>
      )}
    </Container>
  );
};

export default Home;
