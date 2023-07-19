import React from 'react'

import { FooterList } from '../../Styles'
import { Link } from 'react-router-dom'

export const HomePageNavs = () => {
  return (
    <FooterList>
        <Link
            to='music'
            style={{
            textDecoration: 'none',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '13px'
            }}
        >
            MUSIC
        </Link>
        <Link
            to='videos'
            style={{
            textDecoration: 'none',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '13px'
            }}
        >
            VIDEOS
        </Link>
        <Link
            to='shows'
            style={{
            textDecoration: 'none',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '13px'
            }}
        >
            SHOWS
        </Link>
        <Link
            to='merch'
            style={{
            textDecoration: 'none',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '13px'
            }}
        >
            MERCH
        </Link>
    </FooterList>
  )
}
