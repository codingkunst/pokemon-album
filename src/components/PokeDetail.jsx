import styled from "@emotion/styled";
import React from "react";
import PokeMarkChip from "./PokeMarkChip";

const PokeDetail = () => {
  const eximg =
    "https://mblogthumb-phinf.pstatic.net/MjAyMDAzMDNfNyAg/MDAxNTgzMjE3NTgyOTA4.Biyyr8qvxXiTJnMUKZAp83wtVE1EIwfTvOU3CnMWyIAg.jqc_-BQMbQqXeV7dgo45IlgtUYcZt2GGh1_P39y8Emsg.PNG.gimdh0930/002.png?type=w800";

  return (
    <Container>
      <ContainerImage>
        <Image src={eximg} alt="Loading..." />
      </ContainerImage>

      <Divider />

      <Body>
        <h2>기본 정보</h2>
        <Table>
          <tbody>
            <Tr>
              <Th>번호</Th>
              <td>No.1</td>
            </Tr>
            <Tr>
              <Th>이름</Th>
              <td>이상해씨</td>
            </Tr>
          </tbody>
        </Table>
        <h2>능력치</h2>
        <Table>
          <tbody>
            <Tr>
              <Th>공격력</Th>
              <td>999</td>
            </Tr>
            <Tr>
              <Th>방어력</Th>
              <td>999</td>
            </Tr>
          </tbody>
        </Table>
      </Body>

      <Footer>
        <PokeMarkChip />
      </Footer>
    </Container>
  );
};

const Container = styled.section`
  border: 1px solid #c0c0c0;
  border-radius: 16px;
  margin: 16px 32px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const ContainerImage = styled.section`
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  margin: 8px 0;
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
`;

const Divider = styled.hr`
  border-style: none;
  border-top: 1px dashed #d3d3d3;
  margin: 32px;
`;

const Body = styled.section`
  margin: 0 32px;
`;

const Table = styled.table`
  width: 100%;
  margin: 0 auto 16px;
  border-collapse: collapse;
  border-spacing: 0;
  th,
  td {
    padding: 6px 12px;
  }
`;

const Tr = styled.tr`
  border-width: 1px 0;
  border-style: solid;
  border-color: #f0f0f0;
`;

const Th = styled.th`
  width: 1px;
  white-space: nowrap;
  text-align: left;
  font-weight: normal;
  font-size: 14px;
  color: #a0a0a0;
`;

const Footer = styled.section`
  display: flex;
  flex-direction: row;
  margin: 32px 16px;
`;

export default PokeDetail;