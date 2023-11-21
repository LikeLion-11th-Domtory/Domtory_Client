import { useState,useEffect } from "react";
import * as Styles from "./promptStyle";
import logo from '../../assets/logo.png';

const useA2HS = () => {
  /**
   * prompt가 실행될 수 있는 환경인 경우에만 모달창을 나타내기 위해
   * 변경 시 리렌더링을 발생시키기 위해서 useRef가 아닌 useState를 사용하였습니다.
   */
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    // beforeinstallprompt에 이벤트 핸들러를 등록합니다.
    window.addEventListener('beforeinstallprompt', handler);
    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const installApp = () => {
    // 설치 메서드 실행
    deferredPrompt?.prompt();
    deferredPrompt?.userChoice.then(choiceResult => {
      clearPrompt();
    });
  };

  const clearPrompt = () => {
    setDeferredPrompt(null);
  };

  return { deferredPrompt, installApp, clearPrompt };
}

export default function A2HS() {
  const { deferredPrompt, installApp, clearPrompt } = useA2HS();

  return deferredPrompt ? (
    <Styles.Container>
      <Styles.PromptWrapper>
        <img src={logo} style={{width: '4rem'}}/>
        <div>돔토리를 홈 화면에 추가하고 매일 편하게 사용하세요!</div>
      </Styles.PromptWrapper>
      <Styles.ButtonWrapper>
        <Styles.Buttons onClick={clearPrompt}>취소</Styles.Buttons>
        <Styles.Buttons style={{backgroundColor: '#EFD5B6'}} onClick={installApp}>추가하기</Styles.Buttons>
      </Styles.ButtonWrapper>
    </Styles.Container>
  ) : null
}