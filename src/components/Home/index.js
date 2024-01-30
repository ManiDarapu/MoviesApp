import Header from '../Header'
import Footer from '../Footer'
import Trending from '../Trending'
import Originals from '../Originals'
import TopRated from '../TopRated'
import './index.css'

const Home = () => (
  <div className="homeDiv1">
    <div className="homeDiv2">
      <Header />
      <div className="superManDiv">
        <h1 className="h1">Super Man</h1>
        <p className="superManPara">
          Superman is a fictional superhero who first appeared in American comic
          books published by DC Comics.
        </p>
        <button className="homeBtn" type="button">
          Play
        </button>
      </div>
    </div>
    <div className="homeDiv3">
      <h1 className="trendingH1">Trending Now</h1>
      <Trending />
      <h1 className="trendingH1">Top Rated</h1>
      <TopRated />
      <h1 className="trendingH1">Originals</h1>
      <Originals />
      <Footer />
    </div>
  </div>
)

export default Home
