import React from 'react'
import Markdown from 'react-markdown'

export const Skills = ({ skills }) => {
  console.log(skills)
  return (
    <div className="skills__wrapper pb-5 mb-5">
      <div className="container">
        <div>
          <h3 className="text-center text-white font-weight-bold">
            {skills.title}
          </h3>
        </div>
        <div className="border shadow-sm skills__border__card  skills__format row skills__container">
          {skills.skillList.map((skill, i) => (
            <div
              className={`col-12 col-md-4 d-flex flex-column align-items-center p-5 gap-sm skills__format  ${
                i === 1 ? 'border-right border-left border-md-y' : ''
              }`}
            >
              <span className="skills__top__icons ">
                <i class={skill.icon}></i>
              </span>
              <h4>{skill.title}</h4>
              <Markdown source={skill.description} escapeHtml={false} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
