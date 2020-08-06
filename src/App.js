import React from 'react';
import styled from 'styled-components'

function App() {

  let Header = styled.header`
    background-color: #ccc;
    height: 20vh;
    text-align: center;
  `

  let Main = styled.main`
     background-color: darkblue;
     min-height: 70vh;
  `  // tagged template literals

  let Footer = styled.footer`
    background-color: #ccc;
    text-align: center;
    &:hover {
      color: red;
    }
  `

  return (
    <div className="App">
      <Header>
        <h1>Styled Components</h1>
      </Header>
      <Main>
        <button>Hello</button>
      </Main>
      <Footer>
        <span>&copy; Copright</span>
      </Footer>
    </div>
  );

}

export default App;
