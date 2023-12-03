import React from 'react'
import styled from 'styled-components'
import { OrbitControls, } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import { Cube } from './Cube'
import '/styles.css'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    padding: 32px 8px;
`;

const Left = styled.div`
flex: 1;

@media only screen and (max-width: 768px) {
  display: none;
}
`;

const Title = styled.h1`
font-size: 72px;
font-family: "Söhne", sans-serif;

@media only screen and (max-width: 768px) {
  font-size: 60px;
`;


const Right = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;

@media only screen and (max-width: 768px) {
  align-items: center;
  text-align: center;
`;

const WhatWeDo = styled.div`
display: flex;
align-items: center;
gap: 10px;
`;

const Line = styled.img`
height: 5px;
`;

const Subtitle = styled.h2`
font-family: "Söhne", sans-serif;
color: #38BDF8;
`;

const Desc = styled.p`
font-size: 24px;
color: #8F9EB2;
font-family: "PP Mori", sans-serif;
font-weight: 300;
`;

const Button = styled.button`
background-color: #38BDF8;
color: #fff;
border: none;
font-weight: 700;
font-family: "Söhne", sans-serif;
border-radius: 5px;
width: 150px;
padding: 10px;
cursor: pointer;
`;

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
        <Canvas camera={{fov:25, position:[5,5,5]}}>
            <OrbitControls enableZoom={false} autoRotate/>
            <ambientLight intensity={1}/>
            <directionalLight position={[3,2,1]} intensity={1}/>
         <Cube/>
        </Canvas>
        </Left>
        <Right>
        <Title>Think outside the square space</Title>
          <WhatWeDo>
            <Line src="./img/line.png"/>
            <Subtitle>Who we Are</Subtitle>
          </WhatWeDo>
          <Desc>a creative designer developer with a passion for the arts.</Desc>
          <Button>See my work</Button>
        </Right>
      </Container>
    </Section>
  )
}

export default Who