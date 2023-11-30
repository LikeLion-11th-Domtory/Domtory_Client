import mike from '../../assets/mike.png';
import * as Styles from './noticeboxStyle'

const NoticeBox = ({ notice }) => (
    <Styles.Notice key={notice.id}>
        <span className='num'>{notice.id}</span>
        <span>{notice.title}</span>
    </Styles.Notice>
);

export default NoticeBox;