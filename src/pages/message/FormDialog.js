import React, { useState } from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextInput from '../uikit/TextInput';
const FormDialog = (props) =>{
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [discription,setDiscription]=useState('')

    const inputName = (e) =>{
        setName(e.target.value)
    }
    const inputEmail = (e) =>{
        setEmail(e.target.value)
    }
    const inputDiscription = (e) =>{
        setDiscription(e.target.value)
    }

    const submitForm = () =>{
        const payload = {
            text : `お問合せがありました\nお名前:${name}\nメールアドレス${email}\nお問合せ内容:\n${discription}`
        }
        const url = 'https://hooks.slack.com/services/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'
        fetch(url,{
            method:'POST',
            body: JSON.stringify(payload)
        }).then(()=>{
            alert('お問い合わせが完了しました')
            setName('')
            setEmail('')
            setDiscription('')
            return props.handleClose()
        })
    }

    return(
        <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">お問い合わせフォーム</DialogTitle>
        <DialogContent>
          <TextInput 
                label={'お名前(必須)'}
                multiline={false}
                rows={1}
                value={name}
                type={'text'}
                onChange={inputName}
                variant = {'outlined'}
          />
          <TextInput 
                label={'メールアドレス(必須)'}
                multiline={false}
                rows={1}
                value={email}
                type={'Email'}
                onChange={inputEmail}
                variant = {'outlined'}
          />
          <TextInput 
                label={'お問い合せ内容'}
                multiline={true}
                rows={5}
                value={discription}
                type={'text'}
                onChange={inputDiscription}
                variant = {'outlined'}
          />
         
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            キャンセル
          </Button>
          <Button onClick={submitForm} color="primary" autoFocus>
            送信する
          </Button>
        </DialogActions>
      </Dialog>
    )
}

export  default FormDialog