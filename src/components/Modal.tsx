import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useSpring, animated, config } from "@react-spring/web";
import styled from "styled-components";

const modalRoot = document.getElementById("modal");

interface Props {
    children: any;
    showModal: boolean;
    setShowModal: any;
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

const Content = styled.div``;

export const Modal: React.FC<Props> = ({
    children,
    setShowModal,
    showModal,
}) => {
    const el = useRef<Element | null>(null);

    const animation = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: config.slow,
    });

    if (!el.current) {
        el.current = document.createElement("div");
    }

    // @ts-ignore
    useEffect(() => {
        if (el) {
    // @ts-ignore
            modalRoot?.appendChild(el?.current);
        }

    // @ts-ignore
        return () => modalRoot?.removeChild(el?.current);
    }, []);

    return createPortal(
        <Container>
            <animated.div style={animation}>
                <Close onClick={() => setShowModal(false)} />
                <Content>{children}</Content>
            </animated.div>
        </Container>,
        el.current
    );
};
