import styled from 'styled-components'

export const FooterBar = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #20b2aa;
  color: #663399;
`

export const BackToTop = styled.div`
  display: flex;
  justify-content: center;
  background-color: #167a75;
  font-size: 25px;
  padding: 16px;
`

export const FooterContent = styled.div`
  img {
    display: block;
    margin: 0 auto;
    padding: 24px;
  }

  h3 {
    display: flex;
    justify-content: center;
    padding: 16px 0;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
  justify-content: center;
`

export const LinkItem = styled.li`
  a {
    text-decoration: none;
    color: #663399;
  }

  span {
    padding: 0 16px;
  }
`
