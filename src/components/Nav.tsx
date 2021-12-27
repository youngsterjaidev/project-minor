import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { WiMoonAltFirstQuarter } from "react-icons/wi";
import { AiOutlineUser, AiOutlineLogout } from "react-icons/ai";
import { typeScale } from "../utils";
import { Link, navigate } from "@reach/router";
import UserContext from "../UserContext"
import { IoIosArrowBack } from "react-icons/io";

import { Input } from "./Elements";

import { 
	Sidebar
} from "../components"

console.log(Input);

interface Props {
    useDarkTheme: any;
    setUseDarkTheme: any;
		showSidebar: any;
		setShowSidebar: any;
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
    align-items: cetner;
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

const InputWrapper = styled.div`
    width: 100%;
    height: auto;
    position: relative;
    display: grid;
		padding: 0.2em 1em;
    place-items: center;
`;

const SearchInput = styled(Input)`
    min-width: 400px;
		/*width: 100%;*/
    padding: 0.5em 2em;

    @media (max-width: 500px) {
        min-width: auto;
				width: 100%;
    }
`;

const Result = styled.div`
    position: absolute;
    bottom: -8em;
    background: ${props => props.theme.color};
    color: ${props => props.theme.textColor};
    min-width: 400px;
    display: none;
    border-radius: 0.7em;
  box-shadow: 0px 0px 19px 3px ${(props) => props.theme.boxShadow};
`;

const LogoTabs = styled(Link)`
    display: flex;
    flex-flow: row nowrap;
    align-items: cetner;
    text-decoration: none;
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
        background-color: ${(props) => props.theme.primaryColor};
        color: ${(props) => props.theme.textColorOnPrimary};
        border-radius: 3em;
        box-shadow: 0px 0px 44px 0px ${(props) => props.theme.boxShadow};
    }

    @media (max-width: 550px) {
        display: none;
    }
`;

const LogoutTab = styled.div`
		font-style: normal;
    padding: 0.2em 1.5em;
    font-weight: bold;
    font-size: ${() => typeScale.paragraph};
    line-height: 28px;
    color: ${(props) => props.theme.textColor};
    cursor: pointer;
    display: flex;
    place-items: center;

    &:hover {
        background-color: ${(props) => props.theme.primaryColor};
        color: ${(props) => props.theme.textColorOnPrimary};
        border-radius: 3em;
        box-shadow: 0px 0px 44px 0px ${(props) => props.theme.boxShadow};
    }

    @media (max-width: 550px) {
        display: none;
    }
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

const BackBtn = styled(IoIosArrowBack)`
    color: ${(props) => props.theme.textColor};
`;

export const Nav: React.FC<Props> = ({ 
			useDarkTheme, 
			setUseDarkTheme,
			showSidebar,
			setShowSidebar
		}) => {
		const [user, setUser]  = useContext(UserContext)
    const [shadow, setShadow] = useState(false);

    function handleScroll(e) {
        if (window.scrollY <= 0) {
            setShadow(false);
            return null;
        }
        setShadow(true);
    }

		function logout() {
			console.info("logout")
			console.log(user, setUser)
			setUser()
			navigate("/")
		}

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.addEventListener("scroll", handleScroll);
    }, []);

		return (
        <Container shadow={shadow}>
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
            <LogoTabs
                to="/"
                onClick={() => {
                    window.history.back();
                }}
            >
                <BackBtn size="1.8em" />
                <Logo>Apis</Logo>
            </LogoTabs>
            <InputWrapper>
                <SearchInput placeholder="Search" />
                <Result>
                    <div>Okay</div>
                    <div>Okay</div>
                    <div>Okay</div>
                    <div>Okay</div>
                    <div>Okay</div>
                    <div>Okay</div>
                </Result>
            </InputWrapper>
            <NavTabs>
                <NavTab to="" onClick={() => setUseDarkTheme(!useDarkTheme)}>
                    <WiMoonAltFirstQuarter size="1.6em" />
                </NavTab>
                <NavTab to="">
                    <AiOutlineUser size="1.6em" />
                </NavTab>
								<LogoutTab
									onClick={logout}
								>
                    <AiOutlineLogout size="1.6em" />
                </LogoutTab>
                <Hamburger
									onClick={
										() => {
											console.log("show Sidebar", setShowSidebar)
											setShowSidebar(!showSidebar)
										}
									}
								>
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
