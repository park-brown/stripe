import React from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import AwayLogo from '../../SvgIcon/AwayLogo/AwayLogo';
import { ApplyPayButton } from '../PhoneOnCheckOut/PhoneOnCheckOut';
import ApplePayIcon from '../../SvgIcon/ApplePay/ApplePayIcon';
import ApplePaySheetForAway from './ApplePaySheetForAway';
const AwayCheckoutCheckoutGraphic = styled(Box, { name: 'away-checkout-graphic' })(({ theme }) => ({
	position: 'absolute',
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	padding: '25px',
	backgroundColor: '#fff'
}));
const AwayCheckoutHeader = styled(Box, { name: 'away-checkout-header' })(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-between',
	padding: '16px 0',
	borderBottom: '1px solid #cfd7df',
	width: '100%'
}));
const AwayCheckoutGraphicProduct = styled(Box, { name: 'away-checkout-Graphic-product' })(({ theme }) => ({
	display: 'flex',
	padding: '24px 0',
	borderBottom: '1px solid #cfd7df',
	width: '100%',
	justifyContent: 'flex-start'
}));
const ProductImage = styled('figure', { name: 'away-Checkout-product-image' })(({ theme, src }) => ({
	width: '54.5px',
	height: '68.5px',
	margin: 0,
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	backgroundPosition: 'center center',
	backgroundImage: `url(${src})`
}));
const ProductDetail = styled(Box, { name: 'away-Checkout-product-detail' })(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	flexGrow: 1,
	margin: '0 0 0 12px'
}));
const AwayCheckoutGraphicStepperContainer = styled(Box, { name: 'AwayCheckoutGraphic__stepperContainer' })(
	({ theme }) => ({
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%'
	})
);
const AwayCheckoutGraphicStepper = styled(Box, { name: 'AwayCheckoutGraphic__stepper' })(({ theme }) => ({
	...theme.typography.AwayCheckoutGraphic__productName,
	position: 'relative',
	padding: '7px 29px',
	border: '1px solid #0a2540',
	'&::before': {
		content: '"-"',
		position: 'absolute',
		left: '13px',
		top: '50%',
		transform: 'translateY(-50%) translateY(-1px)'
	},
	'&::after': {
		content: '"+"',
		right: '11px',
		position: 'absolute',
		top: '50%',
		transform: 'translateY(-50%) '
	}
}));
const AwayCheckoutGraphicFooter = styled(Box, { name: 'AwayCheckoutGraphic__footer' })(({ theme }) => ({
	display: 'flex',
	width: '100%',
	flexDirection: 'column',
	marginTop: 'auto',
	borderTop: '1px solid #cfd7df'
}));
export const CheckOutButton = styled(Button, { name: 'checkout-button' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: '100%',
		padding: ' 7px 0',
		borderRadius: '4px',
		margin: ' 8px 0 0',
		textTransform: 'uppercase',
		color: '#fff',
		fontWeight: 500,
		fontSize: '11px',
		letterSpacing: '.2px',
		lineHeight: '16px',
		background: '#012169',
		'&:hover,&:active': {
			backgroundColor: '#012169'
		}
	}
}));
const product__info = [
	{
		name: 'luggage',
		url: 'https://images.ctfassets.net/fzn2n1nzq965/5TYtPen5Gm8RkEG9CziFY0/8bbac9d08cff769c1ba8a3527b6cfe8d/the-bigger-carry-on.jpg?w=120&fm=webp'
	},
	{
		name: 'luggage tag',
		url: 'https://images.ctfassets.net/fzn2n1nzq965/6zqC8j59LeG9UDrj78Bkl6/7306270fb26d4d40c278b4717c4d2de8/the-luggage-tag.jpg?w=120&fm=webp'
	}
];
const AwayCheckoutGraphicWrapper = () => {
	return (
		<AwayCheckoutCheckoutGraphic>
			<AwayLogo />
			<AwayCheckoutHeader>
				<Typography variant='AwayCheckoutGraphic__title'>Your cart</Typography>
				<Typography variant='AwayCheckoutGraphic__cartItems'>2 items</Typography>
			</AwayCheckoutHeader>
			<Box
				className='AwayCheckoutGraphic__products'
				sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', width: '100%' }}>
				<AwayCheckoutGraphicProduct>
					<ProductImage src={product__info[0].url} />
					<ProductDetail>
						<Typography variant='AwayCheckoutGraphic__productName'>The Bigger Carry-On</Typography>
						<Typography variant='AwayCheckoutGraphic__productColor' sx={{ margin: '0 0 8px 0' }}>
							Color: Navy
						</Typography>
						<AwayCheckoutGraphicStepperContainer>
							<AwayCheckoutGraphicStepper>1</AwayCheckoutGraphicStepper>
							<Typography variant='AwayCheckoutGraphic__productTotal'>$245.00</Typography>
						</AwayCheckoutGraphicStepperContainer>
					</ProductDetail>
				</AwayCheckoutGraphicProduct>
				<AwayCheckoutGraphicProduct>
					<ProductImage src={product__info[1].url} />
					<ProductDetail>
						<Typography variant='AwayCheckoutGraphic__productName'>The Luggage Tag</Typography>
						<Typography variant='AwayCheckoutGraphic__productColor' sx={{ margin: '0 0 8px 0' }}>
							Color: Sand
						</Typography>
						<AwayCheckoutGraphicStepperContainer>
							<AwayCheckoutGraphicStepper>1</AwayCheckoutGraphicStepper>
							<Typography variant='AwayCheckoutGraphic__productTotal'>$25.00</Typography>
						</AwayCheckoutGraphicStepperContainer>
					</ProductDetail>
				</AwayCheckoutGraphicProduct>
			</Box>
			<AwayCheckoutGraphicFooter>
				<Box
					className='AwayCheckoutGraphic__total'
					sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0' }}>
					<Typography variant='AwayCheckoutGraphic__productTotal'>Total</Typography>
					<Typography variant='AwayCheckoutGraphic__productName'>$270.00</Typography>
				</Box>
				<ApplyPayButton>
					<ApplePayIcon viewBox='0 0 34 14' />
				</ApplyPayButton>
				<CheckOutButton>Checkout</CheckOutButton>
			</AwayCheckoutGraphicFooter>
			<ApplePaySheetForAway />
		</AwayCheckoutCheckoutGraphic>
	);
};

export default AwayCheckoutGraphicWrapper;
