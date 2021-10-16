import React from "react";
import { CarDataType } from "../../CarData";
import styled from "styled-components";
import { Colors } from "../../Styles/Colors";

interface Props {
  specs: CarDataType;
}

const CarSpecificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.white};
  margin: 2rem 0;
  border: 1px solid ${Colors.lightGrey};
`;
const CarSpecificationItem = styled.div`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    border-bottom: 1px solid ${Colors.lightGrey};
  }
`;
const SpecificationLabel = styled.div`
  display: flex;
  font-size: 1rem;
  width: 50%;
  box-sizing: border-box;
  
  text-transform: uppercase;
  font-weight:600;
  padding:1% 5%;
`;
const SpecificationContent = styled.div`
  display: flex;
  font-size: 1rem;
`;
const CarSpecificationHeading = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
`

const CarSpecification: React.FC<Props> = ({ specs }) => {
  return (
    <>
      <CarSpecificationHeading>Specifications:</CarSpecificationHeading>
      <CarSpecificationContainer>
        {Object.entries(specs.specification).map(specItem =>
          <CarSpecificationItem>
            <SpecificationLabel>{specItem[0]}:</SpecificationLabel>
            <SpecificationContent>{specItem[1]}</SpecificationContent>
          </CarSpecificationItem>
        )}
      </CarSpecificationContainer>
    </>
  );
};

export default CarSpecification;
