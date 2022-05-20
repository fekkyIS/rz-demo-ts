import * as React from 'react';
import styles from '../styles/Header.module.scss';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

export default function Offers({ Props }: any) {
    return (
        <Box 
            className={styles.offers} alignItems="center" sx={{pr:'22px',pl:'22px',pb:'5px',pt:'5px', justifyContent: 'center' }}>
            <Grid container spacing={0.5} alignItems="center">
                <Grid item xs={12} md={5}>
                    
                    <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              fontSize:14,
              display: { md: 'flex' },
              fontWeight: 700,
              textDecoration: 'none',
            }}
          >
            New phone and Service bundles from $15/Mo    Learn More
          </Typography>
                </Grid>
                <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
                    <Box>
                        <TextField 
                        sx={{
                            height:'30px'
                        }} 
                        fullWidth id="fullWidth" size="small" InputProps={{
                        style: { backgroundColor: "#ffffff",height:'30px'},
                        endAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={3} sx={{ textAlign: 'center' }}>
                    Reviews | Why Raza
                </Grid>
            </Grid>
        </Box>
    )
} 