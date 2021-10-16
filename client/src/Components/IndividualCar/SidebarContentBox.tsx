import React from "react";
import styled from "styled-components";
import { Colors } from "../../Styles/Colors";

interface Props {
  label: string,
  content: number | string,
  icon: object,
}

const IconThings = styled.div`
  color: ${Colors.yellow};
  width: 4rem;
`;

const SidebarContainer = styled.div`
  border: 0.15rem solid ${Colors.lightGrey};
  display: flex;
  margin-left: 2rem;
  margin-bottom: 2rem;
  align-items: center;
  padding: 2rem 0;
`;

const LeftSide = styled.div`
  width: 10rem;
  display:flex;
  justify-content: center;
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightLabel = styled.div`
  font-size: 1rem;
  color: ${Colors.lightBlack};
`;
const RightContent = styled.div`
  font-size: 1.75rem;
  color: ${Colors.black};
  font-weight: 600;
`;

const SidebarContentBox: React.FC<Props> = ({ label, content, icon }) => {
  return (
    <SidebarContainer>
      <LeftSide>
        <IconThings>{icon}</IconThings>
      </LeftSide>
      <RightSide>
        <RightLabel>{label}</RightLabel>
        <RightContent>{content}</RightContent>
      </RightSide>
    </SidebarContainer>
  );
};

export default SidebarContentBox;
