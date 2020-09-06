import React from "react"
import { v4 as uuidv4 } from "uuid"

import "./skills.scss"
import { SkillArea, Skill, skillsCollection } from "./skillsCollection"
import HoverToolTip from "./hoverToolTip"

const Skills = () => {
  return (
    <div id="skills" className="page">
      <h2>My Skills</h2>
      {skillsCollection.map((area: SkillArea) => {
        return (
          <div key={`skill_sector_${uuidv4()}`} className="skill-sector">
            <div className="list-skill">
              {area.skills.map((skill: Skill) => {
                let { name, image, link, desc } = skill
                return HoverToolTip(
                  () => {
                    return (
                      <a
                        href={link}
                        key={`skill_link_${uuidv4()}`}
                        target="_blank"
                      >
                        <img
                          src={image}
                          alt={name}
                          style={{ height: "100%" }}
                        />
                      </a>
                    )
                  },
                  () => {
                    return (
                      <div>
                        <b>{name}</b> <span>{area.category}</span>
                        <p dangerouslySetInnerHTML={{ __html: desc }}></p>
                      </div>
                    )
                  }
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Skills
