import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSetScreenSize } from '../../setScreenHeight';
import axios from 'axios';

import * as Styles from './detailStyle';
import GlobalStyle from '../../GlobalStyle';
import { Header } from '../notice/notice';

export default function Detail() {
    useSetScreenSize();

    const { noticeId } = useParams();
    const [data, setData] = useState(null);
    const [img, setImg] = useState(null);

    useEffect(() => {
        axios.get(`https://api.domtory.site/notice_detail/${noticeId}`)
            .then((response) => {
                setData(response.data);
                setImg(response.data.images);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    function base64Decode(encodedData) {
        return atob(encodedData);
    }

    function createImageElement(decodedData) {
        const imgElement = document.createElement('img');
        imgElement.src = `data:image/png;base64,${decodedData}`;
        return imgElement;
    }

    let imgElement = null;

    if (img) {
        const decodedImageData = base64Decode(img);
        imgElement = createImageElement(decodedImageData);
    }

    return (
        <>
            <GlobalStyle />
            <Styles.Container>
                <Header />
                <Styles.Wrapper>
                    <p>공지사항</p>

                    {data && (
                        <Styles.Content>
                            <div>{data.title}</div>
                            <p>{data.data}</p>
                            {imgElement && <img src={imgElement.src} alt="" />}
                            <p>{data.content}</p>
                        </Styles.Content>
                    )}
                </Styles.Wrapper>
            </Styles.Container>
        </>
    );
}
