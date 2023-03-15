import React from 'react'

const ProjectList = (props) => {
  return (
    <div className='card'>
      <div className="top">
        <img src={props.img} alt="" height={200}/>
      </div>
      <div className="name">
        {props.name}
      </div>
    </div>
  )
}

export default ProjectList
