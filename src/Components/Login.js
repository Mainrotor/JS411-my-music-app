import { Component } from 'react';
import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    input : {
        marginBottom : 5
    },

    bottomInput : {
        marginBottom: 15
    }
})


export default function Login (props) {
    const classes = useStyles();

    return (
        <main>
            <form className="loginForm" noValidate autoComplete="off" onSubmit={e => props.submitHandler(e)}>
                <TextField id="standard-basic" className={classes.input} label="Username" onChange={e => props.changeHandler(e, 'username')}/>
                <TextField id="standard-basic" className={classes.bottomInput} label="Password" onChange={e => props.changeHandler(e, 'password')}/>
                <Button variant="contained" color="primary" type="submit">LOGIN</Button>
            </form>
        </main>
        
    )

    

}