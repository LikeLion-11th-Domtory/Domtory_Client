import { useState } from 'react';
import { useSetScreenSize } from '../../setScreenHeight';
import * as Styles from './noticeStyle';
import * as HeaderStyles from '../../components/header/headerStyle';
import GlobalStyle from '../../GlobalStyle';
import logo from '../../assets/logo.png';
import back from '../../assets/back.png';
import { faBell, faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return(
        <>
        <GlobalStyle/>
        <HeaderStyles.Container>
            <HeaderStyles.LogoWrapper>
                <img src={back} />
                <HeaderStyles.LogoImg src={logo}/>
                <HeaderStyles.Logo>Domtory</HeaderStyles.Logo>
            </HeaderStyles.LogoWrapper>
            <HeaderStyles.IconWrapper>
                <HeaderStyles.Icon icon={faBell}/>
                <HeaderStyles.Icon icon={faBars}/>
            </HeaderStyles.IconWrapper>
        </HeaderStyles.Container>
        </>
    );
};


export default function Notice() {
    useSetScreenSize();

    return (
        <>
            <GlobalStyle />
            <Styles.Container>
                <Header />
            </Styles.Container>
        </>
    );
}