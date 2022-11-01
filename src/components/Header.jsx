import React from 'react'
import StyledHeader from './styles/Header.styled'

const Header = ({ children }) => {
  return (
    <StyledHeader>      
    {children}
  </StyledHeader>

  )
}

export default Header