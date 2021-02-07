import { makeStyles } from '@material-ui/core'
import React from 'react'
import ButtonKit from '../uikit/ButtonKit'


const useStyles = makeStyles({
    answer : {
        height:192,
        width: 'auto',
        padding:0,
        
        
    }
})

const AnswersList = (props) =>{
  const classes = useStyles()
   console.log(props)
    return(
       <div className={classes.answer}>
           {
               props.answers.map((value,index)=>{
                   return <ButtonKit 
                        value={value.content} 
                        key={index.toString()}
                        onClick={()=>props.select(value.content,value.nextId)}
                        Width={true}
                        />
               })
           }
       </div>
           
       
    )
}

export default AnswersList