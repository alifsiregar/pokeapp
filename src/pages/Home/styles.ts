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
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.span`
    font-size: 48px;
    font-weight: 900;
    margin: 0;
`;

export const Subtitle = styled.span`
    font-size: 24px;
`;

export const Owned = styled.span`
    font-size: 14px;
`;

export const ContentContainer = styled.div`
    max-width: 1366px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
`;

export const ButtonContainer = styled.div`
    max-width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const PageButton = styled.button`
    border: 0;
    width: 75px;
    border-radius: 25px;
    background-color: #EDEDED;
    padding: 5px;
    font-weight: 500;
    cursor: pointer;
`;

export const CardContainer = styled.div`
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;
