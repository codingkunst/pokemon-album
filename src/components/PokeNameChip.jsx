import React from "react";
import styled from "@emotion/styled";

const PokeNameChip = () => {
  return (
    <Chip>
      <ChipNumber>
        <ChipNumberText>000</ChipNumberText>
      </ChipNumber>
      <ChipName>이상해씨</ChipName>
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
  background-color: yellow;
  border-radius: 16px;
  opacity: 0.8;
`;

const ChipNumberText = styled.label`
  opacity: 1;
`;

const ChipName = styled.label`
  margin: 0 8px 0 5px;
`;

export default PokeNameChip;
