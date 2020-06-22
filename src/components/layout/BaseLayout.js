import React, { Fragment } from "react";

const BaseLayout = (props) => {
  return (
    <Fragment>
      <div className="layout-container">
        <main className={`cover ${props.className}`}>
          <div className="wrapper">{props.children}</div>
        </main>
      </div>
    </Fragment>
  );
};

export default BaseLayout;
