import React from 'react';

class UserCard extends React.Component {
//  constructor(props) {
//    super(props)
//   //  console.log(props);
   
//  }

  render() {
    return (
      <div className='ui card'>
        <div className='image'>
        <img src={this.props.user.avatar_url} alt='my photo'/>
        </div>
       
        <div className='content'>
        <a className='header'>{this.props.user.name}</a>
        <div className='meta'>
        <span>{this.props.user.bio}</span>
        </div>
        <div className='location'>
        Location: {this.props.user.location}
        </div>
        <div className='link'>
        Github: <a href={this.props.user.html_url}>link to github</a>
        </div>
        </div>
    

      </div>
    )
  }
}

export default UserCard;