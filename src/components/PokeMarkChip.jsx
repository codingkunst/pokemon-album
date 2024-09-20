import styled from "@emotion/styled";
import React from "react";

const PokeMarkChip = () => {
  return (
    <Chip>
      <ChipText>Pokémon</ChipText>
    </Chip>
  );
};

const Chip = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #c0c0c0;
  border-radius: 16px;
  font-weight: bold;
  font-size: 14px;
  box-shadow: 0.5px 0.5px 0 0 #c0c0c0;

  margin-right: 16px;
  margin-left: auto;
`;

const ChipText = styled.div`
  padding: 0 8px;
  font-size: 14px;
`;

export default PokeMarkChip;
