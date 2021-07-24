import React from 'react';
import { Box, Popper, Paper, Typography, IconButton } from '@material-ui/core';
import { styled } from '@material-ui/system';
import CloseIcon from '@material-ui/icons/Close';
import AtlasIcon from '../../SvgIcon/Atlas/AtlasIcon';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ClimateIcon from '../../SvgIcon/Climate/ClimateIcon';
import IdentityIcon from '../../SvgIcon/Identity/IdentityIcon';
import PaymentLinksIcon from '../../SvgIcon/PaymentLinks/PaymentLinkIcon';
import SigmaIcon from '../../SvgIcon/Sigma/SigmaIcon';
import BillingIcon from '../../SvgIcon/Billing/BillingIcon';
import ConnectIcon from '../../SvgIcon/Connect/ConnectIcon';
import InvoicingIcon from '../../SvgIcon/Invoicing/InvoicingIcon';
import PaymentIcon from '../../SvgIcon/payment/paymentIcon';
import RadarIcon from '../../SvgIcon/Radar/RadarIcon';
import TaxIcon from '../../SvgIcon/Tax/TaxIcon';
import IsuingIcon from '../../SvgIcon/Issuing/IsuingIcon';
import TerminalIcon from '../../SvgIcon/Terminal/TerminalIcon';
const MenuPopper = styled(Popper, { name: 'menu-popper' })(({ theme }) => ({
	[theme.breakpoints.up('laptop')]: {
		display: 'none'
	}
}));
const MenuPopperInner = styled(Paper, { name: 'menu-popper-inner' })(({ theme }) => ({
	width: 'calc(100vw - 32px)',
	height: '500px'
}));
const ProductSection = styled(Box, { name: 'menu-popper-product-section' })(({ theme }) => ({
	padding: theme.spacing(6),
	display: 'flex',
	width: '100%',
	// height: '302px',
	flexDirection: 'column',
	alignItems: 'flex-start',
	justifyContent: 'flex-start'
}));
const ProductSectionHeader = styled(Box, { name: 'menu-popper-product-section-header' })(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-between',
	height: '20px',
	width: '100%',
	margin: '0 0 18px 0'
}));
const ProductSectionBody = styled(Box, { name: 'menu-popper-product-section-body' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: '100%',
		height: '224px',
		display: 'grid',
		gridTemplateColumns: 'repeat(2,1fr)',
		gridTemplateRows: 'repeat(7,32px)',
		gap: 0,
		gridTemplateAreas: `"Atlas         Billing"
                "Climate       Connect"
                "Identity      Invoicing"
                "Issuing       payments"
                "payment-links radar"
                "sigma         tax"
                "terminal      ."`
	},
	[theme.breakpoints.up('tablet')]: {
		width: '100%',
		height: '160px',
		display: 'grid',
		gridTemplateColumns: 'repeat(3,1fr)',
		gridTemplateRows: 'repeat(5,32px)',
		gap: 0,
		gridTemplateAreas: `"Atlas         Billing     Climate "
                        "Connect       Identity    Invoicing"
                        "Issuing       payments    payment-links"
                        "radar         sigma       tax"
                        "terminal      .           ."`
	},
	[theme.breakpoints.up('tabletX')]: {
		width: '100%',
		height: '128px',
		display: 'grid',
		gridTemplateColumns: 'repeat(4,1fr)',
		gridTemplateRows: 'repeat(4,32px)',
		gap: 0,
		gridTemplateAreas: `"Atlas         Billing     Climate    Connect"
                        "Identity      Invoicing   Issuing    payments"
                        "payment-links radar       sigma      tax"
                        "terminal      .           .          ."`
	}
}));
const MenuPopperGridItem = styled(Box, { name: 'menu-popper-product-section-body-grid-item' })(
	({ theme, gridArea }) => ({
		width: '100%',
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		padding: theme.spacing(1.5),
		gridArea: gridArea,
		'&:hover > svg:nth-of-type(1)': {
			display: 'block',
			fill: '#0a2540'
		},
		'&:active > svg:nth-of-type(1)': {
			display: 'none'
		},
		'&:active > svg:nth-of-type(2) ': {
			display: 'block',
			fill: '#0a2540'
		}
	})
);
const CustomArrowForwardIos = styled(ArrowForwardIosIcon, { name: 'arrow-forward-ios' })(({ theme }) => ({
	width: '12px',
	height: '12px',
	margin: '0 0 0 6px',
	display: 'none'
}));
const CustomArrowForward = styled(ArrowForwardIcon, { name: 'arrow-forward' })(({ theme }) => ({
	width: '12px',
	height: '12px',
	margin: '0 0 0 6px',
	display: 'none'
}));

const MenuPopperIconContainer = styled(Box, { name: 'Menu-popper-icon-container' })(({ theme }) => ({
	width: '16px',
	height: '16px',
	margin: '0px 10px 0 0',
	'& .MuiSvgIcon-root': {
		width: '16px',
		height: '16px',
		position: 'relative',
		top: '-2px'
	}
}));
const CloseButton = styled(IconButton, { name: 'close-button' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: '20px',
		height: '20px',
		padding: 0,
		'& .MuiSvgIcon-root': {
			width: '20px',
			height: '20px'
		}
	}
}));

const MenuBtnPopperWrapper = ({ anchorEl, open, onClose }) => {
	return (
		<MenuPopper
			id='menu-popper'
			anchorEl={anchorEl}
			open={open}
			placement='top'
			disablePortal={true}
			modifiers={[
				{
					name: 'offset',
					options: {
						offset: [0, -60] // header height equals to 76px, set distance to 60 to give popper 16px margin top
					}
				}
			]}>
			<MenuPopperInner>
				<ProductSection>
					<ProductSectionHeader>
						<Typography variant='nav_menu_inner_title'>Products</Typography>
						<CloseButton onClick={onClose}>
							<CloseIcon />
						</CloseButton>
					</ProductSectionHeader>
					<ProductSectionBody>
						<MenuPopperGridItem gridArea='Atlas'>
							<MenuPopperIconContainer>
								<AtlasIcon />
							</MenuPopperIconContainer>
							<Typography variant='nav_menu_inner_label' sx={{ color: '#0a2540' }}>
								Atlas
							</Typography>
							<CustomArrowForwardIos />
							<CustomArrowForward />
						</MenuPopperGridItem>
						<MenuPopperGridItem gridArea='Climate'>
							<MenuPopperIconContainer>
								<ClimateIcon />
							</MenuPopperIconContainer>
							<Typography variant='nav_menu_inner_label' sx={{ color: '#0a2540' }}>
								Climate
							</Typography>
							<CustomArrowForwardIos />
							<CustomArrowForward />
						</MenuPopperGridItem>
						<MenuPopperGridItem gridArea='Identity'>
							<MenuPopperIconContainer>
								<IdentityIcon />
							</MenuPopperIconContainer>
							<Typography variant='nav_menu_inner_label' sx={{ color: '#0a2540' }}>
								Identity
							</Typography>
							<CustomArrowForwardIos />
							<CustomArrowForward />
						</MenuPopperGridItem>
						<MenuPopperGridItem gridArea='Issuing'>
							<MenuPopperIconContainer>
								<IsuingIcon />
							</MenuPopperIconContainer>
							<Typography variant='nav_menu_inner_label' sx={{ color: '#0a2540' }}>
								Issuing
							</Typography>
							<CustomArrowForwardIos />
							<CustomArrowForward />
						</MenuPopperGridItem>
						<MenuPopperGridItem gridArea='payment-links'>
							<MenuPopperIconContainer>
								<PaymentLinksIcon />
							</MenuPopperIconContainer>
							<Typography variant='nav_menu_inner_label' sx={{ color: '#0a2540', whiteSpace: 'nowrap' }}>
								payment links
							</Typography>
							<CustomArrowForwardIos />
							<CustomArrowForward />
						</MenuPopperGridItem>
						<MenuPopperGridItem gridArea='sigma'>
							<MenuPopperIconContainer>
								<SigmaIcon />
							</MenuPopperIconContainer>
							<Typography variant='nav_menu_inner_label' sx={{ color: '#0a2540' }}>
								sigma
							</Typography>
							<CustomArrowForwardIos />
							<CustomArrowForward />
						</MenuPopperGridItem>
						<MenuPopperGridItem gridArea='terminal'>
							<MenuPopperIconContainer>
								<TerminalIcon />
							</MenuPopperIconContainer>
							<Typography variant='nav_menu_inner_label' sx={{ color: '#0a2540' }}>
								terminal
							</Typography>
							<CustomArrowForwardIos />
							<CustomArrowForward />
						</MenuPopperGridItem>
						<MenuPopperGridItem gridArea='Billing'>
							<MenuPopperIconContainer>
								<BillingIcon />
							</MenuPopperIconContainer>
							<Typography variant='nav_menu_inner_label' sx={{ color: '#0a2540' }}>
								billing
							</Typography>
							<CustomArrowForwardIos />
							<CustomArrowForward />
						</MenuPopperGridItem>
						<MenuPopperGridItem gridArea='Connect'>
							<MenuPopperIconContainer>
								<ConnectIcon />
							</MenuPopperIconContainer>
							<Typography variant='nav_menu_inner_label' sx={{ color: '#0a2540' }}>
								connect
							</Typography>
							<CustomArrowForwardIos />
							<CustomArrowForward />
						</MenuPopperGridItem>
						<MenuPopperGridItem gridArea='Invoicing'>
							<MenuPopperIconContainer>
								<InvoicingIcon />
							</MenuPopperIconContainer>
							<Typography variant='nav_menu_inner_label' sx={{ color: '#0a2540' }}>
								Invoicing
							</Typography>
							<CustomArrowForwardIos />
							<CustomArrowForward />
						</MenuPopperGridItem>
						<MenuPopperGridItem gridArea='payments'>
							<MenuPopperIconContainer>
								<PaymentIcon />
							</MenuPopperIconContainer>
							<Typography variant='nav_menu_inner_label' sx={{ color: '#0a2540' }}>
								payments
							</Typography>
							<CustomArrowForwardIos />
							<CustomArrowForward />
						</MenuPopperGridItem>
						<MenuPopperGridItem gridArea='radar'>
							<MenuPopperIconContainer>
								<RadarIcon />
							</MenuPopperIconContainer>
							<Typography variant='nav_menu_inner_label' sx={{ color: '#0a2540' }}>
								radar
							</Typography>
							<CustomArrowForwardIos />
							<CustomArrowForward />
						</MenuPopperGridItem>
						<MenuPopperGridItem gridArea='tax'>
							<MenuPopperIconContainer>
								<TaxIcon />
							</MenuPopperIconContainer>
							<Typography variant='nav_menu_inner_label' sx={{ color: '#0a2540' }}>
								tax
							</Typography>
							<CustomArrowForwardIos />
							<CustomArrowForward />
						</MenuPopperGridItem>
					</ProductSectionBody>
				</ProductSection>
			</MenuPopperInner>
		</MenuPopper>
	);
};

export default MenuBtnPopperWrapper;
