
import * as React from 'react';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import styles from '../styles/Main.module.scss';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

export default function Paymentmethod() {
    const [value, setValue] = React.useState('crd');
    const [expanded, setExpanded] = React.useState('crd');
    const handleChange = (event: any, newExpanded: any) => {
        setValue((event.target).value);
        setExpanded(newExpanded ? (event.target).value : false);
    };

    const [selectedValue, setSelectedValue] = React.useState('visa');

    const cardChange = (event: any) => {
        setSelectedValue(event.target.value);
    };

    return (<Box className={styles.greyBox_bt}>
        <Box sx={{ pb: "2rem" }} className={styles.accordion}>
            <div className={styles.fontSize20}>Payment Method</div>
        </Box>
        <Grid container className={styles.accordion} spacing={0} alignItems="center" justifyContent="center">

            <Grid container xs={6} alignItems="center" justifyContent="left">
                <Grid item> <Radio
                    checked={value === 'crd'}
                    onChange={handleChange}
                    value="crd"
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'A' }}
                /></Grid>
                <Grid item><img src="crd.png" width="38" height="34" /></Grid>
                <Grid item sx={{ pl: '10px' }}>Credit Card</Grid>
            </Grid>

            <Grid item xs={6}>

                <img src="ccard.png" style={{width: '100%'}} />
            </Grid>

            {expanded == "crd" ? <Grid container direction="column" spacing={0} sx={{ ml: "2.5rem", mr: "2.5rem" }}>

                <Box sx={{ pb: "1rem", pt: "2rem" }} className={styles.fontSize16_black}>Your Saved Credit Cards</Box>
                <Grid container xs={12} alignItems="center" className={styles.accordion}>
                    <Grid item xs={1}><img src="/master.png" width='35' height='25' /></Grid>
                    <Grid item xs={5} md={5} sx={{ pl: '50px' }}>
                        <Box className={styles.fontSize14}>Card Number</Box>
                        <Box>5241 ….8333</Box>
                    </Grid>
                    <Grid item xs={3} md={3}>
                        <Box className={styles.fontSize14}>Expires On</Box>
                        <Box>502/23</Box>
                    </Grid>
                    <Grid item xs={1} md={1} className={styles.push}>
                        <Box><Radio name="saved-crd" checked={selectedValue === 'master'} onChange={cardChange} value="master" /></Box>
                    </Grid>
                </Grid>
                <Grid container xs={12} alignItems="center" justifyContent="left" className={styles.accordion}>
                    <Grid item xs={1}><img src="/visa.png" width='40' height='13' /></Grid>
                    <Grid item xs={5} sx={{ pl: '50px' }}>
                        <Box className={styles.fontSize14}>Card Number</Box>
                        <Box>5241 ….8333</Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box className={styles.fontSize14}>Expires On</Box>
                        <Box>502/23</Box>
                    </Grid>
                    <Grid item xs={1} className={styles.push}>
                        <Box><Radio name="saved-crd" checked={selectedValue === 'visa'} onChange={cardChange} value="visa" /></Box>
                    </Grid>
                </Grid>
                <Box sx={{ pb: "0rem", pt: "1rem" }}>
                    <Button variant="contained" disableElevation
                        sx={{
                            fontSize: 15,
                            pl: 0.5,
                            pr: 1,
                            pb: 0.3,
                            pt: 0.2,
                            flexGrow: 1,
                            backgroundColor: '#CA0177',
                            borderRadius: 28,
                            textTransform: 'capitalize',
                            '&:focus': {
                                outline: 'none',
                                boxShadow: '0 0 0 5px rgba(21, 156, 228, 0.4)'
                            },
                            'svg': {
                                fontSize: 24
                            }

                        }}
                        startIcon={<AddCircleOutlineIcon className={styles.addIcon} />}
                    >
                        Add New Credit Card
                    </Button>
                </Box>
            </Grid> : null}
        </Grid>

        <Grid container spacing={0} alignItems="center" className={styles.accordion}>
            <Grid item xs={6} container alignItems="center" justifyContent="left">
                <Grid item> <Radio
                    checked={value === 'apple'}
                    onChange={handleChange}
                    value="apple"
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'apple' }}
                /></Grid>
                <Grid item><img src="apple-icon.png" width="29" height="36" /></Grid>
                <Grid item sx={{ pl: '10px' }}>Apple</Grid>
            </Grid>
            {expanded == "apple" ? <Grid container spacing={0}>
                <Box>apple pay UI</Box>
            </Grid> : null}
        </Grid>

        <Grid container spacing={0} alignItems="center" className={styles.accordion}>
            <Grid item xs={6} container alignItems="center" justifyContent="left">
                <Grid item> <Radio
                    checked={value === 'paypal'}
                    onChange={handleChange}
                    value="paypal"
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'paypal' }}
                /></Grid>
                <Grid item><img src="/paypal.png" width="31" height="36" /></Grid>
                <Grid item sx={{ pl: '10px' }}>Paypal</Grid>
            </Grid>
            {expanded == "paypal" ? <Grid container spacing={0}>
                <Box>paypal pay UI</Box>
            </Grid> : null}
        </Grid>

        <Grid container spacing={0} alignItems="center" className={styles.accordion}>
            <Grid item xs={6} container alignItems="center" justifyContent="left">
                <Grid item> <Radio
                    checked={value === 'google'}
                    onChange={handleChange}
                    value="google"
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'google' }}
                /></Grid>
                <Grid item><img src="/google.png" width="36" height="36" /></Grid>
                <Grid item sx={{ pl: '10px' }}>Google</Grid>
            </Grid>
            {expanded == "google" ? <Grid container spacing={0}>
                <Box>google pay UI</Box>
            </Grid> : null}
        </Grid>

        <Box sx={{ display: 'flex', mt: "2rem" }}>
            <Button variant="contained" disableElevation
                sx={{
                    fontSize: 18,
                    padding: 1.2,
                    flexGrow: 1,
                    backgroundColor: '#6633B5',
                    borderRadius: 28,
                    '&:focus': {
                        outline: 'none',
                        boxShadow: '0 0 0 5px rgba(21, 156, 228, 0.4)'
                    }

                }}
            >
                Proceed to Checkout
            </Button>
        </Box>



    </Box>)
}