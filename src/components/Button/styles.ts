import styled from '@emotion/styled';
import { IState } from '../../interfaces';

export const Container = styled.button<IState['buttonStyleComponent']>`
    width: 100%;
    background-color: ${({ color }) => (color || 'white')};
    color: ${({ fontColor }) => (fontColor || '#000')};
    border: none;
    padding: 10px;
    border-radius: 100px;
    cursor: pointer;
    margin: ${({ margin }) => (margin || 0)};

    @media only screen and (min-width: 420px) {
        &.catch-button {
            width: 350px;
        }
    }
`;

export const ButtonLabel = styled.label`
    background-color: transparent;
    font-size: 16px;
    font-weight: 500;
`;
