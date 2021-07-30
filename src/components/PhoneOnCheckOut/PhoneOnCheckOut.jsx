import React from 'react';
import { Box, Typography, IconButton, Divider, InputBase } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import SereneCard from '../../SvgIcon/SereneCard/SereneIcon';
import CloudCard from '../../SvgIcon/CloudCard/CloudCard';
import ApplePayIcon from '../../SvgIcon/ApplePay/ApplePayIcon';
import VisaIcon from '../../SvgIcon/Visa/VisaIcon';
import VisaPlusIcon from '../../SvgIcon/VisaPlus/VisaPlusIcon';
import ExpressCardIcon from '../../SvgIcon/ExpressCard/ExpressCard';
import DiscoverCardIcon from '../../SvgIcon/Discover/DiscoverCard';
import CreditCardBackIcon from '../../SvgIcon/CreditCardBack/CreditCardBackIcon';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const HeroSectionGraphicIPhone = styled('figure', { name: 'hero-section-graphic-phone' })(({ theme }) => ({
	width: '264px',
	height: '535px',
	padding: '8px',
	borderRadius: '36px',
	background: '#f6f9fc',
	boxShadow:
		'0 50px 100px -20px rgb(50 50 93 / 25%), 0 30px 60px -30px rgb(0 0 0 / 30%), inset 0 -2px 6px 0 rgb(10 37 64 / 35%)',
	userSelect: ' none',
	position: 'absolute',
	top: '65px',
	left: '40px',
	margin: 0,
	zIndex: 5,
	pointerEvents: 'none'
}));
const HeroSectionGraphicIPhoneGraphicScreen = styled('div', { name: 'hero-section-graphic-phone-screen' })(
	({ theme }) => ({
		position: 'relative',
		height: '100%',
		width: '100%',
		borderRadius: '34px',
		backgroundColor: '#fff'
	})
);
const HeroSectionGraphicIPhoneGraphicCheckoutPage = styled('div', {
	name: 'hero-section-graphic-phone-screen-checkOut'
})(({ theme }) => ({
	height: '100%',
	width: '100%',
	padding: '24px 16px',
	borderRadius: '28px',
	backgroundColor: '#fff'
}));
const IphoneCheckOutImage = styled('div', { name: 'check-out-image' })(({ theme }) => ({
	width: '100%',
	height: '80px',
	display: 'flex',
	justifyContent: 'center',
	position: 'relative'
}));
export const ApplyPayButton = styled(IconButton, { name: 'CheckoutPhoneGraphic__applePay' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		...theme.typography.CheckoutPhoneGraphic__description,
		width: '100%',
		height: '24px',
		padding: '5px 0 ',
		backgroundColor: '#0a2540',
		color: '#fff',
		borderRadius: '4px',
		'&:hover': {
			opacity: 0.6,
			backgroundColor: '#0a2540'
		}
	}
}));
const Separator = styled(Divider, { name: 'separator' })(({ theme }) => ({
	...theme.typography.CheckoutPhoneGraphic__price,
	margin: theme.spacing(4, 0, 3, 0),
	background: 'linear-gradient(#e6ebf1,#e6ebf1) no-repeat 0 50%/100% 1px'
}));
const EmailInput = styled(InputBase, { name: 'hero-section-phone-inner-email-input' })(({ theme }) => ({
	margin: theme.spacing(1.5, 0, 4, 0),
	width: '100%',
	height: '24px',
	borderRadius: '4px',
	boxShadow: '0 0 0 1px rgb(50 50 93 / 7%), 0 2px 3px -1px rgb(50 50 93 / 12%), 0 1px 3px -1px rgb(0 0 0 / 12%)'
}));
const CardInfoInputBase = styled(Box, { name: 'hero-section-phone-inner-card-info-input' })(({ theme }) => ({
	margin: theme.spacing(1.5, 0, 4, 0),
	width: '100%',
	height: '49px',
	borderRadius: '4px',
	boxShadow: '0 0 0 1px rgb(50 50 93 / 7%), 0 2px 3px -1px rgb(50 50 93 / 12%), 0 1px 3px -1px rgb(0 0 0 / 12%)',
	display: 'grid',
	gridTemplateColumns: 'repeat(2,1fr)',
	gridTemplateRows: 'repeat(2,1fr)',
	gridTemplateAreas: `"number card-group"
	                   "date   cvc"`
}));
const CountryOrRegionIputBase = styled(Box, { name: 'hero-section-phone-inner-country-or-region-input' })(
	({ theme }) => ({
		margin: theme.spacing(1.5, 0, 4, 0),
		width: '100%',
		height: '49px',
		borderRadius: '4px',
		boxShadow: '0 0 0 1px rgb(50 50 93 / 7%), 0 2px 3px -1px rgb(50 50 93 / 12%), 0 1px 3px -1px rgb(0 0 0 / 12%)',
		display: 'grid',
		gridTemplateColumns: '216px',
		gridTemplateRows: 'repeat(2,1fr)',
		gridTemplateAreas: `"country"
	                      "zip-code"`
	})
);

const PhoneOnCheckOut = () => {
	return (
		<HeroSectionGraphicIPhone>
			<HeroSectionGraphicIPhoneGraphicScreen>
				<HeroSectionGraphicIPhoneGraphicCheckoutPage>
					<IphoneCheckOutImage>
						<SereneCard />
						<CloudCard sx={{ position: 'absolute', top: '10px', left: '45%' }} />
					</IphoneCheckOutImage>
					<Typography
						component='div'
						sx={{ mt: '15px' }}
						variant='CheckoutPhoneGraphic__description'
						className='CheckoutPhoneGraphic__description'>
						Increment Magazine
					</Typography>
					<Typography
						component='div'
						sx={{ m: '2px 0 16px 0' }}
						variant='CheckoutPhoneGraphic__price'
						className='CheckoutPhoneGraphic__price'>
						HK$14 per quarter
					</Typography>
					<ApplyPayButton>
						<ApplePayIcon viewBox='0 0 34 14' />
					</ApplyPayButton>
					<Separator>or pay with card</Separator>
					<Typography component='div' variant='CheckoutPhoneGraphic__input__label' className='email-label'>
						Email
					</Typography>
					<EmailInput />
					<Typography component='div' variant='CheckoutPhoneGraphic__input__label' className='card-info-label'>
						Card Information
					</Typography>
					<CardInfoInputBase>
						<Typography
							component='div'
							variant='CheckoutPhoneGraphic__input__label'
							gridArea='number'
							sx={{ padding: '0 0 0 8px', borderBottom: '1px solid #e6ebf1' }}>
							Number
						</Typography>
						<Box
							gridArea='card-group'
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'flex-start',
								gap: '8px',
								padding: '0 4px 0 8px',
								borderBottom: '1px solid #e6ebf1'
							}}>
							<VisaIcon />
							<VisaPlusIcon />
							<ExpressCardIcon />
							<DiscoverCardIcon />
						</Box>
						<Box gridArea='date'>
							<Typography
								component='div'
								variant='CheckoutPhoneGraphic__input__label'
								gridArea='number'
								sx={{ padding: '0 0 0 8px', height: '100%', borderRight: '1px solid #e6ebf1' }}>
								MM/YY
							</Typography>
						</Box>
						<Box
							gridArea='cvc'
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
								padding: '0 4px 0 8px'
							}}>
							<Typography component='div' variant='CheckoutPhoneGraphic__input__label' gridArea='number'>
								CVC
							</Typography>
							<CreditCardBackIcon />
						</Box>
					</CardInfoInputBase>
					<Typography component='div' variant='CheckoutPhoneGraphic__input__label' className='country-or-region-label'>
						Country or region
					</Typography>
					<CountryOrRegionIputBase>
						<Box
							gridArea='country'
							sx={{
								padding: '0 9px 0 8px',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between'
							}}>
							<Typography component='div' variant='CheckoutPhoneGraphic__input__label'>
								United States
							</Typography>
							<ExpandMoreIcon sx={{ width: '18px', height: '12px' }} />
						</Box>
						<Box gridArea='zip-code'>
							<Typography
								component='div'
								variant='CheckoutPhoneGraphic__input__label'
								sx={{
									padding: '0 9px 0 8px',
									display: 'flex',
									alignItems: 'center'
								}}>
								ZIP
							</Typography>
						</Box>
					</CountryOrRegionIputBase>
					<ApplyPayButton>Pay</ApplyPayButton>
				</HeroSectionGraphicIPhoneGraphicCheckoutPage>
			</HeroSectionGraphicIPhoneGraphicScreen>
		</HeroSectionGraphicIPhone>
	);
};

export default PhoneOnCheckOut;
