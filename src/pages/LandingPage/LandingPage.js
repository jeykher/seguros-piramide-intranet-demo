import React from 'react';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import './LandingPage.scss';

import Slideshow from '../../components/Slideshow/Slideshow';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
    width: '100px'
  }));

const LandingPage = () => {
    return (
        <>
            <div>
                <div className="ipos-landing-page-view"> 
                    <div className="ipos-section-slideshow-container">
                        <Slideshow />   
                    </div>
                    <div className="ipos-section-human-management" style={{
                            padding: '1rem 0', 
                            display: 'flex',
                            justifyContent: 'center',
                            background: '#010101'
                        }}>
                        <Item
                            elevation={24}
                        >
                            Paper
                        </Item>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LandingPage;