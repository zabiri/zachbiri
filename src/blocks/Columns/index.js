import React from 'react'
import styled from 'styled-components'
const Columns = (props) => {
  const ContentContainer = styled.main`
  background-color: ${props => props.theme.colorBackgroundPage};
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 50% 1fr;
  height: ${props => props.theme.contentHeight};
  margin: ${props => props.theme.contentMargin};`
  return (
    <ContentContainer>
        {props.copy}
        {props.figure}
      </ContentContainer>
  )
}

export default Columns
