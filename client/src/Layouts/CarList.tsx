import React, { useEffect, useState } from "react";
import { CarDataType } from "../CarData";
import CarDetail from "../Components/CarList/CarDetail";
import styled from "styled-components";
import FilterSidebar from '../Components/CarList/FilterSidebar'
import { useQuery } from "@apollo/client";
import { LOAD_CARS } from "../GraphQL/Queries";

const CarListContainer = styled.div`
  display: flex;
  margin: 4rem;
`
const CarListItem = styled.div`
  display:flex;
  flex-wrap:wrap;
  flex: 3;  
`
const NoCarData = styled.div`
  display:flex;
  flex-wrap:wrap;
  flex: 3;
  align-item:center;
  justify-content:center;
  font-size:3rem;  
`
const CarList: React.FC = () => {
  const { loading, data, error } = useQuery(LOAD_CARS);
  const [carData, setCarData] = useState<Array<CarDataType>>([]);

  useEffect(() => {
    if (data) {
      console.log("data", data);
      setCarData(data.getAllCars)
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  const filterCars = (value, type) => {
    if (value === "All Makes" || value === "All Fuel Types" || value === "All TRANSMISSIONs") {
      setCarData(data.getAllCars)
    }
    else {
      setCarData(data.getAllCars.filter((item: CarDataType) => item.specification[type] === value))
    }
  }

  return (
    <CarListContainer>
      <CarListItem>
        {carData.length > 0 ? carData?.map((car: CarDataType) => (
          <CarDetail car={car} key={car.id} />
        )) :
          <NoCarData>No Car data available</NoCarData>
        }
      </CarListItem>
      <FilterSidebar filterCars={filterCars} />
    </CarListContainer>
  );
};

export default CarList;
