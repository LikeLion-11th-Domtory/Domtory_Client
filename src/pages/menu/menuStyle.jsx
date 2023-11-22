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
        margin: 0.8rem 0.3rem;
    }

    .selected{
        text-align: center;
        width: 6rem;
        height: 1.8rem;
        color: #fff;
        background: #F29500;
        border-radius: 0.8rem;
        font-size: 1rem;
        padding-top: 0.15rem;
    }
`
export const Date = styled.div`
    div{
        display: flex;
    }
    
    span{
        border: 1px solid #8a8a8a;
        border-radius: 0.3rem;
        margin-right: 0.5rem;
        padding: 0.15rem;
        font-size: 0.8rem;
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