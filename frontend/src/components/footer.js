import React from "react";

export const Footer = () => {
  return (
    <footer>
      <div className="row py-5">
        <div className="col-6 d-flex flex-column align-items-center text-white">
          <h4 className="text-white font-weight-bold mb-3">Contact Me</h4>
          <div>
            <p className="mb-1 d-flex align-items-center gap-sm">
              <i class="far fa-envelope"></i>
              <span>francoadrianc@gmail.com</span>
            </p>
            <p className="mb-1 d-flex align-items-center gap-sm">
              <i class="fas fa-mobile-alt"></i>{" "}
              <span>+54 351 68 144 57 (Argentina)</span>
            </p>
          </div>
        </div>
        <div className="col-6 d-flex flex-column  align-items-center">
          <h4 className="text-white font-weight-bold mb-3">Social Networks</h4>
          <div class="d-flex gap-sm footer__icons">
            <i class="fab fa-linkedin-in circle-icon text-white"></i>
            <i class="fab fa-github circle-icon text-white"></i>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-end align-items-center pb-1">
        <p className="text-white mb-0">
          created by me <i class="far fa-copyright text-white"></i> all rights
          reserved
        </p>
      </div>
    </footer>
  );
};
/*

      <div className="py-4 d-flex flex-column justify-content-center align-items-center gap-sm text-white">
        <h4 className="text-white">Franco Carrizo</h4>
        <p>
          <i class="far fa-envelope"></i> francoadrianc@gmail.com
        </p>
        <p>
          <i class="fas fa-mobile-alt"></i> +54 351 68 144 57 (Argentina)
        </p>
        <div class="d-flex gap-sm footer__icons">
          <i class="fab fa-linkedin-in circle-icon"></i>
          <i class="fab fa-github circle-icon"></i>
        </div>
        <p>
          created by me <i class="far fa-copyright"></i> all rights reserved
        </p>
      </div>
*/
