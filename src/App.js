import './App.css';
import Header from './Components/Header.js'
import Login from './Components/Login.js'
import Dashboard from './Components/Dashboard.js'
import { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usernameText : '',
      passwordText : '',
      loggedIn : false,
      onlineStatus : true,
      volume : 30,
      soundQuality: 2
    }

  }

  function = () => {}

  onlineStatusHandler = (e) => {
    this.setState({onlineStatus : e.target.checked})
    console.log(this.state.onlineStatus);
  }

  volumeChanger = (e, value) => {
    this.setState({volume : value})
    console.log(this.state.volume)
  }

  qualityHandler = (e) => {
    this.setState({soundQuality : e.target.value})
  }

  changeHandler = (e, type) => {
    e.preventDefault()
    e = e.target.value
    if (type == 'username') {
      this.setState({usernameText : e})
    } else if (type == 'password') {
      this.setState({passwordText : e})
    }
  }

  submitHandler = (e) => {
    e.preventDefault()
   this.state.usernameText.length > 0 && this.state.passwordText.length > 0 ? this.setState({loggedIn : true}) : console.log('This username/password was not found in our database');
    

  }

  render() {

    return (
      this.state.loggedIn ? 
        <div className="App">
          <Header/>
            {console.log(this.state.onlineStatus)}
          <Dashboard checkedState={this.state.onlineStatus} onlineStatusHandler={this.onlineStatusHandler} volumeChanger={this.volumeChanger} volume={this.state.volume} qualityHandler={this.qualityHandler} quality={this.state.soundQuality}/>
        </div> :
        <div className="App">
          <Header/>
          <Login  changeHandler={this.changeHandler} submitHandler={this.submitHandler}/>
        </div>
      
    )

  }
  
}

export default App;
