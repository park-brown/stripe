import React from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { styled } from '@material-ui/core/styles';
import AnimatedIconForLibraries from '../../SvgIcon/AnimatedIcon/AnimatedIconForLibraries';
import AnimatedIconForExplore from '../../SvgIcon/AnimatedIcon/AnimatedIconForExplore';

const SectionContainer = styled(Box, { name: 'designed-for-developers-section' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: '100%',
		backgroundColor: 'transparent',
		overflow: 'hidden',
		position: 'relative',
		border: 'none',
		marginTop: '-120px',
		zIndex: 0
	},
	[theme.breakpoints.up('tablet')]: {
		marginTop: '-130px'
	},
	[theme.breakpoints.up('laptop')]: {
		marginTop: '-200px'
	},
	[theme.breakpoints.up('desktop')]: {
		marginTop: '-270px'
	}
}));
const BackgroundMask = styled(Box, { name: 'section-background-mask' })(({ theme }) => ({
	width: '100%',
	height: '100%',
	overflow: 'hidden',
	position: 'absolute'
}));
const BackGround = styled(Box, { name: 'section-background' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		position: 'relative',
		height: '100%',
		maxHeight: '1800px',
		width: '100%',
		top: 0,
		left: 0,
		transformOrigin: 'top right',
		transform: 'skewY(-6deg)',
		background: '#0a2540',
		overflow: 'hidden',
		zIndex: 1
	},
	[theme.breakpoints.up('tablet')]: {
		maxHeight: '1080px'
	},
	[theme.breakpoints.up('laptop')]: {
		maxHeight: '990px'
	},
	[theme.breakpoints.up('desktop')]: {
		maxHeight: '940px'
	}
}));
const LayOutContainer = styled(Box, { name: 'section-layout-container' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: 'auto',
		height: '100%',
		margin: theme.spacing(0, 4),
		position: 'relative',
		zIndex: 2
	},
	[theme.breakpoints.up('tablet')]: {
		width: 'auto',
		margin: theme.spacing(0, 4)
	},
	[theme.breakpoints.up('laptop')]: {
		width: 'auto',

		maxWidth: '1080px',
		margin: '0 auto'
	}
}));
const LayOut = styled(Box, { name: 'section-layout' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: '100%',
		height: '100%',
		padding: '180px 0  200px 0 ',
		display: 'grid',
		gridTemplateRows: 'repeat(2,auto)',
		gridTemplateColumns: '1fr',
		gap: '32px 0',
		gridTemplateAreas: `"Intro-sneak-peek"
                       "code-and-terminal"`
	},
	[theme.breakpoints.up('tablet')]: {
		padding: '240px 0 160px 0 ',
		gridTemplateRows: '1fr',
		gridTemplateColumns: 'repeat(2,1fr)',
		gap: '0 0',
		gridTemplateAreas: `"Intro-sneak-peek code-and-terminal"`
	},
	[theme.breakpoints.up('laptop')]: {
		padding: '260px 0 260px 0 ',
		gridTemplateRows: '1fr',
		gridTemplateColumns: 'repeat(2,1fr)',
		gap: '0 0',
		gridTemplateAreas: `"Intro-sneak-peek code-and-terminal"`
	}
}));
const CopyContainer = styled(Box, { name: 'section-Intro-sneak-peek' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		gridArea: 'Intro-sneak-peek',

		display: 'grid',
		gridTemplateColumns: '1fr',
		gridTemplateRows: 'repeat(2,auto)',
		gap: '32px 0',
		gridTemplateAreas: `"intro"
                       "sneak-peek"`
	},
	[theme.breakpoints.up('tablet')]: {
		gridArea: 'Intro-sneak-peek',
		display: 'grid',
		gridTemplateColumns: '1fr',
		gridTemplateRows: 'repeat(2,auto)',
		gap: '48px 0',
		gridTemplateAreas: `"intro"
                       "sneak-peek"`
	},
	[theme.breakpoints.up('laptop')]: {
		padding: theme.spacing(0, 0, 0, 4),
		gridArea: 'Intro-sneak-peek',
		display: 'grid',
		gridTemplateColumns: '1fr',
		gridTemplateRows: 'repeat(2,1fr)',
		gap: '64px 0',
		gridTemplateAreas: `"intro"
                       "sneak-peek"`
	}
}));
const SectionHeader = styled(Box, { name: 'section-header' })(({ theme }) => ({
	gridArea: 'intro',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	justifyContent: 'flex-start',
	gap: theme.spacing(6)
}));
const ContainedButton = styled(Button, { name: 'read-the-doc-button' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		...theme.typography.HomepageHeroHeader__Copy__body,
		padding: '3px 12px 6px 16px',
		borderRadius: '16.5px',
		color: '#0a2540',
		fontWeight: 500,
		textTransform: 'none',
		backgroundColor: '#00d4ff',
		'&:hover': {
			backgroundColor: '#fff'
		},
		'& .MuiButton-endIcon': {
			svg: {
				width: '12px',
				height: '12px'
			},
			'svg:nth-of-type(1)': {
				display: 'none'
			}
		},
		'&:hover .MuiButton-endIcon': {
			'svg:nth-of-type(1)': {
				display: 'block'
			},
			'svg:nth-of-type(2)': {
				display: 'none'
			}
		}
	}
}));
const SneakPeekContainer = styled(Box, { name: 'sneak-peek-container' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		gridArea: 'sneak-peek',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		gap: '32px'
	},
	[theme.breakpoints.up('tablet')]: {
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		gap: '0px'
	},
	[theme.breakpoints.up('tabletX')]: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		gap: '0px'
	}
}));
const SneakPeekItem = styled(Box, { name: 'sneak-peek-item' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: '100%',
		flexBasis: '100%',
		maxWidth: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		gap: theme.spacing(2),
		alignSelf: 'stretch'
	},

	[theme.breakpoints.up('tablet')]: {
		width: '100%',
		flexBasis: '100%',
		maxWidth: '100%'
	},
	[theme.breakpoints.up('tabletX')]: {
		width: '50%',
		flexBasis: '50%'
	}
}));
const SneakPeekHeader = styled(Box, { name: 'sneak-peek-header' })(({ theme }) => ({
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	justifyContent: 'flex-start',
	gap: theme.spacing(2),
	padding: theme.spacing(0, 8, 0, 4)
}));
const SneakPeekHeaderTitle = styled(Typography, { name: 'sneak-peek-header-title' })(({ theme }) => ({
	...theme.typography.HomepageHeroHeader__Copy__body,
	color: '#fff',
	position: 'relative',
	width: '100%',
	textAlign: 'left',
	'&::before': {
		position: 'absolute',
		content: '""',
		top: '5px',
		left: '-16px',
		width: '1px',
		height: '15px',
		backgroundColor: '#00d4ff',
		display: 'block'
	}
}));
const SneakPeekInnerButton = styled(Button, { name: 'sneak-peek-inner-button' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		...theme.typography.HomepageHeroHeader__Copy__body,
		fontSize: '15px',
		color: '#00d4ff',
		backgroundColor: 'transparent',
		padding: '3px 0 6px 0',
		'&:hover': {
			backgroundColor: 'transparent',
			color: '#fff'
		},
		'& .MuiButton-endIcon': {
			svg: {
				width: '12px',
				height: '12px'
			},
			'svg:nth-of-type(1)': {
				display: 'none'
			}
		},
		'&:hover .MuiButton-endIcon': {
			'svg:nth-of-type(1)': {
				display: 'block'
			},
			'svg:nth-of-type(2)': {
				display: 'none'
			}
		}
	}
}));

const CodeDemoAndTerminalContainer = styled(Box, { name: 'code-and-terminal-container' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		gridArea: 'code-and-terminal',
		display: 'grid',
		gridTemplateColumns: '1fr',
		gridTemplateRows: 'repeat(2,auto)',
		gap: '32px 0',
		gridTemplateAreas: `"CodeDemo"
                        "terminal"`
	},
	[theme.breakpoints.up('tablet')]: {
		gridArea: 'code-and-terminal',
		display: 'grid',
		gridTemplateColumns: '1fr',
		gridTemplateRows: 'repeat(2,auto)',
		gap: '48px 0',
		gridTemplateAreas: `"CodeDemo"
                        "terminal"`
	},
	[theme.breakpoints.up('laptop')]: {
		// padding: theme.spacing(0, 0, 0, 4),
		gridArea: 'code-and-terminal',
		display: 'grid',
		gridTemplateColumns: '1fr',
		gridTemplateRows: 'repeat(2,1fr)',
		gap: '64px 0',
		gridTemplateAreas: `"CodeDemo"
                        "terminal"`
	}
}));
const CodeDemoContainer = styled(Box, { name: 'code-demo-container' })(({ theme }) => ({
	gridArea: 'CodeDemo',
	width: '100%',
	color: '#fff',
	backgroundColor: 'rgba(15,57,94,.99)',
	borderRadius: '8px',
	display: 'flex',
	alignItems: 'flex-start',
	position: 'relative',
	padding: '0 0 24px 38px',
	overflow: 'hidden'
}));
const CodeEditorLineNumbers = styled(Box, { name: 'CodeEditorLineNumbers' })(({ theme }) => ({
	width: '38px',
	height: '100%',
	minHeight: '100%',
	position: 'absolute',
	top: 0,
	left: 0,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-end',
	textAlign: 'right',
	padding: theme.spacing(4, 0, 4, 0),
	color: '#55718d',
	backgroundColor: '#0c2e4e'
}));
const CodeEditorAsciiLoader = styled(Box, { name: 'CodeEditorAsciiLoader' })(({ theme }) => ({
	position: 'absolute',
	fontFamily: 'monospace',
	fontSize: '18px',
	top: '11px',
	left: '48px',
	'&::before': {
		display: 'block',
		content: '"⣾"',
		fontFamily: 'monospace',
		fontSize: '18px'
	}
}));
const CodeEditorStatusBar = styled(Box, { name: 'CodeEditorStatusBar' })(({ theme }) => ({
	position: 'absolute',
	bottom: 0,
	left: 0,
	right: 0,
	height: '24px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	// backgroundColor: 'rgba(15,57,94,0.99)',
	backgroundColor: '#0c2e4e',
	color: '#55718d'
}));
const CodeEditorTypingArea = styled(Box, { name: 'CodeEditor__typingArea' })(({ theme }) => ({
	width: '100%',
	padding: '16px 0 16px 16px'
}));
const EditorStatusBarEditingMode = styled(Box, { name: 'EditorStatusBar__editingMode' })(({ theme }) => ({
	...theme.typography.CodeSyntax__token__text,
	backgroundColor: '#8095ff',
	color: '#06182c',
	textTransform: 'capitalize',
	padding: '0 5px 0 9px',
	margin: '0 9px 0 0',
	position: 'relative',
	'&::after': {
		content: '""',
		position: 'absolute',
		top: '-2px',
		right: 0,
		transform: 'translateX(100%)',
		width: 0,
		height: 0,
		borderLeft: '9px solid #8095ff',
		borderBottom: '12px solid transparent',
		borderRight: ' 0 solid transparent',
		borderTop: '12px solid transparent'
	}
}));
const TerminalContainer = styled(Box, { name: 'terminal-container' })(({ theme }) => ({
	gridArea: 'terminal',
	backgroundColor: '#06182c',
	minHeight: '296px',
	overflow: 'hidden',
	whiteSpace: 'nowrap'
}));
const DesignedForDevlopers = () => {
	return (
		<SectionContainer component='section'>
			<BackgroundMask>
				<BackGround />
			</BackgroundMask>
			<LayOutContainer>
				<LayOut>
					<CopyContainer>
						<SectionHeader>
							<Typography variant='unifiedPlatform_title_caption' component='h2' sx={{ color: '#00d4ff' }}>
								Designed for developers
							</Typography>
							<Typography variant='DesignedForDev_title_body' component='h1'>
								The world’s most powerful and easy-to-use APIs
							</Typography>
							<Typography variant='HomepageHeroHeader__Copy__body' component='p' sx={{ color: '#adbdcc' }}>
								We agonize over the right abstractions so your teams don’t need to stitch together disparate systems or
								spend months integrating payments functionality.
							</Typography>
							<ContainedButton
								endIcon={
									<React.Fragment>
										<ArrowForwardIcon />
										<ArrowForwardIosIcon />
									</React.Fragment>
								}>
								Read the docs
							</ContainedButton>
						</SectionHeader>
						<SneakPeekContainer>
							<SneakPeekItem>
								<SneakPeekHeader>
									<AnimatedIconForLibraries />
									<SneakPeekHeaderTitle component='h6'>Tools for every stack</SneakPeekHeaderTitle>
								</SneakPeekHeader>
								<Typography
									variant='HomepageHeroHeader__Copy__body'
									component='p'
									sx={{ color: '#adbdcc', textAlign: 'left', padding: '0 32px 0 16px', fontSize: '15px' }}>
									We offer client and server libraries in everything from React and PHP to .NET and iOS.
								</Typography>
								<Box sx={{ width: '100%', padding: '0 32px 0 16px', marginTop: 'auto' }}>
									<SneakPeekInnerButton
										endIcon={
											<React.Fragment>
												<ArrowForwardIcon />
												<ArrowForwardIosIcon />
											</React.Fragment>
										}>
										See Libraries
									</SneakPeekInnerButton>
								</Box>
							</SneakPeekItem>
							{/*second item */}
							<SneakPeekItem>
								<SneakPeekHeader>
									<AnimatedIconForExplore />
									<SneakPeekHeaderTitle component='h6'>Prebuilt integrations</SneakPeekHeaderTitle>
								</SneakPeekHeader>
								<Typography
									variant='HomepageHeroHeader__Copy__body'
									component='p'
									sx={{ color: '#adbdcc', textAlign: 'left', padding: '0 32px 0 16px', fontSize: '15px' }}>
									Use integrations for systems like Shopify, WooCommerce, NetSuite, and more.
								</Typography>
								<Box sx={{ width: '100%', padding: '0 32px 0 16px', marginTop: 'auto' }}>
									<SneakPeekInnerButton
										endIcon={
											<React.Fragment>
												<ArrowForwardIcon />
												<ArrowForwardIosIcon />
											</React.Fragment>
										}>
										Explore partners
									</SneakPeekInnerButton>
								</Box>
							</SneakPeekItem>
						</SneakPeekContainer>
					</CopyContainer>
					<CodeDemoAndTerminalContainer>
						<CodeDemoContainer component='code'>
							<CodeEditorLineNumbers>
								<Typography variant='CodeEditorLineNumbers__number' sx={{ padding: '0 6px' }}>
									1
								</Typography>
								<Typography variant='CodeEditorLineNumbers__number' sx={{ padding: '0 6px' }}>
									2
								</Typography>
								<Typography variant='CodeEditorLineNumbers__number' sx={{ padding: '0 6px' }}>
									3
								</Typography>
								<Typography variant='CodeEditorLineNumbers__number' sx={{ padding: '0 6px' }}>
									4
								</Typography>
								<Typography variant='CodeEditorLineNumbers__number' sx={{ padding: '0 6px' }}>
									5
								</Typography>
								<Typography variant='CodeEditorLineNumbers__number' sx={{ padding: '0 6px' }}>
									6
								</Typography>
								<Typography variant='CodeEditorLineNumbers__number' sx={{ padding: '0 6px' }}>
									~
								</Typography>
								<Typography variant='CodeEditorLineNumbers__number' sx={{ padding: '0 6px' }}>
									~
								</Typography>
								<Typography variant='CodeEditorLineNumbers__number' sx={{ padding: '0 6px' }}>
									~
								</Typography>
								<Typography variant='CodeEditorLineNumbers__number' sx={{ padding: '0 6px' }}>
									~
								</Typography>
								<Typography variant='CodeEditorLineNumbers__number' sx={{ padding: '0 6px' }}>
									~
								</Typography>
								<Typography variant='CodeEditorLineNumbers__number' sx={{ padding: '0 6px' }}>
									~
								</Typography>
							</CodeEditorLineNumbers>
							{/* <CodeEditorAsciiLoader /> */}
							<CodeEditorTypingArea>
								{/*const stripe = require('stripe')('sk_test_BQokikJOvBi2Hl4olfQ2');

                  await stripe.paymentIntents.create({
                   amount: 2000,
                   currency: 'usd'
                  }); */}
								<Typography variant='CodeSyntax__token__keyword'>const</Typography>
								<Typography variant='CodeSyntax__token__text'>&nbsp;&nbsp;stripe &nbsp;&nbsp;</Typography>
								<Typography variant='CodeSyntax__token__operator'>= &nbsp;&nbsp;</Typography>
								<Typography variant='CodeSyntax__token__function'>require</Typography>
								<Typography variant='CodeSyntax__token__punctuation'>(</Typography>
								<Typography variant='CodeSyntax__token__string'>'stripe'</Typography>
								<Typography variant='CodeSyntax__token__punctuation'>)</Typography>
								<Typography variant='CodeSyntax__token__punctuation'>(</Typography>
								<Typography variant='CodeSyntax__token__string'>'sk_test_BQokikJOvBi2Hl4olfQ2'</Typography>
								<Typography variant='CodeSyntax__token__punctuation'>)</Typography>
								<Typography variant='CodeSyntax__token__punctuation'>;</Typography>
								<Typography sx={{ display: 'block', width: '100%', height: '28px' }}></Typography>
								<Typography variant='CodeSyntax__token__keyword'>await</Typography>
								<Typography variant='CodeSyntax__token__text'>&nbsp;&nbsp;stripe</Typography>
								<Typography variant='CodeSyntax__token__punctuation'>.</Typography>
								<Typography variant='CodeSyntax__token__text'>paymentIntents</Typography>
								<Typography variant='CodeSyntax__token__punctuation'>.</Typography>
								<Typography variant='CodeSyntax__token__function'>create</Typography>
								<Typography variant='CodeSyntax__token__punctuation'>(</Typography>
								<Typography variant='CodeSyntax__token__punctuation'> &#123;</Typography>
								<br />
								<Typography variant='CodeSyntax__token__text'>&nbsp;&nbsp;amount&nbsp;</Typography>
								<Typography variant='CodeSyntax__token__operator'>: &nbsp;&nbsp;</Typography>
								<Typography variant='CodeSyntax__token__number'>2000</Typography>
								<Typography variant='CodeSyntax__token__punctuation'>,</Typography>
								<br />
								<Typography variant='CodeSyntax__token__text'>&nbsp;&nbsp;currency&nbsp;</Typography>
								<Typography variant='CodeSyntax__token__operator'>: &nbsp;&nbsp;</Typography>
								<Typography variant='CodeSyntax__token__string'>'usd'</Typography>
								<br />
								<Typography variant='CodeSyntax__token__punctuation'> &#125;</Typography>
								<Typography variant='CodeSyntax__token__punctuation'> )</Typography>
								<Typography variant='CodeSyntax__token__punctuation'> ;</Typography>
							</CodeEditorTypingArea>
							<CodeEditorStatusBar>
								<Box className='CodeEditorStatusBar__left' sx={{ display: 'flex' }}>
									<EditorStatusBarEditingMode>Normal</EditorStatusBarEditingMode>
									<Typography variant='CodeSyntax__token__keyword' sx={{ margin: '0 0 0 10px' }}>
										server.js
									</Typography>
								</Box>
								<Box
									className='CodeEditorStatusBar__right'
									sx={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '0 16px 0 0' }}>
									<Typography variant='CodeEditorLineNumbers__number'>100%</Typography>
									<Typography variant='CodeEditorLineNumbers__number'>☰</Typography>
									<Typography variant='CodeEditorLineNumbers__number'>6/6</Typography>
									<Typography variant='CodeEditorLineNumbers__number'>In</Typography>
									<Typography variant='CodeEditorLineNumbers__number'>:</Typography>
									<Typography variant='CodeEditorLineNumbers__number'>4</Typography>
								</Box>
							</CodeEditorStatusBar>
						</CodeDemoContainer>
						<TerminalContainer>
							<Box
								className='terminal__inner'
								sx={{
									width: '100%',
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'flex-start',
									padding: '16px 0 0 16px',
									gap: '4px'
								}}>
								<Box sx={{ display: 'flex', alignItems: 'center' }}>
									<Typography variant='CodeSyntax__token__keyword' sx={{ margin: '0 0 0 10px' }}>
										$
									</Typography>
									<Typography variant='CodeSyntax__token__text' sx={{ margin: '0 0 0 10px' }}>
										node server.js &nbsp; && &nbsp; stripe listen
									</Typography>
								</Box>
								<Box sx={{ display: 'flex', alignItems: 'center' }}>
									<Typography variant='CodeSyntax__token__text' sx={{ margin: '0 0 0 10px' }}>
										&gt;
									</Typography>
									<Typography variant='CodeSyntax__token__text' sx={{ margin: '0 0 0 10px' }}>
										Ready! &nbsp;Waiting for requests...
									</Typography>
								</Box>
								<Box sx={{ display: 'flex', alignItems: 'center' }}>
									<Typography variant='CodeEditorLineNumbers__number' sx={{ margin: '0 0 0 10px' }}>
										2021-08-05 07:38:01&nbsp;&nbsp;
									</Typography>
									<Typography variant='CodeSyntax__token__punctuation'>[</Typography>
									<Typography variant='CodeSyntax__token__function'>200</Typography>
									<Typography variant='CodeSyntax__token__punctuation'>]</Typography>
									<Typography variant='CodeSyntax__token__text' sx={{ margin: '0 0 0 10px' }}>
										payment_intent.created
									</Typography>
								</Box>
								<Box sx={{ display: 'flex', alignItems: 'center' }}>
									<Typography variant='CodeEditorLineNumbers__number' sx={{ margin: '0 0 0 10px' }}>
										2021-08-05 07:38:01&nbsp;&nbsp;
									</Typography>
									<Typography variant='CodeSyntax__token__punctuation'>[</Typography>
									<Typography variant='CodeSyntax__token__function'>200</Typography>
									<Typography variant='CodeSyntax__token__punctuation'>]</Typography>
									<Typography variant='CodeSyntax__token__text' sx={{ margin: '0 0 0 10px' }}>
										charge.succeeded
									</Typography>
								</Box>
								<Box sx={{ display: 'flex', alignItems: 'center' }}>
									<Typography variant='CodeEditorLineNumbers__number' sx={{ margin: '0 0 0 10px' }}>
										2021-08-05 07:38:01&nbsp;&nbsp;
									</Typography>
									<Typography variant='CodeSyntax__token__punctuation'>[</Typography>
									<Typography variant='CodeSyntax__token__function'>200</Typography>
									<Typography variant='CodeSyntax__token__punctuation'>]</Typography>
									<Typography variant='CodeSyntax__token__text' sx={{ margin: '0 0 0 10px' }}>
										payment_intent.succeeded
									</Typography>
								</Box>
							</Box>
						</TerminalContainer>
					</CodeDemoAndTerminalContainer>
				</LayOut>
			</LayOutContainer>
		</SectionContainer>
	);
};

export default DesignedForDevlopers;
