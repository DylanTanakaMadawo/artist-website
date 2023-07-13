import React from 'react'
import { AppbarContainerMobile, AppbarCartMobile, TypographyLato } from '../../Styles';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';
import { useUIContext } from '../../Context/DrawerContext';
import { Link } from 'react-router-dom';

export const MobileAppbar = () => {
  const { setDrawerOpen } = useUIContext();
  return (
    <AppbarContainerMobile>
      <IconButton
        onClick={() => setDrawerOpen(true)}
      >
        <MenuIcon sx={{color: 'white'}}/>
      </IconButton>
      <TypographyLato>
        <Link
          to='/'
          style={{
            textDecoration: 'none',
            color: 'white'
          }}
        >
          DOLLARNATION
        </Link>
      </TypographyLato>
      <AppbarCartMobile>
        <Link
          to='/cart'
          style={{
            textDecoration: 'none',
            color: 'white'
          }}
        >
          <ShoppingCartIcon sx={{color: 'white'}}/>  
        </Link>
      </AppbarCartMobile>
    </AppbarContainerMobile>
  )
}
