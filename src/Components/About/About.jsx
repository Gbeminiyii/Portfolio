import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Container, Content, Header, Image, Text, Wrapper } from './AboutElements'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import img from '../Asset/cover.jpeg'

const About = () => {
    const {ref, inView} = useInView()
    const animation = useAnimation();
    const animatetext = useAnimation()
    const animateimage = useAnimation()

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
    useEffect(() => {
      if(inView){
        animatetext.start({
            x:0,
            opacity: 1,
            transition: {
                type: 'spring', duration: 3, bounce: 0
            }
        });
      }
      if(!inView){
        animatetext.start({
            x: '-100vw',
            opacity: 0
        })
      }
    });
    useEffect(() => {
      if(inView){
        animateimage.start({
            x:0,
            transition: {
                type: 'spring', duration: 4, bounce: 0
            }
        });
      }
      if(!inView){
        animateimage.start({
            x: '100vw'
        })
      }
    });
    

  return (
    <Container as={motion.div} 
    ref={ref}
    animate={animation}
    id='about'>
        <Wrapper>
            <Header>About Me</Header>
            <Content>
                <Text as={motion.div}
                ref={ref}
                animate={animatetext}
                >
                    <p>
                    Hello! My name is Gbeminiyi and I'm a Front-End Web developer, building things generally excites me as well as solving problems and making a notable impact in the world around me.
                    My passion and curiosity for the way things happen to appear on the web and accessible to thousands of people over the world fascinates me, which peaked my interest in HTML and CSS.
                    </p>
                    <span>
                    This in turn motivated me into learning Javascript, React and made into the Front-End web developer I am today.
                    I write clean and reusable code and I'm also willing to learn every single day from everyone around me and everywhere I find myself. 
                    </span>
                </Text>
                <Image as={motion.div}
                ref={ref}
                animate={animateimage}
                ><img src={img} alt="" /></Image>
            </Content>   
        </Wrapper>
    </Container>
  )
}

export default About