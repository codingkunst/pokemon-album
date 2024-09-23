import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import PokeCard from "./PokeCard";
import { fetchPokemon } from "../axios/api";

const PokeCardList = () => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    (async () => {
      const pokemon = await fetchPokemon();
      console.log('pokemon : ', pokemon);
      setPokemon(pokemon);
    })()
  }, []);

  return (
    // <List>
    //   {Array.from({ length: 10 }).map((_, index) => {
    //     return <PokeCard key={index} />;
    //   })}
    // </List>
    <List>
      {pokemon?.results.map((item) => {
        return <PokeCard key={item.name} name={item.name} />;
      })}
    </List>
  );
};

const List = styled.ul`
  margin: 0 0 32px 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export default PokeCardList;