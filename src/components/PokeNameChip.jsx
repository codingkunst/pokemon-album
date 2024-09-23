import React from "react";
import styled from "@emotion/styled";

const PokeNameChip = (props) => {

  // id를 3자리 숫자로 나타내는 함수
  const renderNumber = (id) => {
    const digits = 3;
    // const numberString = id.toString();
    const numberString = "" + id;
    numberString.toString();

    if (numberString.length >= digits) {
      return numberString;
    }

    let result = "";

    for (let i = 0; i < digits - numberString.length; i++) {
      result += "0";
    }

    return `${result}${numberString}`;
  };

  return (
    <Chip>
      <ChipNumber color={props.color}>
        <ChipNumberText>{renderNumber(props.id)}</ChipNumberText>
      </ChipNumber>
      <ChipName>{props.name}</ChipName>
      {/* <ChipName>이상해씨</ChipName> */}
    </Chip>
  );
};

const Chip = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #c0c0c0;
  border-radius: 16px;
  font-weight: bold;
  box-shadow: 0.5px 0.5px 0 0 #c0c0c0;
`;

const ChipNumber = styled.div`
  padding: 4px 6px;
  /* background-color: yellow; */
  background-color: ${(props) => props.color};
  border-radius: 16px;
  opacity: 0.8;
  color: whitesmoke;
`;

const ChipNumberText = styled.label`
  opacity: 1;
`;

const ChipName = styled.label`
  margin: 0 8px 0 5px;
`;

export default PokeNameChip;
