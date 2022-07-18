import React, { useEffect, useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FiLinkedin } from 'react-icons/fi'
import { BsTwitter, BsDribbble } from 'react-icons/bs'
import styled from 'styled-components'
import { Header } from '../About/AboutElements'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import { motion } from 'framer-motion'


const Container = styled.div`
    min-height: 80vh;
    position: relative;
    padding: 0px 150px;
    overflow: hidden;
    @media screen and (max-width: 750px) {
        padding: 0px 20px;
        min-height: 50vh;
    }
    @media screen and (max-width: 1024px) {
        min-height: 100vh;
    }
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: transparent;
`
const HeaderContainer = styled.ul`
    animation: fade 2500ms;
    @keyframes fade {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
    flex-direction: row;
    display: ${props => (props.Mobile ? 'flex':'none')};
    align-items: center;
    justify-content: center;
    background-color: transparent;
    margin-top: 100px;
    z-index: 10;
    width: 100%;
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
const Text = styled.div`
    display: flex;
    flex: 6;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 70px;
    @media screen and (max-width: 750px) {
        margin-top: 70px;

    }
    @media screen and (max-width: 1024px) {
        margin-top: 70px;
    }
`
const First = styled.div`
    span{
        font-size: 42px;
        color: var(--white);
    }
`
const Desc = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    p{
        background-color: transparent;
        max-width: 600px;
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }
`
const Mail = styled.div`
    button{
    padding: 20px 39px;
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
    
}
`
const Contact = () => {

    const {ref, inView} = useInView()
    const animation = useAnimation();

    useEffect(() => {
        if(inView){
          animation.start({
              x:0,
              opacity: 1,
              transition: {
                  type: 'spring', duration: 2, bounce: 0.3
              }
          });
        }
        if(!inView){
          animation.start({
              x: '-100vw',
              opacity: 0
          })
        }
      });

      const [isMobile, setIsMobile] = useState(
        window.matchMedia('(max-width:750px)').matches
    );
  
    useEffect(()=>{
        window.addEventListener('resize', () => {
            setIsMobile(window.matchMedia('(max-width: 750px)').matches)
        });
    }, []);
  return (
    <Container as={motion.div}
     id='contact'
     ref={ref}
     animate={animation}>
        <Wrapper>
            <Header>What's Next?</Header>
            <Text>
                <First>
                <span>Get In Touch</span>
                </First>
                <Desc>
                <p>
                Hello! Currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll be sure to get back to you ASAP!
                </p>
                </Desc>
                <Mail>
                    <button>
                        <a href='mailto:okunowogbemi@gmail.com'>Say Hello</a>
                    </button>
                </Mail>
            </Text>
        </Wrapper>
        <HeaderContainer Mobile={isMobile}>
                <li><a href="https://github.com/Gbeminiyii"><FaGithub/></a></li>
                <li><a href="https://www.linkedin.com/in/okunowo-gbeminiyi-9a32a4168/"><FiLinkedin/></a></li>
                <li><a href="https://twitter.com/Gbemi_0k"><BsTwitter/></a></li>
                <li><a href="https://Dribble.com"><BsDribbble/></a></li>
        </HeaderContainer>
    </Container>
  )
}

export default Contact