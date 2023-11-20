import { useSetScreenSize } from '../../setScreenHeight';
import * as Styles from './MainStyle'
import GlobalStyle from '../../GlobalStyle';
import Header from '../../components/header';
import logo from '../../assets/logo.png';
import Marquee from 'react-fast-marquee';
import DailyMenuBox from '../../components/dailymenubox';
import treeimg from '../../assets/treeimage.png';
import noticeimg from '../../assets/noticeimg.png';
import handelAllowNotification from '../../components/PushAlert';
import { useState } from 'react';

export default function Main() {
    const [deviceToken, setDeviceToken] = useState({
        token: "",
    });
    useSetScreenSize();

    const onClickPush = () => {
        handelAllowNotification();
    }
    
    return(
        <>
            <GlobalStyle/>
            <Styles.Container>
              <Header/>
              <Styles.NoticeWrapper>
                <img src={logo} style={{width: '2rem'}}/>
                <Styles.NoticeDetailWrapper>
                   <Styles.Notice>최근 공지사항</Styles.Notice> 
                   <Styles.NoticeDetail>
                        <Styles.MarqueeDetail>
                            qwrqwrwjrqwruwqruiqwiurhuiwrqhui
                        </Styles.MarqueeDetail>
                   </Styles.NoticeDetail>
                </Styles.NoticeDetailWrapper>
              </Styles.NoticeWrapper>
              <Styles.MenuWrapper>
                <DailyMenuBox/>
              </Styles.MenuWrapper>
              <Styles.PushButtonWrapper>
                <Styles.PushButton>🍙 푸쉬알림 허용하고 식단 정보 알림으로 받기 🍙</Styles.PushButton>
              </Styles.PushButtonWrapper>
              <Styles.ViewButtonWrapper>
                <Styles.ViewButton style={{backgroundColor:'#deab6e'}}>
                    <Styles.ClassifyWrapper>
                        <Styles.Classify>외박신청</Styles.Classify>
                        <Styles.Detail>오늘은 안 들어가요</Styles.Detail>
                    </Styles.ClassifyWrapper>
                    <img src={treeimg}/>
                </Styles.ViewButton>
              </Styles.ViewButtonWrapper>
              <Styles.ViewButtonWrapper>
                <Styles.ViewButton style={{backgroundColor:'#efaf48'}}>
                    <Styles.ClassifyWrapper>
                        <Styles.Classify>공지사항</Styles.Classify>
                        <Styles.Detail>우리학사 소식 보기</Styles.Detail>
                    </Styles.ClassifyWrapper>
                    <img src={noticeimg}/>
                </Styles.ViewButton>
              </Styles.ViewButtonWrapper>
            </Styles.Container>
        </>
    );
};