import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  H1,
} from "./FooterStyle";

const Footer = () => {
  const [nav ,setnav] =useState([]);
  useEffect(async() => {
    const response = await fetch("http://localhost:4001/footer");
    const info = await response.json();
    //console.log(data);
    console.log("ali", info.data);
    console.log("abbas");
    setnav(info.data);
    
    AOS.init({ duration: 500 });
  }, []);
  console.log("nav",nav);
  return (
    <Box id="box" style={{ height: "100%" }} data-aos="zoom-in">
      <H1
        style={{
          color: "green",
          textAlign: "center",
          marginTop: "-50px",
          marginBottom: "1%",
        }}
      >
        Gaming For Fun: Play As Much As You Can .....
      </H1>
      <Container>
        {
          nav.map((num,index)=>{
            return(
              <Row key={index}>
              <Column>
                <Heading>About Us</Heading>
                <FooterLink href={num.aim} target="_blank">Aim</FooterLink>
                <FooterLink href={num.vision}>Vision</FooterLink>
                <FooterLink href="#">Teaching</FooterLink>
              </Column>
              <Column>
                <Heading>Services</Heading>
                <FooterLink href={num.internships}>Internships</FooterLink>
                <FooterLink href={num.coding}>Coding</FooterLink>
                <FooterLink href={num.anasweb}>ANAS Web</FooterLink>
              </Column>
              <Column>
                <Heading>Social Media</Heading>
                <FooterLink href={num.facebook}>
                Facebook
                </FooterLink>
                <FooterLink href={num.instagram}>
                Instagram
                </FooterLink>
                <FooterLink href={num.twitter}>
                 Twitter
                </FooterLink>
              </Column>
            </Row>
            )
          })
        }
       
      </Container>
    </Box>
  );
};
export default Footer;
