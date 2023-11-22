import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: calc(var(—vh, 1vh) * 100);
    display: flex;
    flex-direction: column;
`

export const Wrapper = styled.div`
    padding: 0.5rem 1rem;
`

export const MenuBox = styled.div`
    background-color: ${(props) => props.bgColor || '#EFD5B6'};
    height: auto;
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
    border-radius: 1rem;

    .when {
        font-size: 1.15rem;
        margin: 0.3rem 0;
    }

    div {
        height: 0.04rem;
        background-color: #000;
        margin-bottom: 0.5rem;
    }

    p {
        margin: 0.1rem 0;
        font-size: 0.8rem;
    }
`