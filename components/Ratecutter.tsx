
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styles from '../styles/Main.module.scss';
type Props = {
    rate:{
    plan:string,
    offer:string,
    price:string
}}
export default function Ratecutter({rate}:Props) {
    return (
        <Box display="flex" className={styles.bb}>
            <Box flex={1}>
                <Box className={styles.fontSize38}>{rate.plan} <span className={styles.fontSize26}>Plan</span></Box>
                <Box className={styles.fontSize25} >{rate.offer}</Box>
            </Box>
            <Box flex={1}>
                <Typography  align="right" className={styles.fontSize32}>{rate.price}</Typography>
            </Box>
        </Box>
    )
}