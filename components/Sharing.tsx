import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from '../styles/Footer.module.scss';
export default function Sharing({ Props }: any) {
    return (
        <Box>
            <Typography>Connect With</Typography>
            <Box className={styles.sharing}>
                <a href=''><img src="/images/social/facebook.svg" alt='facebook' width="33" height="33"/></a>
                <a href=''><img src="/images/social/twitter.svg" alt='twitter' width="33" height="33"/></a>
                <a href=''><img src="/images/social/instagram.svg" alt='instagram' width="33" height="33"/></a>
                <a href=''><img src="/images/social/youtube.svg"  alt='youtube' width="33" height="33"/></a>
            </Box>
        </Box>
            
                
    )
} 