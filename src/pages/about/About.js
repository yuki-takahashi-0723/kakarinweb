import React from 'react'
import styled from 'styled-components'
import aboutImg1 from './aboutImg/IMG_0933.jpeg'
import aboutImg2 from './aboutImg/IMG_0540.jpeg'
import MiniSpecer from '../uikit/MiniSpecer'
import ButtonKit from '../uikit/ButtonKit'

const Title = styled.h1`
        font-family: 'Hiragino Maru Gothic Pro','ヒラギノ丸ゴ Pro W4', sans-serif;
        color: #fff;
        text-shadow: 0 0 15px #FF6694;
        font-size:21px;
        `
const AboutWrop = styled.div`
                width:80%;
                text-align:center;
                margin:0 auto;
                p {
                  
                    color:#FF6694 ;
                    text-shadow: 0 0 3px #FF6700;
                    font-size:4vw;
                    @media (min-width:600px){
                        font-size:2vw;
                    }

                }
`

const AboutView = styled.img`
        width:80vw;
        
    
`

const Profile = styled.div`
        display:flex;
        justify-content:space-around;
        flex-wrap:wrap;
`
const ProfileText = styled.div`
        text-align:left;
        h2 {
            color:#FF6694;
        }
        p {
            color:blue;
            text-shadow: 0 0 1px #FF6700;
            font-size:14px;
        }
`

const ProfileView = styled.div`
        width:300px;
        height:300px;
        background-image: url(${aboutImg2});
        background-size:cover;
        background-position:top 0 left -120px;

`

const About = ({history}) =>{
    return(
        <>
            <Title>概要</Title>
            <AboutWrop>
                <p>こんにちわ！カカりんと申します！</p>
                <AboutView src={aboutImg1}/>
                <h2>ープロフィールー</h2>
                <Profile>
                    <ProfileText>
                        <h2>kakarin</h2>
                        <p>茨城県出身のイラストレーターです。</p>
                        <p>気の向いた時にボチボチ書いています。</p>
                        <p>最近ではハムスターの絵を中心に書いています！</p>
                        <p>iPadを使って作成しています。</p>
                        <p>よかったらギャラリーの方も見ていって下さい！！</p>
                    </ProfileText>
                    <ProfileView></ProfileView>
                </Profile>
                <MiniSpecer/>
                <ButtonKit
                    value={'topへ戻る'}
                    onClick={()=>history.push('/')}
                />
            </AboutWrop>
        </>
        
    )
}

export default About