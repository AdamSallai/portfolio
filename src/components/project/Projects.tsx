import React from 'react';
import { dataOfProjects, ProjectBlueprint } from "./Data";
import Project from './Project';

const Projects = () => {

  return (
    <div>
      {dataOfProjects.map((data: ProjectBlueprint) => <Project data={data}/>)}
    </div>
  )
}

export default Projects;
