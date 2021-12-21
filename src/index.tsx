import { config } from "dotenv";
import { useState } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import { darkTheme, defaultTheme } from "./utils";
import { ThemeProvider } from "styled-components";

import useToken from "./useToken";

import App from "./App";
import { SignUp, Result, Dashboard, Shop } from "./pages";
import UserContext from "./UserContext";

// add the dotenv config
config();

console.log(process.env.REACT_APP_BASE_URL)

const Main = () => {
    const [useDarkTheme, setUseDarkTheme] = useState(false);
    const [token, setToken] = useToken();

    return (
        <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
            <UserContext.Provider value={token}>
                <Router>
                    <App
                        useDarkTheme={useDarkTheme}
                        setUseDarkTheme={setUseDarkTheme}
                        setToken={setToken}
                        path="/"
                    />
                    <SignUp
                        useDarkTheme={useDarkTheme}
                        setUseDarkTheme={setUseDarkTheme}
                        path="/join"
                    />
                    <Dashboard
                        useDarkTheme={useDarkTheme}
                        setUseDarkTheme={setUseDarkTheme}
                        path="/dashboard"
                    />
                    <Result
                        useDarkTheme={useDarkTheme}
                        setUseDarkTheme={setUseDarkTheme}
                        path="/result/:search"
                    />
                    <Shop
                        useDarkTheme={useDarkTheme}
                        setUseDarkTheme={setUseDarkTheme}
                        path="result/shop/:shop"
                    />
                </Router>
            </UserContext.Provider>
        </ThemeProvider>
    );
};

const rootElement = document.getElementById("root");
render(<Main />, rootElement);
