import React, { Fragment } from 'react';
import SkillData from './SkillData';
import './Skill.scss';

const Skill = () => (
  <div id="skill-container">
    <h1>Skills</h1>
    <div id="skill-wrapper">
      {
        SkillData.map(({ name, skills }, i) => (
          <Fragment key={i}>
            <h2>{name}</h2>
            {
              skills.map((skill, j) => (
                <div className="skill-item" key={j}>{skill}</div>
              ))
            }
          </Fragment>
        ))
      }
    </div>
  </div>
);

export default Skill;
