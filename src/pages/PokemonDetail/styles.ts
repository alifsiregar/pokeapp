import styled from '@emotion/styled';

export const Container = styled.div`
    padding: 20px;
    color: #EDEDED;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #171717;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 350px;
`;

export const PokemonName = styled.span`
    font-size: 48px;
    font-weight: 700;
`;

export const PokemonSprites = styled.img`
    background-color: #EDEDED;
    margin: 20px 0;
    border-radius: 25px;
    width: 300px;
    height: 300px;
`;

export const PokemonTypes = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    flex-wrap: wrap;
`;

export const Type = styled.div`
    display: flex;
    justify-content: center;
    font-weight: 500;
    align-items: center;
    border: 2px solid #444444;
    border-radius: 100px;
    padding: 10px;
    margin: 3px;
    flex-grow: 1;
`;

export const LoadingContainer = styled.div`
    margin: 40px 0;
    align-self: center;
`;

export const Failed = styled.div`
    max-width: 350px;
    text-align: center;
    margin-bottom: 20px;

    span {
        align-self: flex-start;
    }

    &.failed-modal {
        margin: 0;
    }
`;

export const PokemonMoveContainer = styled.div`
    
    h2 {
        align-self: flex-start;
    }
`;

export const PokemonMoves = styled(PokemonTypes)`
    align-items: flex-start;
    max-width: 585px;
    height: 200px;
    overflow: scroll;
    border: 2px solid #444444;
    padding: 20px;
`;

export const Move = styled(Type)`
    font-size: 16px;
    background-color: #EDEDED;
    color: #171717;
    border: none;

    span {
        background-color: transparent;
    }
`;

export const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    background: #EDEDED;
    max-width: 350px; 
    margin: 10px;
    padding: 10px;
`;

export const ModalText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h2 {
        margin-bottom: 5px;
    }
`;

export const ModalInput = styled.input`
    margin: 10px;
    padding: 5px;
    width: 95%;
`;
