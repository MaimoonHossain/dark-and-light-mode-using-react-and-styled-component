import './App.css';
import {ThemeProvider} from "styled-components";
import Tutorial from "./components/Tutorial";
import GlobalStyle from "./components/styles/Global.styles";
import {useState} from "react";
import SunIcon from "./components/icons/SunIcon";
import Switch from "./components/Switch";
import MoonIcon from "./components/icons/MoonIcon";


const darkTheme = {
    body: "#1c1c1c",
    margin: 0,
    title: "#fff",
    subtitle: "#b6b6b6",
    icon: "#b6b6b6",
};
const lightTheme = {
    body: "#fff",
    title: "#1c1c1c",
    icon: "#1c1c1c",
    subtitle: "#333",
}

function App() {
    const [theme, setTheme] = useState("dark");
    const isDarkTheme = theme === "dark";
    const toggleTheme = () => {
        setTheme(isDarkTheme ? "light" : "dark" )
    }
  return (
    <div className="App">
      {/*<ChangeValue />*/}
      {/*  <CheckScreen />*/}
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <GlobalStyle />
            <Tutorial toggleTheme={toggleTheme} isDarkTheme={isDarkTheme}/>
        </ThemeProvider>


    </div>
  );
}

export default App;
