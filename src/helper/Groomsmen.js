import React from 'react';
import '../style/Groomsmen.scss';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import azpic from '../images/groomsmen/AZ.png';
import victorpic from '../images/groomsmen/Victor.png';
import dillonpic from '../images/groomsmen/Dillon.png';
import alanpic from '../images/groomsmen/Alan.png';
import robertpic from '../images/groomsmen/Robert.png';
import aaronpic from '../images/groomsmen/aaron.png';
import { Image } from 'react-bootstrap';

const groomsmen = [
  {
    picture: robertpic,
    name: 'Robert Simpson',
    job: 'Groomsmen',
  },
  {
    picture: victorpic,
    name: 'Victor Buhl',
    job: 'Groomsmen',
  },
  {
    picture: alanpic,
    name: 'Alan Hamlett',
    job: 'Groomsmen',
  },
  {
    picture: azpic,
    name: 'AZ Zayan',
    job: 'Officiant',
  },
  {
    picture: aaronpic,
    name: 'Aaron Belcher',
    job: 'Groomsmen',
  },
  {
    picture: dillonpic,
    name: 'Dillon Manokoune',
    job: 'Groomsmen',
  },
];
const options = {
  items: 3,
  nav: 'true',
  loop: 'true',
  responsive: {
    0: { items: 1 },
    400: { items: 1 },
    600: { items: 2 },
    1000: { items: 3 },
  },
};

const Groomsmen = () => {
  return (
    <div className="container">
      <OwlCarousel className="owl-theme" margin={10} {...options}>
        {groomsmen.map(groomsman => (
          <div class="groomsparty">
            <Image src={groomsman.picture} circle bsClass="men img" />
            <div className="info">{groomsman.name}</div>
            <div className="description">{groomsman.job}</div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Groomsmen;
