import React from 'react'
import StyledPageNav from './styles/PageNav.styled'

const PageNav = ({ children }) => {
  return (
    <StyledPageNav>
        {children}
    </StyledPageNav>
  )
}

export default PageNav