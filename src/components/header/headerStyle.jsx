import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 10px 20px 10px 10px;
    display: flex;
    justify-content: space-between;
    background-color: #DEAB6E;
`

export const LogoImg = styled.img`
    width: 2rem;
`

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const Logo = styled.div`
    font-size: 20px;
`

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

export const Icon = styled(FontAwesomeIcon)`
    font-size: 30px;
`
