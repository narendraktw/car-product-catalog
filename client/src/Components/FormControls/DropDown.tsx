import React, { useState } from "react";
import styled from "styled-components";
import { Colors } from "../../Styles/Colors";
import { DownArrow } from "@styled-icons/boxicons-solid/DownArrow";
import { UpArrow } from "@styled-icons/boxicons-solid/UpArrow";

const Main = styled("div")`
  font-family: sans-serif;
  margin-bottom: 2rem;
`;

const DownArrowIcon = styled(DownArrow)`
  color: ${Colors.lightBlack};
  width: 1rem;
    position: absolute;
    right: 0.5rem;
    top: 0.55rem;
`;
const UpArrowIcon = styled(UpArrow)`
  color: ${Colors.lightBlack};
  width: 1rem;
    position: absolute;
    right: 0.5rem;
    top: 0.55rem;
`;

const DropDownHeading = styled("div")`
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1rem;
    text-transform: uppercase;
`

const DropDownContainer = styled("div")`
  margin: 0 auto;
`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.4em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1rem;
  color: ${Colors.lightBlack};
  background: ${Colors.white};
  position: relative;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  border: 2px solid ${Colors.grey};
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 500;
`;

const ListItem = styled("li")`
  list-style: none;
  height: 2.2rem;
  display:flex;
  align-items: center;
  padding-left: 1em;
  background: ${Colors.white};
  color: ${Colors.lightBlack};
  &:hover {
    background: ${Colors.yellow};
    color: ${Colors.white};
  }
`;

interface Props {
  options: Array<string>,
  DropDownLabel: string,
  changeFilters: Function,
  filterType: string
}

export const DropDown: React.FC<Props> = ({ options, DropDownLabel, changeFilters, filterType }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: any) => () => {
    setSelectedOption(value);
    changeFilters(value, filterType);
    setIsOpen(false);
  };


  return (
    <Main>
      <DropDownHeading>{DropDownLabel}</DropDownHeading>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          {selectedOption || options[0]}
          {isOpen ? <DownArrowIcon /> : <UpArrowIcon />}
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map(option => (
                <ListItem onClick={onOptionClicked(option)} key={option}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Main>
  );
}