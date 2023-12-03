import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Social from './Social'
import styled from 'styled-components';

const Desc = styled.div`
width: 200px;
height: 180px;
padding: 20px;
background-color: #D6E8F0;
border-radius: 10px;
position: absolute;
bottom: 200px;
right: 100px;
color: #171717;
font-size: 16px;
font-weight: 300;

@media only screen and (max-width: 768px) {
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  width: 300px;
  height: 80px;
  text-align: left;
  font-size: 14px;
}
`;

const Socialmedia = () => {
  return (
    <>
    <Canvas>
      <Stage enviroment="city" intensity={0.6}>
      <Social/>
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
    <Desc>
    Social media are interactive computer-mediated technologies that facilitate the creation or sharing of information, ideas, career interests and other forms of expression via virtual communities and networks.
    </Desc>
    </>
  )
}

export default Socialmedia