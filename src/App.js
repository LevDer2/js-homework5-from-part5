import { createGlobalStyle } from "styled-components";
import "./App.css";
import prop from "./Food.json"
import Food from "./components/Food/Food";

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

body{
  background-color: #FFF7D9;
}


`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Food prop={prop}/>
    </>
  );
}

export default App;
