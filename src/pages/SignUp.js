// import React, { useState } from 'react'
// import TextInput from './uikit/TextInput'
// import styled from 'styled-components'
// import ButtonKit from './uikit/ButtonKit'
// import { auth } from '../config/firebase'



// const AllWrap = styled.div`
//     position: relative;
//     height:89vh; 
// `

// const MiniWrap = styled.div`
//     text-align:center;
//     text-align:center;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     -webkit-transform: translate(-50%, -50%);
//     -ms-transform: translate(-50%, -50%);

// `


// const Title = styled.h1`
// font-family: 'Hiragino Maru Gothic Pro','ヒラギノ丸ゴ Pro W4', sans-serif;
// color: #fff;
//  text-shadow: 0 0 15px #FF6694;
//  font-size:21px;
// `



// const SignUp = ({history}) => {


//     const [email,setEmail]=useState('')
//     const [Password,setPassword] =useState('')
   

//     const inputEmail = (e) =>{
//         setEmail(e.target.value)
      
//     }
//     const inputPassword = (e) =>{
//         setPassword(e.target.value)
        
//     }



//     const handleClick = () =>{
       
//         if(!email){
//          return   alert('メールアドレスが空欄です')
//         }
//         if(!Password){
//             return alert('パスワードが空欄です')
//         }
       
        
//         auth.createUserWithEmailAndPassword(email,Password)
//            .then(()=>{
//                 history.push('/customDiary')
//                 setEmail('')
//                 setPassword('')
//            })
//            .catch((err)=>{
//                console.log(err)
//                alert('すでに使用されているメールアドレスです')
//            })

//     }


//     return(
//         <AllWrap>
//              <Title>カカりんの庭へようこそ</Title>
//             <MiniWrap>
//             <Title>サインアップ</Title>
//               <form>
//                 <TextInput 
//                     label={'メールアドレス'}
//                     multiline={false}
//                     rows={1}
//                     value={email}
//                     type={'Email'}
//                     onChange={inputEmail}
//                     variant={'outlined'}
//                 />
//                 <TextInput 
//                     label={'新規パスワード'}
//                     multiline={false}
//                     rows={1}
//                     value={Password}
//                     type={'Password'}
//                     onChange={inputPassword}
//                     variant={'outlined'}
//                 />
               
//                 <ButtonKit value={'登録する'} onClick={()=>handleClick()}/>
//                 <a href='http://localhost:3000/signin'>アカウントをお持ちの方はこちらへ</a>
//               </form>
//             </MiniWrap>
//         </AllWrap>
//     )
// }

// export default SignUp