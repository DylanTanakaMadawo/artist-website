import { Drawer } from "@mui/material";
import { useUIContext } from "../../Context/DrawerContext";
import { AppDrawerContentList, DrawerCloseButton } from "../../Styles";
import CloseIcon from '@mui/icons-material/Close';

import { Link } from 'react-router-dom';


// const MiddleDivider = styled((props) => (
//     <Divider variant='middle' {...props} sx={{borderColor: '#a2a3a2'}}/>
// ))``;


export default function AppDrawerMobile() {

    const { drawerOpen, setDrawerOpen } = useUIContext();

    return (
        <>
            {drawerOpen && (
                    <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
                        <CloseIcon 
                            sx={{
                                fontSize: '2.5rem',
                                color: 'white',
                            }}
                        />
                    </DrawerCloseButton>
                    
                    )}
            <Drawer open={drawerOpen}>
                <AppDrawerContentList>
                    <Link
                        to='/'
                        style={{
                            textDecoration: 'none',
                            color: 'white'
                        }}
                        onClick={() => setDrawerOpen(false)}
                    >
                        HOME
                    </Link>
                    <Link
                        to='artists'
                        style={{
                            textDecoration: 'none',
                            color: 'white'
                        }}
                        onClick={() => setDrawerOpen(false)}
                    >
                        ARTISTS
                    </Link>
                    <Link
                        to='music'
                        style={{
                            textDecoration: 'none',
                            color: 'white'
                        }}
                        onClick={() => setDrawerOpen(false)}
                    >
                        MUSIC
                    </Link>
                    <Link
                        to='merch'
                        style={{
                            textDecoration: 'none',
                            color: 'white'
                        }}
                        onClick={() => setDrawerOpen(false)}
                    >
                        MERCH
                    </Link>
                    <Link
                        to='collections'
                        style={{
                            textDecoration: 'none',
                            color: 'white'
                        }}
                        onClick={() => setDrawerOpen(false)}
                    >
                        COLLECTIONS
                    </Link>
                </AppDrawerContentList>
            </Drawer>
        </>
    )
}