import React from 'react';
import { ProjectBlueprint } from "./Data";

const Project: React.FunctionComponent<{data: ProjectBlueprint}> = ({data}) => {
  return (
    <div className="project-card" data-id={data.id}>
      <img className="project-image" src={data.pictureURL} alt="" />
      <div className="project-textbox">
        <h1>{data.title}</h1>
        <br/>
        <p>{data.description}</p>
        <div className="project-box">
          Github:<br />
          { data.github.map(link => <a key={link} href={link}>{link} </a>) }
        </div>
        <div className="project-box">
          Technologies:<br />
          { data.technologies.join(', ') }
        </div>
      </div>
    </div>
  )
}

export default Project
