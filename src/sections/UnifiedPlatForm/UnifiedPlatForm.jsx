import React from 'react';
import { Box, Typography, Button, Link } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { ArrowForwardIos } from '@material-ui/icons';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import VisaGraphic from '../../components/VisaCard/VisaGraphic';
const UnifiedPlatFormContainer = styled(Box, { name: 'unified-platform-section' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: '100%',
		backgroundColor: '#f6f9fc',
		clipPath: 'polygon(0 0, 100% 0%, 100% 93%, 0% 100%)',
		overflow: 'hidden',
		display: 'flex',
		alignItems: 'center'
	},
	[theme.breakpoints.up('tablet')]: {
		clipPath: 'polygon(0 0, 100% 0%, 100% 91.5%, 0% 100%)'
	},
	[theme.breakpoints.up('laptop')]: {
		clipPath: 'polygon(0 0, 100% 0%, 100% 90%, 0% 100%)'
	}
}));
const LayOutContainer = styled(Box, { name: 'unified-platform-layout-container' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: '100%',
		margin: theme.spacing(0, 4),
		height: '100%'
	},
	[theme.breakpoints.up('tablet')]: {},
	[theme.breakpoints.up('laptop')]: {
		width: '100%',
		maxWidth: '1080px',
		margin: '0 auto',
		height: '100%'
	}
}));
const LayOut = styled(Box, { name: 'unified-platform-layout' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: '100%',
		height: '100%',
		padding: '72px 0  148px 0 ',
		display: 'grid',
		gridTemplateColumns: '100%',
		gridTemplateRows: 'repeat(5,auto)',
		gap: '32px 0',
		gridTemplateAreas: `"unified-platform-title"
                        "unified-platform-desc-1"
                        "unified-platform-desc-2"
                        "unified-platform-CTA"
                        "unified-platform-graphic"`
	},
	[theme.breakpoints.up('tablet')]: {
		padding: '100px 0 200px 0 ',
		display: 'grid',
		gridTemplateColumns: 'repeat(2,1fr)',
		gridTemplateRows: 'repeat(4,auto)',
		gap: '32px 0',
		gridTemplateAreas: `"unified-platform-title      ."
                        "unified-platform-desc-1     unified-platform-desc-2"
                        "unified-platform-CTA        ."
                        "unified-platform-graphic     unified-platform-graphic"`
	},
	[theme.breakpoints.up('laptop')]: {
		padding: '128px 0 256px 0 ',
		display: 'grid',
		gridTemplateColumns: 'repeat(2,1fr)',
		gridTemplateRows: 'repeat(4,auto)',
		gap: '32px 0',
		gridTemplateAreas: `"unified-platform-title      ."
                        "unified-platform-desc-1     unified-platform-desc-2"
                        "unified-platform-CTA        ."
                        "unified-platform-graphic    unified-platform-graphic"`
	}
}));
const UnifiedPlatFormTitle = styled(Box, { name: 'unified-platform-title ' })(({ theme }) => ({
	gridArea: 'unified-platform-title',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	justifyContent: 'flex-start',
	padding: theme.spacing(0, 4),
	gap: theme.spacing(6)
}));
const InnerLink = styled(Link, { name: 'description-inner-link' })(({ theme }) => ({
	...theme.typography.HomepageHeroHeader__Copy__body,
	color: '#635bff',
	display: 'inline',
	textDecoration: 'none',
	'&:active,&:hover': {
		color: '#0a2540'
	}
}));
const CtaButton = styled(Button, { name: 'unified-platform-cta' })(({ theme }) => ({
	...theme.typography.cta_button,
	padding: '3px 12px 3px 16px',
	borderRadius: '16.5px',
	color: '#fff',
	backgroundColor: '#635bff',
	'&:hover,&:active': {
		backgroundColor: '#0a2540'
	},
	'& > .MuiButton-endIcon': {
		svg: {
			width: '12px',
			height: '12px'
		},
		'svg:nth-of-type(2)': {
			display: 'none'
		}
	},
	'&:hover > .MuiButton-endIcon': {
		'svg:nth-of-type(1)': {
			display: 'none'
		},
		'svg:nth-of-type(2)': {
			display: 'block'
		}
	}
}));
const UnifiedPlatformGraphic = styled(Box, { name: 'unified-platform-graphic' })(({ theme }) => ({
	height: '654px',
	position: 'relative',
	gridArea: 'unified-platform-graphic'
}));
const UnifiedPlatformGraphicGrid = styled(Box, { name: 'unified-platform-graphic-grid' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		// 0 - 600
		position: 'absolute',
		top: '-72px',
		// width: '397px',
		// height: '552px',
		display: 'grid',
		gridTemplateColumns: '112px 141px 58px 38px',
		gridTemplateRows: '107px 87px 125px 185px',
		gap: '25px 25px',
		gridTemplateAreas: `".               .                       Terminal                Terminal"
                        "CheckOut        Visa                    Terminal                Terminal    "
                        "CheckOut        Invoice-from-slack      Invoice-from-slack      ."
                        "DashBoard       DashBoard               DashBoard               ."`
	},
	[theme.breakpoints.up('tablet')]: {
		// 600- 900
		width: '896px',
		height: '732px',
		top: '-72px',
		display: 'grid',
		gridTemplateColumns: '253px 392px 201px',
		gridTemplateRows: '70px 157px 97px 333px',
		gap: '25px 25px',
		gridTemplateAreas: `".            .                       Terminal"
                        "Visa          Invoice-from-slack     Terminal"
                        "CheckOut      Invoice-from-slack     Terminal"
                        "CheckOut      DashBoard              DashBoard"`
	},
	[theme.breakpoints.up('laptop')]: {
		// > 900
		top: '-72px',
		width: '1150px',
		height: '943px',
		display: 'grid',
		gridTemplateColumns: '323px 501px 256px',
		gridTemplateRows: '86px 201px 126px 425px',
		gap: '35px 35px',
		gridTemplateAreas: `".            .                      Terminal"
                       "Visa          Invoice-from-slack     Terminal"
                       "CheckOut      Invoice-from-slack     Terminal"
                       "CheckOut      DashBoard              DashBoard"`
	}
}));
const UnifiedPlatForm = () => {
	return (
		<UnifiedPlatFormContainer component='section'>
			<LayOutContainer>
				<LayOut>
					<UnifiedPlatFormTitle>
						<Typography variant='unifiedPlatform_title_caption' component='h2'>
							unified platform
						</Typography>
						<Typography variant='unifiedPlatform_title_body' component='h1'>
							A fully integrated suite of payments products
						</Typography>
					</UnifiedPlatFormTitle>
					{/*description - 1 */}
					<Box
						gridArea='unified-platform-desc-1'
						sx={{ padding: { mobile: '0 16px 0 16px', tablet: '0 24px 0 16px' } }}>
						<Typography variant='HomepageHeroHeader__Copy__body' component='p'>
							We bring together everything that’s required to build websites and apps that accept payments and send
							payouts globally. Stripe’s products power payments for:
							<InnerLink>online and in-person retailers</InnerLink>, <InnerLink>subscriptions businesses</InnerLink>,{' '}
							<InnerLink>software platforms and marketplaces</InnerLink>, and everything in between.
						</Typography>
					</Box>
					{/*description - 2 */}
					<Box
						gridArea='unified-platform-desc-2'
						sx={{ padding: { mobile: '0 16px 0 16px', tablet: '0 24px 0 16px' } }}>
						<Typography variant='HomepageHeroHeader__Copy__body' component='p'>
							We also help companies <InnerLink>beat fraud</InnerLink>, <InnerLink>send invoices</InnerLink>,{' '}
							<InnerLink>issue virtual and physical cards</InnerLink>, <InnerLink>get financing</InnerLink>,
							<InnerLink>manage business spend</InnerLink>, and much more.
						</Typography>
					</Box>
					<Box gridArea='unified-platform-CTA' sx={{ padding: { mobile: '0 16px 0 16px', tablet: '0 24px 0 16px' } }}>
						<CtaButton
							endIcon={
								<React.Fragment>
									<ArrowForwardIos />
									<ArrowForwardIcon />
								</React.Fragment>
							}>
							Start with payments
						</CtaButton>
					</Box>
					<UnifiedPlatformGraphic>
						<UnifiedPlatformGraphicGrid>
							<VisaGraphic gridArea='Visa' />
						</UnifiedPlatformGraphicGrid>
					</UnifiedPlatformGraphic>
				</LayOut>
			</LayOutContainer>
		</UnifiedPlatFormContainer>
	);
};

export default UnifiedPlatForm;
