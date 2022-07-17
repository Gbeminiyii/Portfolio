import React, { useEffect } from 'react'
import { Header } from '../About/AboutElements'
import { motion } from 'framer-motion'
import { GoVerified } from 'react-icons/go'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import { Card, Cardheader, Container, Content, ContentCard, ContentHeader, Logo, Other, Skill, Wrapper } from './ServicessElements'

const Servicess = () => {

    const {ref, inView} = useInView()
    const animation = useAnimation();

    useEffect(() => {
        if(inView){
          animation.start({
              y:0,
              opacity: 1,
              transition: {
                  type: 'spring', duration: 2, bounce: 0.3
              }
          });
        }
        if(!inView){
          animation.start({
              y: '10vw',
              opacity: 0,
          })
        }
      });
  return (
    <Container as={motion.div} id='services'
    ref={ref}
    animate={animation}>
        <Wrapper>
            <Header>Services</Header>
            <Content>
                <ContentHeader>
                    <h3>My skills</h3>
                    <span>My experience</span>
                </ContentHeader>
                <ContentCard>
                    <Card>
                        <Cardheader>Frontend Development</Cardheader>
                        <Skill>
                            <div>
                                <Logo><GoVerified/></Logo>
                                <Other><p>HTML</p>
                                <span>Experienced</span>
                                </Other>
                            </div>
                            <div>
                                <Logo><GoVerified/></Logo>
                                <Other>
                                <p>CSS</p>
                                <span>Experienced</span>
                                </Other>
                            </div>
                            <div>
                                <Logo><GoVerified/></Logo>
                                <Other>
                                <p>Javascript</p>
                                <span>Intermediate</span>
                                </Other>
                            </div>
                            <div>
                                <Logo><GoVerified/></Logo>
                                <Other>
                                <p>Tailwind</p>
                                <span>Experienced</span>
                                </Other>
                            </div>
                            <div>
                                <Logo><GoVerified/></Logo>
                                <Other>
                                    <p>React</p>
                                    <span>Experienced</span>
                                </Other>
                            </div>
                            <div>
                                <Logo><GoVerified/></Logo>
                                <Other>
                                <p>BootStrap</p>
                                <span>Experienced</span>
                                </Other>
                            </div>
                        </Skill>
                    </Card>
                    <Card>
                    <Cardheader>Web Design</Cardheader>
                    <Skill>
                        <div>
                            <Logo><GoVerified/></Logo>
                            <Other>
                                <p>UI Design</p>
                                <span>Basic</span>
                            </Other>
                        </div>
                        <div>
                            <Logo><GoVerified/></Logo>
                            <Other>
                                <p>Logo Design</p>
                                <span>Experienced</span>
                            </Other>
                        </div>
                        <div>
                            <Logo><GoVerified/></Logo>
                            <Other>
                                <p>Graphic Design</p>
                                <span>Intermediate</span>
                            </Other>
                        </div>
                    </Skill>
                    </Card>
                </ContentCard>
            </Content>
        </Wrapper>
    </Container>
  )
}

export default Servicess