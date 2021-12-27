import React, { FC, useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { defaultTheme, typeScale } from "../../utils";
import {WiMoonAltFirstQuarter} from "react-icons/wi"
import { Link } from "@reach/router";
import UserContext from "../../UserContext";

interface Prop {
    setShowModal: any;
    setShowSidebar: any;
    setUseDarkTheme: any;
    useDarkTheme: any;
}

interface ContainerProp {
    shadow: boolean;
}

const Container = styled.div<ContainerProp>`
    width: 100%;
    height: auto;
    display: flex;
    padding: 0.5em 2em;
    flex-flow: row nowrap;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 1;
    align-items: center;
    background-color: ${(props) => props.theme.backgroundColor};
    box-shadow: ${(props) =>
        props.shadow ? "0px 4px 4px rgba(0, 0, 0, 0.25)" : "none"};
`;

const Logo = styled.div`
    font-size: 24px;
    font-weight: bold;
    color: ${(props) => props.theme.textColor};
`;

const NavTabs = styled.div`
    display: flex;
    flex-flow: row nowrap;
`;

const NavTab = styled(Link)`
    font-style: normal;
    padding: 0.2em 1.5em;
    font-weight: bold;
    font-size: ${() => typeScale.paragraph};
    line-height: 28px;
    color: ${(props) => props.theme.textColor};
    cursor: pointer;
    display: flex;
    place-items: center;
    text-decoration: none;

    &:hover {
        background-color: ${() => defaultTheme.primaryColor};
        color: ${() => defaultTheme.textColorOnPrimary};
        border-radius: 3em;
        box-shadow: 0px 0px 44px 0px ${(props) => props.theme.boxShadow};
    }

    @media (max-width: 550px) {
        display: none;
    }
`;

const IconTab = styled(NavTab)`
`

const Hamburger = styled.div`
    display: none;

    & > svg {
        fill: ${(props) => props.theme.textColor};
        cursor: pointer;
    }

    @media (max-width: 500px) {
        display: block;
    }
`;

export const HomeNav: FC<Prop> = ({ 
    setShowModal, 
    setShowSidebar,
    useDarkTheme,
    setUseDarkTheme
}) => {
    const [user, setUser] = useContext(UserContext);
    const [shadow, setShadow] = useState(false);

    function handleScroll(e) {
        if (window.scrollY <= 50) {
            setShadow(false);
            return null;
        }
        setShadow(true);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <Container shadow={shadow}>
            <Logo>Apis</Logo>
            <NavTabs>
                <IconTab to="" onClick={() => setUseDarkTheme(!useDarkTheme)}>
                    <WiMoonAltFirstQuarter size="1.8em" />
                </IconTab>
                <NavTab to="/result">Help</NavTab>
                <NavTab to="/join">Join</NavTab>
                <NavTab
                    to={user ? "/dashboard" : ""}
                    onClick={() => setShowModal(true)}
                >
									{user ? "Account" : "Sign In"}
                </NavTab>
                <Hamburger onClick={() => setShowSidebar(true)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"></path>
                    </svg>
                </Hamburger>
            </NavTabs>
        </Container>
    );
};
