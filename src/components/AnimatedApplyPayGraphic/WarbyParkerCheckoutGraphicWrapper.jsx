import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import WarbyParkerCheckoutGraphicLogo from '../../SvgIcon/WarbyParkerCheckoutGraphicLogo/WarbyParkerCheckoutGraphicLogo';
import { ApplyPayButton } from '../PhoneOnCheckOut/PhoneOnCheckOut';
import ApplePayIcon from '../../SvgIcon/ApplePay/ApplePayIcon';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ApplePaySheetForWarbyParker from './ApplePaySheetForWarbyParker';
const WarbyParkerCheckoutGraphic = styled(Box, { name: 'warby-checkout-graphic' })(({ theme }) => ({
	position: 'absolute',
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	padding: '30px 16px 0 16px'
}));
const WarbyParkerCheckoutGraphicGlassesContainer = styled(Box, {
	name: 'WarbyParker-Checkout-Graphic-glassesContainer'
})(({ theme }) => ({
	width: '125px',
	height: '35px',
	position: 'relative'
}));
const Glass__URL = [
	{
		color: 'black',
		src: 'https://images.ctfassets.net/fzn2n1nzq965/3zgjfwM6UX1gBXZcVmcytH/8c1567a5635eabcb6e75af8d67a7a518/glasses-slate.svg'
	},
	{
		color: 'blue',
		ursrc:
			'https://images.ctfassets.net/fzn2n1nzq965/5646svpQ0dbCfY3hlna47g/455a42de63cfbfe7ae651aa2cebbe350/glasses-purple.svg'
	},
	{
		color: 'cyan',
		ursrc:
			'https://images.ctfassets.net/fzn2n1nzq965/5JrlC5NNqOr0ooKsjO8g5H/9cc082586a61bd78ad781c5bda767df3/glasses-cyan.svg?h=250'
	},
	{
		color: 'yellow',
		ursrc:
			'https://images.ctfassets.net/fzn2n1nzq965/7fMJmyFoEpnN7thfmCbqa1/ef9cab4b938c7b485eea1509052f0965/glasses-yellow.svg'
	}
];
const Glass = styled('figure', { name: 'WarbyParker-Checkout-Graphic-glass' })(({ theme, src }) => ({
	position: 'absolute',
	left: 0,
	top: 0,
	width: '100%',
	height: '100%',
	margin: 0,
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	backgroundPosition: 'center center',
	backgroundImage: `url(${src})`
}));
const WarbyParkerGlassesColorContainer = styled(Box, { name: 'WarbyParker-Checkout-Graphic-available-color' })(
	({ theme }) => ({
		width: '67px',
		height: '10px',
		margin: '15px 0 25px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		gap: '9px',
		position: 'relative'
	})
);
const GlassColorRadio = styled(Box, { name: 'WarbyParker-Checkout-Graphic-color-radio' })(({ theme, bgColor }) => ({
	width: '10px',
	height: '10px',
	borderRadius: '5px',
	backgroundColor: bgColor
}));
const ActiveColorIndicator = styled(Box, { name: 'WarbyParker-Checkout-Graphic-color-radio-indicator' })(
	({ theme }) => ({
		position: 'absolute',
		width: '16px',
		height: '16px',
		left: '-3px',
		top: '-3px',
		border: '1px solid #62788d',
		borderRadius: '8px'
	})
);
const WarbyParkerCheckoutGraphicSection = styled(Box, {
	name: 'WarbyParker-Checkout-Graphic-section'
})(({ theme }) => ({
	position: 'relative',
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	borderBottom: '1px solid #d5dde6',
	padding: '11px 0'
}));
const WarbyParkerCheckoutGraphicProductDetailSectionDescription = styled(Box, {
	name: 'WarbyParker-CheckoutGraphic-ProductDetail-Section-Description'
})(({ theme }) => ({
	...theme.typography.WarbyParkerCheckoutGraphic__description,
	padding: '0 0 0 15px',
	margin: ' 0 0 6px',
	position: 'relative',
	display: 'block',
	'&::before': {
		content: '""',
		position: 'absolute',
		left: 0,
		top: '5px',
		width: '4px',
		height: '4px',
		borderRadius: '50%',
		backgroundColor: '#687792'
	}
}));
const WarbyParkerCheckoutGraphicSectionRecommendProduct = styled(Box, {
	name: 'WarbyParker-CheckoutGraphic-Section-recommend-product'
})(({ theme }) => ({
	display: 'grid',
	alignItems: 'center',
	gridTemplateColumns: '75px 1fr',
	gridTemplateRows: '21px',
	gridTemplateAreas: `"picture text"`,
	padding: '5px 0'
}));
const RecommendProductPicture = styled(Box, { name: 'WarbyParker-CheckoutGraphic-Section-recommend-product-pic' })(
	({ theme, src, gridArea }) => ({
		margin: 0,
		width: '60px',
		height: '21px',
		backgroundImage: `url(${src})`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		gridArea: gridArea
	})
);

const WarbyParkerCheckoutGraphicWrapper = () => {
	return (
		<WarbyParkerCheckoutGraphic>
			<WarbyParkerCheckoutGraphicLogo />
			<WarbyParkerCheckoutGraphicGlassesContainer>
				<Glass src={Glass__URL[0].src} />
				{/* <Glass src={Glass__URL[1].src} />
      <Glass src={Glass__URL[2].src} />
      <Glass src={Glass__URL[3].src} /> */}
			</WarbyParkerCheckoutGraphicGlassesContainer>
			<Typography variant='WarbyParkerCheckoutGraphic__title' sx={{ margin: '12px 0 1px 0' }}>
				Wilkie
			</Typography>
			<Typography variant='WarbyParkerCheckoutGraphic__description'>Purely functional</Typography>
			<WarbyParkerGlassesColorContainer>
				<GlassColorRadio bgColor='#0a2540' />
				<GlassColorRadio bgColor='#635bff' />
				<GlassColorRadio bgColor='#0cf' />
				<GlassColorRadio bgColor='#ffc025' />
				<ActiveColorIndicator />
			</WarbyParkerGlassesColorContainer>
			<ApplyPayButton sx={{ margin: '0 0 30px 0' }}>
				<ApplePayIcon />
			</ApplyPayButton>
			<WarbyParkerCheckoutGraphicSection>
				<Box
					className='section-title'
					sx={{ display: 'flex', alignItem: 'center', justifyContent: 'space-between', margin: '0 0 11px 0' }}>
					<Typography variant='WarbyParkerCheckoutGraphic__sectionTitle'>Product details</Typography>
					<KeyboardArrowDownIcon sx={{ width: '16px', height: '16px', color: '#425466' }} />
				</Box>
				<Typography variant='WarbyParkerCheckoutGraphic__description' component='div'>
					What do you get when you combine round lenses, slim temple arms, and a keyhole bridge? A good-looking frame
					named Haskell.
				</Typography>
				<Box className='description-container' sx={{ margin: '16px 0 0 0' }}>
					<WarbyParkerCheckoutGraphicProductDetailSectionDescription>
						Made from hand-polished cellulose acetate
					</WarbyParkerCheckoutGraphicProductDetailSectionDescription>
					<WarbyParkerCheckoutGraphicProductDetailSectionDescription>
						Akulon-coated screws for durability
					</WarbyParkerCheckoutGraphicProductDetailSectionDescription>
				</Box>
			</WarbyParkerCheckoutGraphicSection>
			<Box
				className='section-title'
				sx={{
					width: '100%',
					display: 'flex',
					alignItem: 'center',
					justifyContent: 'space-between',
					padding: '11px 0',
					borderBottom: '1px solid #d5dde6'
				}}>
				<Typography variant='WarbyParkerCheckoutGraphic__sectionTitle'>Reviews</Typography>
				<ArrowForwardIosIcon sx={{ width: '10px', height: '10px', color: '#425466' }} />
			</Box>
			<WarbyParkerCheckoutGraphicSection>
				<Box
					className='section-title'
					sx={{ display: 'flex', alignItem: 'center', justifyContent: 'space-between', margin: '0 0 11px 0' }}>
					<Typography variant='WarbyParkerCheckoutGraphic__sectionTitle'>Recommended</Typography>
					<KeyboardArrowDownIcon sx={{ width: '16px', height: '16px', color: '#425466' }} />
				</Box>
				<WarbyParkerCheckoutGraphicSectionRecommendProduct>
					<RecommendProductPicture
						src='https://images.ctfassets.net/fzn2n1nzq965/5WZ47bNcwixZZqIuZsB8zS/a366be308af624451fb4a187b583fed5/percey.jpg?w=120&fm=webp'
						gridArea='picture'
						component='figure'
					/>
					<Box gridArea='text' sx={{ display: 'flex', alignItems: 'center', gap: '5px', flexGrow: 1 }}>
						<Typography variant='WarbyParkerCheckoutGraphic__sectionTitle' sx={{ fontSize: '11px' }}>
							Percey
						</Typography>
						<Typography variant='WarbyParkerCheckoutGraphic__description' component='div'>
							Rye Tortoise
						</Typography>
					</Box>
				</WarbyParkerCheckoutGraphicSectionRecommendProduct>

				<WarbyParkerCheckoutGraphicSectionRecommendProduct>
					<RecommendProductPicture
						src='https://images.ctfassets.net/fzn2n1nzq965/2kiQttqTVy9oROG2JARDFv/5b6e35aab5bb292768af7c5e59d47001/durand.jpg?w=120&fm=webp'
						gridArea='picture'
						component='figure'
					/>
					<Box gridArea='text' sx={{ display: 'flex', alignItems: 'center', gap: '5px', flexGrow: 1 }}>
						<Typography variant='WarbyParkerCheckoutGraphic__sectionTitle' sx={{ fontSize: '11px' }}>
							Durand
						</Typography>
						<Typography variant='WarbyParkerCheckoutGraphic__description' component='div'>
							Crystal
						</Typography>
					</Box>
				</WarbyParkerCheckoutGraphicSectionRecommendProduct>
				<WarbyParkerCheckoutGraphicSectionRecommendProduct>
					<RecommendProductPicture
						src='https://images.ctfassets.net/fzn2n1nzq965/7IdMzHiUUTfP3tG7ULKfVT/6a858d4a6157a02817afec4225320025/felix.jpg?w=120&fm=webp'
						gridArea='picture'
						component='figure'
					/>
					<Box gridArea='text' sx={{ display: 'flex', alignItems: 'center', gap: '5px', flexGrow: 1 }}>
						<Typography variant='WarbyParkerCheckoutGraphic__sectionTitle' sx={{ fontSize: '11px' }}>
							Felix
						</Typography>
						<Typography variant='WarbyParkerCheckoutGraphic__description' component='div'>
							Chamomile Fade
						</Typography>
					</Box>
				</WarbyParkerCheckoutGraphicSectionRecommendProduct>
			</WarbyParkerCheckoutGraphicSection>
			<ApplePaySheetForWarbyParker />
		</WarbyParkerCheckoutGraphic>
	);
};

export default WarbyParkerCheckoutGraphicWrapper;
