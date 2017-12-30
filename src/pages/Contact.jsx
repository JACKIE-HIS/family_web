import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';


class Contact extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="Time is gold" subtitle="My second sun, obey your mother" />
        <div className="container">
          <h2>To my love, Dongjin ~~</h2>
            <p>
              동진아 !!! 시험점수 잘 받아서 아빠 기분이 좋구나. 너도 기분 좋지? 초등학교 잘 마무리해줘서 고맙다. 이젠 어였한 중학생이다. 더이상 어린이가 아니란 말이다. 엄마말씀 잘듣고 공부잘하는 중학생 동진이를 기대해본다. 항상 건강하고 씩씩한 동진이가 되어라. 그러면 아빠는 더 바랄것이 없다.  사랑한다 둘째아들... 파이팅~~!!   
            </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact
