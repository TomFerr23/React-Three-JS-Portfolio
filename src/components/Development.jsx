import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Oldpc from './Oldpc'
import styled from 'styled-components';

const Desc = styled.div`
width: 208px;
height: 208px;
padding: 20px;
background-color: #D6E8F0;
border-radius: 10px;
position: absolute;
top: 200px;
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
  height: 96px;
  text-align: left;
  font-size: 14px;
}
`;

const Development = () => {
  return (
    <>
    <Canvas>
      <Stage enviroment="city" intensity={0.6}>
      <Oldpc/>
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
    <Desc>
    Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.
    </Desc>
    </>
  )
}

export default Development