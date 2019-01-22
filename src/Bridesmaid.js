import React, { Component } from 'react';
import './Bridesmaid.scss';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import aninapic from './images/anina.png';
import neenapic from './images/Neena.png';
import lisapic from './images/Lisa.png';
import jennypic from './images/Jenny.png';
import ashleypic from './images/Ashl.png';
import { Image } from 'react-bootstrap';

const bridesmaids = [
  {
    picture: jennypic,
    name: 'Jenny Manokoune',
    job: 'Maid of Honor',
  },
  {
    picture: aninapic,
    name: 'Anina Rasaphangthong',
    job: 'Bridesmaid',
  },
  {
    picture: neenapic,
    name: 'Neena Keoonla',
    job: 'Matron of Honor',
  },
  {
    picture: lisapic,
    name: 'Lisa Keoonla',
    job: 'Bridesmaid',
  },
  {
    picture: ashleypic,
    name: 'Ashley Ngaoluangrath',
    job: 'Bridesmaid',
  },
];
const options = {
  items: 3,
  nav: 'true',
  loop: 'true',
  responsive: {
    0: { items: 1 },
    600: { items: 2 },
    900: { items: 3 },
  },
};

class Bridesmaid extends Component {
  render() {
    return (
      <div className="container">
        <OwlCarousel className="owl-theme" margin={10} {...options}>
          {bridesmaids.map(bridesmaid => (
            <div class="bridalparty">
              <Image src={bridesmaid.picture} circle bsClass="maid img" />
              <div className="info">{bridesmaid.name}</div>
              <div className="description">{bridesmaid.job}</div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    );
  }
}

export default Bridesmaid;