import React from 'react'

import styled from 'styled-components'

import FirstViewImg from './TopImg/IMG_0776.jpeg'
import abouPhoto from './TopImg/IMG_0864.jpeg'
import diaryPoto from './TopImg/IMG_1189.jpeg'
import galleryPhoto from '/Users/takahashiyuusei/humweb/website/src/pages/Top/TopImg/IMG_1010.jpeg'
import messagePhoto from './TopImg/IMG_0969.jpeg'
import NavMenu from '../uikit/NavMenu'
import PhotoCard from '../uikit/PhotoCard'
import MiniSpecer from '../uikit/MiniSpecer'
import Footer from '../Footer'


const Header = styled.header`
        display:flex;
        justify-content:space-between;
        align-items:center;
        `
const Title = styled.h1`
               font-family: 'Hiragino Maru Gothic Pro','ヒラギノ丸ゴ Pro W4', sans-serif;
               color: #fff;
                text-shadow: 0 0 15px #FF6694;
                font-size:21px;
                margin:0;
                @media (min-width:600px){
                  font-size:40px;
        }
        `
const HMenuDisplay = styled.nav`
        @media (min-width:700px){
            display:none;
        }
`


const  Nav = styled.nav`
       
        @media (max-width:700px) {
            display:none;
        }
`

const  Menu = styled.ul`
        display: flex;
        list-style:none;
        padding:0; 
        margin:0;
        
        li {    
            margin-right:20px;
            font-size:19px;
            color: #FF6694;
            }
            li:hover{
                color: #00FF00;
                text-shadow: 0 0 15px #FF6694;
            }       
        `
const FirstView = styled.div`
        /* border : 2px black solid; */
        height:60vh;
        background-image: url(${FirstViewImg});
        background-size: contain;
        background-repeat:no-repeat;
        position: relative;
        span {
            position: absolute;
            top:300px;
            right:10%;
            font-size:40px;
            color: #FF6694 ;
            text-shadow: 0 0 3px #FF6694;
            @media (max-width:400px){
                top:180px;
            }
        }
        @media (min-width:1200px){
            height:100vh;
        }
`
const ContentsTitle = styled.h2`
    text-align:center;
    font-family: 'Hiragino Maru Gothic Pro','ヒラギノ丸ゴ Pro W4', sans-serif;
               color: #fff;
                text-shadow: 0 0 15px #FF6694;
                font-size:21px;
                margin:0;
`
const ContentsArea = styled.div`
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;
    margin-bottom:10px;

`

const CardWrap = styled.div`
        margin-top:10px;
`

// const ContentWrap = styled.div`
//             margin: 0 auto ;
          
//             width:80%;
//             h2 {
//                 margin:0;
//                 text-align:center;
//             }
// `
// const BoxWrap = styled.div`
//     height:100%;
//     display:flex;
//     flex-direction:column;
  
// `


// const ContentBox = styled.div`
//             margin-top:3px;
//             height:300px;
//             display:flex;
//             justify-content:space-around;
//             flex-wrap:wrap;
            
//             div {
//                 margin:0;
//                 border: 0.5px black solid;
//                 text-align:center;
//                 width:300px;
//                 height:300px;
//                 background-size:cover   
//             }
            
//             p {
//                 font-size:1rem;
//                 color: pink;
//                 text-shadow: 0 0 1px #FF6694;
//             }
            
// `
// const Item1 = styled.div`
//         background-image: url(${contentImg1});
//         transition: all 0.2s;
//         :hover {
//             transform:scale(1.3, 1.3);
//         }
//  `
// const Item2 = styled.div`
//         background-image: url(${contentImg2});
//         transition: all 0.2s;
//         :hover {
//             transform:scale(1.3, 1.3);
//         }
//  `

// const Item3 = styled.div`
//         background-image: url(${contentImg4});
//         transition: all 0.2s;
//         :hover {
//             transform:scale(1.3, 1.3);
//         }
// `
// const Item4 = styled.div`
//         background-image: url(${contentImg6});
//         transition: all 0.2s;
//         :hover {
//             transform:scale(1.3, 1.3);
//         }
// `



const App = ({history}) =>{
    const menus = [
            {title:'概要',id:'about',image:abouPhoto},
            {title:'ギャラリー',id:'gallery',image:galleryPhoto},
            {title:'ハム日記',id:'diary',image:diaryPoto},
            {title:'お問い合わせ',id:'message',image:messagePhoto},
        ]
    return(

    
        <>
            <Header>
                <Title>カカリンの庭</Title>
                <HMenuDisplay>
                    <NavMenu menus={menus} history={history}/>
                </HMenuDisplay>
                <Nav>
                    <Menu>
                        {
                            menus.map(menu=>{
                                return <li  key={menu.id} onClick={()=>history.push('/'+menu.id)}>{menu.title}</li>
                            })
                        }
                    </Menu>
                </Nav>
            </Header>
            <FirstView>
                <span>Welcome to Kakarin's Garden</span>
            </FirstView>
            <MiniSpecer/>
            <ContentsTitle>-contents-</ContentsTitle>
            <ContentsArea>
                {
                    menus.map((menu)=>{
                        return <CardWrap key={menu.id}> 
                                    <PhotoCard
                                        onClick={()=>history.push('/'+menu.id)}
                                        title={menu.title}
                                        image={menu.image}
                                    />
                                </CardWrap>
                    })
                }
            </ContentsArea>
            
           
        </>







            /* <Header>
                <Title>カカリンの庭</Title>
                <Nav>
                    <Menu>
                        <li>概要</li>
                        <li>ハム日記</li>
                        <li>イラスト</li>
                        <li>お問い合わせ</li>
                    </Menu>
                </Nav>
            </Header>
            <FirstView>
                <span>Welcome to Kakarin's Garden</span>
            </FirstView>
            <ContentWrap>
                <h2>-contents-</h2>
                <BoxWrap>
                    <ContentBox>  
                        <Item1></Item1>
                        <Item2></Item2>
                    </ContentBox>
                    <ContentBox>
                        <Item3></Item3>
                        <Item4></Item4> 
                    </ContentBox>
                </BoxWrap>
                
            </ContentWrap> */
    )
}

export default  App