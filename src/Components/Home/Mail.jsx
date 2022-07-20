import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color: transparent;
    display: ${props => (props.Mobile ? 'none':'flex')};;
    position: fixed;
    z-index: 10;
    align-items: center;
    justify-content: space-between;
    bottom: 160px;
    right: -120px;
    transform: rotate(90deg);
    animation: fade 2500ms;
    @keyframes fade {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
    &::after{
        content:'';
        width: 80px;
        background-color: var(--white);
        height: 0.8px;
        display: block;
        margin: 0px auto;
    }
    div{
        margin-right: 30px;
        color: var(--white);
        letter-spacing: 3px;
        font-size: var(--fz-sm);
        font-weight: 300;
        transition: all 400ms ease;
    }
    a{
        &:hover{
        color: var(--green);
        transition: all 400ms ease;
    }
    }
`

const Mail = () => {

    const [isMobile, setIsMobile] = useState(
        window.matchMedia('(max-width:750px)').matches
    );
  
    useEffect(()=>{
        window.addEventListener('resize', () => {
            setIsMobile(window.matchMedia('(max-width: 750px)').matches)
        });
    }, []);
  return (
    <Container Mobile={isMobile}>
        <div><a target='_blank' rel='noreferrer' href="mailto:okunowogbemi@gmail.com">okunowogbemi@gmail.com</a></div>
    </Container>
  )
}

export default Mail