import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    
    Button : {
        borderColor: '#FF6694;',
        color:'#FF6694;',
        fontWeight:600,
        marginBottom:'8px',        
        '&:hover':{
            backgroundColor:'#FF6694;',
            color:'#fff'
        }
    }



  }));


const ButtonKit = (props) =>{
       
        const classes = useStyles();
    
    return(
        <div>
            <Button
                className={classes.Button}  
                variant="outlined"
            　  color="secondary"
                fullWidth={props.Width}　
                onClick={props.onClick}　
                >
                {props.value}
            </Button>
        </div>
    )
}

export default ButtonKit