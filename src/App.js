import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'

class App extends Component {
  state = {
    list: [],
    flag: false,
    websitename: '',
    username: '',
    password: '',
    searchInput: '',
  }

  flagChange = () => {
    this.setState(prevState => ({flag: !prevState.flag}))
  }

  websiteChange = event => {
    this.setState({websitename: event.target.value})
  }

  usernameChange = event => {
    this.setState({username: event.target.value})
  }

  passwordChange = event => {
    this.setState({password: event.target.value})
  }

  updateList = event => {
    this.setState({searchInput: event.target.value})
  }

  Item = props => {
    const {details, flag} = props
    const {id, websiteName, userName, Password} = details
    console.log(websiteName, userName, Password)
    const deleteItem = () => {
      this.setState(prevState => ({
        list: prevState.list.filter(each => each.id !== id),
      }))
    }
    return (
      <li>
        <div className="container10">
          <div>
            <h1 className="headingdiv">{websiteName[0]}</h1>
          </div>
          <div>
            <p>{websiteName}</p>
            <p>{userName}</p>
            {flag ? (
              <p>{Password}</p>
            ) : (
              <img
                alt="stars"
                className="passwordImage"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              />
            )}
          </div>
          <div>
            <button onClick={deleteItem} className="button22" type="button">
              <img
                alt="delete"
                className="deleteImage"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
              />
            </button>
          </div>
        </div>
      </li>
    )
  }

  submit = event => {
    event.preventDefault()
    console.log('bheem')
    const {websitename, username, password} = this.state
    const newList = {
      id: uuidv4(),
      websiteName: websitename,
      userName: username,
      Password: password,
    }
    this.setState(prevState => ({
      list: [...prevState.list, newList],
      websitename: '',
      username: '',
      password: '',
    }))
  }

  render() {
    const {
      list,
      flag,
      searchInput,
      password,
      username,
      websitename,
    } = this.state
    console.log(flag)
    console.log(list)
    const finalList = list.filter(each =>
      each.websiteName.toUpperCase().includes(searchInput.toUpperCase()),
    )

    return (
      <div className="container1">
        <img
          className="image1"
          alt="app logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
        />
        <div className="container2">
          <div className="container31">
            <h1 className="heading1">Add New Password</h1>
            <form name="form" className="formContainer" onSubmit={this.submit}>
              <div className="container4">
                <img
                  className="websiteImg"
                  alt="website"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                />
                <input
                  className="inputEl"
                  type="text"
                  placeholder="Enter Website"
                  onChange={this.websiteChange}
                  value={websitename}
                />
              </div>
              <div className="container4">
                <img
                  className="websiteImg"
                  alt="username"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                />
                <input
                  className="inputEl"
                  type="text"
                  placeholder="Enter Username"
                  onChange={this.usernameChange}
                  value={username}
                />
              </div>
              <div className="container4">
                <img
                  className="websiteImg"
                  alt="password"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                />
                <input
                  className="inputEl"
                  type="password"
                  placeholder="Enter Password"
                  onChange={this.passwordChange}
                  value={password}
                />
              </div>
              <button data-testid="delete" type="submit" className="button1">
                Add
              </button>
            </form>
          </div>
          <div className="container32">
            <img
              className="image2"
              alt="password manager"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            />
          </div>
        </div>
        <div className="container5">
          <div className="container6">
            <div className="container71">
              <h1 className="heading2">Your Passwords</h1>
              <p className="para1">{finalList.length}</p>
            </div>
            <div className="container72">
              <img
                className="image3"
                alt="search"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              />
              <input
                onChange={this.updateList}
                className="inputEl2"
                type="search"
              />
            </div>
          </div>
          <hr />
          <div className="container8">
            <input id="bheem" onChange={this.flagChange} type="checkbox" />
            <label htmlFor="bheem">Show Passwords</label>
          </div>
          {finalList.length !== 0 ? (
            <ul className="listContainer">
              {finalList.map(each => (
                <this.Item flag={flag} key={each.id} details={each} />
              ))}
            </ul>
          ) : (
            <div className="container9">
              <img
                className="image5"
                alt="no passwords"
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
              />
              <p>No Passwords</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App
