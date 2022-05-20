
import React, { useEffect, useState } from "react";
import Layout from '../components/Layout'
import PTitle from '../components/PTitle';
import Container from '@mui/material/Container';
import styles from '../styles/Main.module.scss';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import BillingDetails from '../components/Billingdetails';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Ratecutter from "../components/Ratecutter";
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paymentmethod from "../components/Paymentmethod";
export interface IUserDetails {
  firstName: string;
  lastName: string;
}

function Checkout() {

  /*const [data, setData] = useState<any>({
   lastName: "Peter",
   firstName: "JackSon"
 })
 const getUsers = async () => {
   const users = await axios.get('https://app.fakejson.com/q/jlBB2kcl?token=-39xr0pLrpmVMsgQr4MVnQ');
   console.log(users.data)
   setData(users.data);
  };
  
  useEffect(() => {
   getUsers();
  }, []);*/


  const ratePropsArry = [
    { plan: "15GB", offer: "3Month-SimKit   2", price: "$150.00" },
    { plan: "4GB", offer: "3Month-SimKit   1", price: "$45.00" }]
  return (
    <Layout>
      <div className={styles.main}>
        <Container maxWidth="lg">

          <Grid container alignItems="center" justifyContent="center">
            <Grid item >
              <PTitle title="Checkout" className={styles.titleBg} />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={0}
            direction="row"
            alignItems="flex-start"
            justifyContent="center" sx={{ pt: 5, pb: 5 }}>

            <Grid item xs={12} md={6} justifyContent="center" alignItems="center">
              <Box className={styles.roundCard} margin={2} pb={2}>
                <Box pl={2.5} pr={2.5} pt={2.5}  ><Typography

                  sx={{
                    fontFamily: 'Proxima Nova Rg',
                    fontWeight: '800',
                    fontSize: {
                      lg: 36,
                      md: 36,
                      sm: 26,
                      xs: 20
                    }
                  }}
                >
                  Billing Details
                </Typography></Box>
                <Box pl={2.5} pr={2.5} pb={2.5}
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '100%' },
                  }}
                  noValidate
                  autoComplete="off">
                  <BillingDetails></BillingDetails>
                  <FormControlLabel sx={{ pt: '10px' }} control={<Checkbox defaultChecked />} label="Ship to billing address" />
                </Box>
                <Box pl={2.5} pr={2.5} pb={2.5}
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '100%' },
                  }}
                  noValidate
                  autoComplete="off">

                  <Box ><Typography

                    sx={{
                      fontFamily: 'Proxima Nova Rg',
                      fontWeight: '800',
                      fontSize: {
                        lg: 36,
                        md: 36,
                        sm: 26,
                        xs: 20
                      }
                    }}
                  >
                    Shipping Details
                  </Typography></Box>

                  <BillingDetails></BillingDetails>

                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} justifyContent="center" alignItems="center" >
              <Box className={styles.roundCard} margin={2}>
                <div className={styles.wave}>
                  <Typography> Limited time only <span>FREE shipping </span>
                    on the order placed today </Typography>
                </div>
                {/* about rate cutter*/}
                <Box className={styles.greyBox}>
                  <FormControlLabel control={<Checkbox />} label="Auto Renewal" />

                  <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center" sx={{ pt: 2, pb: 1}}>
                    <Grid item xs={6}>
                      <Typography>Product</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography align="right">Amount</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      {
                        ratePropsArry.map((obj: any, indx: number) => {
                          return <Ratecutter key={indx} rate={obj}></Ratecutter>
                        })
                      }
                      <Box display="flex" pt={2}>
                        <Box flex={1}>
                          <Box className={styles.fontSize18}>Subtotal</Box>
                        </Box>
                        <Box flex={1}>
                          <Typography align="right" className={styles.fontSize32}>$195.00</Typography>
                        </Box>
                      </Box>
                    </Grid>

                  </Grid>
                </Box>
                {/* end about rate cutter*/}
                {/*Shipping */}
                <Box sx={{ pl: 5, pr: 5 }}>
                  <Grid container spacing={0}  xs={12} direction="row"
                    justifyContent="space-between" >
                    <Grid container xs={12} className={styles.accordion}>
                      <Grid item xs={12} md={6}>
                        <div className={styles.fontSize18 + ' ' + styles.fontBold}>Shipping</div>
                      </Grid>
                      <Grid item xs={12}  md={6}> 
                        <Box style={{ marginRight: 'auto' }}>
                          <RadioGroup row name="row-radio-buttons-group">
                            <div><FormControlLabel value="normal" control={<Radio sx={{
                              color: "#CA0177",
                              padding: 1,
                              '&.Mui-checked': {
                                color: "#CA0177",
                              },
                            }} />} label="3-5 Day Shipping: $0" /></div>
                            <div><FormControlLabel value="Fed" control={<Radio sx={{
                              color: "##CA0177",
                              padding: 1,
                              '&.Mui-checked': {
                                color: "#CA0177",
                              },
                            }} />} label="FedEx Next Day Air : $15" /></div>
                          </RadioGroup>
                        </Box>
                      </Grid>
                    </Grid>
                    <Grid container spacing={0} className={styles.accordion}>
                      <Grid item xs={6}>
                        <div className={styles.fontSize18}>Recovery FREE</div>

                      </Grid>
                      <Grid item xs={6} style={{ textAlign: "right" }}>
                        <div className={styles.fontSize24}>$19.39</div>
                      </Grid>
                    </Grid>
                    <Grid container spacing={0} className={styles.accordion}>
                      <Grid item xs={6}>
                        <div className={styles.fontSize18}>Taxes & Surcharges</div>

                      </Grid>
                      <Grid item xs={6} style={{ textAlign: "right" }}>
                        <div className={styles.fontSize24}>$3.19</div>
                      </Grid>
                    </Grid>
                    <Grid container spacing={0} sx={{ mt: '20px' }} direction={'column'} >
                      <Grid item xs={6} style={{ color: "#CA0177" }} className={styles.fontSize24} >
                        Total
                      </Grid>
                      <Grid item xs={6} style={{ color: "#CA0177", textAlign: "right" }} className={styles.fontSize32}>
                        $232.58
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
                {/*end Shippind*/}
                {/**paymethod */}
                <Paymentmethod></Paymentmethod>
                {/**end paymethod */}
              </Box>
            </Grid>
          </Grid>
        </Container>

      </div>
    </Layout>
  )
}

export default Checkout