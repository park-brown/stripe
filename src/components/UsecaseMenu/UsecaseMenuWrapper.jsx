import React from 'react';
import { Box, Popper, Paper } from '@material-ui/core';
import { styled } from '@material-ui/system';
import { TextLabel, InnerArrow, TextSubTitle } from '../ProductMenu/ProductMenuWrapper';
import ProductIcon from '../../SvgIcon/Product/ProductIcon';
import SaasIcon from '../../SvgIcon/Saas/SaasIcon';
import MarketPlaceIcon from '../../SvgIcon/MarketPlace/MarketPlaceIcon';
const UsecasePopper = styled(Popper, { name: 'use-case-popper' })(({ theme }) => ({
	margin: '0 0 0 -35px !important'
}));

const UsecasePopperLayOut = styled(Paper, { name: 'use-case-popper-inner' })(({ theme }) => ({
	width: '426px',
	height: '290px',
	position: 'relative',
	padding: '32px',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'flex-start',
	alignItems: 'flex-start',
	gap: '22px 0'
}));
const UsecaseInnerListItem = styled(Box, { name: 'use-case-inner-listItem' })(({ theme }) => ({
	width: '100%',
	height: '40px',
	cursor: 'pointer',
	display: 'flex',
	justifyContent: 'flex-start',
	alignItems: 'flex-start',
	color: '#88add2',
	'&:hover .MuiTypography-root': {
		// when in hover state, target right side text
		opacity: 1,
		color: '#0a2540',
		'.MuiSvgIcon-root': {
			opacity: 1
		}
	},
	'&:hover .MuiSvgIcon-root': {
		// for left side icon
		path: {
			opacity: 1,
			fill: '#0a2540'
		}
	}
}));
const UsecaseListItemIconContainer = styled(Box, { name: 'use-case-list-item-icon-container' })(({ theme }) => ({
	width: '16px',
	height: '16px',
	margin: '3px 10px 0 0'
}));
const UsecaseListItemText = styled(Box, { name: 'use-case-list-item-text' })(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	flexGrow: 1,
	height: '100%'
}));
const UpwardArrow = styled(Box, { name: 'use-case-upward-arrow' })(({ theme }) => ({
	width: '14px',
	height: '14px',
	position: 'absolute',
	top: '3px',
	left: '85px',
	transform: 'rotate(45deg) translate(-50%,-50%)',
	backgroundColor: theme.palette.common.white,
	borderRadius: '3px',
	boxShadow: '-3px -3px 5px rgb(82 95 127 / 4%)'
}));
const UsecaseMenuWrapper = ({ anchorEl, open, onClose }) => {
	return (
		<UsecasePopper
			id='usecase-popper'
			anchorEl={anchorEl}
			open={open}
			onMouseLeave={onClose}
			disablePortal={true}
			placement='bottom-start'>
			<UsecasePopperLayOut component='ul'>
				<UpwardArrow />
				{/*Ecommerce */}
				<UsecaseInnerListItem component='li'>
					<UsecaseListItemIconContainer>
						<ProductIcon />
					</UsecaseListItemIconContainer>
					<UsecaseListItemText>
						<TextLabel component='span'>
							Ecommerce <InnerArrow />
						</TextLabel>
						<TextSubTitle component='span'>Unify online and in-person payments</TextSubTitle>
					</UsecaseListItemText>
				</UsecaseInnerListItem>
				{/*Saas */}
				<UsecaseInnerListItem component='li'>
					<UsecaseListItemIconContainer>
						<SaasIcon />
					</UsecaseListItemIconContainer>
					<UsecaseListItemText>
						<TextLabel component='span'>
							Saas <InnerArrow />
						</TextLabel>
						<TextSubTitle component='span'>Manage recurring billing and subscriptions</TextSubTitle>
					</UsecaseListItemText>
				</UsecaseInnerListItem>
				{/*MarketPlace */}
				<UsecaseInnerListItem component='li'>
					<UsecaseListItemIconContainer>
						<MarketPlaceIcon />
					</UsecaseListItemIconContainer>
					<UsecaseListItemText>
						<TextLabel component='span'>
							Marketplaces <InnerArrow />
						</TextLabel>
						<TextSubTitle component='span'>Pay out globally and facilitate multiparty payments</TextSubTitle>
					</UsecaseListItemText>
				</UsecaseInnerListItem>
				{/*Platforms */}
				<UsecaseInnerListItem component='li'>
					<UsecaseListItemIconContainer>
						<MarketPlaceIcon />
					</UsecaseListItemIconContainer>
					<UsecaseListItemText>
						<TextLabel component='span'>
							Platforms <InnerArrow />
						</TextLabel>
						<TextSubTitle component='span'>Let customers accept payments within your platform</TextSubTitle>
					</UsecaseListItemText>
				</UsecaseInnerListItem>
			</UsecasePopperLayOut>
		</UsecasePopper>
	);
};

export default UsecaseMenuWrapper;
