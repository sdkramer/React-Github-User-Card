import React from 'react';
import axios from 'axios';
import './App.css';
import UserCard from './Components/UserCard';
import Followers from './Components/Followers';

class App extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    user: {},
    followers: []
  }
  
}

componentDidMount () {
  axios
  .get("https://api.github.com/users/sdkramer")
  .then (res => {
    // console.log(res.data);
    this.setState({ user: res.data})
  })

  axios
  .get('https://api.github.com/users/sdkramer/followers')
  .then (res => {
    console.log(res.data);
    this.setState({
      followers: res.data
    })
  })
}

render() {
  return (
    <div className="ui container">
<h1>Sean Kramer on Github</h1>
<UserCard user={this.state.user}/>
<h2 class="ui center aligned icon header">
  <i class="circular users icon"></i>
  Friends
</h2>
<Followers followers={this.state.followers}/>
    </div>
  );
}


}

export default App;
