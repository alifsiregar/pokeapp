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

export const CardContainer = styled.div`
    max-width: 1366px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

export const EmptyContainer = styled.div`
    height: 90vh;
    background-color: #171717;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;
