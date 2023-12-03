import React, { useState } from 'react'
import styled from 'styled-components'
import '/styles.css'
import Development from './Development'
import Uiux from './Uiux'
import GraphicDesign from './Graphicdesign'
import SocialMedia from './Socialmedia'


const data = [
  "UX/UI Design",
  "Development",
  "Graphic Design",
  "Social Media"
];


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 24px;
    justify-content: center;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
  font-family: 'Söhne', sans-serif;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: #f9f9f9;
    -webkit-text-stroke: 0px;
  }

  &::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    background-image: radial-gradient(ellipse at 20% 80%, #f0fcff 0%, #5bc2d9 10%, #0ba3c5 30%, #037f9a 60%, #0ba3c5 80%, #00bae2 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    &::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
    }
  }
  }
`;


const Right = styled.div`
  flex: 1;
`;

const Works = () => {
  const [work,setWork] = useState("Web Design")
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
            <ListItem key={item} text={item} onClick={()=>setWork(item)}>{item}</ListItem>
          ))}
          </List>
        </Left>
        <Right>
          {work === "Graphic Design" ? (<GraphicDesign />) : work === "Social Media" ? (<SocialMedia/>) : work === "Development" ? (<Development />) : ( <Uiux />)}
        </Right>
      </Container>
    </Section>
  );
};

export default Works