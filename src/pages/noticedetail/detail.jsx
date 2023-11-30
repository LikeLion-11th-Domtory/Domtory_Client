import React from 'react';
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
        axios.get(`https://api.domtory.site/notice/${noticeId}`)
            .then((response) => {
                setData(response.data);
                setImg(response.data.images);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <>
            <GlobalStyle />
            <Styles.Container>
                <Header />
                <Styles.Wrapper>
                    {data && (
                        <Styles.Content>
                            <p className='title'>{data.title}</p>
                            <p className='date'>{data.date}</p>
                            <div></div>
                            <img src={data.images} alt="" />
                            <p className='content'>{data.content && data.content.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}</p>
                        </Styles.Content>
                    )}
                </Styles.Wrapper>
            </Styles.Container>
        </>
    );
}
