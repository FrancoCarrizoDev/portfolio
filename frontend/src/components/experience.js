import React from "react";

export const Experience = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-2 pb-2">
        <h3 className="font-weight-bold">Expercience</h3>
        <p className="font-weight-light">
          Here are a few design projects I've worked on recently. Want to see
          more? Email me.
        </p>
      </div>
      <div className="row ">
        <div className="mb-4 col-12 col-lg-4 col-md-6 hightlighted">
          <div className="d-flex flex-column rounded shadow-sm bg-white overflow-hidden position-relative experience__card">
            <div
              className=" news-image"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/3861951/pexels-photo-3861951.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",

                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>

            <div className="flex-grow-1 h-100 d-flex flex-column p-5 align-items-center news-info">
              <h4 style={{ color: "white" }}>Terzagui</h4>
              <p className=" mx-auto text-justify" style={{ color: "white" }}>
                This is a project maked with C# (MVC Architec Patron)
              </p>
            </div>
          </div>
        </div>
        <div className="mb-4 col-12 col-lg-4 col-md-6 hightlighted">
          <div className="d-flex flex-column rounded shadow-sm bg-white overflow-hidden position-relative experience__card">
            <div
              className=" news-image"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/3861951/pexels-photo-3861951.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",

                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>

            <div className="flex-grow-1 h-100 d-flex flex-column p-5 align-items-center news-info">
              <h4 style={{ color: "white" }}>Terzagui</h4>
              <p className=" mx-auto text-justify" style={{ color: "white" }}>
                This is a project maked with C# (MVC Architec Patron)
              </p>
            </div>
          </div>
        </div>
        <div className="mb-4 col-12 col-lg-4 col-md-6 hightlighted">
          <div className="d-flex flex-column rounded shadow-sm bg-white overflow-hidden position-relative experience__card">
            <div
              className=" news-image"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/3861951/pexels-photo-3861951.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",

                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>

            <div className="flex-grow-1 h-100 d-flex flex-column p-5 align-items-center news-info">
              <h4 style={{ color: "white" }}>Terzagui</h4>
              <p className=" mx-auto text-justify" style={{ color: "white" }}>
                This is a project maked with C# (MVC Architec Patron)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
