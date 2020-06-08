import React from 'react';

const Followers = (props) => {
  // constructor(props) {
  //   super(props);
   
    
  // }
  
 
    

const fs  = props.followers;
console.log(fs[2]);
    return (
    

      <div>Followers</div>

  //       {fs.map(follower => (
  //         <div className='followers-container'>
  // <img src={follower.avatar_url} alt='follower photo'/>
  // <h3>{follower.login}</h3>
  // <p>Github: <a href={follower.html_url}>link to github</a></p>
  // <div>
  //       ))}
    
    
    );
  }


export default Followers;