import React from 'react';
import { Box, Popper, Paper, Typography, IconButton } from '@material-ui/core';
import { styled } from '@material-ui/system';
import CloseIcon from '@material-ui/icons/Close';
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
						{/* <IconButton>
							<CloseIcon />
						</IconButton> */}
						<CloseButton onClick={onClose}>
							<CloseIcon />
						</CloseButton>
					</ProductSectionHeader>
					<ProductSectionBody></ProductSectionBody>
				</ProductSection>
			</MenuPopperInner>
		</MenuPopper>
	);
};

export default MenuBtnPopperWrapper;
// placement='top'
