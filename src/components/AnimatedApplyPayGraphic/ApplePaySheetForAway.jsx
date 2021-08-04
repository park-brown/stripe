import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import ApplePayIcon from '../../SvgIcon/ApplePay/ApplePayIcon';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import VisaIcon from '../../SvgIcon/Visa/VisaIcon';
import FaceFeatures from '../../SvgIcon/FaceFeatures/FaceFeatures';
import FaceBorders from '../../SvgIcon/FaceBorders.jsx/FaceBorders';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
const ApplePaySheetWrapper = styled(Box, { name: 'apple-pay-sheet-wrapper' })(({ theme }) => ({
	position: 'absolute',
	top: 0,
	bottom: 0,
	left: 0,
	right: 0
}));
const ApplePaySheetOverLay = styled(Box, { name: 'apple-pay-sheet-wrapper-overlay' })(({ theme }) => ({
	position: 'absolute',
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,
	background: '#0b3055',
	opacity: 0.2
}));
const ApplePaySheet = styled(Box, { name: 'apple-pay-sheet' })(({ theme }) => ({
	background: '#fff',
	boxShadow: ' 0 6px 12px -2px rgb(50 50 93 / 12%), 0 3px 7px -3px rgb(0 0 0 / 15%)',
	borderRadius: '8px 8px 30px 30px',
	position: 'absolute',
	right: '4px',
	bottom: '4px',
	left: '4px'
}));
const ApplePaySheetHeader = styled(Box, { name: 'apple-pay-sheet-header' })(({ theme }) => ({
	display: 'grid',
	margin: '0 0 0 12px',
	padding: '8px 12px 8px 0',
	borderBottom: '1px solid #e6ebf1',
	gridTemplateColumns: '1fr auto',
	gridTemplateRows: 'auto',
	gridTemplateAreas: `"apple-pay-icon  cancel"`,
	gap: '16px',
	alignItems: 'center'
}));
const ApplePaySheetCardInfo = styled(Box, { name: 'apple-pay-sheet-card-info' })(({ theme }) => ({
	display: 'grid',
	margin: '0 0 0 12px',
	padding: '8px 12px 8px 0',
	borderBottom: '1px solid #e6ebf1',
	gridTemplateColumns: '54px 1fr auto',
	gridTemplateRows: 'auto',
	gridTemplateAreas: `"visa  visa-info  arrow-right"`,
	gap: '16px',
	alignItems: 'center'
}));
const ApplePaySheetShipping = styled(Box, { name: 'apple-pay-sheet-shipping' })(({ theme }) => ({
	display: 'grid',
	margin: '0 0 0 12px',
	padding: '8px 12px 8px 0',
	borderBottom: '1px solid #e6ebf1',
	gridTemplateColumns: '54px 1fr auto',
	gridTemplateRows: 'auto',
	gridTemplateAreas: `"shipping  address  arrow-right"`,
	gap: '16px',
	alignItems: 'center'
}));
const ApplePayMethod = styled(Box, { name: 'apple-pay-sheet-method' })(({ theme }) => ({
	display: 'grid',
	margin: '0 0 0 12px',
	padding: '8px 12px 8px 0',
	borderBottom: '1px solid #e6ebf1',
	gridTemplateColumns: '54px 1fr auto',
	gridTemplateRows: 'auto',
	gridTemplateAreas: `"method  method-info arrow-right"`,
	gap: '16px',
	alignItems: 'center'
}));
const ApplePayContact = styled(Box, { name: 'apple-pay-sheet-contact' })(({ theme }) => ({
	display: 'grid',
	margin: '0 0 0 12px',
	padding: '8px 12px 8px 0',
	borderBottom: '1px solid #e6ebf1',
	gridTemplateColumns: '54px 1fr auto',
	gridTemplateRows: 'auto',
	gridTemplateAreas: `"contact  email arrow-right"`,
	gap: '16px',
	alignItems: 'center'
}));
const ApplePayTotal = styled(Box, { name: 'apple-pay-sheet-pay-total' })(({ theme }) => ({
	display: 'grid',
	margin: '0 0 0 12px',
	padding: '8px 12px 8px 0',
	borderBottom: '1px solid #e6ebf1',
	gridTemplateColumns: '54px 1fr auto',
	gridTemplateRows: 'auto',
	gridTemplateAreas: `".  text   pay-total"`,
	gap: '16px',
	alignItems: 'center'
}));
const ApplePayFaceID = styled(Box, { name: 'apple-pay-face-id' })(({ theme }) => ({
	position: 'relative',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	margin: '12px auto',
	height: '40px'
}));
export const FaceCheck = styled(CheckCircleOutlineOutlinedIcon, { name: 'face-checked' })(({ theme, checked }) => ({
	position: 'absolute',
	width: '34px',
	height: '34px',
	top: '10%',
	left: '44%',
	color: '#0278fc',
	...(checked && {
		animation: `rotate ${theme.transitions.duration.shortest}ms ${theme.transitions.easing.easeInOut} 4 `,

		'@keyframes rotate': {
			from: {
				transform: 'rotateZ(0deg)  rotateY(0deg) '
			},
			to: {
				transform: 'rotateZ(90deg)  rotateY(300deg) '
			}
		}
	})
}));
const ApplePaySheetForAway = () => {
	return (
		<ApplePaySheetWrapper>
			<ApplePaySheetOverLay />
			<ApplePaySheet>
				<ApplePaySheetHeader>
					<Box gridArea='apple-pay-icon'>
						<ApplePayIcon
							viewBox='0 0 39 16'
							sx={{
								width: '39px',
								height: '16px',
								margin: 0,
								'& path': {
									fill: '#000',
									width: '39px',
									height: '16px'
								}
							}}
						/>
					</Box>

					<Typography gridArea='cancel' variant='apple__pay__sheet__cancel'>
						cancel
					</Typography>
				</ApplePaySheetHeader>
				<ApplePaySheetCardInfo>
					<Box
						gridArea='visa'
						sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', alignSelf: 'stretch' }}>
						<VisaIcon sx={{ width: '22px', height: '15px' }} />
					</Box>
					<Box gridArea='visa-info' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
						<Typography variant='apple__pay__sheet__checkOut__info'>OCBC Bank (....8888)</Typography>
						<Typography variant='apple__pay__sheet__checkOut__info'>173 Bencoolen Street</Typography>
					</Box>
					<Box gridArea='arrow-right'>
						<ArrowForwardIosIcon sx={{ width: '10px', height: '10px', fill: '#2a69fe' }} />
					</Box>
				</ApplePaySheetCardInfo>
				<ApplePaySheetShipping>
					<Box
						gridArea='shipping'
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'flex-start',
							alignSelf: 'stretch',
							overflow: 'hidden',
							textOverflow: 'ellipsis',
							textTransform: 'uppercase'
						}}>
						<Typography variant='apple__pay__sheet__checkOut__info'>shippi...</Typography>
					</Box>
					<Box
						gridArea='address'
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'flex-start'
						}}>
						<Typography variant='apple__pay__sheet__checkOut__info'>Wei Qing</Typography>
						<Typography variant='apple__pay__sheet__checkOut__info'>173 Bencoolen Street, Singapore</Typography>
						<Typography variant='apple__pay__sheet__checkOut__info'>189642</Typography>
					</Box>
					<Box gridArea='arrow-right'>
						<ArrowForwardIosIcon sx={{ width: '10px', height: '10px', fill: '#2a69fe' }} />
					</Box>
				</ApplePaySheetShipping>
				<ApplePayMethod>
					<Box
						gridArea='method'
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'flex-start',
							alignSelf: 'stretch',
							overflow: 'hidden',
							textOverflow: 'ellipsis',
							textTransform: 'uppercase'
						}}>
						<Typography variant='apple__pay__sheet__checkOut__info'>method</Typography>
					</Box>
					<Box
						gridArea='method-info'
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'flex-start'
						}}>
						<Typography variant='apple__pay__sheet__checkOut__info'>3–Day</Typography>
						<Typography variant='apple__pay__sheet__checkOut__info'>3-4 Business Days</Typography>
					</Box>
					<Box gridArea='arrow-right'>
						<ArrowForwardIosIcon sx={{ width: '10px', height: '10px', fill: '#2a69fe' }} />
					</Box>
				</ApplePayMethod>
				<ApplePayContact>
					<Box
						gridArea='contact'
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'flex-start',
							alignSelf: 'stretch',
							overflow: 'hidden',
							textOverflow: 'ellipsis',
							textTransform: 'uppercase'
						}}>
						<Typography variant='apple__pay__sheet__checkOut__info'>conta...</Typography>
					</Box>
					<Box
						gridArea='email'
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'flex-start'
						}}>
						<Typography variant='apple__pay__sheet__checkOut__info'>wei.qing@example.com</Typography>
						<Typography variant='apple__pay__sheet__checkOut__info'>+65 6222 3322</Typography>
					</Box>
					<Box gridArea='arrow-right'>
						<ArrowForwardIosIcon sx={{ width: '10px', height: '10px', fill: '#2a69fe' }} />
					</Box>
				</ApplePayContact>
				<ApplePayTotal>
					<Box
						gridArea='text'
						sx={{
							display: 'flex',
							justifyContent: 'flex-start',
							alignItems: 'flex-start',
							alignSelf: 'stretch',
							overflow: 'hidden',
							textOverflow: 'ellipsis',
							textTransform: 'uppercase'
						}}>
						<Typography variant='apple__pay__sheet__checkOut__info'>pay total</Typography>
					</Box>
					<Box gridArea='pay-total'>
						<Typography variant='apple__pay__sheet__checkOut__info'>$270.00</Typography>
					</Box>
				</ApplePayTotal>
				<ApplePayFaceID>
					<FaceBorders />
					<FaceFeatures />
					{/* <FaceCheck /> */}
				</ApplePayFaceID>
			</ApplePaySheet>
		</ApplePaySheetWrapper>
	);
};

export default ApplePaySheetForAway;
