import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import styled, { ThemeProvider } from 'styled-components';

function App() {

const AppContainer = styled.div`
    display: grid;
    min-height: 100vh;
    grid-template-areas: 'header header' 'main main' 'footer footer';

    @media screen and (min-width: 768px) {
      grid-template-areas: 'header header' 'main footer' 'main footer';
    }
  `;

  return (
    <ThemeProvider>
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
