import React from "react";
import Hocparent from "./hocparent";
function Hocchild(props) {
  return (
    <>
      <div>HOC child</div>
      <h1>props.name</h1>
    </>
  );
}

export default Hocparent(Hocchild);
