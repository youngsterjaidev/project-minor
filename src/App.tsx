import React, { useState, useRef, useContext } from "react";
import styled from "styled-components";
import axios from "axios"
import { Link } from "@reach/router"
import { typeScale } from "./utils";

import {
    HomeNav,
    HeadingContainer,
    ImageContainer,
    CustomerContainer,
    Modal,
    Input,
    Button,
    Sidebar,
    Footer,
} from "./components";
import UserContext from "./UserContext";

interface Props {
    path?: string;
    useDarkTheme: any;
    setUseDarkTheme: any;
    setToken: any;
}

const Container = styled.div`
    width: 25vw;
    min-width: 22em;
    padding: 2rem 1rem;
    display: grid;
    place-items: center;
    background-color: ${(props) => props.theme.backgroundColor};
    border-radius: 8px;
    box-shadow: 0px 0px 20px 1px ${(props) => props.theme.boxShadow};

    @media (max-width: 500px) {
        width: 100vw;
        min-height: 80vh;
        min-width: auto;
    }
`;

const Heading = styled.h4`
    text-align: center;
    font-size: ${typeScale.header4};
    color: ${(props) => props.theme.textColor};
`;

const Form = styled.form`
    width: 100%;
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
    background-color: ${(props) => props.theme.backgroundColor};
`;

const MyButton = styled(Button)`
    box-shadow: none;
`;

const MyTab = styled(Link)`
  font-style: normal;
  padding: 0.2em 1.5em;
  font-weight: bold;
  font-size: ${() => typeScale.paragraph};
  line-height: 28px;
  color: ${(props) => props.theme.textColor};
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  display: block;

  &:hover {
    background-color: ${(props) => props.theme.primaryColor};
    color: ${props => props.theme.textColorOnPrimary};
    border-radius: 3em;
    box-shadow: 0px 0px 44px 0px ${(props) => props.theme.boxShadow};
  }

`;

export default function App({ setUseDarkTheme, useDarkTheme, setToken }: Props) {
    const user = useContext(UserContext)
    const formRef = useRef<null | HTMLFormElement>(null);
    const [showModal, setShowModal] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleEmail(e: React.ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value);
        // @ts-ignore
        let isValid = formRef.current.checkValidity();
        if (isValid) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }

    function handlePassword(e: React.ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value);
        // @ts-ignore
        let isValid = formRef.current.checkValidity();
        if (isValid) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }

    async function handleSubmit(e) {
        // Preveent from page loading
        e.preventDefault()

        try {

            const data = {
                email,
                password
            }

            let res = await axios({
                url: `https://server967.herokuapp.comusers/login`,
                method: "POST",
                data: data
            })

            if (res.status === 200) {
                console.log("Login Successfully")
                console.log("Response : ", res)
		setToken(res.data)
            }

            console.log("Something Went Wrong !")
        } catch (e) {
            console.error("Error Occured while sending the user Info : ", e)
        }
    }

    return (
        <div>
            <HomeNav
                setShowModal={setShowModal}
                setShowSidebar={setShowSidebar}
                setUseDarkTheme={setUseDarkTheme}
                useDarkTheme={useDarkTheme}
            />
            <HeadingContainer />
            <ImageContainer />
            <CustomerContainer />
            {showSidebar ? (
                <Sidebar
                    showSidebar={showSidebar}
                    setShowSidebar={setShowSidebar}
                >
                    <div>
                        <MyTab to="">Login</MyTab>
                        <MyTab to="/result">Help</MyTab>
                        <MyTab to="" onClick={() => setUseDarkTheme(!useDarkTheme)}>Change Theme</MyTab>
                    </div>
                </Sidebar>
            ) : null}
            {showModal ? (
                <Modal showModal={showModal} setShowModal={setShowModal}>
                    <Container>
                        <Form ref={formRef} onSubmit={handleSubmit}>
                            <Heading>Welcome Back</Heading>
                            <FormGroup>
                                <MyInput
                                    id="email"
                                    value={email}
                                    type="email"
                                    placeholder="email"
                                    required
                                    onChange={handleEmail}
                                />
                            </FormGroup>
                            <FormGroup>
                                <MyInput
                                    type="password"
                                    id="password"
                                    value={password}
                                    placeholder="password"
                                    required
                                    onChange={handlePassword}
                                />
                            </FormGroup>
                            <ButtonGroup>
                                <MyButton disabled={disabled} type="submit">
                                    Login
                                </MyButton>
                                <div>Forgot Password</div>
                            </ButtonGroup>
                        </Form>
                    </Container>
                </Modal>
            ) : null}
            <Footer />
        </div>
    );
}
