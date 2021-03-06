import React from 'react';
import { dataOfProjects, ProjectBlueprint } from "./ProjectData";
import Project from './Project';

const Projects = () => {

  return (
    <div>
      {dataOfProjects.map((data: ProjectBlueprint) => <Project key={data.id} data={data}/>)}
    </div>
  )
}

export default Projects;
