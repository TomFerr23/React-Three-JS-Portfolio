import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import '/styles.css'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 32px 8px;
`;

const Left = styled.div`
flex: 2;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;

@media only screen and (max-width: 768px) {
  flex: 1;
  align-items: center;
`;
const Title = styled.h1`
font-size: 72px;
font-family: "Söhne", sans-serif;

@media only screen and (max-width: 768px) {
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

@media only screen and (max-width: 768px) {
  text-align: center;
  padding: 20px;
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

const Right = styled.div`
flex: 3;
position: relative;

@media only screen and (max-width: 768px) {
  flex: 1;
  width: 100%;
`;
const Img = styled.img`
width: 800px;
height: 800px
object-fit: contain;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
margin: auto;
animation: animate 2s infinite ease alternate;

@media only screen and (max-width: 768px) {
  width: 300px;
  height: 300px;

@keyframes animate {
  100% {
    transform: translateY(100px);
  }
}

`;

function Hero() {
  return (
    <Section>
      <Navbar/>
      <Container>
        <Left>
          <Title>Think. Make. Solve.</Title>
          <WhatWeDo>
            <Line src="./img/line.png"/>
            <Subtitle>What We Do</Subtitle>
          </WhatWeDo>
          <Desc>we enjoy creating delightful, human-centered digital experiences.</Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>
        <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.01}/>
            <directionalLight position={[-10,50,-10]} intensity={1}/>
         <Sphere args={[1,100,200]} scale={2.2}>

         <MeshDistortMaterial color="#38BDF8" attach="material" distort={0.4} spped={2} />
         </Sphere>
        </Canvas>
          <Img src="./img/moon.png" />
        </Right>
      </Container>
    </Section>
  )
}

export default Hero