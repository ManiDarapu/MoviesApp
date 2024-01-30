import {Component} from 'react'
import Slider from 'react-slick'
import './index.css'

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
}

class ReactSlick extends Component {
  render() {
    const {moviesList} = this.props

    return (
      <div className="main-container">
        <div className="slick-container">
          <Slider {...settings}>
            {moviesList.map(eachLogo => {
              const {id, backdropPath} = eachLogo
              return (
                <div className="slick-item" key={id}>
                  <img
                    className="logo-image"
                    src={backdropPath}
                    alt="backdropPath"
                  />
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    )
  }
}

export default ReactSlick
