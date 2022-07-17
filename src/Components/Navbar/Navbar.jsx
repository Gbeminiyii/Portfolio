import React, { useEffect, useState } from 'react'
import CV from '../Gbeminiyi_Okunowo_CV (2).pdf'
import { FiMenu, FiX } from 'react-icons/fi'
import { Button, Container, Item, Itemm, Itemmm, Itemmmm, Logo, MenuItems, Mobile, Nav, NavMenu, Wrapper } from './NavbarElements'

const Navbar = ( { Show } ) => {
  
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(
      window.matchMedia('(max-width:750px)').matches
  );

  useEffect(()=>{
      window.addEventListener('resize', () => {
          setIsMobile(window.matchMedia('(max-width: 750px)').matches)
      });
  }, []);

  const openNav = () => {
      setIsNavOpen(true)
  }
  const closeNav = () => {
      setIsNavOpen(false)
  }

  return (

    <Container>
        <Wrapper Mobile={isMobile}>
            <Logo><a href="/">GB.</a></Logo>
            <NavMenu>
                <MenuItems>
                    <Item><a href='#about'>About</a></Item>
                    <Itemm><a href='#services'>Services</a></Itemm>
                    <Itemmm><a href='#portfolio'>Portfolio</a></Itemmm>
                    <Itemmmm><a href='#contact'>Contact</a></Itemmmm>
                </MenuItems>
                <Button><a download href={CV}>Resume</a></Button>
            </NavMenu>
        </Wrapper>
      <Mobile Mobile={isMobile}>
        <Logo><a href="/">GB.</a></Logo>
        <Button onClick={openNav}><FiMenu/></Button>
        <Nav Mobile={isMobile} Open={isNavOpen} >
            <div onClick={closeNav}>
              <FiX/>
            </div>
            <ul>
              <li><a href='#about'>About</a></li>
              <li><a href='#services'>Services</a></li>
              <li><a href='#portfolio'>Portfolio</a></li>
              <li><a href='#contact'>Contact</a></li>
            </ul>
            <button><a download href={CV}>Resume</a></button>
        </Nav>
      </Mobile>
    </Container>
  )
}

export default Navbar