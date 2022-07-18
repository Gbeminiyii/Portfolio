import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    };
    :root{
    --dark-navy: #020c1b;
    --navy: #0a192f;
    --light-navy: #112240;
    --lightest-navy: #233554;
    --navy-shadow: rgba(2,12,27,0.7);
    --dark-slate: #495670;
    --slate: #8892b0;
    --light-slate: #a8b2d1;
    --lightest-slate: #ccd6f6;
    --white: #e6f1ff;
    --green: #64ffda;
    --green-tint: rgba(100,255,218,0.1);
    --pink: #f57dff;
    --blue: #57cbff;
    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;
    --border-radius: 4px;
    }
    html{
        scroll-behavior: smooth;
    }
    ::-webkit-scrollbar{
        display: none;
    }
    body{
        font-family: 'Poppins', sans-serif;
        margin: 0px;
        width: 100%;
        min-height: 100%;
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
        background-color: var(--navy);
        color: var(--slate);
        font-size: var(--fz-xl);
        line-height: 1.3;
    }
    a{
        color: var(--color-primary);
        transition: all 400ms ease;
        &:hover{
            color: var(--color-white);
        }
    }
    img{
        display: block;
        width: 100%;
        object-fit: cover;
        
    }
    /* ======= SMALL DEVICES ======== */
    @media screen and (max-width: 750px) {
        body{
            overflow: hidden;
        }
    }
`