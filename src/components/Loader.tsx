import React from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";

const LoaderWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
    background-color: ${(props) => props.theme.backgroundColor};
`;

const MyLoader = styled(Loader)`
    & > svg {
        stroke: ${(props) => props.theme.textColor};
    }
`;

export const Load = () => {
    return (
        <LoaderWrapper>
            <MyLoader type="Oval" height={35} width={35} timeout={1000000000} />
        </LoaderWrapper>
    );
};
