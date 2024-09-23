import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import PokeCard from "./PokeCard";
import { fetchPokemon } from "../axios/api";
import useInfiniteScroll from "react-infinite-scroll-hook";

const PokeCardList = () => {
  const [pokemon, setPokemon] = useState(null);

  // 무한 스크롤
  const [sentryRef] = useInfiniteScroll({
    loading: false,
    hasNextPage: !pokemon?.next !== "",
    onLoadMore: async () => {
      const nextPokemon = await fetchPokemon(pokemon?.next);
      setPokemon((prev) => ({
        ...nextPokemon,
        results: [...prev.results, ...nextPokemon.results],
      }));
    },
    disabled: false,
    rootMargin: "0px 0px 400px 0px",
  });

  useEffect(() => {
    (async () => {
      const pokemon = await fetchPokemon();
      console.log("pokemon : ", pokemon);
      setPokemon(pokemon);
    })();
  }, []);

  return (
    <>
      <List>
        {pokemon?.results.map((item) => {
          return <PokeCard key={item.name} name={item.name} />;
        })}
      </List>
      <LoadingMessage ref={sentryRef}>Loading...</LoadingMessage>
    </>
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

const LoadingMessage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

export default PokeCardList;