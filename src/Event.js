import React, { Component } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import celebrate from './images/Celebrate.png';
import './Event.scss';

class Event extends Component {
  render() {
    return (
      <div class="event">
        <div className="container">
          <Row>
            <Col md={6}>
              <div className="left">
                <Image src={celebrate} rounded bsClass="celebrate img" />
              </div>
            </Col>
            <Col md={6}>
              <div className="right">
                <div className="title">Celebrate With Us</div>
                <p>
                  Imperdiet interdum donec eget metus auguen unc vel lorem
                  ispuet Ibu lum orci eget, viverra elit liquam erat volut pat
                  phas ellus ac sodales Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit uasi quidem minus id iprum omnis. Lorem ipsum
                  dolor Phas ellus ac sodales felis tiam.
                </p>
                <p>
                  Imperdiet interdum donec eget metus auguen unc vel lorem
                  ispuet Ibu lum orci eget, viverra elit liquam erat volut pat
                  phas ellus ac sodales Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit uasi quidem minus id iprum omnis. Lorem ipsum
                  dolor Phas ellus ac sodales felis tiam.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className="margin1">
                <div className="right">
                  <div className="title">Celebrate With Us</div>
                  <p>
                    Imperdiet interdum donec eget metus auguen unc vel lorem
                    ispuet Ibu lum orci eget, viverra elit liquam erat volut pat
                    phas ellus ac sodales Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit uasi quidem minus id iprum
                    omnis. Lorem ipsum dolor Phas ellus ac sodales felis tiam.
                  </p>
                  <p>
                    Imperdiet interdum donec eget metus auguen unc vel lorem
                    ispuet Ibu lum orci eget, viverra elit liquam erat volut pat
                    phas ellus ac sodales Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit uasi quidem minus id iprum
                    omnis. Lorem ipsum dolor Phas ellus ac sodales felis tiam.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="left">
                <Image src={celebrate} rounded bsClass="celebrate img" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div class="mapouter">
                <div class="gmap_canvas">
                  <iframe
                    width="600px"
                    height="450px"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=dallas%20palms&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                  />
                  <a href="https://www.embedgooglemap.net" />
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="margin1">
                <div className="right">
                  <div className="title">Ceremony</div>
                  <p>
                    Imperdiet interdum donec eget metus auguen unc vel lorem
                    ispuet Ibu lum orci eget, viverra elit liquam erat volut pat
                    phas ellus ac sodales Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit uasi quidem minus id iprum
                    omnis. Lorem ipsum dolor Phas ellus ac sodales felis tiam.
                  </p>
                  <p>
                    Imperdiet interdum donec eget metus auguen unc vel lorem
                    ispuet Ibu lum orci eget, viverra elit liquam erat volut pat
                    phas ellus ac sodales Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit uasi quidem minus id iprum
                    omnis. Lorem ipsum dolor Phas ellus ac sodales felis tiam.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className="margin1">
                <div className="right">
                  <div className="title">Reception</div>
                  <p>
                    Imperdiet interdum donec eget metus auguen unc vel lorem
                    ispuet Ibu lum orci eget, viverra elit liquam erat volut pat
                    phas ellus ac sodales Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit uasi quidem minus id iprum
                    omnis. Lorem ipsum dolor Phas ellus ac sodales felis tiam.
                  </p>
                  <p>
                    Imperdiet interdum donec eget metus auguen unc vel lorem
                    ispuet Ibu lum orci eget, viverra elit liquam erat volut pat
                    phas ellus ac sodales Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit uasi quidem minus id iprum
                    omnis. Lorem ipsum dolor Phas ellus ac sodales felis tiam.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div class="mapouter">
                <div class="gmap_canvas">
                  <iframe
                    width="600"
                    height="450"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=Kirin%20Court&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                  />
                  <a href="https://www.embedgooglemap.net" />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Event;