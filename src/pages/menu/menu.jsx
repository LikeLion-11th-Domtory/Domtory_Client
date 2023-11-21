import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Header } from '../notice/notice';
import { useSetScreenSize } from '../../setScreenHeight';
import * as Styles from './menuStyle';
import * as HeaderStyles from '../../components/header/headerStyle';
import GlobalStyle from '../../GlobalStyle';
import logo from '../../assets/logo.png';
import back from '../../assets/back.png';
import { faBell, faBars } from '@fortawesome/free-solid-svg-icons';

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