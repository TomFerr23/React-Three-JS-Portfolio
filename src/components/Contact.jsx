import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components'
import Map from './Map'
import '/styles.css'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-weight: 500;
  font-family: "Söhne", sans-serif;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: #f5f5f5;
  border: none;
  border-radius: 5px;
  font-family: "PP Mori", sans-serif;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #f5f5f5;
  font-family: "PP Mori", sans-serif;
`;

const Button = styled.button`
  background-color: #38BDF8;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  padding: 20px;
  font-family: "Söhne", sans-serif;
`;

const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;




const Contact = () => {
  const ref = useRef();
const [success, setSuccess] = useState(null);

const handleSubmit = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_c08q29c', 'template_6aku0za', ref.current, 'V8GUxhA_Z7xiqZvK8')
      .then((result) => {
          console.log(result.text);
          setSuccess(true)
      }, (error) => {
          console.log(error.text);
          setSuccess(false)
      });

}


  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact</Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea placeholder="Write your message" name="message" rows={10} />
            <Button type="submit">Send</Button>
            {success && "Thank you for your message. I'll get back to you soon!"}
          </Form>
        </Left>
        <Right>
          <Map/>
        </Right>
      </Container>
    </Section>
  );
};

export default Contact