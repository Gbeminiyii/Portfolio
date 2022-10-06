import { FaGithub } from 'react-icons/fa'
import { FiLinkedin } from 'react-icons/fi'
import { BsTwitter, BsDribbble } from 'react-icons/bs'
import styled from 'styled-components'
import { useEffect, useState } from 'react'

const Container = styled.ul`
    animation: fade 2500ms;
    @keyframes fade {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
    position: fixed;
    flex-direction: column;
    display: ${props => (props.Mobile ? 'none':'flex')};;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    z-index: 10;
    width: fit-content;
    left: 40px;
    bottom: 0px;
    &::after{
        content: '';
        display: block;
        width: 1px;
        height: 80px;
        margin: 0px auto;
        background-color: var(--light-slate);
    }
    li{
        margin-bottom: 10px;
        width: 50px;
        height: 50px;
        display: flex;
        position: relative;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    a{
        transition: all 400ms ease;
        cursor: pointer;
        &:hover{
           margin-bottom: 10px;
           transition: all 400ms ease;
           color: var(--green);
        }
    }
    }
`

const HeaderSocials = () => {

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
        <li><a target='_blank' rel='noreferrer' href="https://github.com"><FaGithub/></a></li>
        <li><a target='_blank' rel='noreferrer' href="https://www.linkedin.com"><FiLinkedin/></a></li>
        <li><a target='_blank' rel='noreferrer' href="https://twitter.com"><BsTwitter/></a></li>
        <li><a target='_blank' rel='noreferrer' href="https://Dribble.com"><BsDribbble/></a></li>
    </Container>
  )
}

export default HeaderSocials