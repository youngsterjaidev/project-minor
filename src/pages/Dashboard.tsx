import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { typeScale } from "../utils";
import { Link, navigate, Redirect } from "@reach/router";
import { Nav, Load } from "../components";
import UserContext from "../UserContext";

interface Props {
    path?: string;
    useDarkTheme: any;
    setUseDarkTheme: any;
}

interface Result {
    id: number;
    day: string;
    timing: string;
    shop: string;
}

const Container = styled.div`
    background-color: ${(props) => props.theme.backgroundColor};
`;

const Wrapper = styled.div`
    display: grid;
    position: sticky;
    top: 2em;
    grid-template-columns: minmax(150px, 25%) 1fr;
`;

const Body = styled.div`
    padding: 1em;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

const Card = styled(Link)`
    text-decoration: none;
    height: 200px;
    display: block;
    height: 25em;
    background-color: white;
    border-radius: 8px;
    padding: 1em;
    display: grid;
    margin: 1em 2em;
    place-items: center;
    box-shadow: none;
    background-color: ${(props) => props.theme.backgroundColor};
    transition: box-shadow 0.3s linear;

    &:hover {
        box-shadow: 0px 0px 43px 1px ${(props) => props.theme.boxShadow};
    }
`;

const Day = styled.h3`
    font-size: ${typeScale.header3};
    font-family: ${(props) => props.theme.primaryFont};
    text-align: center;
    margin: 0.2em 0em;
    color: ${(props) => props.theme.textColor};
`;

const Timing = styled.h1`
    font-size: ${typeScale.header1};
    text-align: center;
    font-family: ${(props) => props.theme.primaryFont};
    margin: 0.2em 0em;
    color: ${(props) => props.theme.textColor};
`;

const Shop = styled.div`
    background: white;
    padding: 0.2em;
    text-align: center;
    border-radius: 3em;
    background: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.textColorOnPrimary};
`;

const Sidebar = styled.div`
    width: 100%;
    top: 0;
    padding: 1em;
    position: sticky;
    background: ${(props) => props.theme.color};
`;

const SidebarTabs = styled.button`
    display: block;
    border: none;
    width: 100%;
    cursor: pointer;
    font-family: ${(props) => props.theme.primaryFont};
    color: ${(props) => props.theme.textColor};
    background: ${(props) => props.theme.color};
    padding: 1em;
    border-radius: 3em;
    text-align: center;

    &:hover {
        background: ${(props) => props.theme.primaryColor};
        color: ${(props) => props.theme.textColorOnPrimary};
        transition: background 0.3s linear;
    }
`;

// dummy data
let dResult = [
    {
        id: 1,
        day: "Today",
        timing: "4:50PM",
        shop: "Pet Care"
    },
    {
        id: 2,
        day: "Tommorrow",
        timing: "4:30PM",
        shop: "Red Care"
    }
]

export const Dashboard: React.FC<Props> = ({ useDarkTheme, setUseDarkTheme }) => {
    const user = useContext(UserContext);
    const [result, setResult] = useState<Result[]>([]);

    /*
     * fetch Timing
     */
    async function fetchTiming() {
        try {
            /*let res = await axios({
                url: "http://localhost:8000/timing"
                method: "POST"
            })*/

            // try to create a dummy response 
            setTimeout(() => {
                setResult(dResult);
            }, 1000)
        } catch (e) {
            console.error("Error Occured while fetch timing : ", e);
        }
    }

    if (!user) {
        return <Redirect to="/" noThrow />;
    }

    useEffect(() => {
        // fetch the schedule
        fetchTiming();
    }, []);

    return (
        <>
            {result.length === 0 ? (
                <Load />
            ) : (
                <Container>
                    <Nav useDarkTheme={useDarkTheme} setUseDarkTheme={setUseDarkTheme} />
                    <Wrapper>
                        <Sidebar>
                            <SidebarTabs>Your appointment</SidebarTabs>
                            <SidebarTabs>History</SidebarTabs>
                            <SidebarTabs>Settings</SidebarTabs>
                        </Sidebar>
                        <Body>
                            {result.map(item => {
                                return (<Card key={item.id} to="">
                                <div>
                                    <Day>{item.day}</Day>
                                    <Timing>{item.timing}</Timing>
                                    <Shop>{item.shop}</Shop>
                                </div>
                            </Card>
                                )
                            })}
                        </Body>
                    </Wrapper>
                </Container>
            )}
        </>
    );
};
