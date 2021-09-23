import React from "react";

const Buttons = (share) => {
  return (
    <div className="Btns_container">
      <h2>SHAREbin</h2>
      <div>
        <button onClick={share}>share</button>
        <button>edit</button>
        <button>delete</button>
      </div>
    </div>
  );
};

export default Buttons;
