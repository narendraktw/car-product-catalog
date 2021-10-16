import React from "react";
import { CarDataType } from "../../CarData";
import styled from "styled-components";
import { Colors } from "../../Styles/Colors";
import { Speedometer } from "@styled-icons/bootstrap/Speedometer";
import { GasPump } from "@styled-icons/boxicons-solid/GasPump";
import { BrightnessAuto } from "@styled-icons/material-twotone/BrightnessAuto";
import { Link } from "react-router-dom";

interface Props {
  car: CarDataType;
}
const MileageIcon = styled(Speedometer)`
  color: ${Colors.lightBlack};
  width: 2rem;
`;
const FuelTypeIcon = styled(GasPump)`
  color: ${Colors.lightBlack};
  width: 2rem;
`;
const AutomationIcon = styled(BrightnessAuto)`
  color: ${Colors.lightBlack};
  width: 2rem;
`;

const CarPrice = styled.div`
  background-color: ${Colors.yellow};
  color: ${Colors.white};
  display: flex;
  justify-content: center;
  padding-top: 1.5rem;
  width: 100%;
  height: 60px;
  margin-top: 32px;
  font-size: 1.2rem;
  box-sizing: border-box;
  position: relative;
  &:after {
    content: "";
    height: 32px;
    width: 113%;
    position: absolute;
    bottom: 45px;
    left: -6px;
    display: inline-block;
    background: ${Colors.grey};
    transform: rotate(-6deg);
  }
`;

const CarInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 268px;
  color: ${Colors.lightBlack};
  background-color: ${Colors.grey};
  overflow: hidden;
  margin-bottom: 2rem;
  &:hover ${CarPrice} {
    background-color: ${Colors.black};
  }
`;

const CarName = styled.h1`
  color: ${Colors.black};
  font-size: 1.2rem;
  font-weight: 500;
  position: relative;
  margin-bottom: 2rem;
  &::before {
    content: "";
    width: 40px;
    border-bottom: 1px solid ${Colors.yellow};
    display: block;
    position: absolute;
    bottom: -0.2rem;
    left: 45%;
    margin-left: -20px;
  }
  &::after {
    content: "";
    width: 40px;
    border-bottom: 1px solid ${Colors.yellow};
    display: block;
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    margin-left: -20px;
  }
`;

const CarImage = styled.img`
  width: 100%;
  height: auto;
`;
const IconLabel = styled.span`
  font-size: 1rem;
`;

const IconInfo = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const SpecsDetail = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

const NavFixedItem = styled(Link)` 
  text-decoration:none;
  margin-right:15px;
  cursor:pointer;
`;

const numberWithCommas = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const CarDetail: React.FC<Props> = ({ car }) => {
  return (
    <NavFixedItem to={`/${car.id}`}>
      <CarInfo>
        <CarImage
          alt={car.name}
          src={
            `${process.env.PUBLIC_URL}/assets/images/featured-images/${car.id}.jpg`
          }
        />
        <CarName>{car.name}</CarName>
        <SpecsDetail>
          <IconInfo>
            <MileageIcon /> <IconLabel>{car.specification.MILEAGE}</IconLabel>
          </IconInfo>
          <IconInfo>
            <FuelTypeIcon /> <IconLabel>{car.specification.FUEL_TYPE}</IconLabel>
          </IconInfo>
          <IconInfo>
            <AutomationIcon />{" "}
            <IconLabel>{car.specification.TRANSMISSION}</IconLabel>
          </IconInfo>
        </SpecsDetail>
        <CarPrice>$ {numberWithCommas(car.price)}</CarPrice>
      </CarInfo>
    </NavFixedItem>
  );
};

export default CarDetail;
