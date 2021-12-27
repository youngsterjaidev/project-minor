import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Nav, Load, Footer, Modal } from "../components";
import {HiOutlineCheck,HiOutlineX   } from "react-icons/hi"
import { Illustrations } from "../assets"
import {
	Button
} from "../components"

import { shopData } from "../data"

console.log(shopData)

interface Prop {
    path: string;
    useDarkTheme: any;
    setUseDarkTheme: any;
		showSidebar: any;
		setShowSidebar: any;
}

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background: ${(props) => props.theme.backgroundColor};

`;

const ImageContainer = styled.div`
`

const Image = styled.img``

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

export const Shop: React.FC<Prop> = ({ showSidebar, setShowSidebar, useDarkTheme, setUseDarkTheme }) => {
    const [ready, setReady] = useState<null | boolean>(null);
    const [showModal, setShowModal] = useState(false)
		const [data, setData] = useState(shopData)

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
                            <Nav showSidebar={showSidebar} setShowSidebar={setShowSidebar} useDarkTheme={useDarkTheme} setUseDarkTheme={setUseDarkTheme} />
			
                            <ImageContainer>
															<Image src="https://images.unsplash.com/photo-1516453734593-8d198ae84bcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGV0JTIwc2hvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
														</ImageContainer>
                            <ShopName>{data[0].title}</ShopName>
                            <Description>{data[0].description}</Description>
                            <div>
                                <Button type="button" onClick={() => setShowModal(true)}>Set Appointment</Button>
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
