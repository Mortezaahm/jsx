import React from 'react'

function ProfileCard(props) {
    
    const {title, handle} = props;  //destructuring 
  return (
    <div>
        <div>Title is {title}</div>
        <div>Handle is {handle}</div>
    </div>
  )
}

export default ProfileCard
