import React from 'react'
import HeaderSocials from "./HeaderSocials";
import Mail from "./Mail";
import { Button, Container, Desc, Intro, Intro2, Intro3, Span, Span2, Span3, Wrapper } from './HomeElements'

const Home = () => {
  return (
    <Container>
        <HeaderSocials/>
        <Mail/>
        <Wrapper>
            <Intro>
                <h1>Hey, my name is</h1>
            </Intro>
            <Intro2>
                <h2>Okunowo Gbeminiyi.</h2>
            </Intro2>
            <Intro3>
                <h3>I build things for the web.</h3>
            </Intro3>
            <Desc>
                <span>I'm a <Span>Front-End web Developer</Span> specializing in building (and occasionally designing) exceptional <Span2>digital Websites</Span2> and <Span3>experiences</Span3>.</span>
            </Desc>
            <Button><a href="#contact">Let's Talk !</a></Button>
        </Wrapper>
    </Container>
  )
}

export default Home