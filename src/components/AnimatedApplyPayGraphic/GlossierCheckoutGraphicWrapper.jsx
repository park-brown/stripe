import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import GlossierLogo from '../../SvgIcon/GlossierLogo/GlossierLogo';
import ClearIcon from '@material-ui/icons/Clear';
import ApplePayIcon from '../../SvgIcon/ApplePay/ApplePayIcon';
import { ApplyPayButton } from '../PhoneOnCheckOut/PhoneOnCheckOut';
import ApplePaySheetForGlossier from './ApplePaySheetForGlossier';

const GlossierCheckoutCheckoutGraphic = styled(Box, { name: 'glossier-checkout-graphic' })(({ theme }) => ({
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
const GlossierCheckoutHeader = styled(Box, { name: 'glossier-checkout-header' })(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-between',
	padding: '16px 0',
	borderBottom: '1px solid #cfd7df',
	width: '100%'
}));
const GlossierCheckoutCartGraphicItem = styled(Box, { name: 'GlossierCheckoutCartGraphic__item' })(({ theme }) => ({
	position: 'relative',
	display: 'flex',
	flexDirection: 'column',
	background: '#f6f9fc',
	borderRadius: '4px',
	height: '184px',
	padding: '8px 3px',
	width: 'calc(50% - 6px)'
}));
const ProductImage = styled('figure', { name: 'glossier-Checkout-product-image' })(({ theme, src }) => ({
	width: '82px',
	height: '110px',
	margin: 0,
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	backgroundPosition: 'center center',
	backgroundImage: `url(${src})`,
	alignSelf: 'center'
}));
const ItemButton = styled(Box, { name: 'item-button' })(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	padding: '7px 0 8px',
	flexBasis: 'calc(50% - 2px)',
	fontSize: '10px',
	fontWeight: 525,
	letterSpacing: '0.2px',
	color: '#0a2540'
}));
const CheckOutButton = styled(Box, { name: 'fake-check-out' })(({ theme }) => ({
	...theme.typography.AwayCheckoutGraphic__productTotal,
	width: '100px',
	height: '24px',
	border: '1px solid #c7cdd3',
	borderRadius: '4px',

	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center'
}));
const product__info = [
	{
		name: 'yellow shampoo',
		url: 'https://images.ctfassets.net/fzn2n1nzq965/2P49xGxmdP6XDfxNaqgirN/e529a03d7bc3a8d3bf65e259bf4dbcc6/item-1.jpg?w=164&fm=webp'
	},
	{
		name: 'red shampoo',
		url: './item-2.jpg'
	}
];
const GlossierCheckoutGraphicWrapper = () => {
	return (
		<GlossierCheckoutCheckoutGraphic>
			<GlossierLogo />
			<GlossierCheckoutHeader>
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<ClearIcon sx={{ margin: '0 4px 0 0' }} />
					<Typography variant='AwayCheckoutGraphic__title'>Your cart</Typography>
				</Box>
				<Typography variant='AwayCheckoutGraphic__cartItems'>2 items</Typography>
			</GlossierCheckoutHeader>
			<Box
				className='GlossierCheckoutCartGraphic__content'
				sx={{ padding: '16px 0', display: 'flex', justifyContent: 'space-between', width: '100%' }}>
				<GlossierCheckoutCartGraphicItem>
					<Typography variant='GlossierCheckoutCartGraphic__itemName' sx={{ margin: '0 0 6px 0' }}>
						1 × Invisible Shield
					</Typography>
					<Typography variant='GlossierCheckoutCartGraphic__itemPrice'>S$34.00</Typography>
					<ProductImage src={product__info[0].url} />
					<Box
						className='button-container'
						sx={{ width: '100%', flexGrow: 1, display: 'flex', alignItems: 'center', gap: '2px' }}>
						<ItemButton>Edit</ItemButton>
						<ItemButton>Remove</ItemButton>
					</Box>
				</GlossierCheckoutCartGraphicItem>

				<GlossierCheckoutCartGraphicItem>
					<Typography variant='GlossierCheckoutCartGraphic__itemName' sx={{ margin: '0 0 6px 0' }}>
						1 × Body Hero Wash
					</Typography>
					<Typography variant='GlossierCheckoutCartGraphic__itemPrice'>S$25.00</Typography>
					<ProductImage src={product__info[1].url} />
					<Box
						className='button-container'
						sx={{ width: '100%', flexGrow: 1, display: 'flex', alignItems: 'center', gap: '2px' }}>
						<ItemButton>Edit</ItemButton>
						<ItemButton>Remove</ItemButton>
					</Box>
				</GlossierCheckoutCartGraphicItem>
			</Box>
			<Box
				className='bottom-bar'
				sx={{ margin: 'auto 0 0 0', width: '100%', padding: '10px 0 0 0', borderTop: '1px solid #e6ebf1' }}>
				<Box className='total-box' sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<Typography variant='AwayCheckoutGraphic__productTotal' sx={{ fontWeight: 600 }}>
						Estimated total
					</Typography>
					<Typography variant='AwayCheckoutGraphic__productTotal' sx={{ fontWeight: 600 }}>
						S$59.00
					</Typography>
				</Box>
				<Box
					className='button-group'
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						width: '100%',
						margin: '10px 0 0 0'
					}}>
					<ApplyPayButton sx={{ flexBasis: '100px' }}>
						<ApplePayIcon viewBox='0 0 32 14' />
					</ApplyPayButton>
					<CheckOutButton>Checkout</CheckOutButton>
				</Box>
			</Box>
			<ApplePaySheetForGlossier />
		</GlossierCheckoutCheckoutGraphic>
	);
};

export default GlossierCheckoutGraphicWrapper;
