import styled from "styled-components";

export const Container = styled.div`
    min-height: 90vh;
    position: relative;
    padding: 0px 150px;
    @media screen and (max-width: 1024px) {
        //margin-bottom: 300px;
    
    }
    @media screen and (max-width: 750px) {
        padding: 0px 20px;
        margin-bottom: 20px;
        overflow: hidden;
    }
`
export const Wrapper = styled.div`
    height: 100%;
    margin-top: 85px;
    @media screen and (max-width: 1024px) {
        padding-top: 40%;
    }
`
export const Intro = styled.div`
    animation: fadeInright 1s;
    @keyframes fadeInright {
        from{
            opacity: 0;
            transform: translateX(-300px);
        }
        to{
            opacity: 1;
            transform: translateX(0px);
        }
    }
    h1{
        margin: 0px 0px 30px 4px;
        color: var(--green);
        font-family: var(--font-mono);
        font-size: clamp(var(--fz-sm),5vw,var(--fz-md));
        font-weight: 400;
        display: block;
        line-height: 1.1;
    }
`
export const Intro2 = styled.div`
    animation: fadeInright 1.2s;
    @keyframes fadeInright {
        from{
            opacity: 0;
            transform: translateX(-300px);
        }
        to{
            opacity: 1;
            transform: translateX(0px);
        }
    }
    h2{
        font-size: 60px;
        color: var(--white);
        @media screen and (max-width: 750px) {
        font-size: 30px;
    }
    }
`
export const Intro3 = styled.div`
    animation: fadeInright 1.4s;
    @keyframes fadeInright {
        from{
            opacity: 0;
            transform: translateX(-300px);
        }
        to{
            opacity: 1;
            transform: translateX(0px);
        }
    }
    h3{
        font-size: 70px;
        color: var(--slate);
        @media screen and (max-width: 750px) {
        font-size: 40px;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    }
`
export const Desc = styled.div`
    animation: fadeInright 1.6s;
    @keyframes fadeInright {
        from{
            opacity: 0;
            transform: translateX(-300px);
        }
        to{
            opacity: 1;
            transform: translateX(0px);
        }
    }
    max-width: 500px;
    span{
        color: var(--slate);
        line-height: 1.7;
    }
` 
export const Span = styled.div`
    display: inline-block;
    &::after{
        animation: fadeInright 1.6s;
    @keyframes fadeInright {
        from{
            opacity: 0;
            transform: translateX(-50px);
        }
        to{
            opacity: 1;
            transform: translateX(0px);
        }
    }
        content: '';
        display: block;
        width: 230px;
        height: 2px;
        margin: 0px auto;
        background-color: var(--green);
    }
` 
export const Span2 = styled.div`
    display: inline-block;
   &::after{
        animation: fadeInright 1.6s;
    @keyframes fadeInright {
        from{
            opacity: 0;
            transform: translateX(-50px);
        }
        to{
            opacity: 1;
            transform: translateX(0px);
        }
    }
        content: '';
        display: block;
        width: 140px;
        height: 2px;
        margin: 0px auto;
        background-color: var(--green);
    }
` 
export const Span3 = styled.div`
    display: inline-block;
   &::after{
        animation: fadeInright 1.6s;
    @keyframes fadeInright {
        from{
            opacity: 0;
            transform: translateX(-50px);
        }
        to{
            opacity: 1;
            transform: translateX(0px);
        }
    }
        content: '';
        display: block;
        width: 108px;
        height: 2px;
        margin: 0px auto;
        background-color: var(--green);
    }
` 
export const Button = styled.button`
    animation: fadeInright 1.8s;
    @keyframes fadeInright {
        from{
            opacity: 0;
            transform: translateX(-300px);
        }
        to{
            opacity: 1;
            transform: translateX(0px);
        }
    }
    padding: 15px 30px;
    cursor: pointer;
    border-radius: 4px;
    background-color: transparent;
    border: 1px solid var(--green);
    color: var(--green);
    transition: all 200ms ease-in;
    margin-top: 30px;
    &:hover{
        background-color: var(--green-tint);
        transition: all 200ms ease-in;
    }
`