import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					fontFamily: "'sohne-var', 'Helvetica Neue', 'Arial', 'sans - serif'",
					fontStyle: 'normal',
					margin: 0,
					padding: 0
				}
			}
		}
	},
	breakpoints: {
		values: {
			mobile: 0,
			tablet: 600,
			tabletX: 750,
			laptop: 900,
			desktop: 1440
		}
	},
	palette: {
		canvas: {
			gradientColorZero: '#a960ee',
			gradientColorOne: ' #ff333d',
			gradientColorTwo: '#90e0ff',
			gradientColorThree: '#ffcb57',
			gradientColorZeroTransparent: 'rgba(169,96,238,0)',
			gradientColorOneTransparent: 'rgba(255,51,61,0)',
			gradientColorTwoTransparent: 'rgba(144,224,255,0)',
			gradientColorThreeTransparent: 'rgba(255,203,87,0)'
		}
	},
	spacing: 4,
	typography: {
		fontFamily: ['sohne-var', 'Helvetica Neue', 'Arial', 'sans - serif'].join(),
		fontWeightLight: 200,
		fontWeightNormal: 300,
		fontWeightSemibold: 425,
		fontWeightBold: 500,
		button: {
			fontFamily: "'sohne-var', 'Helvetica Neue', 'Arial', 'sans - serif'",
			fontSize: '0.8rem',
			fontWeight: 500,
			lineHeight: '24px',
			textTransform: 'capitalize'
		},
		cta_button: {
			fontFamily: "'sohne-var', 'Helvetica Neue', 'Arial', 'sans - serif'",
			fontSize: '0.8rem',
			fontWeight: 425,
			lineHeight: '24px',
			textTransform: 'capitalize'
		},
		nav_menu_inner_title: {
			fontFamily: "'sohne-var', 'Helvetica Neue', 'Arial', 'sans - serif'",
			fontSize: '13px',
			fontWeight: 600,
			lineHeight: '20px',
			letterSpacing: '0.4px',
			textTransform: 'uppercase',
			color: '#8898aa'
		},
		nav_menu_inner_label: {
			fontFamily: "'sohne-var', 'Helvetica Neue', 'Arial', 'sans - serif'",
			fontSize: '14px',
			fontWeight: 500,
			lineHeight: '20px',
			letterSpacing: '0.2px',
			textTransform: 'capitalize',
			color: '#212121'
		},
		nav_menu_inner_body: {
			fontFamily: "'sohne-var', 'Helvetica Neue', 'Arial', 'sans - serif'",
			fontSize: '14px',
			fontWeight: 500,
			lineHeight: '20px',
			letterSpacing: '0.2px',
			// textTransform: 'capitalize',
			color: '#212121'
		}
	}
});

export default theme;
