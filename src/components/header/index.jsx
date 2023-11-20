import * as Styles from './headerStyle';
import logo from '../../assets/logo.png';

const Header = () => {
    return(
        <Styles.Container>
            <Styles.LogoWrapper>
                <img src={logo}/>
                <Styles.Logo>Domtory</Styles.Logo>
            </Styles.LogoWrapper>
        </Styles.Container>
    );
};

export default Header;