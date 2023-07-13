import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { AmountButtons, CartContainer, CartImageContainer, CartInfoContainer, CartProductContainer, DownloadStream, ProductImage, ProductInfo, TypographyLato } from '../../Styles'
import { Divider, Container, Box } from '@mui/material'




export const CartItem = (props) => {
    const { id, name, image, price, discount} = props.data;

    const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  return (
    <Box
        sx={{
            backgroundColor: '#0f0f0f'
        }}
    >
        <CartContainer>
            <CartProductContainer>
                <CartImageContainer>
                    <ProductImage src={image}/>
                </CartImageContainer>
                <Divider sx={{backgroundColor: 'grey'}} orientation='vertical' flexItem/>
                <CartInfoContainer>
                    <ProductInfo 
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            marginTop: '25px'
                        }}
                    >
                        <TypographyLato sx={{fontSize: '17px'}}>{name}</TypographyLato>
                        <TypographyLato sx={{fontSize: '17px'}}>Size : M</TypographyLato>
                        <TypographyLato sx={{fontSize: '17px',fontWeight: 'bold', marginTop: '15px'}}>${price}</TypographyLato>
                    </ProductInfo>
                </CartInfoContainer>
            </CartProductContainer>
        </CartContainer>
        <Container
            sx={{
                marginTop: '20px',
                marginBottom: '80px',
            }}
        >
            <AmountButtons
                onClick={() => removeFromCart(id)}
            > - </AmountButtons>
            <input style={{
                width: '40px',
                textAlign: 'center',
                fontWeight: 'bolder',
            }} value={cartItems[id]}/>
            <AmountButtons
                onClick={() => addToCart(id)}
            > + </AmountButtons>
        </Container>
    </Box>
    
  )
}
