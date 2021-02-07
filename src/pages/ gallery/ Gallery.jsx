import React from 'react'
import styled from 'styled-components'
import musicBoy from '/Users/takahashiyuusei/humweb/website/src/pages/ gallery/1B61BD00-BB87-48EE-925C-933681FAD9C2_1_201_a.jpeg'
import formalHamStar from '/Users/takahashiyuusei/humweb/website/src/pages/ gallery/03C05CAC-EEFD-44AE-A967-0B53B27A6E33_1_105_c.jpeg'
import tanpopoAnzu from '/Users/takahashiyuusei/humweb/website/src/pages/ gallery/50273B25-83B9-4EDE-BCC3-A7711CE44F84_1_105_c.jpeg'
import realHumstar from '/Users/takahashiyuusei/humweb/website/src/pages/ gallery/70011D1B-1EAC-43EB-90E8-EEC6F73912AD_1_105_c.jpeg'
import gameHumstar from '/Users/takahashiyuusei/humweb/website/src/pages/ gallery/78735485-8BF4-4EE7-A221-E9BE2AF4788C_1_201_a.jpeg'
import anyHumstar from '/Users/takahashiyuusei/humweb/website/src/pages/ gallery/B5569052-6B6C-4301-AE38-BC928A690D30_1_201_a.jpeg'
import colorGirl from '/Users/takahashiyuusei/humweb/website/src/pages/ gallery/BB1A287A-E4B9-42D1-8ED0-9E1AC9C6E33C_1_105_c.jpeg'
import tanpopo from '/Users/takahashiyuusei/humweb/website/src/pages/ gallery/DCF7B824-87DD-4BA7-A0A5-DD5543CB7215_1_201_a.jpeg'
import Icatch from '/Users/takahashiyuusei/humweb/website/src/pages/ gallery/DF5E298F-6403-4F5C-A391-F29BEBD438BD_1_201_a.jpeg'
import PhotoCard from '../uikit/PhotoCard'
import ButtonKit from '../uikit/ButtonKit'
import MiniSpecer from '../uikit/MiniSpecer'

const Title = styled.h1`
font-family: 'Hiragino Maru Gothic Pro','ヒラギノ丸ゴ Pro W4', sans-serif;
color: #fff;
 text-shadow: 0 0 15px #FF6694;
 font-size:21px;
 `


const PhotoFlex = styled.div`
    width:80%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    margin:0 auto;
`

const OnePhotoWrap = styled.div`
    margin:30px;
`
const ButtonWrap = styled.div`
    text-align:center;
`


const Gallery = ({history}) =>{

    const images = [
        {data:musicBoy,id:'musicBoy',alt:'音楽を聞く少年のイラスト'},
        {data:formalHamStar,id:'formalHamStar',alt:'紳士服を着たハムスターのイラスト'},
        {data:tanpopoAnzu,id:'tanpopoAnzu',alt:'ハムスターのイラスト'},
        {data:realHumstar,id:'realHumstar',alt:'リアルなハムスターのイラスト'},
        {data:gameHumstar,id:'gameHumstar',alt:'ゲームを楽しむハムスターのイラスト'},
        {data:anyHumstar,id:'anyhumstar',alt:'たくさんのハムスターのイラスト'},
        {data:colorGirl,id:'colorGirl',alt:'カラフルな少女のイラスト'},
        {data:tanpopo,id:'tanpopo',alt:'ハムスタータンポポのイラスト'},
        {data:Icatch,id:'Icatch',alt:'MVのアイキャッチのようなイラスト'},
    ]

    return   (
        <>
            <Title>Garrary</Title>
            <PhotoFlex>
            {
                images.map(image=>{
                    return (
                        <OnePhotoWrap>
                            <PhotoCard
                                image={image.data}
                                key={image.id}
                                alt={image.alt}
                                onClick={()=>{
                                    return false
                                }}
                            />
                        </OnePhotoWrap>
                )})
            }
            </PhotoFlex>
            <MiniSpecer/>
            <MiniSpecer/>
            <ButtonWrap>
                <ButtonKit
                    value={'topへ戻る'}
                    onClick={()=>history.push('/')}
                />
            </ButtonWrap>
        </>
    )
}
export default Gallery