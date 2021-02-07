import React, { useEffect, useState } from 'react'
import styled  from 'styled-components'
import AnswersList from './AnswerList'
import Chats from './Chats'
import BotData from './BotData'
import FormDialog from './FormDialog'
import MiniSpecer from '../uikit/MiniSpecer'
import ButtonKit from '../uikit/ButtonKit'

const AllWrap = styled.div`
    position: relative;
    height:100vh;
    width: 100%; 
`

const MiniWrap = styled.div`
    height:592px;
    text-align:center;
    max-width:432px;
    width:100%;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    border: 0.5px #FF6694 solid; 
    box-sizing:border-box;  

`
const Title = styled.h1`
font-family: 'Hiragino Maru Gothic Pro','ヒラギノ丸ゴ Pro W4', sans-serif;
color: #fff;
 text-shadow: 0 0 15px #FF6694;
 font-size:21px;
 `
 const ButtonWrap = styled.div`
    text-align:center;
 `


const Message = ({history}) =>{
    const [answers,setAnswers] = useState([])
    const [chats,setChats] = useState([])
    const [currentId,setCurrentId] = useState('init')
    const [dataset,setDataset] = useState(BotData)
    const [open, setOpen] = useState(false);
    
    const handleClickOpen = () => {
      setOpen(true);
    };
    
    const handleClose = () => {
      setOpen(false);
    };
    const displayNextQuestion = (nextQuestionId) => {
        
        setAnswers(dataset[nextQuestionId].answers)
        const chat = {
            text : dataset[nextQuestionId].question,
            type : 'question'
        }
        setChats(prevChat=>{
            return[...prevChat,chat]
        })
        setCurrentId(nextQuestionId)
}

const selectAnswer = (selectedAnswer, nextQuestionId) =>{
    switch(true){
        case(nextQuestionId === 'init'):
           setTimeout(()=>displayNextQuestion(nextQuestionId),500)
            break;
        case(nextQuestionId === 'contact'):
            handleClickOpen()
            break;

        case(/^https:*/.test(nextQuestionId)):
            const a = document.createElement('a');
            a.href = nextQuestionId;
            a.target = '_blank'
            a.click()
            break;
        default:
            const chat = {
                text : selectedAnswer,
                type : 'answer'
            }
            setChats(prevChat=>{
                return [...prevChat,chat]
            })

            setTimeout(()=>displayNextQuestion(nextQuestionId),800) 
            break;
    }
}

useEffect(()=>{
    const initAnswer = ''
    selectAnswer(initAnswer,currentId)
},[])

useEffect(()=>{
    const scrollArea = document.getElementById('scroll-area')
    if(scrollArea){
        scrollArea.scrollTop = scrollArea.scrollHeight
    }
})


console.log(answers)


    return(
        <>
            <Title>お問合せ用　チャットボット</Title>
            <AllWrap>
                <MiniWrap>
                        <Chats chats={chats}/>
                        <AnswersList answers={answers} select={selectAnswer} />  
                        <FormDialog open={open} handleClose={handleClose}/>
                </MiniWrap>


            </AllWrap>
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

export default Message