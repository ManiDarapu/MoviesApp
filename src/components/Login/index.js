import {Component} from 'react'
import './index.css'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

class Login extends Component {
  state = {username: '', password: '', showErrorMsg: false, errorMsg: ''}

  updateUsername = event => {
    this.setState({username: event.target.value})
  }

  updatePassword = event => {
    this.setState({password: event.target.value})
  }

  onSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
    const {username, password} = this.state
    localStorage.setItem('username', username)
    localStorage.setItem('password', password)
  }

  onFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccess(data.jwt_token)
    } else {
      this.onFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, showErrorMsg, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="div1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="180"
          height="52"
          viewBox="0 0 180 52"
          fill="none"
          className="movies"
        >
          <path
            d="M23.0897 0.567508H34.5272C34.5272 16.851 34.515 33.1239 34.4906 49.3864C31.3513 49.5649 29.8235 49.6646 26.7156 49.8693L26.7417 14.494C24.8268 26.4135 22.9257 38.3348 21.0386 50.2578C17.9307 50.4782 16.382 50.599 13.2741 50.8457C11.2126 39.0592 9.17552 27.2569 7.16287 15.4389C7.16287 27.4074 7.16287 39.3794 7.16287 51.3549C4.29563 51.6016 2.86724 51.7276 0 52.0005V0.557007H11.4376C13.4363 12.3855 15.4489 24.2105 17.4755 36.0321C19.3242 24.214 21.1956 12.3925 23.0897 0.567508Z"
            fill="#E50014"
          />
          <path
            d="M46.033 3.1706C48.1782 1.07086 51.2687 0.0209961 55.3044 0.0209961C59.3437 0.0209961 62.4306 1.07086 64.5758 3.1706C66.721 5.27034 67.7832 8.18896 67.7832 11.9895V36.7034C67.7832 40.5039 66.7089 43.4698 64.5602 45.601C62.4115 47.7322 59.3192 48.8731 55.2835 49.0236C51.2442 49.1706 48.152 48.2572 46.012 46.2362C43.8721 44.2152 42.7995 41.2598 42.8047 37.3911C42.8047 28.9921 42.8047 20.5932 42.8047 12.1942C42.8117 8.30621 43.8878 5.29833 46.033 3.1706ZM55.2782 42.1417C58.1193 42.0525 59.5425 40.4462 59.5425 37.3071V11.5275C59.5425 8.37794 58.1228 6.81539 55.2835 6.83988C52.4441 6.86438 51.0228 8.45144 51.0193 11.601V37.5485C51.0018 40.7051 52.4215 42.2362 55.2782 42.1417Z"
            fill="#E50014"
          />
          <path
            d="M94.6974 0.54126H102.268C99.5825 16.2893 96.8931 32.0478 94.2003 47.8168C89.2925 47.8168 86.8386 47.8168 81.9309 47.8431C79.238 32.0951 76.5487 16.3295 73.8628 0.546514H82.161L88.4397 39.1029C90.5256 26.249 92.6115 13.3951 94.6974 0.54126Z"
            fill="#E50014"
          />
          <path
            d="M117.274 0.546631C117.274 16.4311 117.274 32.3139 117.274 48.1949C113.983 48.1004 112.335 48.0637 109.044 47.9954C109.044 32.1809 109.044 16.3646 109.044 0.546631H117.274Z"
            fill="#E50014"
          />
          <path
            d="M145.769 21.1555C145.769 23.9482 145.769 25.355 145.769 28.1319C141.253 27.9849 138.998 27.9167 134.483 27.8012C134.483 33.4548 134.483 36.2841 134.483 41.9377C140.165 42.1634 143.006 42.2946 148.683 42.5939V49.5965C141.211 49.166 133.736 48.7986 126.258 48.4941C126.258 32.5081 126.246 16.5274 126.221 0.55188H148.646C148.646 3.35503 148.646 4.75136 148.646 7.55975C142.969 7.50726 140.128 7.48101 134.446 7.43901V20.8931C138.998 20.9928 141.253 21.0401 145.769 21.1555Z"
            fill="#E50014"
          />
          <path
            d="M158.776 3.2336C160.816 1.08662 163.83 0 167.822 0C171.814 0 174.823 1.09711 176.863 3.32808C178.904 5.55905 179.93 8.7664 179.93 12.9291V14.5459L172.16 14.3517V12.252C172.16 10.5092 171.809 9.23884 171.113 8.43044C170.722 8.01423 170.245 7.68869 169.716 7.47653C169.186 7.26437 168.617 7.17072 168.047 7.2021C167.483 7.15563 166.916 7.23458 166.386 7.43329C165.856 7.63201 165.377 7.9456 164.981 8.3517C164.284 9.1286 163.935 10.3744 163.935 12.0892C163.903 14.0848 164.52 16.0364 165.693 17.6483C167.272 19.6672 169.036 21.5336 170.962 23.2231C172.624 24.7332 174.197 26.3405 175.671 28.0367C176.935 29.5489 177.966 31.2422 178.731 33.0604C179.603 35.154 180.034 37.4058 179.998 39.6745C179.998 43.8373 178.951 46.9554 176.858 48.9921C174.765 51.0288 171.731 51.853 167.754 51.5275C163.778 51.2021 160.733 49.8897 158.64 47.5958C156.547 45.3018 155.5 42.1679 155.5 38.147V35.1233C158.608 35.2756 160.162 35.3543 163.27 35.517V39.0918C163.27 42.3307 164.693 44.042 167.529 44.2414C170.365 44.4409 171.783 42.9081 171.783 39.622C171.813 37.5911 171.197 35.6034 170.025 33.9475C168.468 31.8868 166.705 29.9923 164.761 28.294C163.113 26.8005 161.541 25.2237 160.052 23.5695C158.796 22.1282 157.762 20.5055 156.986 18.7559C156.115 16.7727 155.681 14.6238 155.715 12.4567C155.701 8.4427 156.721 5.36833 158.776 3.2336Z"
            fill="#E50014"
          />
        </svg>
        <form className="form" onSubmit={this.submitForm}>
          <h1>Login</h1>
          <label htmlFor="username" className="label">
            USERNAME
          </label>
          <input
            className="input"
            id="username"
            type="text"
            placeholder="UserName"
            value={username}
            onChange={this.updateUsername}
          />
          <label htmlFor="password" className="label">
            PASSWORD
          </label>
          <input
            className="input"
            id="password"
            type="password"
            placeholder="PassWord"
            value={password}
            onChange={this.updatePassword}
          />
          {showErrorMsg && <p className="p">*{errorMsg}</p>}
          <button type="submit" className="btn">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default Login
