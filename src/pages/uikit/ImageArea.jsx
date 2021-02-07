import { Avatar, IconButton } from '@material-ui/core'
import React from 'react'
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';

import { useCallback } from 'react';
import styled from 'styled-components';
import { storege } from '../../config/firebase';
import PhotoCard from './PhotoCard';




const NoDisplayInput = styled.input`
    display:none;
`

const FlexBox = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
`

const IconLabel = styled.label`
    color:#80b11e;
`
const ImageInputSpan = styled.span`
    font-size:3vw;
    @media(min-width:600px){
        font-size:2vw;
    }
`


const ImageArea = (props) =>{
    
    
    const uploadImage = useCallback((e)=>{
        const file = e.target.files;
        let blob = new  Blob(file, {type: 'image/jpeg'})
    
        const S='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const N = 16
        const fileName = Array.from(crypto.getRandomValues(new Uint32Array(N)))
                            .map((n)=>S[n%S.length]).join('')
        

        const uploadRef = storege.ref('image').child(fileName)
        const uploadTask = uploadRef.put(blob)
    
        uploadTask.then(()=>{
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL)=>{
                const newImage = {id:fileName,path:downloadURL}
                props.setImage(newImage)
            })
        })
    },[props.setImage])

    console.log(props.image)
   
    const deleteImage = useCallback( async (id)=>{
        console.log(id)
        const ret = window.confirm('この画像を削除しますか？')
        if(!ret){
            return false
        }else{
            props.setImage([])
            return storege.ref('images').child(id).delete()
        }
    },[props.setImage])


    console.log(props.image)
    console.log(props.image.length === 0)
    return(
        <FlexBox>
                <div>
                        <IconButton>
                            <IconLabel>
                                <AddPhotoAlternateIcon color={'inherit'}/>
                                <NoDisplayInput type='file' onChange={(e)=>uploadImage(e)} />
                            </IconLabel>
                        </IconButton>
                        <ImageInputSpan>送信するjpeg画像を選んでください</ImageInputSpan>
                </div>
            {   
                props.image.length === 0 ?
                    <></>
                :
                    <PhotoCard image={props.image.path} alt='確認画像' onClick={()=>deleteImage(props.image.id)}/>
              
                
            }
            </FlexBox>

    )
}
export default ImageArea

