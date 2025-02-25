import styled from 'styled-components';

export const ButtonStyle = styled.button`
    background-color: #fafafa;
    border: 1px solid #fafafa;
    border-radius: 20px;
    height: 62px;
    width: 30%;
    min-width: 250px;
    margin: 20px;
    cursor: pointer;
    font-size: 1rem;

    &:active {
        position: relative;
        top: 2px;
    }

    &:hover {
        background: transparent;
        color: #fff;
    }
`;
