import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Tablet from './Tablet'
import styled from 'styled-components';

const Desc = styled.div`
width: 228px;
height: 208px;
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
  height: 104px;
  text-align: left;
  font-size: 14px;
}
`;

const GraphicDesign = () => {
  return (
    <>
    <Canvas>
      <Stage enviroment="city" intensity={0.6}>
      <Tablet/>
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
    <Desc>
    Graphic design is the process of visual communication and problem-solving through the use of typography, photography, iconography and illustration. The field is considered a subset of visual communication and communication design, but sometimes the term "graphic design" is used synonymously.
    </Desc>
    </>
  )
}

export default GraphicDesign