
import React, { useEffect, useState } from "react";
import Styles from "../styles/Home.module.scss"
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from "@mui/material/Box";

export default function BillingDetails(props: any) {
    
    const [data, setData] = useState<any>({ "title": "First Name" });
    const [phone, setPhone] = useState<any>({ "phone":"123232323"})

    /*useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => response.json())
            .then((json) => {
                setData({ "title": json.title })
            });

    }, [])*/
   const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const re = /[0-9]+/g;
        if (e.target.value === '' || re.test(e.target.value)) {
            setPhone(e.target.value);
        }
    }
    return (
        <>
            <Box padding={0}>
                <TextField
                    name="firstName"
                    label="First name"
                    variant="standard"
                    defaultValue="firstName"
                    value={data.title}
                    style={{ margin: '0px' }}
                />
                <TextField
                    name="lastName"
                    label="Last name"
                    variant="standard"
                    style={{ margin: '0px' }}
                />
                <TextField
                    name="address"
                    label="Street Address"
                    variant="standard"
                    style={{ margin: '0px' }}
                />
                <TextField
                    name="townCity"
                    label="Town/ City"
                    variant="standard"
                    style={{ margin: '0px' }}
                />
                <FormControl fullWidth variant="standard">
                    <InputLabel id="State-label">State</InputLabel>
                    <Select
                        id="state"
                        value={'SriLanka'}
                        label="State"
                        style={{ margin: '20px 0px 0px 0px' }}
                    >
                        <MenuItem value={'India'}>India</MenuItem>
                        <MenuItem value={'SriLanka'}>SriLanka</MenuItem>
                        <MenuItem value={'US'}>US</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    name="zip"
                    label="Zip"
                    variant="standard"
                    style={{ margin: '0px' }}
                />
                <TextField
                    name="phone"
                    label="Phone"
                    variant="standard"
                    defaultValue="Phone"
                    value={phone.phone}
                    onChange={handleChange}
                    style={{ margin: '0px' }}
                />
                
            </Box>
        </>
    )
}