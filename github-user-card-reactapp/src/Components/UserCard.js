import React from 'react';

class UserCard extends React.Component {
 constructor(props) {
   super(props)
   console.log(props);
   
 }

  render() {
    return (
      <div className='usercard-container'>
        <img src={this.props.user.avatar_url} alt='my photo'/>
        <div>
        <h3>{this.props.user.name}</h3>
    <p>{this.props.user.bio}</p>
    <p>Location: {this.props.user.location}</p>
    <p>Github: <a href={this.props.user.html_url}>link to github</a></p>
    <p></p>
        </div>
    

      </div>
    )
  }
}

export default UserCard;