import React from 'react'
import styled from 'styled-components'
import LeftSide from './LeftSide';
import MainElement from './MainElement';
function Home() {
    return (
      <Section>
      <LeftSide />
      <MainElement />
      </Section>
    )
}

export default Home

const Section = styled.div`
display: flex;

`;
