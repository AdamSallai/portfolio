import React from 'react';
import Skill from './Skill';
import { skillsetData } from './SkillsetData';


const Skillset = () => {
  return (
    <div className="skillset-box">
      {
        skillsetData.map(data => <Skill key={data.id} data={data} />)
      }
    </div>
  )
}

export default Skillset
