import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

export const Nav = styled.div`
    background-color: #EDEDED;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem 0 2rem;
`;

export const NavLogo = styled.span`
    font-size: 48px;
    font-weight: 900;
    margin: 0;
`;

export const MenuBar = styled(FaIcons.FaBars)`
    font-size: 2rem;
    background: none;
    color: #171717;

    @media only screen and (min-width: 660px) {
        display: none;
    }
`;

export const DesktopMenu = styled.div`
    width: 15rem;
    color: #ffffff;
    justify-content: space-between;
    display: none;

    @media only screen and (min-width: 660px) {
        display: flex;
    }
`;

export const MenuItems = styled(NavLink)`
    padding: 0.75rem;
    border-radius: 0.25rem;
    color: #171717;
    text-decoration: none;

    &:hover {
        background-color: #171717;
        color: #EDEDED;
    }

    &.active {
        background-color: #171717;
        color: #EDEDED;
    }
`;

export const MobileNav = styled.div<{isActive:boolean}>`
    background-color: #18191A;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: ${({ isActive }) => (isActive ? '0%' : '-200%')};
    transition: 750ms;

    @media only screen and (min-width: 660px) {
        display: none;
    }
`;

export const MobileMenuClose = styled.div`
    background-color: #18191A;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const MenuClose = styled(AiIcons.AiOutlineClose)`
    margin-right: 2rem;
    font-size: 2rem;
    background: none;
    color: #ffffff;
`;

export const MobileMenuItems = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 8px 16px 8px 16px;
    height: 45px;
    text-decoration: none;
    color: #EDEDED;
    border-radius: 0.25rem;

    &:hover {
        background-color: #EDEDED;
        color: #171717;
    }

    &.active {
        background-color: #EDEDED;
        color: #171717;
    }
`;
