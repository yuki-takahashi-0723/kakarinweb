import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components'
import Kakarin from './img/IMG_0536.jpeg'
const Coment = styled.div`
   border:0.5px #FF6694 solid;
   /* margin-top : 15px; */
`

// const ChatQuestion = styled.div`
//   display:flex;
//   flex-direction:row;
//   justify-content:flex-start;
// `
// const ChatAnswer = styled.div`
//   display:flex;
//   flex-direction:row-reverse;
//   justify-content:flex-end;
// `


const Chat = (props) => {
   
    const isQuestion = (props.type === 'question')
    const classes= isQuestion ?  'p-chat__row' : 'p-chat__reverse'
    
    return(
       
              <ListItem className={classes} >
                <ListItemAvatar>
                {isQuestion ? (
                  <Avatar alt="Remy Sharp" src={Kakarin} />
                ):(
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                )}
                </ListItemAvatar>
                <Coment>{props.text}</Coment>
            
              </ListItem>
        
       
    )
}

export default Chat