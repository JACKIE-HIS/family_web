import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';


class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="Happy new year" subtitle="I'm proud of you, my sun." />
        <div className="container">
          <h2>To my love, Dongwon ~~</h2>
            <p>
              우리 큰아들 미안하구나. 도움도 못주면서 공부 잘하라고 재촉만 해대니 말이다. 너도 이제 성인이다. 너의 일은 스스로 판단하며 슬기롭게 행동하거라. 18년도는 너의 인생에서 제일 중요한 시기다. 좋은 결과가 나오도록 최선을 다하거라. 흐르는 물에는 발을 두번 담글수 없는법이다. 시간의 중요함을 항상 인식하며 살도록 하거라. 모든 만인이 평등하게 소유한 것 또한 시간이다. 어떻게 관리하느냐에 따라서 승패가 좌우된다. 명심하거라. 자고로 돈을 낭비한자는 용서할수 있어도 시간낭비한자는 용서할수 없다. 명심하거라. 금으로 시간을 만들지는 못하지만 시간으로 금을 만들수 있다.          파이팅 ~~!!
            </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About
