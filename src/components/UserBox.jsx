import React from "react";
import styled from "styled-components";
import { P } from "./Text";
import { Link } from "react-router-dom";
import { BiLogOut, BiMenu } from "react-icons/bi";

const UserBox = (props) => (
    <UserArea>
        <Linker to="/profil"><UserImage alt="HC-logo" src="logo.png"/></Linker>
        <Log>
            <Linker to="/profil"><UserText>Bendik Søta Sannes</UserText></Linker>
            <LogInOut>
                <LogOut><BiLogOut/></LogOut>
                <LogText>Logg ut</LogText>
            </LogInOut>
        </Log>
        <MenuBox onClick={() => props.toggleMenu(true)} ><BiMenu/></MenuBox>
    </UserArea>
);

export {UserBox};

const Linker = styled(Link)`
color: var(--gray-90);
  text-decoration: none;
`;

const UserArea = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const UserImage = styled.img `
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin: 10px;
    display: none;
    &:hover{
        cursor: pointer;
    }
    @media (min-width: 1024px){
        display: flex;
    }
`;

const Log = styled.div`
    display: none;
    flex-direction: column;
    justify-content: center;
    max-width: 250px;
    min-width: 150px;
    margin-right: 30px;

    @media (min-width: 1024px){
        display: flex;
    }
    
`;
const LogInOut = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 5px 0 -12px -6px;

    &:hover{
        cursor: pointer;
    }
`;

const LogOut = styled(Link)`
    font-size: 25px;
    margin: 0;
    text-decoration: none;
    color:black;
`;

const UserText = styled(P)`
    width: 100%;
    margin: -7px 0 0 0;
`;

const LogText = styled(P)`
    font-size: 12px;
    font-weight: 0;
    width: 100%;
    margin: 0 0 5px 0;
    &:hover{
        cursor: pointer;
    }
`;

const MenuBox = styled.div`
    font-size: 40px;
    &:hover {
        cursor: pointer;
    }
`;
