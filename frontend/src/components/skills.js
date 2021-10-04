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
          {/* <div className=" col-12 col-md-4 d-flex flex-column align-items-center p-5 gap-sm skills__format">
            <span className="skills__top__icons">
              <i class="fas fa-code"></i>
            </span>
            <h4>Front-end</h4>
            <p className="text-center">
              I value simple content structure, clean design patterns, and
              thoughtful interactions.
            </p>
            <h6>Things I enjoy designing:</h6>
            <p>UX, UI, Web, Mobile, Apps, Logos</p>
            <h6>Design Tools:</h6>
            <p>Balsamiq Mockups</p>
            <p>Figma</p>
            <p>Invision</p>
            <p>Marvel</p>
            <p>Pen & Paper</p>
            <p>Sketch</p>
            <p>Zeplin</p>
          </div>
          <div className="col-12 col-md-4 border-right border-left border-md-y col-4 d-flex flex-column align-items-center p-5 gap-sm">
            <span className="skills__top__icons">
              <i class="fas fa-code-branch"></i>
            </span>
            <h4>Back-end</h4>
            <p className="text-center">
              I value simple content structure, clean design patterns, and
              thoughtful interactions.
            </p>
            <h6 className="mb-0">Things I enjoy designing:</h6>
            <p>UX, UI, Web, Mobile, Apps, Logos</p>
            <h6 className="mb-0">Mentor Stats:</h6>
            <p>Balsamiq Mockups</p>
            <p>Figma</p>
            <p>Invision</p>
            <p>Marvel</p>
            <p>Pen & Paper</p>
            <p>Sketch</p>
            <p>Zeplin</p>
          </div>
          <div className=" col-12 col-md-4 d-flex flex-column align-items-center p-5 gap-sm">
            <span className="skills__top__icons">
              <i class="fas fa-database"></i>
            </span>
            <h4 className="">Database</h4>
            <p className="text-center">
              I value simple content structure, clean design patterns, and
              thoughtful interactions.
            </p>
            <h6 className="mb-0">Things I enjoy designing:</h6>
            <p>UX, UI, Web, Mobile, Apps, Logos</p>
            <h6 className="mb-0">Dev Tools:</h6>
            <p>Balsamiq Mockups</p>
            <p>Figma</p>
            <p>Invision</p>
            <p>Marvel</p>
            <p>Pen & Paper</p>
            <p>Sketch</p>
            <p>Zeplin</p>
          </div> */}
        </div>
      </div>
    </div>
  )
}
