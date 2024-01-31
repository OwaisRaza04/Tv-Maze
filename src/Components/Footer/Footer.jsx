import React from 'react';
import { Grid, Link } from '@mui/material';
import { Button } from '@mui/material';

const Footer = () => {
    return (
        <div>
            <Grid className='mt-10 text-center text-white bg-black'
            container
            sx={{bgcolor:'black', color:'white', py:3}}
            >
                <Grid item xs={12} sm={12} md={3}>
                    <h3 className="pb-5" style={{ fontSize: '20px', fontWeight: 'bold' }}>Company</h3>
                    <div>
                        <p className="pb-5 cursor-pointer footer-data" varient='h6'>About</p>
                    
                        <p className="pb-5 cursor-pointer footer-data" varient='h6'>Blog</p>
                    
                        <p className="pb-5 cursor-pointer footer-data" varient='h6'>Press</p>
                    
                        <p className="pb-5 cursor-pointer footer-data" varient='h6'>Jobs</p>
                    
                        <p className="pb-5 cursor-pointer footer-data" varient='h6'>Partners</p>
                    </div>
                </Grid>

                <Grid item xs={12} sm={12} md={3}>
                    <h3 className="pb-5" style={{ fontSize: '20px', fontWeight: 'bold' }}>Solutions</h3>
                    <div>
                        <p className="pb-5 cursor-pointer footer-data" varient='h6'>Marketing</p>
                    
                        <p className="pb-5 cursor-pointer footer-data" varient='h6'>Analytics</p>
                    
                        <p className="pb-5 cursor-pointer footer-data" varient='h6'>Commerce</p>
                    
                        <p className="pb-5 cursor-pointer footer-data" varient='h6'>Insights</p>
                    
                        <p className="pb-5 cursor-pointer footer-data" varient='h6'>Support</p>
                    </div>
                </Grid>

                <Grid item xs={12} sm={12} md={3}>
                    <h3 className="pb-5" style={{ fontSize: '20px', fontWeight: 'bold' }}>Documentation</h3>
                    <div>
                        <p className="pb-5 cursor-pointer footer-data" varient='h6'>Guides</p>
                    
                        <p className="pb-5 cursor-pointer footer-data" varient='h6'>API Status</p>
                    
                    </div>
                </Grid>

                <Grid item xs={12} sm={12} md={3}>
                    <h3 className="pb-5" style={{ fontSize: '20px', fontWeight: 'bold' }}>Legal</h3>
                    <div >
                        <p className="pb-5 cursor-pointer footer-data" varient='h6'>Claim</p>
                    
                        <p className="pb-5 cursor-pointer footer-data" varient='h6'>Privacy</p>
                    
                        <p className="pb-5 cursor-pointer footer-data" varient='h6'>Terms</p>
                    
                    </div>
                </Grid>

                <Grid className='pt-20' item xs={12}>
                    <p varient="body2" component='p' align='center'>&copy; 2023 My company. All rights reserved</p>
                    <p varient='body2' component='p' align='center'>Made with love by Me.</p>
                    <p varient='body2' component='p' align='center'>Icons made by <a href="https://www.freepik.com/" target='_blank'>Freepik</a> from <a href="https://www.flaticon.com/" target='_blank'>www.flaticon.com</a></p>
                    
                </Grid>
            </Grid>
        </div>
    );
};

export default Footer;
