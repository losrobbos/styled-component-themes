import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Aside from './components/Aside';
import Footer from './components/Footer';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

function App() {

  // layout grid with different layouts per device
  const Layout = styled.div`
    display: grid;
    min-height: 100vh;
    grid-auto-rows: 1fr;
    grid-template-areas: 'header' 'main' 'main' 'aside' 'footer';

    @media screen and (min-width: 768px) {
      grid-template-areas: 'header header header' 'main main aside' 'main main aside' 'main main aside' 'footer footer footer';
    }
  `;

  // global colors & fonts
  const GlobalStyle = createGlobalStyle`
    body {
      color: ${(props) => (props.theme.mode == 'light' ? 'black' : 'white')};    
      background-color: ${(props) => (props.theme.mode == 'light' ? 'orange' : 'black')};
    }

    /* make boundaries of grid areas visible */
    header, main, aside, footer { 
      border: 1px solid ${(props) => (props.theme.mode == 'light' ? 'black' : 'white')};; 
    }
  `;

  let [ theme, setTheme ] = useState('dark')
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark') 

  return (
    <ThemeProvider theme={{ mode: theme }}>
      <GlobalStyle />
      <Layout>
        <Header>
          <h1>Styled Components</h1>
        </Header>
        <Main>
          <button onClick={toggleTheme}>Switch Theme</button>
        </Main>
        <Aside>Aside</Aside>
        <Footer>
          <span>&copy; Copright</span>
        </Footer>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
