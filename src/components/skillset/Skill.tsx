import React from 'react';
import { SkillsetBlueprint } from './SkillsetData';

const Skill:React.FC<{data: SkillsetBlueprint}> = ({data}) => {
  return (
    <div className="skill-card">
      <img src={data.image} alt=""/>
      <h1>{data.title}</h1>
      <p>{data.description.join(", ")}</p>
    </div>
  )
}

export default Skill;
