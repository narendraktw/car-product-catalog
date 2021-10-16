import React from "react";
import styled from "styled-components";
import { Colors } from "../../Styles/Colors";
import { DropDown } from "../FormControls/DropDown";
import CustomRangeSlider from "../FormControls/CustomRangeSlider";
import { Makes, TRANSMISSIONs, FuelTypes } from "../../CarData";

const FilterSidebarContainer = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    background-color: ${Colors.grey};
    padding: 2rem;
`
interface PropType {
    filterCars: Function,
}
const FilterSidebar: React.FC<PropType> = (props) => {
    const { filterCars } = props;
    return (
        <FilterSidebarContainer>
            <DropDown DropDownLabel="BY MAKE" options={Makes} changeFilters={filterCars} filterType="MAKE" />
            <DropDown DropDownLabel="FUEL TYPE" options={FuelTypes} changeFilters={filterCars} filterType="FUEL_TYPE" />
            <DropDown DropDownLabel="TRANSMISSION TYPE" options={TRANSMISSIONs} changeFilters={filterCars} filterType="TRANSMISSION" />
            <CustomRangeSlider initial={0} last={100000} label="PRICE RANGE" />
        </FilterSidebarContainer>
    )
}

export default FilterSidebar;