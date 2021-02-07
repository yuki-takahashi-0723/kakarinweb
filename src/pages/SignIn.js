import React,{ useContext, useState} from 'react'
import TextInput from './uikit/TextInput'
import styled from 'styled-components'
import ButtonKit from './uikit/ButtonKit'

import { Redirect } from 'react-router-dom'
import { auth } from '../config/firebase'
import { AuthContext } from './AuthService'
import MiniSpecer from './uikit/MiniSpecer'
const AllWrap = styled.div`
    position: relative;
    height:89vh;
`

const MiniWrap = styled.div`
    text-align:center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
`
const Title = styled.h1`
font-family: 'Hiragino Maru Gothic Pro','ヒラギノ丸ゴ Pro W4', sans-serif;
color: #fff;
 text-shadow: 0 0 15px #FF6694;
 font-size:21px;
`

const SignIn = ({history}) =>{
 
        const [email,setEmail]=useState('')
        const [Password,setPassword] =useState('')
       
        const inputEmail = (e) =>{
            setEmail(e.target.value)
           
        }
        const inputPassword = (e) =>{
            setPassword(e.target.value)
            
        }
        const user = useContext(AuthContext)
        if(user){
          return  <Redirect to={'/customdiary'}/>
        }
        
    const handleClick = () =>{
        if(!email){
           return alert('メールアドレスが空欄です')
        }
        if(!Password){
           return alert('パスワードが空欄です')
        }
        auth.signInWithEmailAndPassword(email,Password)
            .then(()=>{
                history.push('/customdiary')
                setEmail('')
                setPassword('')
            })
            .catch((err)=>{
                alert('未登録のアカウントです')
                console.log(err)
            })

    }
    
        return(
            <AllWrap>
                 <Title>wellcame</Title>
                <MiniWrap>
                    <Title>サインイン</Title>
                 
                        <TextInput 
                            label={'メールアドレス'}
                            multiline={false}
                            rows={1}
                            value={email}
                            type={'Email'}
                            onChange={inputEmail}
                            variant={'outlined'}
                        />
                        <TextInput 
                            label={'パスワード'}
                            multiline={false}
                            rows={1}
                            value={Password}
                            type={'Password'}
                            onChange={inputPassword}
                            variant={'outlined'}
                        />
                        <MiniSpecer/>
                        <ButtonKit value={'サインイン'} onClick={()=>handleClick()}/>
                        <MiniSpecer/>
                        <ButtonKit
                            value={'topへ戻る'}
                            onClick={()=>history.push('/')}
                        />
                        
                    
                </MiniWrap>
            </AllWrap>
        )
    }
    

export default SignIn