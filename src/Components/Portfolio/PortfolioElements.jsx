import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    position: relative;
    padding: 0px 150px;
    margin-top: 0px;
    @media screen and (max-width: 750px) {
        padding: 0px 20px;
        margin-bottom: 0px;
    }
    @media screen and (max-width: 1024px) {
        margin-bottom: 100px;

    }
`
export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: transparent;
`
export const Header = styled.span`
    flex: 1;
    background-color: transparent;
    display: flex;
    align-items: center;
    color: var(--white);
    font-size: var(--fz-heading);
    width: 100%;
    font-weight: 500;
    @media screen and (max-width: 750px) {
        font-size: var(--fz-xxl);
    }
    &::before{
        display: inline-block;
        content: '';
        border: 1px solid var(--green);
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin-right: 10px;
    }
    &::after{
        display: inline-block;
        content: '';
        width: 200px;
        height: 1px;
        margin-left: 10px;
        background-color: var(--lightest-navy);  
    }
`
export const PortfolioCard = styled.div`
    flex: 8;
    display: flex;
    gap: 15px;
    padding: 5px;
    margin-top: 20px;
    @media screen and (max-width: 750px) {
       flex-direction: column;
    }
    @media screen and (max-width: 1024px) {
        flex-direction: column;
        
    }
`
export const Card = styled.div`
    background-color: var(--dark-navy);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 30px;
    min-height: 450px;
    span{
        margin-top: 40px;
        margin-bottom: 60px;
        font-size: var(--fz-md);
        color: var(--dark-slate);
    }
    &:hover{
        background-color: var(--light-navy);
    }
    img{
        background: linear-gradient(--green-tint);
    }
`
export const Buttons = styled.div`
    display: flex;
    gap: 20px;
`
export const Button = styled.button`
    margin-left: 40px;
    padding: 6px 10px;
    cursor: pointer;
    border-radius: 4px;
    background-color: transparent;
    border: 1px solid var(--green);
    color: var(--green);
    transition: all 200ms ease-in;
    &:hover{
        background-color: var(--green-tint);
        transition: all 200ms ease-in;
    }
`
export const Button2 = styled.button`
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 4px;
    background-color: var(--white);
    border: 1px solid var(--white);
    color: black;
    transition: all 200ms ease-in;
    &:hover{
        background-color: var(--green-tint);
        transition: all 200ms ease-in;
        color: var(--green);
    }
`