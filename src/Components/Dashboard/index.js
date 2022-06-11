import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { lightTheme, darkTheme } from "../Theme";
import { GlobalStyle } from "../Global/global-styles";
import { ThemeProvider } from "styled-components";
import Layout from "./Layout"

export const ThemeContext = React.createContext(null);

function Dashboard() {
  const [theme, setTheme] = useState("light");

  const themeStyle = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{setTheme, theme}}>
      <ThemeProvider theme={themeStyle}>
        <GlobalStyle/>
        <Helmet>
          <title>Home</title>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
          <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"/> 
        </Helmet>
        <>
          <Layout/>
        </>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default Dashboard;

