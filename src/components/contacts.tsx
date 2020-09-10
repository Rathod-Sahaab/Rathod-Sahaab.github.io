import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faGitlab,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

import "./contacts.scss"

const contactsJSON = [
  {
    icon: faLinkedinIn,
    link: "https://linkedin.com/in/rathod-sahaab",
    color: "#0077B5",
  },
  {
    icon: faGithub,
    link: "https://github.com/rathod-sahaab",
    color: "#323131",
  },
  {
    icon: faGitlab,
    link: "https://gitlab.com/rathod-sahaab",
    color: "#FC6D26",
  },
  {
    icon: faEnvelope,
    link: "mailto:abhayofficialone@gmail.com",
    color: "#f55",
  },
]

const Contacts = () => {
  return (
    <div className="contacts-contacts">
      {contactsJSON.map(contact => {
        return (
          <a
            href={contact.link}
            target="_blank"
            style={{ color: contact.color }}
          >
            <FontAwesomeIcon icon={contact.icon} />
          </a>
        )
      })}
    </div>
  )
}

export default Contacts
