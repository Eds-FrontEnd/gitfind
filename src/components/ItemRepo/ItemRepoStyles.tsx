import styled from 'styled-components';

export const ItemContainer = styled.div`
  width: 100%;
  min-width: 250px;
  background-color: #1c1c1c;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  text-align: center;

  h2 {
    font-size: 32px;
    color: #fafafa;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    color: #fafafa60;
    margin-top: 10px;
    line-height: 1.5;
  }

  .repository,
  .remove {
    display: inline-block;
    text-decoration: none;
    font-weight: bold;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease, color 0.2s ease;
    text-align: center;
    margin-top: 10px;
  }

  .repository {
    background-color: #1e90ff;
    color: white;

    &:hover {
      background-color: #4169e1;
    }

    &:focus {
      outline: 2px solid #ff6347;
    }
  }

  .remove {
    background-color: rgb(255, 0, 0);
    color: white;
    margin-left: 10px;

    &:hover {
      background-color: rgb(220, 0, 0);
    }

    &:focus {
      outline: 2px solid #ff6347;
    }
  }
`;
