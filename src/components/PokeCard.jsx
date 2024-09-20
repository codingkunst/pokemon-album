import React from "react";
import styled from "@emotion/styled";
import PokeNameChip from "./PokeNameChip";
import PokeMarkChip from "./PokeMarkChip";

const eximg =
  "https://mblogthumb-phinf.pstatic.net/MjAyMDAzMDNfNyAg/MDAxNTgzMjE3NTgyOTA4.Biyyr8qvxXiTJnMUKZAp83wtVE1EIwfTvOU3CnMWyIAg.jqc_-BQMbQqXeV7dgo45IlgtUYcZt2GGh1_P39y8Emsg.PNG.gimdh0930/002.png?type=w800";

const PokeCard = () => {
  return (
    <Item>
      <Head>
        <PokeNameChip />
      </Head>

      <Body>
        <Image src={eximg} alt="Loading..." />
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

export default PokeCard;
