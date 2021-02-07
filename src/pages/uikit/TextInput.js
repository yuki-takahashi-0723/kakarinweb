import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
    text: {
        // width : '80%'
    },
  }));

const TextInput = (props) =>{
    const classes = useStyles();
    return(
        <TextField className={classes.text}
                   fullWidth={true}
                   label={props.label}
                   margin={'dense'}
                   multiline={props.multiline}
                   rows={props.rows}
                   value={props.value}
                   type={props.type}
                   onChange={props.onChange}
                   variant= {props.variant}
        />
    )
}

export default TextInput