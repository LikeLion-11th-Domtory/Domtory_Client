import { useSetScreenSize } from '../../setScreenHeight';
import * as Styles from './MainStyle'
import GlobalStyle from '../../GlobalStyle';
import Header from '../../components/header';

export default function Main() {
    useSetScreenSize();

    return(
        <>
            <GlobalStyle/>
            <Styles.Container>
              <Header/>
            </Styles.Container>
        </>
    );
};