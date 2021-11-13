import React from "react";
import { Link, useParams } from "react-router-dom"
import { useQuery } from "@apollo/client";
import { LOAD_CARS_BY_ID } from "../GraphQL/Queries";
import styled from "styled-components";
import { Speedometer } from "@styled-icons/bootstrap/Speedometer";
import { GasPump } from "@styled-icons/boxicons-solid/GasPump";
import { BrightnessAuto } from "@styled-icons/material-twotone/BrightnessAuto";
import CustomCarousel from "../Components/Carousel/CustomCarousel";
import CarSpecification from "../Components/IndividualCar/CarSpecification";
import SidebarContentBox from "../Components/IndividualCar/SidebarContentBox";
import { numberWithCommas } from '../Utils/helper';
import { Colors } from "../Styles/Colors";
const IndividualDescription = styled.p`
  color: ${Colors.lightBlack};
  font-weight: 400;
  font-size: 1rem;
`;
const IndividualCarContainer = styled.div`
  display: flex;
  margin: 4rem;
`;
const IndividualCarHeader = styled.div`
  display: flex;
  justify-content:space-between;
  margin-bottom:2rem;
  font-size:2.2rem;
  font-weight: 600;
`;
const IndividualCarName = styled.div``;
const IndividualCarPrice = styled.div`
  background-color: ${Colors.black};
  color:${Colors.white};
  padding: 0 1.5rem;
  position:relative;
  transform: skewX(-10deg);
`;

const IndividualCarDetail = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
`;
const IndividualCarSidebar = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
const CarSpecificationHeading = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
`
interface ParamTypes {
  id: string;
}

const IndividualCar: React.FC = () => {
  const { id } = useParams<ParamTypes>();
  const { loading, data, error } = useQuery(LOAD_CARS_BY_ID, {
    variables: { id: +id }
  });
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  const CarDataById = data.getCarById;
  const carouselItems = [1, 2, 3, 4, 5, 6, 7];

  return (
    <>
      <IndividualCarContainer>
        <IndividualCarDetail>
          <IndividualCarHeader>
            <IndividualCarName>
              {CarDataById.name}
            </IndividualCarName>
            <IndividualCarPrice>
              $ {numberWithCommas(CarDataById.price)}
            </IndividualCarPrice>
          </IndividualCarHeader>
          <CustomCarousel
            autoPlay={true}
            swipeable={true}
            infiniteLoop={true}
            carouselItems={carouselItems}
            alt={CarDataById.name}
          />
          <CarSpecificationHeading>Description:</CarSpecificationHeading>
          <IndividualDescription>
            {CarDataById.description}
          </IndividualDescription>
          <CarSpecification specs={CarDataById} />
        </IndividualCarDetail>
        <IndividualCarSidebar>
          <SidebarContentBox
            label="MILEAGE"
            content={CarDataById.specification.MILEAGE}
            icon={<Speedometer />}
          />
          <SidebarContentBox
            label="FUEL"
            content={CarDataById.specification.FUEL_TYPE}
            icon={<GasPump />}
          />
          <SidebarContentBox
            label="TRANSMISSION"
            content={CarDataById.specification.TRANSMISSION}
            icon={<BrightnessAuto />}
          />
          <Link to="/" style={{ display: 'flex', justifyContent: 'flex-end' }}>Back to Home</Link>
        </IndividualCarSidebar>
      </IndividualCarContainer>
    </>
  );
};

export default IndividualCar;
