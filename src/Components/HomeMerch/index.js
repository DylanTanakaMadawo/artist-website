import { Container, List, ListItemText, ListItemButton } from '@mui/material'
import React from 'react'
import { TypographyLato } from '../../Styles'
import { Link } from 'react-router-dom'

export const HomeMerch = () => {
  return (
    <Container
        sx={{
            height: '60px',
            width: '100%',
            backgroundColor: '#0f0f0f',
            display: 'flex',
            color: 'white'
        }}
    >
        <List
            sx={{
                display: 'flex'
            }}
        >
            <Link
                to='/'
                style={{
                    textDecoration: 'none',
                    color: 'white',
                    marginTop: '12px',
                    marginRight: '15px',
                }}
            >
                Home
            </Link>
            <ListItemText sx={{marginTop: '13px'}}> / </ListItemText>
            <Link
                to='/merch'
                style={{
                    textDecoration: 'none',
                    color: 'white',
                    marginTop: '12px',
                    marginLeft: '15px',
                }}
            >
                Merch
            </Link>
        </List>
    </Container>
  )
}
