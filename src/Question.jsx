import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [showAnswer, setshowAnswer] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={()=>setshowAnswer(!showAnswer)}>
          {showAnswer?<AiOutlineMinus/>:<AiOutlinePlus/>}
        </button>
      </header>
      {showAnswer && <p>{info}</p>}
    </article>
  );
};

export default Question;
