import React from 'react';
import { Box, Typography, Menu, Paper } from '@material-ui/core';
import { styled } from '@material-ui/system';
import PaymentIcon from '../../SvgIcon/payment/paymentIcon';
import TextInnerRightArrow from '../../SvgIcon/TextInnerRightArrow/TextInnerRightArrow';
import PaymentLinksIcon from '../../SvgIcon/PaymentLinks/PaymentLinkIcon';
import InvoicingIcon from '../../SvgIcon/Invoicing/InvoicingIcon';
import BillingIcon from '../../SvgIcon/Billing/BillingIcon';
import ConnectIcon from '../../SvgIcon/Connect/ConnectIcon';
import RadarIcon from '../../SvgIcon/Radar/RadarIcon';
import SigmaIcon from '../../SvgIcon/Sigma/SigmaIcon';
import AtlasIcon from '../../SvgIcon/Atlas/AtlasIcon';
import ClimateIcon from '../../SvgIcon/Climate/ClimateIcon';
import TaxIcon from '../../SvgIcon/Tax/TaxIcon';
import IdentityIcon from '../../SvgIcon/Identity/IdentityIcon';
const ProductMenu = styled(Menu, { name: 'product-menu' })(({ theme }) => ({
	'& .MuiPopover-paper': {
		margin: '28px 0 0 0', // top set to 40px,  add 52px margin top to make product menu sit right below header
		overflow: 'visible',
		'& .MuiMenu-list': {
			padding: 0
		}
	}
}));

const ProductMenuLayOut = styled(Paper, { name: 'product-menu-inner' })(({ theme }) => ({
	width: '604px',
	height: '522px',
	position: 'relative',
	padding: '32px',
	display: 'flex',
	justifyContent: 'flex-start',
	alignItems: 'flex-start',
	gap: '0px 32px'
}));
const ProductMenuInnerColumn = styled(Box, { name: 'inner-column' })(({ theme }) => ({
	flexBasis: '50%',
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'flex-start',
	alignItems: 'flex-start'
}));
const ProductMenuInnerTitle = styled(Typography, { name: 'product-nav-title' })(({ theme }) => ({
	...theme.typography.nav_menu_inner_title,
	margin: '0 0 32px 0',
	width: '100%'
}));
const ProductMenuListItem = styled(Box, { name: 'product-menu-list-item' })(({ theme }) => ({
	width: '100%',
	height: '40px',
	display: 'flex',
	justifyContent: 'flex-start',
	alignItems: 'center',
	'&:hover .MuiTypography-root': {
		opacity: 1
	},
	'&:hover .MuiSvgIcon-root': {
		opacity: 1
	}
}));
const ProductMenuListItemIcon = styled(Box, { name: 'product-menu-list-item-icon' })(({ theme }) => ({
	width: '32px',
	height: '32px',
	margin: '0 14px 0 0'
}));
const ProductMenuListItemText = styled(Box, { name: 'product-menu-list-item-text' })(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	flexGrow: 1,
	height: '100%'
}));
const TextLabel = styled(Typography, { name: 'product-menu-list-item-text-label' })(({ theme }) => ({
	...theme.typography.nav_menu_inner_label,
	position: 'relative'
}));
const InnerArrow = styled(TextInnerRightArrow, { name: 'text-inner-right-arrow' })(({ theme }) => ({
	position: 'absolute',
	right: '-20px',
	top: '50%',
	transform: 'translateY(-50%)',
	opacity: 0
}));
const TextSubTitle = styled(Typography, { name: 'product-menu-list-item-text-subtitle' })(({ theme }) => ({
	...theme.typography.nav_menu_inner_body,
	opacity: 0.6,
	'&:hover': {
		opacity: 1
	}
}));
const UpwardArrow = styled(Box, { name: 'product-menu-upward-arrow' })(({ theme }) => ({
	width: '14px',
	height: '14px',
	position: 'absolute',
	top: '3px',
	left: '30px',
	transform: 'rotate(45deg) translate(-50%,-50%)',
	backgroundColor: theme.palette.common.white,
	borderRadius: '3px',
	boxShadow: '-3px -3px 5px rgb(82 95 127 / 4%)'
}));
const ProductMenuWrapper = ({ anchorEl, open, handleClose }) => {
	return (
		<ProductMenu
			id='product-menu-button'
			MenuListProps={{
				'aria-labelledby': 'product-menu-button'
			}}
			anchorEl={anchorEl}
			open={open}
			onClose={handleClose}
			disablePortal={true}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'left'
			}}>
			<ProductMenuLayOut>
				<UpwardArrow />
				<ProductMenuInnerColumn>
					<ProductMenuInnerTitle component='h1'>payments</ProductMenuInnerTitle>
					{/*Payment listItem */}
					<ProductMenuListItem>
						<ProductMenuListItemIcon>
							<PaymentIcon />
						</ProductMenuListItemIcon>
						<ProductMenuListItemText>
							<TextLabel component='span'>
								Payments <InnerArrow />
							</TextLabel>
							<TextSubTitle component='span'>Online payments</TextSubTitle>
						</ProductMenuListItemText>
					</ProductMenuListItem>
					{/*Payment Link listItem */}
					<ProductMenuListItem sx={{ mt: '32px' }}>
						<ProductMenuListItemIcon>
							<PaymentLinksIcon />
						</ProductMenuListItemIcon>
						<ProductMenuListItemText>
							<TextLabel component='span'>
								Payment Links <InnerArrow />
							</TextLabel>
							<TextSubTitle component='span'>No-code payments </TextSubTitle>
						</ProductMenuListItemText>
					</ProductMenuListItem>
					{/*Invoicing listItem */}
					<ProductMenuListItem sx={{ mt: '32px' }}>
						<ProductMenuListItemIcon>
							<InvoicingIcon />
						</ProductMenuListItemIcon>
						<ProductMenuListItemText>
							<TextLabel component='span'>
								Invoicing <InnerArrow />
							</TextLabel>
							<TextSubTitle component='span'>Online invoices </TextSubTitle>
						</ProductMenuListItemText>
					</ProductMenuListItem>
					{/*Billing listItem */}
					<ProductMenuListItem sx={{ mt: '32px' }}>
						<ProductMenuListItemIcon>
							<BillingIcon />
						</ProductMenuListItemIcon>
						<ProductMenuListItemText>
							<TextLabel component='span'>
								Billing
								<InnerArrow />
							</TextLabel>
							<TextSubTitle component='span'>Subscribtion management </TextSubTitle>
						</ProductMenuListItemText>
					</ProductMenuListItem>
					{/*Connnect*/}
					<ProductMenuListItem sx={{ mt: '32px' }}>
						<ProductMenuListItemIcon>
							<ConnectIcon />
						</ProductMenuListItemIcon>
						<ProductMenuListItemText>
							<TextLabel component='span'>
								Billing
								<InnerArrow />
							</TextLabel>
							<TextSubTitle component='span'>Payment for platforms</TextSubTitle>
						</ProductMenuListItemText>
					</ProductMenuListItem>
				</ProductMenuInnerColumn>
				<ProductMenuInnerColumn>
					<ProductMenuInnerTitle component='h1'>business operations</ProductMenuInnerTitle>
					{/*Radar*/}
					<ProductMenuListItem>
						<ProductMenuListItemIcon>
							<RadarIcon />
						</ProductMenuListItemIcon>
						<ProductMenuListItemText>
							<TextLabel component='span'>
								Radar
								<InnerArrow />
							</TextLabel>
							<TextSubTitle component='span'>Fraud & risk management</TextSubTitle>
						</ProductMenuListItemText>
					</ProductMenuListItem>
					{/*Sigma*/}
					<ProductMenuListItem sx={{ mt: '32px' }}>
						<ProductMenuListItemIcon>
							<SigmaIcon />
						</ProductMenuListItemIcon>
						<ProductMenuListItemText>
							<TextLabel component='span'>
								Sigma
								<InnerArrow />
							</TextLabel>
							<TextSubTitle component='span'>Custom reports</TextSubTitle>
						</ProductMenuListItemText>
					</ProductMenuListItem>
					{/*Atlas*/}
					<ProductMenuListItem sx={{ mt: '32px' }}>
						<ProductMenuListItemIcon>
							<AtlasIcon />
						</ProductMenuListItemIcon>
						<ProductMenuListItemText>
							<TextLabel component='span'>
								Atlas
								<InnerArrow />
							</TextLabel>
							<TextSubTitle component='span'>Startup incorporation</TextSubTitle>
						</ProductMenuListItemText>
					</ProductMenuListItem>
					{/*Climate*/}
					<ProductMenuListItem sx={{ mt: '32px' }}>
						<ProductMenuListItemIcon>
							<ClimateIcon />
						</ProductMenuListItemIcon>
						<ProductMenuListItemText>
							<TextLabel component='span'>
								Climate
								<InnerArrow />
							</TextLabel>
							<TextSubTitle component='span'>Carbon removal</TextSubTitle>
						</ProductMenuListItemText>
					</ProductMenuListItem>
					{/*Tax*/}
					<ProductMenuListItem sx={{ mt: '32px' }}>
						<ProductMenuListItemIcon>
							<TaxIcon />
						</ProductMenuListItemIcon>
						<ProductMenuListItemText>
							<TextLabel component='span'>
								Tax
								<InnerArrow />
							</TextLabel>
							<TextSubTitle component='span'>Sales tax & VAT automation</TextSubTitle>
						</ProductMenuListItemText>
					</ProductMenuListItem>
					{/*Identity*/}
					<ProductMenuListItem sx={{ mt: '32px' }}>
						<ProductMenuListItemIcon>
							<IdentityIcon />
						</ProductMenuListItemIcon>
						<ProductMenuListItemText>
							<TextLabel component='span'>
								Identity
								<InnerArrow />
							</TextLabel>
							<TextSubTitle component='span'>Online identity verification</TextSubTitle>
						</ProductMenuListItemText>
					</ProductMenuListItem>
				</ProductMenuInnerColumn>
			</ProductMenuLayOut>
		</ProductMenu>
	);
};

export default ProductMenuWrapper;
