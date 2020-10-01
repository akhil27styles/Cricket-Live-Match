import React,{useState} from 'react'
import './Nav.css'
import Carousel from 'react-bootstrap/Carousel'
const Navbar = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 imgnav"
          src="crt.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>King Kholi</h3>
          <p>T20 World Cup Coming soon.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgnav"
          src="ipl2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3> </h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgnav"
          src="back.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Dream11 IPL 2020</h3>
          <p>
          BCCI ANNOUNCES SCHEDULE FOR DREAM11 IPL 2020
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
       

export default Navbar
