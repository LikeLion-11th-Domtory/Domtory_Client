import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: calc(var(—vh, 1vh) * 100);
    display: flex;
    flex-direction: column;
`

export const Wrapper = styled.div`
    padding: 0.5rem 1rem;

    p {
        font-size: 1.5rem;
        margin: 1rem 0;
        padding-left: 0.3rem;
    }
`