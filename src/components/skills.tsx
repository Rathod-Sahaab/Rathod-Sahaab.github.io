import React from "react"
import { v4 as uuid } from "uuid"

import "./skills.scss"
import { SkillArea, Skill, skillsCollection } from "./skillsCollection"
import HoverToolTip from "./hoverToolTip"

const Skills = () => {
  return (
    <div id="skills" className="page">
      <div className="content">
        <div className="description">
          <h2>Skills</h2>
          <p>
            These are some tangible skills I learned over the years denoted by
            their respective logos. <b>Hover</b> long-press(touch devices) over
            a logo to more about it, Its name and what I think about it.{" "}
            <b>Click</b> any logo and it will take you to the website which
            knows about it, more than me :p.
          </p>
        </div>
        <div className="illustration">
          {skillsCollection.map((area: SkillArea) => {
            return (
              <div className="list-skill">
                {area.skills.map((skill: Skill) => {
                  let { name, image, link, desc } = skill
                  return HoverToolTip(
                    () => {
                      return (
                        <a
                          href={link}
                          key={`skill_link_${uuid()}`}
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
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Skills
