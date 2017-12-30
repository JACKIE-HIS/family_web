import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';


class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="I love my family" subtitle="I am happy with you always!" />
        <div className="container">
          <h2>To my love, Youngsun ~~</h2>
          <p>
            동원엄마~~  당신을 만난지도 벌써 20년이 다 되어갑니다.  뭐하나 잘해준것도 없이.... 세월이 야속하네요. 풍족하지는 못하지만, 두 애들이 많이 큰것에 위안 삼아야겠습니다. 나이가 들수록 생각도 많이 바뀌어감을 느낍니다. 젊음의 패기는 줄어든 대신, 세월에 순응함을 배워가는것 같습니다.  술과 담배도 끊었습니다. 종교도 생기고 말입니다. 앞으로 좋은일만 생기도록 열심히 노력하며 삽시다. 사랑합니다.  노력합시다. 오늘보다 내일이 더 행복할것이라고....17년도 마지막날을 마무리하며.
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home
