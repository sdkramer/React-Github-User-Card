import React from 'react';

const Followers = (props) => {

  
console.log(props.followers);

const followersInfo = props.followers.map((follower) => {
  return <div key={follower.id} className='ui card'>
    <div className='image'>
    <img src={follower.avatar_url} />
    </div>
    <div className='content'>
    <a className='header'>{follower.login}</a>
    <div className='link'>
    Github: <a href={follower.html_url}>link to github</a>
    </div>
    
    </div>
    
  
    </div>
})

return <div>{followersInfo}</div>


  //   return (
    

  //     <div>Followers</div>

  // //       {fs.map(follower => (
  // //         <div className='followers-container'>
  // // <img src={follower.avatar_url} alt='follower photo'/>
  // // <h3>{follower.login}</h3>
  // // <p>Github: <a href={follower.html_url}>link to github</a></p>
  // // <div>
  // //       ))}
    
    
  //   );
  }


export default Followers;