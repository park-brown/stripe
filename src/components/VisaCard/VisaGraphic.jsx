import React, { useState, useEffect } from 'react';
import { Box, Fade, Zoom, Slide } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import PostMateStripe from '../../SvgIcon/PostMate/PostMateStripe';
import DebitCardChip from '../../SvgIcon/DebitCardChip/DebitCardChip';
import VisaLogo from '../../SvgIcon/VisaLogo/VisaLogo';
import CommunityStripe from '../../SvgIcon/CommunityStipe/CommunityStripe';
const VisaGraphicWrapper = styled(Box, { name: 'visa-graphic-wrapper' })(({ theme, gridArea }) => ({
	[theme.breakpoints.up('mobile')]: {
		position: 'relative',
		width: '380px',
		gridArea: gridArea,
		height: '235px',
		overflow: 'hidden',
		borderRadius: '16px',
		boxShadow: '0 50px 100px -20px rgb(50 50 93 / 25%), 0 30px 60px -30px rgb(0 0 0 / 30%)',
		transform: 'scale(0.371053)',
		transformOrigin: 'top left'
	},
	[theme.breakpoints.up('tablet')]: {
		transform: 'scale(0.665789)'
	},
	[theme.breakpoints.up('laptop')]: {
		transform: 'scale(0.85)'
	}
}));
const VisaGraphicDesigns = styled(Box, { name: 'visa-graphic-designs' })(({ theme }) => ({
	position: 'absolute',
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	overflow: 'hidden'
}));
const PostMateCardDesign = styled('div', { name: 'postmate-card-design' })(({ theme }) => ({
	position: 'absolute',
	margin: 0,
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	backgroundColor: '#000'
}));
const CommunityCardDesign = styled('div', { name: 'community-card-design' })(({ theme }) => ({
	position: 'absolute',
	margin: 0,
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	backgroundColor: '#09CBC9'
}));
const ZestfulCardDesign = styled('div', { name: 'zestful-card-design' })(({ theme }) => ({
	position: 'absolute',
	margin: 0,
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	backgroundColor: '#ffc025'
}));

const PostMateLogo = styled('figure', { name: 'postmate-logo' })(({ theme }) => ({
	backgroundImage:
		'url(https://images.ctfassets.net/fzn2n1nzq965/7FmxrKPNuGgPwIQgnsBCga/977d3a86b4a255274bab712e8d474954/postmates.svg)',
	objectFit: 'cover',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
	margin: 0,
	width: '111px', // aspect ratio: 111:19
	height: '19px',
	position: 'absolute',
	top: '23px',
	left: '29px'
}));
const CommunityLogo = styled('figure', { name: 'Community-logo' })(({ theme }) => ({
	backgroundImage:
		'url(https://images.ctfassets.net/fzn2n1nzq965/w2Uq1PQC7PUmNgEbn7r7G/a4536500e853e17f9e5808b386d9638d/commutify.svg)',
	objectFit: 'cover',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
	margin: 0,
	width: '102px', // aspect ratio: 17:3
	height: '18px',
	position: 'absolute',
	top: '23px',
	left: '29px'
}));
const ZestfulLogo = styled('figure', { name: 'Zestful-logo' })(({ theme }) => ({
	backgroundImage:
		'url(https://images.ctfassets.net/fzn2n1nzq965/7vBnEVhVBEUFuEZt1RNvzF/b6804b61f197a9be2b18a80cf6747be7/zestful.svg)',
	objectFit: 'cover',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
	margin: 0,
	width: '76px', // aspect ratio: 38:15
	height: '30px',
	position: 'absolute',
	top: '23px',
	left: '29px'
}));
const ZestfulLemon = styled('figure', { name: 'Zestful-lemon' })(({ theme, index }) => ({
	backgroundImage:
		'url(https://images.ctfassets.net/fzn2n1nzq965/5UPyWsxAvbXamxGLBfuTj3/426c7b5224259ded7bc95b21073f4c02/lemon.svg)',
	objectFit: 'cover',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
	margin: 0,
	width: '80px', // aspect ratio: 1:1
	height: '80px',
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%,-50%)',
	animation: `zoom  ${theme.transitions.easing.easeInOut} 300ms 225ms`,
	'@keyframes zoom': {
		'0%': {
			transform: 'scale(1) translate(-50%,-50%) '
		},
		'50%': {
			transform: 'scale(1.05) translate(-50%,-50%)'
		},
		'100%': {
			transform: 'scale(1) translate(-50%,-50%)'
		}
	}
}));
const FleetLabel = styled('span', { name: 'postmate-fleet-label' })(({ theme }) => ({
	...theme.typography.PostmatesCardDesign__fleetLabel,
	color: '#fff',
	position: 'absolute',
	right: '18px',
	top: '21px'
}));
const ChipContainer = styled('div', { name: 'card-graphic-chip-container' })(({ theme }) => ({
	width: '53px',
	height: '47px',
	top: '80px',
	position: 'absolute',
	left: '41px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	'&::before': {
		height: '100%',
		boxShadow: ' inset 0 1px 0 0 hsl(0deg 0% 100% / 65%)',
		position: 'absolute',
		content: "''",
		top: '1px',
		left: '1px',
		right: '1px',
		zIndex: 3,
		borderRadius: '6px'
	},
	'&::after': {
		position: 'absolute',
		content: "''",
		background: 'rgba(0,0,0,.3)',
		width: '53px',
		height: '47px',
		borderRadius: '7px',
		boxShadow: '0 1px 0 0 hsl(0deg 0% 100% / 15%)',
		top: 0,
		left: 0
	}
}));
const CardName = styled(Box, { name: 'visa-card-name' })(({ theme }) => ({
	...theme.typography.Visa__Card__Name,
	position: 'absolute',
	left: '29px',
	bottom: '20px',
	color: '#fff'
}));

let VisaGraphic = ({ gridArea }) => {
	const interval = 20000;
	const [index, setIndex] = useState(0);
	//shuffle effect
	useEffect(() => {
		switch (index) {
			case 0:
				setTimeout(
					() => {
						setIndex((prev) => prev + 1);
					},

					interval
				);
				break;
			case 1:
				setTimeout(
					() => {
						setIndex((prev) => prev + 1);
					},

					interval
				);
				break;
			case 2:
				setTimeout(
					() => {
						setIndex(0);
					},

					interval
				);
				break;
			default:
				setIndex(0);
		}
	}, [index]);

	return (
		<VisaGraphicWrapper gridArea={gridArea}>
			<VisaGraphicDesigns>
				<Fade in={index === 0}>
					<PostMateCardDesign>
						<PostMateLogo />
						<PostMateStripe index={index} />
						<FleetLabel>fleet</FleetLabel>
					</PostMateCardDesign>
				</Fade>
				<Slide direction='right' in={index === 1}>
					<CommunityCardDesign>
						<CommunityLogo />
						<CommunityStripe index={index} />
					</CommunityCardDesign>
				</Slide>
				<Zoom in={index === 2}>
					<ZestfulCardDesign>
						<ZestfulLogo />
						<ZestfulLemon index={index} />
					</ZestfulCardDesign>
				</Zoom>
			</VisaGraphicDesigns>
			<ChipContainer>
				<DebitCardChip />
			</ChipContainer>
			<VisaLogo />
			<Fade in={index === 0}>
				<CardName>Jane Diaz</CardName>
			</Fade>
			<Fade in={index === 1}>
				<CardName>Micaela Bellow</CardName>
			</Fade>
			<Fade in={index === 2}>
				<CardName>Thomas Degry</CardName>
			</Fade>
		</VisaGraphicWrapper>
	);
};
VisaGraphic = styled(VisaGraphic, { name: 'visa-graphic' })(({ theme, gridArea }) => ({
	gridArea: gridArea
}));
export default VisaGraphic;
