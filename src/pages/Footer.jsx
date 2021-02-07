import React from 'react'
import styled from 'styled-components'



const FooterWrap = styled.footer`
    background-color:#FF6694;
    padding-top:15px;
    padding-bottom:15px;
    margin: 0 calc((100% - 100vw)/2);
    width:100vw;

`
const CopyrightP = styled.p`
    text-align:center;
    margin:0;
`

const SmallCopy = styled.small`
    font-size:12px;
    color:#ffffff;
    @media (min-width:992px){
        font-size:15px;
    }
` 

const Footer = () =>{
    return(
        <>
            <FooterWrap>
                <CopyrightP>
                    <SmallCopy>(c)2021TakahashiYuki All Rights Reserved</SmallCopy>
                </CopyrightP>
            </FooterWrap>
            
        </>
    )
}

export default Footer