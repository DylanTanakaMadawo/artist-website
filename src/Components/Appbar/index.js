import React from 'react'
import { useMediaQuery, useTheme } from "@mui/material";

import { MobileAppbar } from './MobileAppbar';
import { DesktopAppbar } from './DesktopAppbar';


export const Appbar = () => {

    const theme = useTheme();
    const ifMatches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
        {
            ifMatches ? <MobileAppbar /> : <DesktopAppbar />
        }
    </>
  )
}
