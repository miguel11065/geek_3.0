import { FaArrowCircleUp } from 'react-icons/fa'
import logo from './../../assets/logo.png'
import { BackToTop, FooterBar, FooterContent, LinkItem, Links } from './styles'

const Footer = () => (
  <>
    <FooterBar>
      <BackToTop>
        <a href="#">
          <FaArrowCircleUp />
        </a>
      </BackToTop>
      <FooterContent>
        <img src={logo} alt="" />
        <Links>
          <LinkItem>
            <a href="#">Condições de uso</a>
            <span>|</span>
          </LinkItem>
          <LinkItem>
            <a href="#">Política de privacidade</a>
            <span>|</span>
          </LinkItem>
          <LinkItem>
            <a href="#">Cookies</a>
          </LinkItem>
        </Links>
        <h3>© 2023 GeekStore.com, Inc. ou suas afiliadas</h3>
      </FooterContent>
    </FooterBar>
  </>
)

export default Footer
