import styled from "styled-components";

export const Notice = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 2.8rem;
    border: 1px solid #a8a8a8;
    padding: 0.5rem 0.7rem;
    padding-right: 0.1rem;
    margin-bottom: 1rem;
    
    .num {
        font-weight: 600;
        margin-right: 0.5rem;
        flex: 0.3;
    }

    span {
        font-size: 0.7rem;
        margin-right: 0.5rem;
        flex: 1;
    }
`