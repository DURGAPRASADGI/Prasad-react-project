import React, { useState } from "react";
import'./App.css'

const Height = () => {
  const [data, setdata] = useState("");
  const h = (e) => {
    setdata(e.target.value);
  };
  return (
    <div>
      <textarea onChange={h} />
    </div>
  );
};

export default Height;
