import * as Styles from './headerStyle';
import logo from '../../assets/logo.png';
import GlobalStyle from '../../GlobalStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return(
        <>
        <GlobalStyle/>
        <Styles.Container>
            <Styles.LogoWrapper>
                <Styles.LogoImg src={logo}/>
                <Styles.Logo>Domtory</Styles.Logo>
            </Styles.LogoWrapper>
            <Styles.IconWrapper>
                <Styles.Icon icon={faBell}/>
                <Styles.Icon icon={faBars}/>
            </Styles.IconWrapper>
        </Styles.Container>
        </>
    );
};

export default Header;