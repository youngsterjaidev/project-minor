import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useSpring, animated, config } from "@react-spring/web";
import styled from "styled-components";

const sidebarRoot = document.getElementById("sidebar");

interface Props {
    children: any;
    showSidebar: boolean;
    setShowSidebar: any;
}

const Container = styled.div`
    position: relative;
`;

const Close = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
`;

const Content = styled(animated.div)`
    position: fixed;
    top: 0;
    right: 0;
    width: 75vw;
    height: 100vh;
    padding: 1em;
    background-color: ${(props) => props.theme.backgroundColor};
`;

export const Sidebar: React.FC<Props> = ({
    children,
    setShowSidebar,
    showSidebar,
}) => {
    const el = useRef<Element | null>(null);

    const animation = useSpring({
        from: { right: "-5em" },
        to: { right: "0" },
    });

    if (!el.current) {
        el.current = document.createElement("div");
    }

    // @ts-ignore
    useEffect(() => {
        // @ts-ignore
        sidebarRoot?.appendChild(el.current);

        // @ts-ignore
        return () => sidebarRoot.removeChild(el.current);
    }, []);

    return createPortal(
        <Container>
            <Close onClick={() => setShowSidebar(false)} />
            <Content style={animation}>{children}</Content>
        </Container>,
        el.current
    );
};
