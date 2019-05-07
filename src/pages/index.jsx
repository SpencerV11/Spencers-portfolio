import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, I'm Spencer Voorhees.
        </BigTitle>
        <Subtitle>I take complicated concepts and turn them into working solutions.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>PROJECTS</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Orenda Aesthetics"
            link="https://www.orendaaesthetics.com/#/"
            bg="linear-gradient(to right, #ffd4e5 0%, #cd950c 100%)"
          >
            This project is a website for my sister in law's buisness.
          </ProjectCard>
          <ProjectCard
            title="Group Project"
            link="https://www.behance.net/gallery/52915793/Harry-Potter"
            bg="linear-gradient(to right, #00cdcd 0%, #fcc129 100%)"
          >
            Have not completed yet.
          </ProjectCard>
          {/* <ProjectCard
            title="Tomb Raider"
            link="https://www.behance.net/gallery/43907099/Tomb-Raider"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Recreation of a Tomb Raider Wallpaper (Fan Art)
          </ProjectCard>
          <ProjectCard
            title="Eagle"
            link="https://www.behance.net/gallery/38068151/Eagle"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            A fantasy image manipulation relocating the habitat of wild animals.
          </ProjectCard> */}
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>ABOUT</Title>
        <AboutHero>
          <AboutSub>
            I have always wanted a career to push me to my limits. A career that would be hard but also exciting in
            a way that I could create web applications for customers.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          Outside of Web Development I like everything outdoors. I love to play sports and to learn new things. I thrive
          to learn new challenging things that I will once be able to overcome and make it a skill.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>CONTACT INFO</Title>
          <ContactText>
            Send me an <a href="mailto:plizNoSp4m@domain.tld">email</a> or text/call at (801)836-0956. You can also
             find me on other platforms:{' '}
            <a href="https://www.linkedin.com/in/spencer-voorhees/">LinkedIn</a> &{' '}
            <a href="https://www.instagram.com/sdvoorhees/">Instagram</a>
          </ContactText>
        </Inner>
      </Contact>
    </Parallax>
  </>
)

export default Index
