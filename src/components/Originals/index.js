import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactSlick from '../ReactSlick'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN-PROGRESS',
}

class Originals extends Component {
  state = {apiStatus: apiStatusConstants.initial, originalsList: []}

  componentDidMount() {
    this.getOriginals()
  }

  getOriginals = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/movies-app/originals'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.results.map(each => ({
        backdropPath: each.backdrop_path,
        id: each.id,
        overview: each.overview,
        posterPath: each.poster_path,
        title: each.title,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        originalsList: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderFailureView = () => (
    <div>
      <p className="failureH1">Something went wrong. Please try again</p>
      <button type="button" onClick={this.getOriginals}>
        Try Again
      </button>
    </div>
  )

  renderLoadingView = () => (
    <div data-testid="loader">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="54"
        height="54"
        viewBox="0 0 54 54"
        fill="none"
        className="inProgress"
      >
        <path
          d="M27.0003 0.333374V7.00004C38.046 7.00004 47.0003 15.9543 47.0003 27C47.0003 38.0457 38.046 47 27.0003 47C15.9546 47 7.00033 38.0457 7.00033 27C7.00033 23.5344 7.88004 20.2043 9.5328 17.2505L3.71498 13.9951C1.50915 17.9373 0.333664 22.3872 0.333664 27C0.333664 41.7276 12.2727 53.6667 27.0003 53.6667C41.7279 53.6667 53.667 41.7276 53.667 27C53.667 12.2724 41.7279 0.333374 27.0003 0.333374Z"
          fill="#D81F26"
        />
      </svg>
    </div>
  )

  render() {
    const {apiStatus, originalsList} = this.state
    switch (apiStatus) {
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.success:
        return <ReactSlick moviesList={originalsList} />
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }
}

export default Originals
