import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink target="_blank" href="https://twitter.com/Bestswap_com">
        Twitter
      </StyledLink>
      <StyledLink target="_blank" href="https://medium.com/@Bestswap_com">
        Medium
      </StyledLink>
      <StyledLink target="_blank" href="#">
        Github
      </StyledLink>
      <StyledLink target="_blank" href="https://discord.com/invite/Tztg95k">
        Discord
      </StyledLink>
      <StyledLink target="_blank" href="https://t.me/BestswapClub">
        Telegram
      </StyledLink>
      {/* <StyledLink target="_blank" href="https://t.me/bestswap_com">
        Announcement
      </StyledLink> */}
      <StyledLink target="_blank" href="https://open.kakao.com/o/gXT7bBlc">
        Kakao
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  @media(max-width: 540px) {
    justify-content: flex-start;
  }
`

const StyledLink = styled.a`
  color: #F6C92A;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  line-height: 34px;
  &:hover {
    color: #F6C92A;
  }
  @media(max-width: 540px) {
    padding-right: 16px;
  }
`

export default Nav
