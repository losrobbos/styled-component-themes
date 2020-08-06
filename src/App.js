import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

function App() {

const GlobalStyle = createGlobalStyle`

  body {
    color: ${(props) => props.theme.mode == 'light' ? 'black': 'white' };    
  }

  header { 
    background-color: ${(props) => props.theme.mode == 'light' ? 'orange': 'darkslateblue' };
  }
  main { 
    background-color: ${(props) => props.theme.mode == 'light' ? 'orange': 'darkslateblue' }
  }
  footer { 
    background-color: ${(props) => props.theme.mode == 'light' ? 'orange': 'darkslateblue' } 
  }
`

const AppContainer = styled.div`

    display: grid;
    min-height: 100vh;
    grid-auto-rows: 1fr;
    grid-template-areas: 'header header' 'main main' 'main main' 'main main' 'footer footer';    

    @media screen and (min-width: 768px) {
      grid-template-areas: 'header header' 'main footer' 'main footer' 'main footer' 'main footer';
    }
  `;

  return (
    <ThemeProvider theme={{ mode: 'light' }}>
      <GlobalStyle />
      <AppContainer>
        <Header>
          <h1>Styled Heading</h1>
        </Header>
        <Main>
          <button>Hello</button>
        </Main>
        <Footer>
          <span>&copy; Copright</span>
        </Footer>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
