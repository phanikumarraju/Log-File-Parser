import { FC } from "react";
import styled from "styled-components";

/**
 *The Props for the component are defined here with their types.
 */
export interface Props {
  title: string;
}

const Header: FC<Props> = (props: Props) => {
  const { title } = props;
  const icons = {
    company: "./icons/DigIO.png",
    react: "./icons/react.svg",
  };
  return (
    <HeaderContainer>
      <Logo src={icons.company} alt="logo" />
      <Logo src={icons.react} alt="react" />
      <HeaderContent>{title}</HeaderContent>
    </HeaderContainer>
  );
};

export default Header;

/**
 * Styled components that define the css stylings of Header.
 */
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 75px;
  text-align: center;
  background-color: rgb(249, 249, 249);
  box-shadow: 0px 5px 10px grey;
  padding-top: 10px;
`;

const HeaderContent = styled.p`
  background-color: rgb(249, 249, 249);
  text-align: center;
  padding-right: 10px;
  font-size: 22px;
  color: chocolate;
  font-weight: 800;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Logo = styled.img`
  height: 50px;
  width: auto;
  padding: 10px;
`;
