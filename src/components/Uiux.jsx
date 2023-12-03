import React from 'react'
import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Machine from './Machine'
import styled from 'styled-components'

const Desc = styled.div`
width: 200px;
height: 180px;
padding: 20px;
background-color: #D6E8F0;
border-radius: 10px;
position: absolute;
top: 100px;
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

const Uiux = () => {
  return (
    <>
    <Canvas>
      <Stage enviroment="city" intensity={0.6}>
      <Machine/>
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
    <Desc>
    UI/UX is the design of user interfaces for machines and software, such as computers, home appliances, mobile devices, and other electronic devices, with the focus on maximizing usability and the user experience.
    </Desc>
    </>
  );
};

export default Uiux