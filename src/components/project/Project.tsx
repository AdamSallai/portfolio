import React from 'react';
import { ProjectBlueprint } from "./Data";

const Project: React.FunctionComponent<{data: ProjectBlueprint}> = ({data}) => {
  return (
    <div className="project-card">
      <img className="project-image" src={data.pictureURL} alt="" />
      <div className="project-textbox">
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <div>
          { data.github.map(link => <a href={link} />) }
        </div>
        <div>
          { data.technologies.map(technology => <p>{technology}, </p>) }
        </div>
      </div>
    </div>
  )
}

export default Project
