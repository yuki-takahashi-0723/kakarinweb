
import React, { useEffect, useState } from 'react'
import { db,  } from '../../config/firebase'
import ButtonKit from '../uikit/ButtonKit'
import DiaryCard from '../uikit/DiaryCard'

import styled from 'styled-components'
import MiniSpecer from '../uikit/MiniSpecer'
import NextIconButton from '../uikit/NextIconButton'

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



const Diary = ({history}) => {
    
    const [diarys,setDiarys] = useState([]) 

    const backlog = () =>{
        if (diarys.length < 5) {
            return false
        }
        const lastVisisble = diarys[diarys.length - 1]　//現在の表示画面の１番上
        console.log(lastVisisble)
        db.collection('diary').orderBy('created_at','desc')
            .startAfter(lastVisisble.data.created_at).limit(5)
            .onSnapshot(snapshot=>{
                const setBackVisible = snapshot.docs.map(doc=>({id:doc.id,data:doc.data()}))
               console.log(setBackVisible)
                if(setBackVisible.length === 0){
                    return false
                }
                setDiarys(setBackVisible)
            })
    }

    const advancelog = ()=>{
        if (diarys.length === 0) {
            return false
        }
        const firstVisisble = diarys[0]//表示の最後のコメント
        console.log(firstVisisble)
       
        db.collection('diary').orderBy('created_at','desc')
        .endBefore(firstVisisble.data.created_at).limitToLast(5)
        .onSnapshot(snapshot=>{
            const setAdvanceVisible = snapshot.docs.map(doc=>({id:doc.id,data:doc.data()}))
           console.log(setAdvanceVisible.length)
            if(setAdvanceVisible.length < 5){
                return false
            }
            setDiarys(setAdvanceVisible)
        })
    }

    useEffect(()=>{
        db.collection('diary').orderBy('created_at','desc').limit(5)
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
            </DiaryWrap>
            <NextIconButton backlog={backlog} advancelog={advancelog}/>
            <MiniSpecer/>
            <ButtonWrap>
                <ButtonKit
                    value={'topへ戻る'}
                    onClick={()=>history.push('/')}
                />
            </ButtonWrap>
            <MiniSpecer/>
        </>
    )
}

export default Diary