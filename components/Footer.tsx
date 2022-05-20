
import * as React from 'react';
import styles from '../styles/Footer.module.scss';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Subscription from './Subscription';
import Sharing from './Sharing';
export default function Footer() {
    return (

        <Grid container
            direction="row"
            justifyContent="center" pt={5} pb={0}
            className={styles.footer} >
            <Grid container
                direction="row"
                justifyContent="center"
                maxWidth="lg" >
                <Grid item xs={12} md={4}  pl={3} pr={2} pt={0} pb={0}>
                    <Box>
                        <img src="/Raza-logo.png" alt="raza" />
                    </Box>
                    <Typography  sx={{fontSize:18}}>Call us today</Typography>
                    <Typography sx={{fontSize:36}}>1-(800) 550-3501</Typography>
                    <Typography sx={{width:'250px'}}>Want to learn more about Raza?</Typography>
                    <Typography sx={{width:'160px'}}>Sign up for our foxing newsletter!</Typography>
                    <Subscription></Subscription>
                </Grid>

                <Grid xs={12} md item pl={3} pr={3} pt={0} pb={0}>
                    <ul>
                        <li><div className={styles.title}>SHOP</div>
                            <ul>
                                <li>Plans</li>
                                <li>Phones</li>
                                <li>Deals</li>
                                <li>Raza55+</li>
                            </ul>
                        </li>
                    </ul>
                </Grid>
                <Grid xs={12} md item pl={3} pr={3} pt={0} pb={0}>
                    <Box>
                        <ul>
                            <li><div className={styles.title}>SERVICE FEATURES</div>
                                <ul>
                                    <li>Coverage</li>
                                    <li>5G For Free</li>
                                    <li>Raza Family</li>
                                    <li>Bring Your Own Phone</li>
                                    <li>International Calling</li>
                                    <li>International Roaming</li>
                                    <li>WiFi Calling & Text</li>
                                    <li>E-SIM</li>
                                </ul>
                            </li>
                        </ul>
                    </Box>

                </Grid>
                <Grid xs={12} md item pl={3} pr={3} pt={0} pb={0}>
                    <Box>
                        <ul>
                            <li><div className={styles.title}>ABOUT RAZA MOBILE</div>
                                <ul>
                                    <li>Who We Are</li>
                                    <li>Careers</li>
                                    <li>Reviews</li>
                                    <li>Ryan Reynolds</li>
                                    <li>Press</li>
                                    <li>Refer A Friend</li>
                                    <li>Become A Partner</li>
                                    <li>Raza Vs. Big Wireless</li>
                                    <li>Blog</li>
                                </ul>
                            </li>
                        </ul></Box>

                </Grid>

                <Grid item xs={12} md pl={3} pr={3} pt={0} pb={0}>
                    <Box>
                        <ul>
                            <li><div className={styles.title}>SUPPORT</div>
                                <ul>
                                    <li>FAQ</li>
                                    <li>Return Policy</li>
                                    <li>Unlock Policy</li>
                                    <li>Phone Order Status+</li>
                                    <li>Phone Return Policy</li>
                                </ul>
                            </li>
                        </ul>
                    </Box>
                    <Box>
                        <Sharing></Sharing>
                    </Box>
                </Grid>
                <Grid item xs={12} pl={3} pr={3} pt={0} pb={0}>
                    <Typography justifyContent="center" sx={{ fontSize: "14px", pt: 1, pb: 1 }}>© 2022 Raza Communications™</Typography>
                </Grid>


            </Grid>


            <Grid item xs={12} className={styles.footerLinks} >
                <Box style={{ textAlign: 'center' }} pl={3} pr={3} pt={0} pb={0} ><span><a href="/">Plan Terms &amp; Conditions</a></span><span>Privacy Policy</span><span>Return Policy</span><span>Acceptable Use Policy</span><span>Accessibility</span><span>Site Terms of Use</span><span>911 &amp; E911 Disclosure</span><span>Prepaid MTS Surcharge</span><span>Sitemap</span></Box>
            </Grid>
        </Grid>


    )
}