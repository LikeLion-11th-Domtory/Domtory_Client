import * as Styles from './headerStyle';
import logo from '../../assets/logo.png';
import GlobalStyle from '../../GlobalStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBars } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../sidebar';
import { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
        <GlobalStyle/>
        <Styles.Container>
            <Styles.LogoWrapper>
                <Styles.LogoImg src={logo}/>
                <Styles.Logo>Domtory</Styles.Logo>
            </Styles.LogoWrapper>
            <Styles.IconWrapper>
                <Styles.Icon icon={faBell} onClick={() => alert('서비스 준비중입니다.')}/>
                <Styles.Icon icon={faBars} onClick={() => setIsOpen(true)}/>
                <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
            </Styles.IconWrapper>
        </Styles.Container>
        </>
    );
};

export default Header;