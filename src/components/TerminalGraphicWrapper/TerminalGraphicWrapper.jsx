import React from 'react';
import { Box } from '@material-ui/core';
import { styled } from '@material-ui/system';
import ScreenArrow from '../../SvgIcon/ScreenArrow/ScreenArrow';
import TerminalGraphicInsertCardScreenLogos from '../../SvgIcon/TerminalGraphicInsertCardScreenLogos/TerminalGraphicInsertCardScreenLogos';
const TerminalGraphicContainer = styled(Box, { name: 'Terminal-graphic-container' })(({ theme, gridArea }) => ({
	[theme.breakpoints.up('mobile')]: {
		gridArea: gridArea,
		width: '301px',
		height: '564px',
		overflow: 'hidden',
		borderRadius: '40px',
		background: '#30455d',
		boxShadow: '0 20px 30px -10px #26394d',
		transform: 'scale(0.372093)',
		transformOrigin: 'top left'
	},
	[theme.breakpoints.up('tablet')]: {
		transform: 'scale(0.667774)'
	},
	[theme.breakpoints.up('laptop')]: {
		transform: 'scale(0.850498)'
	}
}));
const TerminalGraphicEdge = styled(Box, { name: 'TerminalGraphic__edge' })(({ theme }) => ({
	height: '552px',
	padding: '5px',
	borderRadius: '40px',
	background: '#18324b',
	boxShadow: '0 2px 6px 1px #0a2540, inset 0 -5px 2px 1px #0a2540, inset 0 2px 3px 1px #adbccb'
}));
const TerminalGraphicFront = styled(Box, { name: 'TerminalGraphic__front' })(({ theme }) => ({
	height: '532px',
	padding: '15px',
	background: 'linear-gradient(#4b5f74,#273f57)',
	boxShadow: '0 1px 1px 0 rgb(6 24 44 / 20%), inset 0 1px 1px 0 hsl(0deg 0% 100% / 30%)',
	borderRadius: '35px'
}));
const TerminalGraphicScreenEdge = styled(Box, { name: 'TerminalGraphic__screenEdge' })(({ theme }) => ({
	height: '262px',
	padding: '20px',
	background: 'linear-gradient(#1c354e,#0b2641)',
	boxShadow: ' 0 1px 1px 0 hsl(0deg 0% 100% / 10%)',
	borderRadius: '20px'
}));
const TerminalGraphicKeypad = styled(Box, { name: 'TerminalGraphic__keypad' })(({ theme }) => ({
	display: 'grid',
	grid: 'auto-flow 34px/repeat(3,1fr)',
	gap: '12px',
	margin: '13px 9px 0'
}));
const TerminalGraphicButton = styled(Box, { name: 'TerminalGraphic__button' })(({ theme, background }) => ({
	borderRadius: '8px',
	background: background ? background : 'linear-gradient(rgba(10,37,64,0),rgba(10,37,64,.25))',
	boxShadow: '0 0 0 2px rgb(6 24 44 / 40%), 0 4px 6px -1px rgb(6 24 44 / 65%), inset 0 1px 0 hsl(0deg 0% 100% / 8%)'
}));
const TerminalGraphicScreen = styled(Box, { name: 'TerminalGraphicScreen' })(({ theme }) => ({
	position: 'absolute',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
	overflow: 'hidden',
	borderRadius: '2px',
	background: 'linear-gradient(#2d445b,#132d47)'
}));
const TerminalGraphicInsertCardScreenCard = styled(Box, { name: 'TerminalGraphicInsertCardScreen__card' })(
	({ theme }) => ({
		position: 'absolute',
		left: 'calc(50% - 37px)',
		top: '42px',
		width: ' 73px',
		height: '112px',
		border: ' 2px solid #fff',
		borderRadius: '6px',
		background: 'linear-gradient(#4b5f72,#40556a)'
	})
);
const TerminalGraphicInsertCardScreenChip = styled(Box, { name: 'TerminalGraphicInsertCardScreen__chip' })(
	({ theme }) => ({
		width: '18px',
		height: '21px',
		margin: '11px 0 0 39px',
		borderRadius: '2px',
		background: '#fff'
	})
);
const TerminalGraphicInsertCardScreenFadeOut = styled(Box, { name: 'TerminalGraphicInsertCardScreen__fadeOut' })(
	({ theme }) => ({
		position: 'absolute',
		top: '-1px',
		left: 'calc(50% - 54px)',
		width: '107px',
		height: '39px',
		padding: ' 0 2px 2px',
		borderRadius: '0 0 6px 6px',
		background: 'linear-gradient(hsla(0,0%,100%,0) 25%,hsla(0,0%,100%,.15) 85%,hsla(0,0%,100%,.5))'
	})
);
const TerminalGraphicInsertCardScreenCutOff = styled(Box, { name: 'TerminalGraphicInsertCardScreen__cutOff' })(
	({ theme }) => ({
		height: '100%',
		borderRadius: ' 0 0 4px 4px',
		background: 'linear-gradient(#2c435a,#294158)'
	})
);

const TerminalGraphicWrapper = (props) => {
	const { gridArea } = props;
	return (
		<TerminalGraphicContainer gridArea={gridArea}>
			<TerminalGraphicEdge>
				<TerminalGraphicFront>
					<TerminalGraphicScreenEdge>
						<Box className='TerminalGraphic__screenContainer' sx={{ position: 'relative', height: '100%' }}>
							<TerminalGraphicScreen>
								<TerminalGraphicInsertCardScreenFadeOut>
									<TerminalGraphicInsertCardScreenCutOff>
										<ScreenArrow />
									</TerminalGraphicInsertCardScreenCutOff>
								</TerminalGraphicInsertCardScreenFadeOut>
								<TerminalGraphicInsertCardScreenCard>
									<TerminalGraphicInsertCardScreenChip />
								</TerminalGraphicInsertCardScreenCard>
								<TerminalGraphicInsertCardScreenLogos />
							</TerminalGraphicScreen>
						</Box>
					</TerminalGraphicScreenEdge>
					<TerminalGraphicKeypad>
						<TerminalGraphicButton />
						<TerminalGraphicButton />
						<TerminalGraphicButton />
						<TerminalGraphicButton />
						<TerminalGraphicButton />
						<TerminalGraphicButton />
						<TerminalGraphicButton />
						<TerminalGraphicButton />
						<TerminalGraphicButton />
						<TerminalGraphicButton background='linear-gradient(hsla(0,0%,100%,.18),hsla(0,0%,100%,.08))' />
						<TerminalGraphicButton />
						<TerminalGraphicButton background='linear-gradient(hsla(0,0%,100%,.18),hsla(0,0%,100%,.08))' />
						<TerminalGraphicButton background='linear-gradient(#e36456,#d14a3f)' />
						<TerminalGraphicButton background='linear-gradient(hsla(0,0%,100%,.18),hsla(0,0%,100%,.08))' />
						<TerminalGraphicButton background='linear-gradient(#42bb90,#2f9d71)' />
					</TerminalGraphicKeypad>
				</TerminalGraphicFront>
			</TerminalGraphicEdge>
		</TerminalGraphicContainer>
	);
};

export default TerminalGraphicWrapper;
