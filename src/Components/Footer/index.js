import React from 'react'
import { FooterContainer, FooterLinks, FooterSocials, FooterList, FooterSignature, TypographyLato } from '../../Styles';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
// import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
// import { Link } from 'react-router-dom';
import { ListItemButton } from '@mui/material';
// import SpotifyIcon from '@mui/icons-material/Spotify';

import { Icon } from '@iconify/react';

export const Footer = () => {
  return (
    <FooterContainer>
        <FooterSocials>
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <YouTubeIcon />
            <Icon icon="simple-icons:applemusic" />
            <Icon icon="simple-icons:audiomack" />
            <Icon icon="mdi:spotify" />
        </FooterSocials>
        <FooterLinks>
            <FooterList>
                <ListItemButton sx={{fontSize: '12px'}}>Help</ListItemButton>
                <ListItemButton sx={{fontSize: '12px'}}>Terms & Conditions</ListItemButton>
                <ListItemButton sx={{fontSize: '12px'}}>About</ListItemButton>
                <ListItemButton sx={{fontSize: '12px'}}>Contact</ListItemButton>
                <ListItemButton sx={{fontSize: '12px'}}>Cookie Choices</ListItemButton>
            </FooterList>
        </FooterLinks>
        <FooterSignature>
            <TypographyLato sx={{
                fontSize: '12px',
                color: 'white',
                fontWeight: 'bold',
            }}>SITE DESIGNED BY : DYLAN MADAWO | 2023</TypographyLato>
        </FooterSignature>
    </FooterContainer>

  )
}
