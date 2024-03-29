import { useSetScreenSize } from "../../setScreenHeight";
import * as Styles from "./MainStyle";
import GlobalStyle from "../../GlobalStyle";
import Header from "../../components/header";
import logo from "../../assets/logo.png";
import Marquee from "react-fast-marquee";
import DailyMenuBox from "../../components/dailymenubox";
import treeimg from "../../assets/treeimage.png";
import noticeimg from "../../assets/noticeimg.png";
import handelAllowNotification from "../../components/PushAlert";
import { useEffect, useState } from "react";
import A2HS from "../../components/installprompt";
import {
  requestPermission,
  handleGranted,
  messaging,
  reactiveServiceWorker,
} from "../../FirebaseConfig";
import { redirect, useNavigate } from "react-router-dom";
import axios from "axios";
import PushInformModal from "../../components/pushInformModal";
import UserApi from "../../utils/api";
import LoadingScreen from "../../components/loading";
import { onMessage } from "firebase/messaging";
import Sidebar from "../../components/sidebar";

export default function Main() {
  const navigate = useNavigate();
  const [deviceToken, setDeviceToken] = useState({
    token: "",
  });

  const [isPushToken, setIsPushToken] = useState(false);
  const [isPushModal, setIspushModal] = useState(false);
  const [noticeList, setNoticeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onClickPush = () => {
    requestPermission(setIspushModal, setIsLoading);
  };

  const getNoticeList = async () => {
    try {
      const response = await UserApi.getNotice();
      setNoticeList(response.data.slice(-3));
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const onClickDeleteToken = async (token) => {
    try {
      const tokenToDisable = {
        pushToken: token,
      };
      const response = await UserApi.PostDisableFcmToken();
      localStorage.removeItem("fcm_token");
    } catch (error) {
      console.error(error);
    }
  };
  useSetScreenSize();

  const onClickNightOut = () => {
    window.open(
      "http://1.246.219.13:8080/cbhs/indexstdds.html?var1=M000004116",
      "_blank"
    );
  };

  const onMessageListener = (async () => {
    const messagingResolve = await messaging;
    console.log(messagingResolve);
    if (messagingResolve) {
      onMessage(messaging, (payload) => {
        console.log("메시지가 도착했습니다.", payload);
      });
    }
  })();

  useEffect(() => {
    setIsPushToken(localStorage.getItem("fcm_token"));
    getNoticeList();
    handleGranted(setIsLoading);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Styles.Container>
        <Header />
        <Styles.NoticeWrapper>
          <img src={logo} style={{ width: "2rem" }} />
          <Styles.NoticeDetailWrapper onClick={() => navigate("/notice")}>
            <Styles.Notice>최근 공지사항</Styles.Notice>
            <Styles.NoticeDetail>
              <Styles.MarqueeDetail>
                {noticeList.map((notice) => (
                  <Styles.RecentNotice>{notice.title}</Styles.RecentNotice>
                ))}
              </Styles.MarqueeDetail>
            </Styles.NoticeDetail>
          </Styles.NoticeDetailWrapper>
        </Styles.NoticeWrapper>
        <Styles.MenuWrapper>
          <DailyMenuBox />
        </Styles.MenuWrapper>
        <Styles.PushButtonWrapper>
          {isPushToken ? (
            <Styles.PushWrapper>
              <Styles.PushButton
                onClick={() => onClickDeleteToken()}
                style={{
                  cursor: "pointer",
                  backgroundColor: "orange",
                  border: "1px solid black",
                  color: "black",
                }}
              >
                🙅‍♂️ 푸쉬알림 비활성화하기 🙅‍♂️
              </Styles.PushButton>
              <Styles.PushInform>
                ⚠️ 푸시 알림은 앱을 강제종료 시 작동하지 않아요 ⚠️
              </Styles.PushInform>
            </Styles.PushWrapper>
          ) : (
            <Styles.PushWrapper>
              <Styles.PushButton
                onClick={() => onClickPush()}
                style={{ color: "black" }}
              >
                🍙 푸쉬알림 허용하고 식단 알림받기 🍙
              </Styles.PushButton>
              <Styles.PushInform>
                ⚠️ 푸시 알림은 앱을 강제종료 시 작동하지 않아요 ⚠️
              </Styles.PushInform>
            </Styles.PushWrapper>
          )}
        </Styles.PushButtonWrapper>
        <Styles.ViewButtonWrapper onClick={() => onClickNightOut()}>
          <Styles.ViewButton style={{ backgroundColor: "#deab6e" }}>
            <Styles.ClassifyWrapper>
              <Styles.Classify>외박신청</Styles.Classify>
              <Styles.Detail>오늘은 안 들어가요</Styles.Detail>
            </Styles.ClassifyWrapper>
            <img src={treeimg} />
          </Styles.ViewButton>
        </Styles.ViewButtonWrapper>
        <Styles.ViewButtonWrapper onClick={() => navigate("/notice")}>
          <Styles.ViewButton style={{ backgroundColor: "#efaf48" }}>
            <Styles.ClassifyWrapper>
              <Styles.Classify>공지사항</Styles.Classify>
              <Styles.Detail>우리학사 소식 보기</Styles.Detail>
            </Styles.ClassifyWrapper>
            <img src={noticeimg} />
          </Styles.ViewButton>
        </Styles.ViewButtonWrapper>
        <A2HS />
        <PushInformModal
          isPushModal={isPushModal}
          setIspushModal={setIspushModal}
        />
        {isLoading && <LoadingScreen />}
      </Styles.Container>
    </>
  );
}
