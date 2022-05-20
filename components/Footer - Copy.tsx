
import * as React from 'react';
import styles from '../styles/Footer.module.scss';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Subscription from './Subscription';
import Sharing from './Sharing';
export default function Footer() {
    return (


        <Box  sx={{justifyContent:'center',justifyItems:'center'}} className={styles.footer}>
            
            <Grid spacing={0} padding={3} container>
                <Grid item xs={12} md={4} lg={2}  xl={1}>
                    <Box>
                        <img src="/Raza-logo.png" alt="raza" />
                    </Box>
                    <Typography>Call us today</Typography>
                    <Typography>1-(800) 550-3501</Typography>
                    <Typography>Want to learn more about Raza?
                        Sign up for our foxing
                        newsletter!</Typography>
                    <Subscription></Subscription>
                </Grid>
                <Grid item xs={12} md={3} lg={1} xl={1}>
                    <Box>
                        <ul>
                            <li>SHOP
                                <ul>
                                <li>Plans</li>
                            <li>Phones</li>
                            <li>Deals</li>
                            <li>Raza55+</li>
                                </ul>
                            </li>
                            
                        </ul>
                    </Box>
                </Grid>
                <Grid item xs={12}  md={3} lg={2}>
                    <Box><ul>
                        <li>SERVICE FEATURES
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
                    </ul></Box>
                </Grid>
                <Grid item xs={12}  md={4} lg={2}>
                    <Box><ul>
                        <li>ABOUT RAZA MOBILE
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
                <Grid item xs={12} md={4} lg={2} >
                    <Box>
                    <ul>
                            <li>SUPPORT
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
            </Grid>
            {/*copyRights */}
            
            <Typography justifyContent="center" xs={12} md={12} lg={12} xl={12} sx={{ fontSize: "14px", pt: 1, pb: 1  }}>© 2022 Raza Communications™</Typography>
            {/*end copyRights */}
            <Box style={{ textAlign: 'center' }} className={styles.footerLinks}><span><a href="/">Plan Terms &amp; Conditions</a></span><span>Privacy Policy</span><span>Return Policy</span><span>Acceptable Use Policy</span><span>Accessibility</span><span>Site Terms of Use</span><span>911 &amp; E911 Disclosure</span><span>Prepaid MTS Surcharge</span><span>Sitemap</span></Box>
        </Box>


    )
}