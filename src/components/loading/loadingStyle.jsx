import styled from "styled-components";

export const LoadingScreenContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    overflow: hidden;
    box-sizing: border-box;
    height:calc(var(--vh, 1vh) * 100);
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10000;
`

export const LottieContainer = styled.div`
    width: 50%;
    `