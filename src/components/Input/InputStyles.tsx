import styled from 'styled-components';

export const InputContainer = styled.div`
    border: 1px solid #f4f4f4;
    border-radius: 20px;
    height: 62px;
    width: 30%;
    min-width: 250px;
    display: flex;  
    justify-content: center;  
    align-items: center; 
    margin: 20px;

    input {
        width: 100%; 
        height: 100%;  
        background: transparent;
        border: 0;
        padding: 0 20px; 
        color: #fff;
        font-size: 20px;
        outline: none;
        box-sizing: border-box;  

        &::placeholder {
            font-size: 22px;    
        }

        @media screen and (max-width: 480px){
            &::placeholder {
                font-size: 11px;  
            }
        }
    }
`;
