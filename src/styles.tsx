import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, body{
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
  }

  body{
    background-color: #22272e;
    color: #fff;
    font-family: 'Roboto', sans-serif;
  }

  a{
    color: #fff;
  }

`