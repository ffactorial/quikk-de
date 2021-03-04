import React from "react";

const Container = ({ children, ...props }) => {
  return (
    <div className="container" {...props}>
      {children}
      <style jsx>{`
        .container {
          height: 100% !important;
          width: 100% !important;
          padding-right: 15px !important;
          padding-left: 15px !important;
          margin-right: auto !important;
          margin-left: auto !important;
        }
        @media (min-width: 576px) {
          .container {
            max-width: 540px !important;
          }
        }
        @media (min-width: 768px) {
          .container {
            max-width: 720px !important;
          }
        }
        @media (min-width: 992px) {
          .container {
            max-width: 960px !important;
          }
        }
        @media (min-width: 1200px) {
          .container {
            max-width: 1140px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Container;
