import { Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import Router from "./router/";
function App() {
	return (
		<RecoilRoot>
			<ThemeProvider theme={theme}>
				<Router></Router>
			</ThemeProvider>
		</RecoilRoot>
	);
}

export default App;
