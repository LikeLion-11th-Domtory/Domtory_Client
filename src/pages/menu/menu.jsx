import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { useSetScreenSize } from '../../setScreenHeight';
import * as Styles from './menuStyle';
import * as HeaderStyles from '../../components/header/headerStyle';
import GlobalStyle from '../../GlobalStyle';
import logo from '../../assets/logo.png';
import back from '../../assets/back.png';
import { faBell, faBars } from '@fortawesome/free-solid-svg-icons';

const Back = styled.img`
    padding: 0.4rem 0.3rem 0 0.3rem;
`

const Header = () => {
    return (
        <>
            <GlobalStyle />
            <HeaderStyles.Container>
                <HeaderStyles.LogoWrapper>
                    <Link to='/'><Back src={back} /></Link>
                    <HeaderStyles.LogoImg src={logo} />
                    <HeaderStyles.Logo>Domtory</HeaderStyles.Logo>
                </HeaderStyles.LogoWrapper>
                <HeaderStyles.IconWrapper>
                    <HeaderStyles.Icon icon={faBell} />
                    <HeaderStyles.Icon icon={faBars} />
                </HeaderStyles.IconWrapper>
            </HeaderStyles.Container>
        </>
    );
};

export default function Menu() {
    useSetScreenSize();

    return (
        <>
            <GlobalStyle />
            <Styles.Container>
                <Header />
                <Styles.Wrapper>
        
                </Styles.Wrapper >
            </Styles.Container >
        </>
    );
};