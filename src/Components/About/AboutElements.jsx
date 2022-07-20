import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    position: relative;
    padding: 0px 150px;
    @media screen and (max-width: 750px) {
        padding: 0px 20px;
    }
    @media screen and (max-width: 1024px) {
        margin-bottom: 30px;
    }
    
`
export const Content = styled.div`
    flex: 8;
    gap: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    @media screen and (max-width: 750px) {
       flex-direction: column;
    }
    @media screen and (max-width: 1024px) {
       flex-direction: column;
    }
`
export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const Header = styled.span`
    flex: 1;
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
export const Text = styled.div`
    background-color: transparent;
    flex: 4;
    height: 100%;
    @media screen and (max-width:750px){
        font-size: var(--fz-md);
        line-height: 1.7;
    }
    font-size: var(--fz-md);
    p{
        color: var(--slate);
        font-size: var(--fz-xl);
        line-height: 1.3;
        margin-bottom: 30px;
        @media screen and (max-width:750px){
        font-size: var(--fz-md);
        line-height: 1.7;
    }
    }
    span{
        max-width: 80%;
        font-size: var(--fz-xl);
        @media screen and (max-width: 750px) {
            font-size: var(--fz-md);
        }
    }
`
export const Image = styled.div`
    flex: 3;
    min-height: 100%;
    img{
        border-radius: 10px;
        opacity: 0.4;
        transition: all 400ms ease;
        &:hover{
            transition: all 400ms ease;
            opacity: 1;
        }
    }
    @media screen and (max-width:750px) {
        width: 300px;
        height: 300px;
    }
`