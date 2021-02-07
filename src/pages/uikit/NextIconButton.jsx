import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import styled from 'styled-components'

const  ButtonPosition = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    margin:0;
 
`
const ColorP = styled.p`
    color:#FF6694;
   
    margin:0;
    font-size:20px;


`



const NextIconButton = (props) =>{
    return(
        <ButtonPosition>
        <IconButton onClick={()=>props.backlog()}>
            <ArrowBackIcon style={{color:'#FF6694'}}/>
            <ColorP>戻る</ColorP>
        </IconButton>
        <IconButton onClick={()=>props.advancelog()}>
            <ColorP>進む</ColorP>
            <ArrowForwardIcon style={{color:'#FF6694'}} />
        </IconButton>
        </ButtonPosition>
    )
}

export default NextIconButton