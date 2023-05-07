import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	html {
		@media (max-width: 1080px) {
				font-size: 93.75%;
		}
		@media (max-width: 720px) {
				font-size: 87.5%;
		}
	}
	:focus{
		outline: 0;
		box-shadow: 0 0 0 2px ${(props) => props.theme['ignite-mid']};
	}

	body {
		background: ${(props) => props.theme['color-background']};
    color: ${(props) => props.theme['text-base']};
		-webkit-font-smoothing: antialised
	}
	body, input, textarea, button {
		font-family: 'Roboto', sans-serif;
		font-weight: 400;
		font-size: 1rem;
	}
	h1, h2, h3, h4, h5, h6, strong {
		font-weight: 600;
	}
	button{
		cursor: pointer;
	}
	[disabled] {
		opacity: 0.6;
		cursor: not-allowed;
	}

`
