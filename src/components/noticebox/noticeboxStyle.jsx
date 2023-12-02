import styled from "styled-components";

export const Notice = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 2.5rem;
    padding: 0.5rem 0.7rem;
    padding-right: 0.1rem;

    .num {
        font-size: 0.6rem;
        flex: 0.06;
        font-weight: 600;
    }

    span {
            font-size: 0.7rem;
            margin-right: 0.5rem;
            flex: 1;
        }

    .date {
        font-size: 0.5rem;
        font-weight: 600;
        margin-right: 0rem;
        flex: 0.25;
    }
`

export const Line = styled.div`
    height: 1px;
    background-color: #cfcfcf;    
`