import React,{useState} from 'react';
import styles from '../styles/Header.module.scss';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


export default function Subscription({ Props }: any) {
    const [email, setEmail] = useState('');

    function handleSubmit(event:any) {
        event.preventDefault();
        console.log( 'Email:', email); 
       // You should see email and password in console.
       // ..code to submit form to backend here...

    }
    return (
        <Box sx={{direction:"row", display:"flex"}}>
            <form onSubmit={handleSubmit} >
            <TextField 
                sx={{
                    width:200,
                    height: '45px'
                }}
                  size="small" InputProps={{
                    style: { backgroundColor: "#ffffff", height: '30px' }
                }} />
                <Button sx={{flex:0.4}} disableElevation variant="contained" type="submit">Subscribe</Button>
                </form>
        </Box>
    )
} 