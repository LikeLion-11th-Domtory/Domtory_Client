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
import A2HS from '../../components/installprompt';
import { requestPermission } from '../../FirebaseConfig';
import { useNavigate } from "react-router-dom";

export default function Main() {
    const navigate = useNavigate();
    const [deviceToken, setDeviceToken] = useState({
        token: "",
    });
    useSetScreenSize();

    const onClickPush = () => {
        requestPermission(setDeviceToken);
    }

    const onClickNightOut = () => {
      window.open('http://1.246.219.13:8080/cbhs/indexstdds.html?var1=M000004116','_blank');
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
                            집 가고싶다
                        </Styles.MarqueeDetail>
                   </Styles.NoticeDetail>
                </Styles.NoticeDetailWrapper>
              </Styles.NoticeWrapper>
              <Styles.MenuWrapper>
                <DailyMenuBox/>
              </Styles.MenuWrapper>
              <Styles.PushButtonWrapper>
                <Styles.PushButton onClick={() => onClickPush()} style={{cursor:'pointer'}}>🍙 푸쉬알림 허용하고 식단 알림받기 🍙</Styles.PushButton>
              </Styles.PushButtonWrapper>
              <Styles.ViewButtonWrapper>
                <Styles.ViewButton style={{backgroundColor:'#deab6e'}}>
                    <Styles.ClassifyWrapper onClick={() => onClickNightOut()}>
                        <Styles.Classify>외박신청</Styles.Classify>
                        <Styles.Detail>오늘은 안 들어가요</Styles.Detail>
                    </Styles.ClassifyWrapper>
                    <img src={treeimg}/>
                </Styles.ViewButton>
              </Styles.ViewButtonWrapper>
              <Styles.ViewButtonWrapper>
                <Styles.ViewButton style={{backgroundColor:'#efaf48'}}>
                    <Styles.ClassifyWrapper onClick={() => navigate('/notice')}>
                        <Styles.Classify>공지사항</Styles.Classify>
                        <Styles.Detail>우리학사 소식 보기</Styles.Detail>
                    </Styles.ClassifyWrapper>
                    <img src={noticeimg}/>
                </Styles.ViewButton>
              </Styles.ViewButtonWrapper>
              <A2HS/>
            </Styles.Container>
        </>
    );
};