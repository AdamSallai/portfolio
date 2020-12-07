import React from 'react';
import Skill from './Skill';
import { skillsetData } from './SkillsetData';


const Skillset = () => {
  return (
    <div>
      {
        skillsetData.map(data => <Skill data={data} />)
      }
    </div>
  )
}

export default Skillset
