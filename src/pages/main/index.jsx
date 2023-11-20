import { useSetScreenSize } from '../../setScreenHeight';
import * as Styles from './MainStyle'
import GlobalStyle from '../../GlobalStyle';
import Header from '../../components/header';
import logo from '../../assets/logo.png';

export default function Main() {
    useSetScreenSize();

    return(
        <>
            <GlobalStyle/>
            <Styles.Container>
              <Header/>
              <Styles.NoticeWrapper>
                <img src={logo} style={{width: '2rem'}}/>
                <Styles.NoticeDetailWrapper>
                   <Styles.Notice>최근 공지사항</Styles.Notice> 
                </Styles.NoticeDetailWrapper>
              </Styles.NoticeWrapper>
            </Styles.Container>
        </>
    );
};