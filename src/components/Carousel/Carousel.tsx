import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import img1 from './../../assets/carousel/banner-attack_on_titan.jpg'
import img2 from './../../assets/carousel/banner-boku_no_hero.jpg'
import img3 from './../../assets/carousel/banner-death_note.jpg'
import img4 from './../../assets/carousel/banner-naruto.jpg'
import img5 from './../../assets/carousel/banner-one_piece.png'
import img6 from './../../assets/carousel/banner-tokyo_ghoul.jpg'

const CarouselImg: React.FC = () => (
  <>
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="Primeiro slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Segundo slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Terceiro slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={img4} alt="Quarto slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={img5} alt="Quinto slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={img6} alt="Sexto slide" />
      </Carousel.Item>
    </Carousel>
  </>
)

export default CarouselImg
