import React from 'react'
import styled from 'styled-components'


const ContentsWrap = styled.div`
    position: relative;
    width:300px;
    height:300px;
    margin:0;
`

const PhotoWrap = styled.img`
    margin:0;
    border: 0.5px black solid;
    text-align:center;
    width:100%;
    height:100%;
    background-size:cover;
    transition: all 0.2s;
         :hover {
             transform:scale(1.3, 1.3);
         }
`
const PhotoText = styled.span`
    color:#FF6694;
    font-weight:bold;
    font-size:18px;
    display:block;
    position: absolute;
    top:10px;
    left: 50%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);

`



const PhotoCard = (props) => {
    console.log(props.image)
    return(
        <ContentsWrap onClick={()=>props.onClick()}>
            <PhotoWrap
                src={props.image}
                alt={props.alt}
            />
         {
             props.title &&
             <PhotoText>{props.title}</PhotoText>
         }
          


        </ContentsWrap>
        

        
    )
}

export default PhotoCard