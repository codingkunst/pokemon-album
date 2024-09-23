import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import PokeNameChip from "./PokeNameChip";
import PokeMarkChip from "./PokeMarkChip";
import { useNavigate } from "react-router-dom";
import { fetchPokemonDetail } from "../axios/api";

const PokeCard = (props) => {
  const eximg =
    "https://mblogthumb-phinf.pstatic.net/MjAyMDAzMDNfNyAg/MDAxNTgzMjE3NTgyOTA4.Biyyr8qvxXiTJnMUKZAp83wtVE1EIwfTvOU3CnMWyIAg.jqc_-BQMbQqXeV7dgo45IlgtUYcZt2GGh1_P39y8Emsg.PNG.gimdh0930/002.png?type=w800";
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleClick = () => {
    navigate(`/pokemon/${props.name}`);
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      const detail = await fetchPokemonDetail(props.name);
      setPokemon(detail);
      setLoading(false);
    })();
  }, [props.name]);

  if (loading) {
    return (
      <Item color={"rosybrown"}>
        <Head>
          <PokeNameChip id={0} color={"rosybrown"} name={"pokemon"} />
        </Head>
        <LoadingMessage>Loading...</LoadingMessage>
        <Footer>
          <PokeMarkChip />
        </Footer>
      </Item>
    );
  }

  return (
    <Item onClick={handleClick} color={pokemon?.color}>
      <Head>
        <PokeNameChip
          id={pokemon?.id}
          color={pokemon?.color}
          name={props?.name}
        />
      </Head>

      <Body>
        <Image src={pokemon?.images.dream_world} alt="Loading..." />
      </Body>

      <Footer>
        <PokeMarkChip />
      </Footer>
    </Item>
  );
};

const Item = styled.li`
  width: 250px;
  height: 300px;
  padding: 8px;
  border: 1px solid #c0c0c0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  flex-direction: column;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: transform 0.3s ease-in-out;
  }
  &:active {
    /* background-color: rosybrown; */
    background-color: ${(props) => props.color};
    opacity: 0.8;
    transition: background-color 0;
  }
`;

const Head = styled.section`
  display: flex;
  flex-direction: row;
  margin: 8px 0;
`;

const Body = styled.section`
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  margin: 8px 0;
`;

const Image = styled.img`
  width: 180px;
  height: 180px;
`;

const Footer = styled.section`
  display: flex;
  flex-direction: row;
  margin: 8px 0;
`;

const LoadingMessage = styled.div`
  width: 250px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

export default PokeCard;
