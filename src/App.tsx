import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import HomeTemplate from "./pages/home";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <HomeTemplate />
    </ThemeProvider>
  );
}

export default App;
