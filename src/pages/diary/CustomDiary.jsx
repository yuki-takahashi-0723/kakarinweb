import { TextField } from '@material-ui/core'
import React, { useCallback, useEffect, useState } from 'react'
import { auth, db, timestamp } from '../../config/firebase'
import ButtonKit from '../uikit/ButtonKit'
import DiaryCard from '../uikit/DiaryCard'
import ImageArea from '../uikit/ImageArea'
import styled from 'styled-components'
import MiniSpecer from '../uikit/MiniSpecer'

const Title = styled.h2`
    font-family: 'Hiragino Maru Gothic Pro','ヒラギノ丸ゴ Pro W4', sans-serif;
        color: #fff;
        text-shadow: 0 0 15px #FF6694;
        font-size:21px;

`
const DiaryWrap = styled.div`
    width:80%;
    margin:0 auto;
    color:#FF6694;   
`
const ButtonWrap = styled.div`
    text-align:center;
`



const CustomDiary = () => {
    const [title,setTitle]=useState('')
    const [text,setText]=useState('')
    const [diarys,setDiarys] = useState([]) 
    const [image,setImage]=useState([])
    const inputText = useCallback((e)=>{
        setText(e.target.value)
    },[setText])
    const inputTitle = useCallback((e)=>{
        setTitle(e.target.value)
    },[setTitle])
    
    const addDiary = () => {
       if(title === '' || text === ''){
           return (false)
       }
       db.collection('diary').add({
               title : title,
               contents : text,
               created_at : timestamp.now(),
               image: image
              
           })
           setTitle('')
           setText('')
           setImage([])
    }

    useEffect(()=>{
        db.collection('diary').orderBy('created_at','asc').limitToLast(10)
        .onSnapshot(snapshot=>{
            setDiarys(snapshot.docs.map(doc=>({id:doc.id,data:doc.data()})))
                    })
    },[])

    return(
        <>
            <Title>ハム日記</Title>
            <DiaryWrap>
           {
               diarys.map(diary=>{

                  const date = diary.data.created_at.toDate()
                  const  newDate = date.getFullYear() + '年' + (date.getMonth()+1) + '月' + date.getDate() + '日' 
                   return (
                        <DiaryCard 
                            title={diary.data.title}
                            contents={diary.data.contents}
                            key={diary.id}
                            time={newDate}
                            image={diary.data.image}     
                        />
                        )
               })
           }
           <TextField 
                   fullWidth={true}
                   label={'タイトル'}
                   multiline={true}
                   rows={1}
                   value={title}
                   type={'text'}
                   onChange={inputTitle}
                   variant= {'outlined'}
          />
          <MiniSpecer/>
           <TextField 
                   fullWidth={true}
                   label={'コメント'}
                   multiline={true}
                   rows={5}
                   value={text}
                   type={'text'}
                   onChange={inputText}
                   variant= {'outlined'}
          />
          <ImageArea
            image={image}
            setImage = {setImage}
           
          />
          <ButtonWrap>
            <ButtonKit
                value={'投稿'}
                fullWidth={false}　
                onClick={()=>addDiary()}　
            />
            <MiniSpecer/>
            <ButtonKit
                value={'ログアウト'}
                onClick={()=>auth.signOut()}
            />
          </ButtonWrap>
          </DiaryWrap>
        </>
    )
}

export default CustomDiary