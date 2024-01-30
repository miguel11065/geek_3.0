import { HeaderBar, HeaderNavigation, HeaderSearch } from './styles'
import logo from './../../assets/logo.png'
import { CiSearch } from 'react-icons/ci'
import { FaHeart } from 'react-icons/fa6'
import { FaShoppingCart } from 'react-icons/fa'

const Header = () => (
  <>
    <HeaderBar>
      <a href="/">
        <img src={logo} alt="" />
      </a>

      <HeaderSearch>
        <input type="text" />
        <button>
          <CiSearch />
        </button>
      </HeaderSearch>

      <div className="fav-cart">
        <a href="/">
          <FaHeart />
        </a>
        <a href="/">
          <FaShoppingCart />
        </a>
      </div>
    </HeaderBar>
    <HeaderNavigation>
      <div className="container">
        <nav>
          <ul>
            <li>
              <a href="#">Novidades</a>
            </li>
            <li>
              <a href="#">Acessórios</a>
            </li>
            <li>
              <a href="#">Roupas</a>
            </li>
            <li>
              <a href="#">Mangas</a>
            </li>
            <li>
              <a href="#">Colecionáveis</a>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderNavigation>
  </>
)

export default Header
