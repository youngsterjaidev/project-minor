import React, { FC } from "react";
import styled, { ThemeConsumer } from "styled-components";
import { Link, navigate } from "@reach/router";
import { Input, Button } from "../components";
import { Illustrations } from "../assets";
import { typeScale } from "../utils";
import axios from "axios";

interface Props {
  path: string;
  useDarkTheme: any;
  setUseDarkTheme: any;
}

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  min-height: 100vh;
  background: ${(props) => props.theme.backgroundColor};

  @media (max-width: 500px) {
    flex-flow: column nowrap;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  flex: 1.5;
`;

const FormContainer = styled.div`
  width: 100%;
  padding: 0em 2em;
  display: grid;
  align-items: center;
  flex: 1;
`;

const Form = styled.div`
  width: 100%;
`;

const Heading = styled.h3`
  text-align: center;
  margin: 0.5em 0em;
  font-size: ${typeScale.header3};
  color: ${(props) => props.theme.textColor};
`;

const SubHeading = styled.h4`
  text-align: center;
  margin: 0.5em 0em;
  font-size: ${typeScale.header4};
  color: ${(props) => props.theme.textColor};
`;

const FormGroup = styled.div`
  padding: 0.7em;
`;

const ButtonGroup = styled(FormGroup)`
  display: grid;
  place-items: center;
`;

const MyInput = styled(Input)`
  width: 100%;
  min-width: auto;
  display: block;
`;

const MyButton = styled(Button)`
  width: 100%;
  display: block;
  box-shadow: 0px 0px 10px 1px ${(props) => props.theme.boxShadow};
`;

const MyLink = styled(Link)`
  text-align: center;
  display: block;
  width: 100%;
  padding: 1em 0em;
  text-decoration: none;
  color: ${(props) => props.theme.textColor};
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
`;

export class SignUp extends React.Component<Props> {

  state = {
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  }

  handleChange = (e) => {
    let target = e.target
    this.setState({ [target.name]: target.value })
  }

  handleSubmit = async (e) => {
    // prevent from page loading
    e.preventDefault()

    try {
      let res = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_SERVER_URI}/users/add`,
        data: this.state
      })

      if (res.status === 200) {
        console.log(res.data)
				navigate("/dashboard")
      }

      console.log("Something went wrong !")
    } catch (e) {
      console.error("Error Occured while adding the user", e)
    }
  }

  render() {
    return (
      <Container>
        <ImageContainer>
          <Image src={Illustrations.Bird} alt="" />
        </ImageContainer>
        <FormContainer>
          <div>
            <Heading>Join us</Heading>
            <SubHeading>Create An Account !</SubHeading>
            <Form>
              <FormGroup>
                <MyInput
                  placeholder="username"
                  name="username"
                  value={this.state.username}
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <MyInput
                  placeholder="email"
                  name="email"
                  value={this.state.email}
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <MyInput
                  onChange={this.handleChange}
                  placeholder="phone"
                  name="phone"
                  value={this.state.phone}
                  type="text" />
              </FormGroup>
              <FormGroup>
                <MyInput
                  onChange={this.handleChange}
                  placeholder="password"
                  name="password"
                  value={this.state.password}
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <MyInput
                  onChange={this.handleChange}
                  placeholder="confirmPassword"
                  value={this.state.confirmPassword}
                  type="text"
                />
              </FormGroup>
            </Form>
            <FormGroup>
              <MyButton>Create An Account !</MyButton>
              <MyLink to="/">Home</MyLink>
            </FormGroup>
          </div>
        </FormContainer>
      </Container>
    );
  }
};
