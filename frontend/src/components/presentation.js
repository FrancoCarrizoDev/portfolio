import React from 'react'

import avatar from '../assets/images/cartoonAvatar.png'
import react from '../assets/images/logos/atomic-structure.svg'
import node from '../assets/images/logos/nodejs.svg'
import js from '../assets/images/logos/javascript.svg'
import sass from '../assets/images/logos/sass.svg'
import sql from '../assets/images/logos/sql-server.svg'

export const Presentation = ({ presentation }) => {
  return (
    <div className="presentation__bottom__background pt-5">
      <div className="presentation__bottom__background__image__background ">
        <div className="pb-5 container">
          <div className="py-5">
            <h1 className="text-center font-weight-bold pb-3">
              {presentation.title}
            </h1>
            <h5 className="text-center font-weight-light">
              {presentation.subTitle}
            </h5>
            <div className="mt-5 mx-auto presentation__bottom__background__logos__container pb-3">
              <img src={sass} alt="" />
              <img src={js} alt="" />
              <img src={react} alt="" id="react" />
              <img src={node} alt="" />
              <img src={sql} alt="" />
            </div>
            {/* <ArticlesComponent articles={data.allStrapiArticle.edges} /> */}
          </div>
        </div>
      </div>
      <div className="presentation__bottom__background__avatar__container d-flex justify-content-center">
        <img src={avatar} alt="foto de avatar" className="avatar" />
      </div>
      <div className="presentation__bottom__background__myDescription__container">
        <div className="py-5">
          <h3 className="text-center ">{presentation.greeting}</h3>
          <p className="text-justify">{presentation.description}</p>
        </div>
      </div>
    </div>
  )
}
