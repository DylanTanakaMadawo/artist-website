import React from 'react'
import { FooterList, HomePageContainer, HomePageNavbar, HomePageImageContainer, HomePageImage, TheHeader, ButtonLinksContainer, ButtonContainer } from '../../Styles'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <HomePageContainer>
        <HomePageNavbar>
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
        </HomePageNavbar>
        <TheHeader>" Album Name "</TheHeader>
        <HomePageImageContainer>
            <HomePageImage src='/musicimages/doncover.jpg'/>
            <ButtonContainer>
              <ButtonLinksContainer>
                <Link
                  to='/'
                  style={{
                  textDecoration: 'none',
                  color: 'black',
                  fontWeight: 'bold'
                }}>STREAM / DOWNLOAD</Link>
              </ButtonLinksContainer>
            </ButtonContainer>
        </HomePageImageContainer>
    </HomePageContainer>
  )
}
