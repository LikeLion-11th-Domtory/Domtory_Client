import * as Styles from './pushInformModalStyle';
import ios from '../../assets/modalForIos.jpg';
import galaxy from '../../assets/modalForGalaxy.jpg';

const PushInformModal = ({isPushModal,setIspushModal}) => {
    const onClickClose = () => {
        setIspushModal(false);
    }

    return(
        isPushModal ?(
            <Styles.Container>
                <Styles.Title>푸시 알림을 받을 수 없는 상태에요🥲</Styles.Title>
                <Styles.InformImg src={ios}/>
                <Styles.Detail>Safari의 경우: Safari의 가운데 옵션 버튼 ➡️ '홈 화면에 추가하기'를 통해 설치하고 해당 앱으로 접속해서 푸시알림을 이용할 수 있어요</Styles.Detail>
                <Styles.InformImg src={galaxy}/>
                <Styles.Detail>갤럭시의 경우: 브라우저의 오른쪽 메뉴 버튼 ➡️ '현재 페이지 추가'를 통해 설치하고 해당 앱으로 접속해서 푸시알림을 이용할 수 있어요</Styles.Detail>
                <Styles.CloseButton onClick={onClickClose}>닫기</Styles.CloseButton>
            </Styles.Container>
        ) : null
    )
}

export default PushInformModal;