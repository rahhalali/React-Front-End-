import styled from "styled-components";

export const Box = styled.div`
  padding: 80px 40px 80px 100px;
  background: black;
  position: relative;
  left: 0;
  bottom: 0;
  top: auto;
  width: 100%;

  @media (max-width: 1000px) {
    padding: 60px 10px;
    overflow-x: hidden;
  }
`;
export const H1 = styled.h1`
margin:0px 220px 0px 0px;
  @media (max-width: 700px) {
    width: 90%;
    text-align: center;
    font-size: 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width:900px;
  margin: 0 auto;
  /* background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 40px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 10px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: green;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;
