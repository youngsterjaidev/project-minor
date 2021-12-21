import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Nav, Load, Footer, Modal } from "../components";
import {HiOutlineCheck,HiOutlineX   } from "react-icons/hi"

interface Prop {
    path: string;
    useDarkTheme: any;
    setUseDarkTheme: any;
}

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background: ${(props) => props.theme.backgroundColor};
`;

const ImageContainer = styled.div`
    height: 80vh;
    background: red;
`

const ShopName = styled.h2`
    text-align: center;
    font-size: ${props => props.theme.header2}
    color: ${prop => prop.theme.textColor};
`

const Description = styled.div`
    color: ${prop => prop.theme.textColor};
`

const TimingCard = styled.div`
    padding: 1rem;
    border-radius: 8px;
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor};
`

export const Shop: React.FC<Prop> = ({ useDarkTheme, setUseDarkTheme }) => {
    const [ready, setReady] = useState<null | boolean>(null);
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        // call the server
        // make a dummy call
        setTimeout(() => {
            setReady(true);
        }, 1000);
    });

    return (
        <>
            {ready === null ? (
                <Load />
            ) : (
                <>
                    {ready === true ? (
                        <Container>
                            <Nav useDarkTheme={useDarkTheme} setUseDarkTheme={setUseDarkTheme} />
                            <ImageContainer>Images</ImageContainer>
                            <ShopName>Shop Name</ShopName>
                            <Description>Shop Descriptions</Description>
                            <div>
                                <button type="button" onClick={() => setShowModal(true)}>Set Appointment</button>
                            </div>
                            {showModal ? (
                            <Modal showModal={showModal} setShowModal={setShowModal}>
                                <TimingCard>
                                    <h1>Available Times</h1>
                                    <div>4:00PM <HiOutlineCheck size="1.8em" /><HiOutlineX size="1.8em" /></div>
                                    <button type="button">Confirm</button>
                                </TimingCard>
                            </Modal>
                            ) : null}
                            <Footer />
                        </Container>
                    ) : (
                        <div>No Result Found !</div>
                    )}
                </>
            )}
        </>
    );
};
