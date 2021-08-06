import React from "react";

export const Skills = () => {
  return (
    <div className="skills__wrapper py-5">
      <div className="container pt-2">
        <div className="border shadow-sm skills__border__card row skills__format">
          <div
            className="border-right col-4 d-flex flex-column align-items-center p-5 gap-sm skills__format"
            style={{ minHeight: 80 + "vh" }}
          >
            <span className="skills__top__icons">
              <i class="fas fa-code"></i>
            </span>
            <h5>Front-end</h5>
            <p className="text-center">
              I value simple content structure, clean design patterns, and
              thoughtful interactions.
            </p>
            <h6 className="mb-0">Things I enjoy designing:</h6>
            <p className="parragraph__l">UX, UI, Web, Mobile, Apps, Logos</p>
          </div>
          <div className="col-4 border-right col-4 d-flex flex-column align-items-center p-5 gap-sm">
            <span className="skills__top__icons">
              <i class="fas fa-code-branch"></i>
            </span>
            <h5>Back-end</h5>
            <p className="text-center">
              I value simple content structure, clean design patterns, and
              thoughtful interactions.
            </p>
          </div>
          <div
            className="border-left col-4 border-right col-4 d-flex flex-column align-items-center p-5 gap-sm"
            style={{ minHeight: 80 + "vh" }}
          >
            <span className="skills__top__icons">
              <i class="fas fa-database"></i>
            </span>
            <h5 className="">Database</h5>
            <p className="text-center">
              I value simple content structure, clean design patterns, and
              thoughtful interactions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
