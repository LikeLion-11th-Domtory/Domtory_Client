import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: calc(var(—vh, 1vh) * 100);
    display: flex;
    flex-direction: column;
`

export const Wrapper = styled.div`
    padding: 0.8rem 1rem;

    .selected{
        font-size: 0.9rem;
        font-weight: 550;
        margin: 1rem 0.5rem;
        margin-bottom: 0.4rem;
    }
`

export const Date = styled.div`
    div{
        display: flex;
    }
    
    span{
        border: 1px solid #8a8a8a;
        border-radius: 0.3rem;
        margin: 0 0.25rem;
        padding: 0.15rem;
        font-size: 0.7rem;
        text-align: center;
    }
`

export const MenuBox = styled.div`
    background-color: ${(props) => props.bgColor || '#EFD5B6'};
    height: auto;
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
    border-radius: 1rem;

    .when {
        font-size: 16.5px;
        font-weight: 550;
        margin: 0.2rem 0;
    }

    div {
        height: 0.04rem;
        background-color: #000;
        margin-bottom: 0.5rem;
    }

    p {
        margin: 0.1rem 0;
        font-size: 15px;
    }
`