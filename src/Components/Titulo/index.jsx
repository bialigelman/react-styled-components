import React from "react";
import styled from "styled-components";

const Title = styled.h1`
color: ${({theme}) => theme.text};
padding: 25px 0;
`;

const Titulo = ({ children }) => {
  return <Title className="titulo">{children}</Title>;
};
export default Titulo;

