import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import { motion } from 'framer-motion'
import work1 from '../Asset/work-1.png'
import work2 from '../Asset/work-2.png'
import work3 from '../Asset/work-3.png'
import { Button, Button2, Buttons, Card, Container, Header, PortfolioCard, Wrapper } from './PortfolioElements'

const Portfolio = () => {

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
    })
    

  return (
    <Container as={motion.div}
    ref={ref}
    animate={animation}
    id='portfolio'>
        <Wrapper>
            <Header>Portfolio</Header>
            <PortfolioCard>
                <Card>
                    <img src={work2} alt='JustShop' />
                    <span>JustShop. is an Ecommerce site that was created by me for buyers to come and shop for goods and services</span>
                    <Buttons>
                    <Button><a target='_blank' rel='noreferrer' href="https://github.com/Gbeminiyii/E-Commerce-app">Github</a></Button>
                    <Button2><a target='_blank' rel='noreferrer' href="https://justshopp.netlify.app/">Live Demo</a></Button2>
                    </Buttons>
                </Card>
                <Card>
                    <img src={work1} alt="Photography" />
                    <span>Photography is an online website to advertise a Photography company to help with your Photography work</span>
                    <Buttons>
                    <Button><a target='_blank' rel='noreferrer' href="https://github.com/Gbeminiyii/Photography">Github</a></Button>
                    <Button2><a target='_blank' rel='noreferrer' href="https://photography-des.netlify.app/">Live Demo</a></Button2>
                    </Buttons>
                </Card>
                <Card>
                    <img src={work3} alt="Pizza Nest" />
                    <span>Pizza Nest is your one stop shop to order Pizza immediately and get it delivered to you in the blink of an eye</span>
                    <Buttons>
                    <Button><a target='_blank' rel='noreferrer' href="https://github.com/Gbeminiyii/E-commerce-restaurant-design">Github</a></Button>
                    <Button2><a target='_blank' rel='noreferrer' href="https://pizza-nest.netlify.app/">Live Demo</a></Button2>
                    </Buttons>
                </Card>
            </PortfolioCard>
        </Wrapper>
    </Container>
  )
}

export default Portfolio