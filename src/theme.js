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
			laptop: 900,
			desktop: 1440
		}
	},
	palette: {},
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
			textTransform: 'normal'
		}
	}
});

export default theme;
